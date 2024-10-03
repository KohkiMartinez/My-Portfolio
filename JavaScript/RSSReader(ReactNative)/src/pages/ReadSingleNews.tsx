import { useRoute } from "@react-navigation/native";
import * as React from "react";
import {
  ActivityIndicator,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WebView } from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";

// Fonts
import Icon5 from "react-native-vector-icons/FontAwesome5";
import IconEv from "react-native-vector-icons/EvilIcons";

// File
import fetchRSS from "../components/fetchRSS";

// Interface
interface NewsItems {
  title: string;
  link: string;
  pubDate: string;
  enclosure: string | null;
}

const ReadSingleNews = ({ navigation }) => {
  // Get News RSSurl from "AddedNews" page.
  const route = useRoute();
  const { RSSurl, Title } = route.params as { RSSurl: string; Title: string };

  // News Items from RSSurl
  const [singleNewsData, setSingleNewsData] = React.useState<
    NewsItems[] | null
  >(null);

  const [loading, setLoading] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [webViewUrl, setWebViewUrl] = React.useState("");
  const [favourites, setFavourites] = React.useState<{
    [key: string]: boolean;
  }>({});

  const [passingItem, setPassingItem] = React.useState<NewsItems | null>(null);

  // Opens web page
  const openWebView = React.useCallback(
    (link: string, item: NewsItems) => {
      setWebViewUrl(link);
      setPassingItem(item);
      setModalVisible(true);
    },
    [setWebViewUrl, setPassingItem, setModalVisible]
  );
  // Closes web page when "go back" button is clicked on android phones.
  const closeWebView = React.useCallback(() => {
    setModalVisible(false);
    setWebViewUrl("");
  }, [setModalVisible, setWebViewUrl]);

  // Set News Items from RSSurl and Stored Favourite News Items from AsyncStorage
  const fetchSingleNews = async () => {
    try {
      const response = await fetchRSS(RSSurl);
      setSingleNewsData(response);
    } catch (err) {
      console.error("Failed to fetch Single news data: ", err);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchSingleNews();
      loadFavourites();
    }, [RSSurl])
  );

  const addToFav = async (item: NewsItems) => {
    if (!favourites[item.link]) {
      await saveFavourite(item);
    }
  };

  // Loads stored favourite news in AsyncStorage,
  // so stored favourite news cannot be added to AsyncStorage RSSurl more than once.
  const loadFavourites = async () => {
    try {
      const storedFavourites = await AsyncStorage.getItem(RSSurl);
      if (storedFavourites) {
        setFavourites(JSON.parse(storedFavourites));
      }
    } catch (err) {
      console.error("Failed to load favourites");
    }
  };

  const saveFavourite = async (item) => {
    try {
      const updatedFavorites = { ...favourites, [item.link]: item };
      await AsyncStorage.setItem(RSSurl, JSON.stringify(updatedFavorites));
      await fetchSingleNews();
      setFavourites(updatedFavorites);
    } catch (error) {
      console.error("Failed to save favorite:", error);
    }
  };

  const renderItem = React.useCallback(
    ({ item }) => (
      <TouchableOpacity
        onPress={() => openWebView(item.link, item)}
        style={styles.eachNewsItem}
      >
        {item.enclosure === null ? (
          <></>
        ) : (
          <Image
            style={styles.newsImage}
            source={{ uri: `${item.enclosure}` }}
          />
        )}
        <View style={styles.newsTitleContainer}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          {/* <Text style={{ color: "gray", marginTop: 5 }}>{item.pubDate}</Text> */}
        </View>
        <TouchableOpacity
          onPress={() => addToFav(item)}
          disabled={favourites[item.title]}
          style={styles.heartContainer}
        >
          {/* <Text style={favourites[item.link] ? styles.filledHeart : styles.heart}>
          ♡
        </Text> */}
          <Icon5
            name="heart"
            size={30}
            style={favourites[item.link] ? styles.filledHeart : styles.heart}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    ),
    [openWebView, addToFav, favourites]
  );

  if (loading) {
    return <ActivityIndicator size={50} color="#0000ff" />;
  }

  return (
    <GestureHandlerRootView style={styles.allItemsContainer}>
      <View style={styles.newsItemsContainer}>
        <FlatList
          data={singleNewsData}
          keyExtractor={(item) => item.link}
          renderItem={renderItem}
          ListEmptyComponent={<Text>No News Data</Text>}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          // style={{ backgroundColor: "black" }}
        />
        <Modal
          visible={modalVisible}
          // onRequestClose={closeWebView}
          onRequestClose={() => {
            closeWebView();
          }}
          transparent={false}
          animationType="fade"
        >
          <View style={styles.webViewContainer}>
            {webViewUrl !== "" && <WebView source={{ uri: webViewUrl }} />}

            {/* For iOS devices, top: 0 is required */}
            <View style={styles.webViewHeader}>
              <TouchableOpacity
                onPress={() => {
                  closeWebView();
                }}
                style={styles.leftArrowContainer}
              >
                <IconEv
                  name="chevron-left"
                  size={54}
                  color={"#88cde0"}
                  style={styles.leftArrow}
                />
              </TouchableOpacity>
              {passingItem && (
                <View style={styles.webViewHeaderTitleContainer}>
                  <Text style={styles.webViewHeaderTitle}>
                    {passingItem.title.length > 16
                      ? `${passingItem.title.slice(0, 16)}...`
                      : passingItem.title}
                  </Text>
                </View>
              )}

              {/* To get item variable, you need to pass */}
              {passingItem && (
                <TouchableOpacity
                  onPress={() => addToFav(passingItem)}
                  disabled={favourites[passingItem.title]}
                  style={styles.webViewHeartContainer}
                >
                  <Icon5
                    name="heart"
                    size={30}
                    style={
                      favourites[passingItem.link]
                        ? styles.filledHeart
                        : styles.heart
                    }
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
};

export default React.memo(ReadSingleNews);

// Styles
const styles = StyleSheet.create({
  allItemsContainer: { flex: 1, backgroundColor: "#343434" },
  newsItemsContainer: { backgroundColor: "black" },
  eachNewsItem: {
    backgroundColor: "rgb(182, 182, 113)",
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    display: "flex",
    flexDirection: "row",
  },
  newsImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  newsTitleContainer: { flexShrink: 1, marginLeft: 5 },
  newsTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 30,
  },
  webViewContainer: {
    flex: 1,
    marginTop: 60,
  },
  webViewHeader: {
    backgroundColor: "black",
    position: "absolute",
    top: -60,
    // top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 60,
  },
  leftArrowContainer: {
    position: "absolute",
    left: 4,
    // top: 9.4,
    // backgroundColor: "red",
    width: 54,
  },
  leftArrow: { margin: "auto" },
  webViewHeaderTitleContainer: { margin: "auto" },
  webViewHeaderTitle: { fontSize: 15, color: "rgb(182, 182, 113)" },
  heartContainer: { position: "absolute", right: 4, bottom: 1 },
  webViewHeartContainer: {
    position: "absolute",
    right: 14,
    // top: 13.4,
    width: 40,
  },
  heart: {
    fontSize: 34,
    color: "gray",
    fontWeight: "bold",
  },
  filledHeart: {
    fontSize: 34,
    color: "red",
    fontWeight: "bold",
  },
});

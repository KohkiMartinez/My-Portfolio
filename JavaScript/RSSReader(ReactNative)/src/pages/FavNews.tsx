import * as React from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import styles from "../styles/Styles";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import WebView from "react-native-webview";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import IconEv from "react-native-vector-icons/EvilIcons";

import { StyleSheet } from "react-native";

interface NewsItems {
  title: string;
  link: string;
  pubDate: string;
  enclosure: string | null;
}

const FavNews = ({ navigation }) => {
  const route = useRoute();
  const { RSSurl, Title } = route.params as { RSSurl: string; Title: string };

  // Fav News Items from AsyncStorage
  const [favNewsData, setFavNewsData] = React.useState<{
    [key: string]: {
      title: string;
      link: string;
      pubDate: string;
      enclosure: string | null;
    };
  }>({});

  const [loading, setLoading] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [webViewUrl, setWebViewUrl] = React.useState("");

  // const [rssUrl, setRssUrl] = React.useState("");

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

  React.useEffect(() => {
    // const getRssUrl = async () => {
    //   if (RSSurl) {
    //     try {
    //       setRssUrl(RSSurl);
    //     } catch (err) {
    //       console.error("Failed to Fetch Fav News Data: ", err);
    //     }
    //     // finally {
    //     //   setLoading(false);
    //     // }
    //   }
    // };

    // getRssUrl();
    fetchFavNews();
  }, [RSSurl]);

  const fetchFavNews = async () => {
    try {
      const storedFavNewsData = await AsyncStorage.getItem(RSSurl);
      if (storedFavNewsData) {
        // convert the stored string back to an object {key: data}
        const parsedFavNewsData: Record<string, NewsItems> =
          JSON.parse(storedFavNewsData);
        setFavNewsData(parsedFavNewsData);
      } else {
        // setFavNewsData([]);
        return;
      }
    } catch (err) {
      console.error("Failed to fetch Fav News Data: ", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteFavourite = (itemTitle: string, itemLink: string) => {
    const truncatedTitle =
      itemTitle.length > 18 ? itemTitle.substring(0, 18) + "..." : itemTitle;
    Alert.alert(`${truncatedTitle}を削除しますか？`, "", [
      { text: "キャンセル", style: "cancel" },
      {
        text: "削除する",
        onPress: async () => {
          if (favNewsData) {
            try {
              const updatedFavorites = { ...favNewsData };
              for (let key in updatedFavorites) {
                if (updatedFavorites[key].link === itemLink) {
                  delete updatedFavorites[key];
                }
              }
              setFavNewsData(updatedFavorites);
              await AsyncStorage.setItem(
                RSSurl,
                JSON.stringify(updatedFavorites)
              );
              await fetchFavNews();
            } catch (err) {
              console.error(
                "Failed to delete favourite news item from AsyncStorage: ",
                err
              );
            }
          }
        },
      },
    ]);
  };

  const deleteFavouriteWebView = (itemTitle: string, itemLink: string) => {
    const truncatedTitle =
      itemTitle.length > 18 ? itemTitle.substring(0, 18) + "..." : itemTitle;
    Alert.alert(`${truncatedTitle}を削除しますか？`, "", [
      { text: "キャンセル", style: "cancel" },
      {
        text: "削除する",
        onPress: async () => {
          if (favNewsData) {
            try {
              const updatedFavorites = { ...favNewsData };
              for (let key in updatedFavorites) {
                if (updatedFavorites[key].link === itemLink) {
                  delete updatedFavorites[key];
                }
              }
              setFavNewsData(updatedFavorites);
              await AsyncStorage.setItem(
                RSSurl,
                JSON.stringify(updatedFavorites)
              );
              await fetchFavNews();
              closeWebView();
            } catch (err) {
              console.error(
                "Failed to delete favourite news item from AsyncStorage: ",
                err
              );
            }
          }
        },
      },
    ]);
  };

  const renderRightActions = React.useCallback(
    ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => deleteFavourite(item.title, item.link)}
          style={styles.trashIconContainer}
        >
          <IconEv name="trash" size={54} />
        </TouchableOpacity>
      );
    },
    [deleteFavourite]
  );

  const renderItem = React.useCallback(
    ({ item: [key, item] }) => (
      <Swipeable
        renderRightActions={() => renderRightActions({ item })}
        key={key}
      >
        <TouchableOpacity
          onPress={() => openWebView(item.link, item)}
          style={styles.eachNewsItem}
        >
          {item.enclosure === null ? null : (
            <Image
              style={styles.newsImage}
              source={{ uri: `${item.enclosure}` }}
            />
          )}
          <View style={styles.newsTitleContainer}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            {/* <Text>{item.pubDate}</Text> */}
          </View>
        </TouchableOpacity>
      </Swipeable>
    ),
    [renderRightActions, openWebView]
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <GestureHandlerRootView style={styles.allItemsContainer}>
      {/* <SafeAreaView> */}
      <View style={styles.newsItemsContainer}>
        <FlatList
          data={Object.entries(favNewsData)}
          keyExtractor={([key, item]) => key}
          // keyExtractor={([key]) => key}
          renderItem={renderItem}
          // {({ item: [key, item] }) => (
          //   <Swipeable
          //     renderRightActions={() => renderRightActions(item)}
          //     key={key}
          //   >
          //     <TouchableOpacity
          //       onPress={() => openWebView(item.link, item)}
          //       style={styles.eachNewsItem}
          //     >
          //       {item.enclosure === null ? (
          //         <></>
          // ) : (?
          //         <Image
          //           style={styles.newsImage}
          //           source={{ uri: `${item.enclosure}` }}
          //         />
          //       )}
          //       <View style={styles.newsTitleContainer}>
          //         <Text style={styles.newsTitle}>{item.title}</Text>
          //         {/* <Text>{item.pubDate}</Text> */}
          //       </View>
          //     </TouchableOpacity>
          //   </Swipeable>
          // )}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          ListEmptyComponent={<Text>No News Data</Text>}
        />

        <Modal
          visible={modalVisible}
          onRequestClose={closeWebView}
          transparent={false}
          animationType="fade" // オプション: モーダルのアニメーション
        >
          <View style={styles.webViewContainer}>
            {webViewUrl !== "" && <WebView source={{ uri: webViewUrl }} />}
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

              {passingItem && (
                <TouchableOpacity
                  onPress={() =>
                    // deleteFavourite(passingItem.title, passingItem.link)
                    deleteFavouriteWebView(passingItem.title, passingItem.link)
                  }
                  style={styles.webViewTrashIconContainer}
                >
                  <IconEv
                    name="trash"
                    size={44}
                    color={"red"}
                    style={{ margin: "auto" }}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Modal>
      </View>
      {/* </SafeAreaView> */}
    </GestureHandlerRootView>
  );
};

export default React.memo(FavNews);

// Styles
const styles = StyleSheet.create({
  allItemsContainer: {
    flex: 1,
    backgroundColor: "#343434",
  },
  newsItemsContainer: {
    backgroundColor: "black",
  },
  eachNewsItem: {
    backgroundColor: "pink",
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
  newsTitleContainer: {
    flexShrink: 1,
    marginLeft: 5,
  },
  newsTitle: {
    fontSize: 15,
    fontWeight: "900",
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
  webViewHeaderTitleContainer: {
    margin: "auto",
  },
  webViewHeaderTitle: {
    fontSize: 15,
    color: "rgb(182, 182, 113)",
  },
  webViewTrashIconContainer: {
    position: "absolute",
    right: 4,
    // top: 13.4,
    width: 54,
    height: 54,
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  },
  trashIconContainer: {
    marginBottom: 5,
    borderRadius: 10,
    marginRight: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 70,
  },
});

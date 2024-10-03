import * as React from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
// import styles from "../styles/Styles";

// Fonts
import IconEv from "react-native-vector-icons/EvilIcons";

// Interface
interface RSSNewsItem {
  title: string;
  url: string;
}

const AddedNews = ({ navigation }) => {
  const [savedNews, setSavedNews] = React.useState<RSSNewsItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  // When this page is loaded, it gets News Name (title) and URL (url) from AsyncStorage called @saved_news.
  useFocusEffect(
    React.useCallback(() => {
      const fetchSavedNews = async () => {
        try {
          const data = await AsyncStorage.getItem("@saved_news");

          if (data) {
            setSavedNews(JSON.parse(data));
          }
        } catch (error) {
          console.error("Failed to fetch saved news from AsyncStorage:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchSavedNews();
    }, [])
  );

  const handleDelete = (title: string) => {
    Alert.alert(`${title}を削除しますか？`, "", [
      { text: "キャンセル", style: "cancel" },
      {
        text: "削除する",
        onPress: async () => {
          try {
            const updatedNews = savedNews.filter(
              (item) => item.title !== title
            );
            setSavedNews(updatedNews);
            await AsyncStorage.setItem(
              "@saved_news",
              JSON.stringify(updatedNews)
            );
          } catch (err) {
            console.error(
              "Failed to delete news item from AsyncStorage: ",
              err
            );
          }
        },
      },
    ]);
  };

  const renderRightActions = (item) => {
    return (
      <TouchableOpacity
        onPress={() => handleDelete(item.title)}
        style={styles.trashIconContainer}
      >
        <IconEv name="trash" size={54} />
      </TouchableOpacity>
    );
  };

  // Each News Item
  const renderItem = ({ item }: { item: RSSNewsItem }) => (
    <Swipeable
      renderRightActions={() => renderRightActions(item)}
      key={item.url}
    >
      <TouchableOpacity
        onPress={() => handlePress(item.url, item.title)}
        style={styles.newsTitleContainer}
      >
        <Text style={styles.newsTitle}>{item.title}</Text>
      </TouchableOpacity>
    </Swipeable>
  );

  // When News Item is clicked, it leads to "ReadSingleNews" Page with RSSurl.
  const handlePress = (RSSurl: string, Title: string) => {
    navigation.navigate("ReadSingleNews", { RSSurl, Title });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const ListFooter = () => <View style={styles.footer} />;

  return (
    <GestureHandlerRootView style={styles.allItemsContainer}>
      <FlatList
        // style={{ marginBottom: 20 }}
        data={savedNews}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        ListFooterComponent={ListFooter}
      />

      {/* Adding News button. When it's clicked, it leads to "AddingNews" Page */}
      <TouchableOpacity
        style={styles.addNewsButtonContainer}
        onPress={() => navigation.navigate("AddingNews")}
      >
        <Text style={styles.addNewsButtonText}>+</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default React.memo(AddedNews);

// Styles
const styles = StyleSheet.create({
  allItemsContainer: { flex: 1, backgroundColor: "#343434" },
  newsTitleContainer: {
    marginTop: 10,
    backgroundColor: "rgb(182, 182, 113)",
    height: 50,
    paddingHorizontal: 7,
    paddingLeft: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    display: "flex",
    justifyContent: "center",
  },
  newsTitle: { fontSize: 20 },
  addNewsButtonContainer: {
    backgroundColor: "#88cde0",
    // backgroundColor: "blue",
    width: 70,
    height: 70,
    borderRadius: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // alignContent: "center",
    position: "absolute",
    bottom: 24,
    right: 20,
  },
  addNewsButtonText: {
    // backgroundColor: "white",
    // paddingVertical: "auto",
    color: "black",
    fontSize: 38,
    textAlign: "center",
  },
  trashIconContainer: {
    marginTop: 10,
    borderRadius: 10,
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 70,
  },
  footer: {
    height: 100,
  },
});

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import allNews from "../constants/AllNews";
import { useFocusEffect } from "@react-navigation/native";

import IconE from "react-native-vector-icons/EvilIcons";

const AddingNews = ({ navigation }) => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [savedNews, setSavedNews] = React.useState([]);

  // check AsyncStorage data and excludes data in search result that are already in AsyncStorage
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
        }
      };

      fetchSavedNews();
    }, [])
  );

  React.useEffect(() => {
    if (query) {
      const filteredResults = allNews
        .filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
        .filter(
          (item) => !savedNews.some((savedItem) => savedItem.url === item.url)
        );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query, savedNews]);

  const addUrl = (title, url) => {
    Alert.alert(`${title}`, "を登録しますか？", [
      { text: "キャンセル", style: "cancel" },
      {
        text: "登録する",
        onPress: async () => {
          try {
            // 既存のデータを取得
            const existingData = await AsyncStorage.getItem("@saved_news");
            const savedNews = existingData ? JSON.parse(existingData) : [];

            // 新しいニュースを追加
            savedNews.push({ title, url });

            // 更新されたデータを保存
            await AsyncStorage.setItem(
              "@saved_news",
              JSON.stringify(savedNews)
            );
            navigation.navigate("Home"); // Home画面に戻る
          } catch (err) {
            console.error("Failed to save data to AsyncStorage: ", err);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.allItemsContainer}>
      <View style={styles.searchInputContainer}>
        <TextInput
          placeholder="検索..."
          value={query}
          onChangeText={setQuery}
          style={styles.textInput}
        />
        <View
          style={{
            position: "absolute",
            left: 24,
            top: "50%",
            transform: [{ translateY: -17 }],
            height: 34,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconE
            name="search"
            size={34}
            // style={styles.searchIcon}
          />
        </View>
      </View>
      {results.length > 0 && (
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.newsTitleContainer}
              onPress={() => addUrl(item.title, item.url)}
            >
              <Text style={styles.newsTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default AddingNews;

const styles = StyleSheet.create({
  allItemsContainer: {
    flex: 1,
    backgroundColor: "gray",
  },
  searchInputContainer: {
    position: "relative",
    // backgroundColor: "blue",
  },
  textInput: {
    backgroundColor: "#e6e6e6",
    height: 40,
    marginVertical: 10,
    width: "90%",
    borderRadius: 50,
    margin: "auto",
    fontSize: 18,
    paddingLeft: 45,
  },
  // searchIcon: { backgroundColor: "white" },
  newsTitleContainer: {
    backgroundColor: "white",

    marginBottom: 1,
    // paddingVertical: 4,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    height: 55,
    display: "flex",
    justifyContent: "center",
  },
  newsTitle: { fontSize: 18 },
});

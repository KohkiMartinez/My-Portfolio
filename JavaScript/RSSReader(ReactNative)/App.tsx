import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import AddedNews from "./src/pages/AddedNews";
import AddingNews from "./src/pages/AddingNews";
import ReadSingleNews from "./src/pages/ReadSingleNews";
import Settings from "./src/pages/Settings";
import FavNews from "./src/pages/FavNews";

import IconIon from "react-native-vector-icons/Ionicons";
import IconEv from "react-native-vector-icons/EvilIcons";
import IconF from "react-native-vector-icons/Feather";
import IconFo from "react-native-vector-icons/Foundation";
import IconFA from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   header: () => <CustomHeaderTitle title="ニュース" />,
      // }}
      >
        <Stack.Screen
          name="Home"
          component={AddedNews}
          options={({ navigation }) => ({
            animation: "none",
            header: () => (
              <SafeAreaView edges={["top"]} style={styles.safeAreaView}>
                <StatusBar
                  barStyle="dark-content"
                  backgroundColor="transparent"
                  translucent={true}
                />
                <View style={styles.headerContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Settings")}
                    style={{
                      position: "absolute",
                      left: 12,
                      // top: 13.4,
                      // backgroundColor: "red",
                      width: 40,
                    }}
                  >
                    <IconIon
                      name="ellipsis-vertical"
                      size={38}
                      color={"#88cde0"}
                      style={{ margin: "auto" }}
                    />
                  </TouchableOpacity>

                  <Text style={styles.addedNewsText}>
                    ニュース オンリーワン
                  </Text>
                </View>
              </SafeAreaView>
            ),
          })}
        />
        <Stack.Screen
          name="AddingNews"
          component={AddingNews}
          options={({ navigation }) => ({
            animation: "slide_from_bottom",
            header: () => (
              <SafeAreaView edges={["top"]} style={styles.safeAreaView}>
                <View style={styles.headerContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.addingNewsLeftArrowContainer}
                  >
                    <IconEv
                      name="chevron-left"
                      size={54}
                      color={"#88cde0"}
                      style={styles.addingNewsLeftArrow}
                    />
                  </TouchableOpacity>
                  <Text style={styles.addingNewsText}>ニュースを登録する</Text>
                </View>
              </SafeAreaView>
            ),
          })}
        />
        <Stack.Screen
          name="ReadSingleNews"
          component={ReadSingleNews}
          options={({ route, navigation }) => ({
            animation: "slide_from_right",
            header: () => (
              <SafeAreaView edges={["top"]} style={styles.safeAreaView}>
                <View style={styles.headerContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.readSingleNewsLeftArrowContainer}
                  >
                    <IconEv
                      name="chevron-left"
                      size={54}
                      color={"#88cde0"}
                      style={styles.readSingleNewsLeftArrow}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    // onPress={() => navigation.goBack()}
                    onPress={() =>
                      navigation.navigate("FavNews", {
                        RSSurl: route.params?.RSSurl,
                        Title: route.params?.Title,
                      })
                    }
                    style={styles.favListContainer}
                  >
                    <IconF
                      name="list"
                      size={34}
                      color={"pink"}
                      // style={{ position: "absolute" }}
                    />
                    <IconFo
                      name="heart"
                      size={26}
                      color={"pink"}
                      style={styles.readSingleNewsHeart}
                    />
                  </TouchableOpacity>

                  <Text style={styles.readSingleNewsText}>
                    {/* {route.params?.Title || "ニュース"} */}
                    {route.params?.Title.length > 12
                      ? `${route.params?.Title.slice(0, 12)}...`
                      : route.params?.Title}
                  </Text>
                </View>
              </SafeAreaView>
            ),
          })}
        />

        {/* <Stack.Screen
          name="AddedNews"
          component={AddedNews}
          options={{
            animation: "none",
          }}
        /> */}
        <Stack.Screen
          name="FavNews"
          component={FavNews}
          options={({ route, navigation }) => ({
            animation: "none",
            header: () => (
              <SafeAreaView edges={["top"]} style={styles.safeAreaView}>
                <View style={styles.headerContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.listContainer}
                  >
                    <IconF name="list" size={38} color={"rgb(182, 182, 113)"} />
                  </TouchableOpacity>
                  <Text style={styles.favNewsText}>お気に入り</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={styles.doubleArrowContainer}
                  >
                    <IconFA
                      name="angle-double-left"
                      size={38}
                      color={"#4ca9c3"}
                      style={styles.doubleArrow}
                    />
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            ),
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ navigation }) => ({
            animation: "slide_from_left",
            header: () => (
              <SafeAreaView edges={["top"]} style={styles.safeAreaView}>
                <View style={styles.headerContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.settingsRightArrowContainer}
                  >
                    <IconEv name="chevron-right" size={54} color={"#88cde0"} />
                  </TouchableOpacity>
                  <Text style={styles.settingsText}>設定</Text>
                </View>
              </SafeAreaView>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// Styles
const styles = StyleSheet.create({
  safeAreaView: {
    // flex: 1,
    // height: "100%",
    backgroundColor: "rgb(182, 182, 113)",
    // backgroundColor: "transparent",
    // paddingTop: 10,
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 60,
  },
  addedNewsText: {
    fontSize: 24,
    color: "rgb(182, 182, 113)",
  },
  addingNewsText: {
    // textAlign: "center",
    // justifyContent: "center",
    // marginTop: 10,
    fontSize: 20,
    color: "rgb(182, 182, 113)",
  },
  addingNewsLeftArrowContainer: {
    position: "absolute",
    // left: 4,
    // top: 9.4,
    // top: 0,
    left: 4,
    // backgroundColor: "red",
    width: 54,
  },
  addingNewsLeftArrow: {
    // margin: "auto",
    // backgroundColor: "red",
  },
  readSingleNewsText: {
    // textAlign: "center",
    // justifyContent: "center",
    // marginTop: 10,
    fontSize: 20,
    color: "rgb(182, 182, 113)",
    margin: 0,
    // backgroundColor: "red",
    // width: 10,
    paddingRight: 10,
  },
  readSingleNewsLeftArrowContainer: {
    position: "absolute",
    left: 4,
    // top: 9.4,
    // backgroundColor: "red",
    width: 54,
  },
  readSingleNewsLeftArrow: {
    // margin: "auto"
  },

  favListContainer: {
    position: "absolute",
    right: 20,
    // top: 11,
    // backgroundColor: "red",
    // height: "100%",
  },
  readSingleNewsHeart: { position: "absolute", right: -7, bottom: -9 },
  favNewsText: {
    fontSize: 20,
    color: "pink",
    paddingRight: 10,
  },
  doubleArrowContainer: {
    position: "absolute",
    // left: 4,
    // top: 9.4,
    // top: 0,
    left: 4,
    // backgroundColor: "red",
    width: 54,
    height: 54,
  },
  doubleArrow: {
    margin: "auto",
  },
  listContainer: {
    position: "absolute",
    right: 16,
    // top: 10,
  },
  settingsText: {
    fontSize: 20,
    color: "rgb(182, 182, 113)",
  },
  settingsRightArrowContainer: {
    position: "absolute",
    right: 4,
    // top: 9.4,
    // backgroundColor: "red",
    width: 54,
  },
});

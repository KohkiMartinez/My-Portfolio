import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/Styles";
import * as React from "react";

const Settings = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendEmail = async () => {
    if (
      email !== "" &&
      email.includes(".") &&
      email.includes("@") &&
      message !== ""
    ) {
      try {
        const response = await fetch(
          "https://ohisamabackend.onrender.com/contactform",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "OnlyOne からのリクエスト",
              email: `${email}`,
              message: `${message}`,
            }),
          }
        );

        if (response.ok) {
          alert("メール送信に成功しました。");
          setEmail("");
          setMessage("");
        } else {
          alert("メール送信に失敗しました。後ほどもう一度お試しください。");
        }
      } catch (err) {
        console.error("ERROR: ", err);
        alert("メール送信に失敗しました。後ほどもう一度お試しください。");
      }
    } else {
      alert("入力されていない箇所があります。");
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#343434" }}>
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          backgroundColor: "rgb(182, 182, 113)",
          padding: 10,
          borderRadius: 10,
        }}
      >
        {/* <SafeAreaView style={styles.bottomContainer}> */}
        {/* <TouchableOpacity
        style={styles.mainBottomButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ fontSize: 30 }}>ニュース</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingBottomButton}
        onPress={() => navigation.navigate("SETTINGS")}
      >
        <Text style={{ fontSize: 30 }}>設定</Text>
      </TouchableOpacity> */}
        {/* </SafeAreaView> */}
        <Text style={{ marginBottom: 2, fontSize: 18 }}>お問い合わせ</Text>
        <Text style={{ marginBottom: 20, fontSize: 15 }}>
          ※アプリのご感想、バグの報告、追加して欲しい機能、または追加して欲しいニュースやブログのＵＲＬ、名前を教えてください。
        </Text>
        <TextInput
          placeholder="メールアドレス(半角でお願いします。)"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: "white",
            marginBottom: 5,
            height: 40,
            borderRadius: 5,
            // paddingVertical: 10,
            paddingHorizontal: 10,
            fontSize: 18,
          }}
        />
        <TextInput
          placeholder="メッセージ内容"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          style={{
            backgroundColor: "white",
            marginBottom: 20,
            height: 120,
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 10,
            fontSize: 18,
            textAlignVertical: "top",
          }}
        />
        <Button title="送信" onPress={sendEmail} />
      </View>
    </View>
  );
};

export default Settings;

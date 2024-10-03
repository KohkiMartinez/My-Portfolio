import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    // backgroundColor: "#007bff",
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
    // margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#28a745",
    width: 80,
    height: 80,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 100, // Adjust this value as needed
    right: 20, // Adjust this value as needed
  },
  addButtonText: {
    color: "black",
    fontSize: 44,
  },
  bottomContainer: {
    position: "absolute", // Fixes the position
    top: -40, // Aligns to the bottom of the screen
    // left: 0,
    right: 0,
    padding: 10, // Adjust padding as needed
  },
  mainBottomButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    flex: 1,
    alignItems: "center",
  },
  settingBottomButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
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

export default styles;

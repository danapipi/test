import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  searchBar: {
    width: Dimensions.get("window").width - 100,
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  searchInput: {
    backgroundColor: "white",
    fontSize: 16
  }
});

export default styles;

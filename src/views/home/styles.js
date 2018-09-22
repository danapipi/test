import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 20
  },
  renderItemView: {
    margin: 10
  },
  renderItemTouch: {
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 10,
    elevation: 1.5,
    borderColor: "#3F51B5"
  },
  textAuthor: {
    color: "#2d3436"
  },
  textItemAuthor: { color: "#636e72" },
  textTitle: { color: "#2d3436" },
  textItemTitle: { color: "#636e72" },
  splash: { flex: 1, resizeMode: "cover" },
  textHeadline: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#3F51B5",
    fontSize: 20,
    marginVertical: 10
  },
  viewFlatList: {
    height: Dimensions.get("window").height - 150
  }
});

export default styles;

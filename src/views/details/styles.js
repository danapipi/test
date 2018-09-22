import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  viewBg: { backgroundColor: "white" },
  scrollView: { height: Dimensions.get("window").height - 100 },
  img1: {
    width: Dimensions.get("screen").width - 20,
    height: Dimensions.get("screen").height / 2,
    margin: 10
  },
  img2: {
    width: Dimensions.get("screen").width - 20,
    height: Dimensions.get("screen").height / 2,
    margin: 10
  },
  view1: { margin: 15 },
  title1: { fontSize: 20, color: "#2d3436" },
  textTitle: { color: "#636e72" },
  author: { fontSize: 20, color: "#2d3436" },
  textAuthor: { color: "#636e72" },
  desc: { fontSize: 20, color: "#2d3436" },
  descColor: { color: "#636e72" }
});

export default styles;

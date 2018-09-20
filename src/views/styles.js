import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  header: {
    elevation: 0,
    shadowOpacity: 0,
    ...Platform.select({
      ios: {
        marginTop: -12,
        paddingBottom: 8
      }
    })
  }
});

export default styles;

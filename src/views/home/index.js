import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { homeActions } from "../../redux/module/home";
import CHeader from "../header";
import styles from "./styles";

// This Will Getting State From Redux and Ditribute It Into Component Props
const mapStateToProps = state => ({
  dataNews: state.home
});

// This Will Emit an Action to Redux to Change The State Value
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setData: homeActions.setData,
      request: homeActions.request
    },
    dispatch
  );

class Home extends Component {
  componentDidMount() {
    const { request } = this.props;
    request();
  }

  // List Order
  renderItem = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            padding: 10,
            elevation: 1.5,
            borderColor: "#3F51B5"
          }}
          onPress={() => {
            const { navigation } = this.props;
            navigation.navigate("details", { data: item });
          }}
        >
          <View>
            <View style={{ flexDirection: "column" }}>
              <Text>Author : </Text>
              <Text>{item.author ? item.author : "NN"}</Text>
              <Text>Title : </Text>
              <Text>{item.title ? item.title : "No Title"}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {
      dataNews: { isLoading, dataNews }
    } = this.props;
    return (
      <View style={styles.container}>
        <CHeader />
        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            color: "#3F51B5",
            fontSize: 20,
            marginVertical: 10
          }}
        >
          Headline News
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#3F51B5" />
        ) : (
          <View style={{ height: Dimensions.get("window").height - 150 }}>
            <FlatList
              data={dataNews}
              extraData={dataNews}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

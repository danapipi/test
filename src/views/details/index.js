import React, { Component } from "react";
import { View, Text, ActivityIndicator, Image, Dimensions } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { homeActions } from "../../redux/module/home";
import CHeader from "../header";
import styles from "./styles";
import Asset from "../../assets";

export default class Details extends Component {
  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <View>
        <CHeader />
        {data.urlToImage ? (
          <Image
            source={{ uri: data.urlToImage }}
            style={{
              width: Dimensions.get("screen").width - 20,
              height: Dimensions.get("screen").height / 2,
              margin: 10
            }}
            borderRadius={10}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={Asset.noImage}
            style={{
              width: Dimensions.get("screen").width - 20,
              height: Dimensions.get("screen").height / 2,
              margin: 10
            }}
            resizeMode="cover"
            borderRadius={10}
          />
        )}

        <Text>
          {" "}
          Author:
          {data.author}{" "}
        </Text>
        <Text>
          {" "}
          Title:
          {data.title}{" "}
        </Text>
        <Text>
          {" "}
          Description:
          {data.description}{" "}
        </Text>
      </View>
    );
  }
}

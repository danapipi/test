import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
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
      <View style={{ backgroundColor: "white" }}>
        <CHeader />
        <ScrollView style={{ height: Dimensions.get("window").height - 100 }}>
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
          <View style={{ margin: 15 }}>
            <Text style={{ fontSize: 20, color: "#2d3436" }}>Title</Text>
            <Text style={{ color: "#636e72" }}>
              {data.title ? data.title : "No Title"}{" "}
            </Text>
            <Text style={{ fontSize: 20, color: "#2d3436" }}>Author</Text>
            <Text style={{ color: "#636e72" }}>
              {data.author ? data.author : "NN"}{" "}
            </Text>
            <Text style={{ fontSize: 20, color: "#2d3436" }}>Description</Text>
            <Text style={{ color: "#636e72" }}>
              {data.description ? data.description : "No Description"}{" "}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

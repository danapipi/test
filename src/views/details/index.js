import React, { Component } from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import CHeader from "../header";
import styles from "./styles";
import Asset from "../../assets";

export default class Details extends Component {
  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <View style={styles.viewBg}>
        <CHeader />
        <ScrollView style={styles.scrollView}>
          {data.urlToImage ? (
            <Image
              source={{ uri: data.urlToImage }}
              style={styles.img1}
              borderRadius={10}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={Asset.noImage}
              style={styles.img2}
              resizeMode="cover"
              borderRadius={10}
            />
          )}
          <View style={styles.view1}>
            <Text style={styles.title1}>Title</Text>
            <Text style={styles.textTitle}>
              {data.title ? data.title : "No Title"}{" "}
            </Text>
            <Text style={styles.author}>Author</Text>
            <Text style={styles.textAuthor}>
              {data.author ? data.author : "NN"}{" "}
            </Text>
            <Text style={styles.desc}>Description</Text>
            <Text style={styles.descColor}>
              {data.description ? data.description : "No Description"}{" "}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Dimensions,
  ImageBackground
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

  reload = () => {
    const { request } = this.props;
    request();
  };

  // List Order
  renderItem = ({ item }) => {
    return (
      <View style={styles.renderItemView}>
        <TouchableOpacity
          style={styles.renderItemTouch}
          onPress={() => {
            const { navigation } = this.props;
            navigation.navigate("details", { data: item });
          }}
        >
          <View>
            <View>
              <Text style={styles.textAuthor}>Author</Text>
            </View>
            <View>
              <Text style={styles.textItemAuthor}>
                {item.author ? item.author : "NN"}
              </Text>
            </View>
            <View>
              <Text style={styles.textTitle}>Title</Text>
            </View>
            <View>
              <Text style={styles.textItemTitle}>
                {item.title ? item.title : "No Title"}
              </Text>
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
    if (isLoading)
      return (
        <ImageBackground
          source={{
            uri:
              "https://images.unsplash.com/photo-1534322904425-1bca0e9211e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=13eca4d401fd7b5fac7239fb81671147&auto=format&fit=crop&w=665&q=80"
          }}
          style={styles.splash}
        >
          <ActivityIndicator color="#3F51B5" size={50} />
        </ImageBackground>
      );
    else
      return (
        <View style={styles.container}>
          <CHeader />
          <Text style={styles.textHeadline}>Headline News</Text>
          {isLoading ? (
            <ActivityIndicator size="large" color="#3F51B5" />
          ) : (
            <View style={styles.viewFlatList}>
              <FlatList
                data={dataNews}
                extraData={dataNews}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={this.reload}
                refreshing={false}
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

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
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
    console.warn("item", item);
    return (
      <View>
        <TouchableOpacity>
          <Text>{item.author}</Text>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Separator flat list
  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const {
      dataNews: { isLoading, dataNews }
    } = this.props;
    return (
      <View style={styles.container}>
        <CHeader />
        {isLoading ? (
          <ActivityIndicator size="large" color="#10ac84" />
        ) : (
          <View>
            <FlatList
              data={dataNews}
              extraData={dataNews}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.renderSeparator}
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

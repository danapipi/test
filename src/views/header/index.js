import React, { Component } from "react";
import { Dimensions } from "react-native";
import { SearchBar, Header, Icon, Text } from "react-native-elements";
import { bindActionCreators } from "redux";
import { homeActions } from "../../redux/module/home";
import { connect } from "react-redux";

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
class CHeader extends Component {
  search = text => {
    const {
      dataNews: { searchData }
    } = this.props;
    const dataSearch = searchData.filter(item => {
      const itemData = `${
        item.author ? item.author.toLowerCase() : ""
      } ${item.title.toLowerCase()}`;
      const textSearch = text.toLowerCase();
      return itemData.indexOf(textSearch) > -1;
    });

    this.props.setData("dataNews", dataSearch);
  };

  render() {
    return (
      <Header
        elevation={4}
        innerContainerStyles={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        centerComponent={
          <SearchBar
            round
            lightTheme
            containerStyle={{
              width: Dimensions.get("window").width - 100,
              backgroundColor: "transparent",
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
            inputStyle={{ backgroundColor: "white", fontSize: 16 }}
            onChangeText={text => this.search(text)}
            icon={{ type: "font-awesome", name: "search" }}
            placeholder="Search here..."
            autoCorrect={false}
          />
        }
      />
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CHeader);

import React, { Component } from "react";
import { View, StyleSheet, TextInput, Platform, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

class Search extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.search}>
          <Feather
            name="search"
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            placeholder="Try New Dehli"
            placeholderTextColor="grey"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: 100,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  search: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS == "android" ? 30 : null,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#fff",
    fontWeight: "700",
  },
});

export default Search;

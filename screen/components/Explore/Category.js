import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
class Category extends Component {
 
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.boxImage}>
          <Image source={this.props.imageUri} style={styles.image} />
        </View>
        <View style={styles.boxText}>
          <Text>{this.props.name}</Text>
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
  box: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: "#ddd",
  },
  boxImage: {
    flex: 2,

  },
  boxText: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
});

export default Category;

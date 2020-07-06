import React, { Component } from "react";
import { View, StyleSheet,Image,Text,Dimensions  } from "react-native";
const { width, height } = Dimensions.get("window");

class About extends Component {
  
  render() {
    return (
        <View style={styles.about}>
        <Text style={styles.aboutTitle}>Intiroducing AirBnb Plus</Text>
        <Text style={styles.aboutSubTitle}>This is camfortoble </Text>
        <View style={styles.aboutBox}>
          <Image
            style={styles.aboutBoxImage}
            source={require("../../../assets/Home.jpg")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  about: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  aboutSubTitle: {
    fontWeight: "100",
    marginTop: 10,
  },
  aboutBox: {
    width: width - 40,
    height: 200,
    marginTop: 20,
  },
  aboutBoxImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
 
});

export default About;

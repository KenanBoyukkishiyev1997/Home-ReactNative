import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import Category from "./components/Explore/Category";
import Search from "./components/Explore/Search";
import Home from './components/Explore/Home'
import About from './components/Explore/About'
const { width, height } = Dimensions.get("window");
class Explore extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Search />
          <ScrollView scrollEventThrottle={16}>
            <View style={styles.body}>
              <Text style={styles.bodyText}>What Can We Help You?</Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../assets/Home.jpg")}
                    name={"Home"}
                  />
                  <Category
                    imageUri={require("../assets/Raman.jpg")}
                    name={"Raman"}
                  />
                  <Category
                    imageUri={require("../assets/Ofice.jpg")}
                    name={"Ofice"}
                  />
                  <Category
                    imageUri={require("../assets/Home.jpg")}
                    name={"Home"}
                  />
                </ScrollView>
              </View>
               
              <About />
              
            </View>
            <View style={{ marginTop: 40 }}>
              <Text style={styles.cardText}>Homes Around The World</Text>
              <View style={styles.cardBody}>
                <Home width={width}title="5 otagli" name="Xirdalan" price="52$" rating='5'/>
                <Home width={width} title="3 otagli" name="Sederek" price="22$" rating='1'/>
                <Home width={width} title="2 otagli" name="Merdekan" price="72$" rating='3' />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  bodyText: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20,
  },
  

  cardText: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 24,
  },
  cardBody: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:"space-between"
  },
  
});

export default Explore;

import React, { Component } from "react";
import { View, StyleSheet,Image,Text  } from "react-native";
import Start from 'react-native-star-rating'
class Home extends Component {
  
  render() {
    return (
        <View style={{width: this.props.width / 2 - 30, height: this.props.width / 2 - 30 , borderWidth: 0.5, borderColor: "#ddd",}}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.cardBoxImage}
            source={require("../../../assets/Home.jpg")}
          />
        </View>

        <View style={styles.cardBoxText}>
          <Text style={{ fontSize: 14, color:'#b63838' }}>{this.props.title}</Text>
          <Text style={{ fontSize: 12, fontWeight:'bold' }}>{this.props.name}</Text>
          <Text style={{ fontSize: 12, }}>{this.props.price}</Text>
          <Start  disabled={true} maxStars={5} rating={this.props.rating} starSize={10}/>
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

  cardBoxImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  cardBoxText:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'space-evenly',
    paddingLeft:10
  }
 
});

export default Home;

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Home from "../components/Explore/Home";

const { height, width } = Dimensions.get("window");

class Saved extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ marginTop: 40 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                paddingHorizontal: 20
              }}
            >
              Your favourate places around the world
            </Text>
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
              }}
            >
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={8220}
                rating={3.5}
                imageUrl={require("../assets/home.jpg")}
              />
              <Home
                width={width}
                name="Koto-ku"
                type="Decoboco hanare"
                price={6520}
                rating={4.93}
                imageUrl={require("../assets/stay02.jpg")}
              />
              <Home
                width={width}
                name="Bellecombe-en-Bauges"
                type="A quiet yurt in Savoie - Bauges"
                price={5887}
                rating={4.6}
                imageUrl={require("../assets/home3.jpg")}
              />
              <Home
                width={width}
                name="Tyringham"
                type="'Silo Studio' Cottage"
                price={14806}
                rating={4}
                imageUrl={require("../assets/home4.jpg")}
              />
              <Home
                width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={8220}
                rating={3.5}
                imageUrl={require("../assets/home.jpg")}
              />
              <Home
                width={width}
                name="Koto-ku"
                type="Decoboco hanare"
                price={6520}
                rating={4.93}
                imageUrl={require("../assets/stay02.jpg")}
              />
              <Home
                width={width}
                name="Bellecombe-en-Bauges"
                type="A quiet yurt in Savoie - Bauges"
                price={5887}
                rating={4.6}
                imageUrl={require("../assets/home3.jpg")}
              />
              <Home
                width={width}
                name="Tyringham"
                type="'Silo Studio' Cottage"
                price={14806}
                rating={4}
                imageUrl={require("../assets/home4.jpg")}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

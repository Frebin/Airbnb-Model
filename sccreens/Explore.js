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
import Category from "../components/Explore/Category";
import Home from "../components/Explore/Home";
import Tag from "../components/Explore/Tag";

const { height, width } = Dimensions.get("window");

class Explore extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 40;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 60 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: "clamp"
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              <Tag name="Guests" />
              <Tag name="Dates" />
              <Tag name="Events" />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                What can we help you find, Frebin?
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUrl={require("../assets/stay.jpg")}
                    name="Stays"
                  />
                  <Category
                    imageUrl={require("../assets/experience.jpg")}
                    name="Experiences"
                  />
                  <Category
                    imageUrl={require("../assets/restaurant.jpg")}
                    name="Resturant"
                  />
                  <Category
                    imageUrl={require("../assets/stadium.jpg")}
                    name="Satdium"
                  />
                </ScrollView>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Introducing Cooking on Airbnb Plus
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 10 }}>
                  The secret ingredient to local culture.
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#dddddd"
                    }}
                    source={require("../assets/exp01.jpg")}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Places to stay around the world
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
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

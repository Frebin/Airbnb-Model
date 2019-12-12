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
  Animated,
  ImageBackground,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "../components/Explore/Category";
import Home from "../components/Explore/Home";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

const { height, width } = Dimensions.get("window");

class Trips extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    this.endHeaderHeight = 40;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 60 + StatusBar.currentHeight;
    }
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
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                alignItems: "center",
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Image
                source={require("../assets/airbnb.png")}
                style={{ height: 24, width: 24, alignContent: "center" }}
              />
              <Text>Airbnb</Text>
            </View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
              <View style={{ width: width - 40, height: 100, marginTop: 20 }}>
                <ImageBackground
                  source={require("../assets/exp01.jpg")}
                  style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: 8
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 15,

                      marginLeft: 10,
                      alignContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        flex: 1
                      }}
                    >
                      INTRODUCING
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 80,
                      height: 40,

                      alignContent: "center",
                      marginLeft: 10
                    }}
                  >
                    <Image
                      style={{
                        flex: 1,
                        width: undefined,
                        height: undefined
                      }}
                      source={require("../assets/cooking.png")}
                      resizeMode="contain"
                    />
                  </View>
                  <View
                    style={{
                      width: 70,
                      height: 15,
                      marginLeft: 10,
                      alignContent: "center"
                    }}
                  >
                    <AwesomeButtonRick
                      type="primary"
                      height={20}
                      width={80}
                      textSize={10}
                      textColor="#000000"
                      raiseLevel={2}
                    >
                      Learn more
                    </AwesomeButtonRick>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Introducing Airbnb Adventures
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

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

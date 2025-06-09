import { StyleSheet, Text, View, Image, Pressable, } from "react-native";
import React from 'react';
import { useRouter } from "expo-router";
import { standardStyles } from "../styles/styles";

export default function WelcomePage() {
  //setting up our navigation system
  const router = useRouter();

  return (
    <View style={standardStyles.container}>
    {/*Header Styles*/}
    <View style={standardStyles.header}>
      <View style={standardStyles.headerContent}>
        <Text style={standardStyles.headerLogoText}> 
          It's Jalapeno?
        </Text>
        <Image style={standardStyles.logo}
          source={require("../assets/images/favicon.png")}
          accessibilityLabel="It's Jalapeno Logo">
        </Image>
      </View>
      <Text style={standardStyles.headerAboutText}>
        A Game Inspired by a Meme  
      </Text>  
    </View>

    {/*Main Page/welcome*/}
    <View style={styles.welcomeRow}>
      <Image style={styles.jalapenoSpriteLeft}
        source={require("../assets/images/JalapenoBat.png")}
        accessibilityLabel="Jalapeno Bat Image">
      </Image>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Image style={styles.jalapenoSpriteRight}
        source={require("../assets/images/JalapenoBee.png")}
        accessibilityLabel="Jalapeno Bee Image">
      </Image>
    </View>

    {/*Learn How to Play and Start Game Buttons!*/}
    <View style={styles.buttonContent}>
      <Pressable style={styles.buttonFormat} onPress={() => router.replace("/learn")}>
        <Text style={styles.buttonText}>
          Learn How to Play
        </Text>
      </Pressable>
      <Pressable style={styles.buttonFormat} onPress={() => router.replace("/play")}>
        <Text style={styles.buttonText}>
          Start Game
        </Text>
      </Pressable>
    </View>

     {/*About page link*/}
    <Pressable onPress={() => router.replace("/about")}>
      <Text style={styles.learnMoreText}>
      Learn More About It's Jalapeno
    </Text>
    </Pressable>
    </View>
  );
}

//style sheet for welcome page
const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 128,
    textAlign: "center",
    color: "#393939",
    marginTop: 65,
    marginRight: 15,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  buttonFormat: {
    backgroundColor: "#FF79CA",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 25,
    width: 250,
  },

  buttonText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 24,
    color: "#4A4A4A",
    textAlign: "center",
  },

  learnMoreText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 16,
    color: "1E1E1E",
    textAlign: "center",
    paddingTop: 20,
    textDecorationLine: "underline",
  },

  welcomeRow: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingRight: 30,
  },

  jalapenoSpriteLeft: {
    justifyContent: "center",
    width: 300,
    height: 200,
    marginRight: 50,
    top: 120,
    transform: [{ rotate: '-15deg'}],
  },

  jalapenoSpriteRight: {
    justifyContent: "center",
    width: 270,
    height: 210,
    marginLeft: 45,
    top: 80,
    transform: [{ rotate: '15deg'}],
  }

});
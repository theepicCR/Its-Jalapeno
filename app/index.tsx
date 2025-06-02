import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from "react-native";
import React from 'react';
import { useFonts } from 'expo-font';
import { useRouter, Link } from "expo-router"

export default function WelcomePage() {
  //setting up our navigation system
  const router = useRouter();

  //loading fonts for welcome page
  const [loadfonts] = useFonts ({
    "JotiOne-Regular": require("../assets/fonts/JotiOne-Regular.ttf"),
  });

  if(!loadfonts) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
    {/*Header Styles*/}
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.headerLogoText}> 
          It's Jalapeno?
        </Text>
        <Image style={styles.logo}
          source={require("../assets/images/favicon.png")}
          accessibilityLabel="It's Jalapeno Logo">
        </Image>
      </View>
      <Text style={styles.headerAboutText}>
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
      <Pressable style={styles.buttonFormat} onPress={() => router.push("/learn")}>
        <Text style={styles.buttonText}>
          Learn How to Play
        </Text>
      </Pressable>
      <Pressable style={styles.buttonFormat} onPress={() => router.push("/play")}>
        <Text style={styles.buttonText}>
          Start Game
        </Text>
      </Pressable>
    </View>

     {/*About page link*/}
    <Link href="/about" style={styles.learnMoreText}>
      Learn More About It's Jalapeno
    </Link>
    </View>
  );
}

//style sheet for welcome page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC8E0",
  },
  welcomeText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 128,
    textAlign: "center",
    color: "#393939",
    marginTop: 65,
    marginRight: 15,
  },
  header: {
    backgroundColor: "#FF79CA",
    borderColor: "#FF0099",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  headerLogoText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 54,
    color: "#393939",
    textAlign: "center",
  },
  logo: {
    width: 110,
    height: 110,
  },
  headerAboutText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 16,
    color: "1E1E1E",
    textAlign: "center",
    bottom: 20,
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

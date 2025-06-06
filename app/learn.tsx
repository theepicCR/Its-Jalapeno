import React from "react";
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router"

export default function LearnPage() {
      //loading fonts for welcome page
      const [loadfonts] = useFonts ({
        "JotiOne-Regular": require("../assets/fonts/JotiOne-Regular.ttf"),
      });
    
      if(!loadfonts) {
        return <Text>Loading...</Text>;
      }

      const router = useRouter();


    return (
        <ScrollView style={styles.container}>
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

            {/*Learn how to play container */}
            <View style={styles.LearnContainer}>
                <Text style={styles.LearnText}> How to Play</Text>
            </View>

            {/*Step 1 instruction */}
            <View style={styles.contentContainer}>
                <Text style={styles.stepText}>Step 1: Recognize the Silhouette</Text>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.leftInnerContainer}>
                        <Text style={styles.regularText}>
                        {`Each silhouette is based on a common, generic creature or item.
                        \n\nIn this case, the silhouette is a bee!`}
                        </Text>
                    </View>

                    <View style={styles.rightInnerContainer}>
                        <Image style={styles.demoImage}
                          source={require("../assets/images/JalapenoBeeSil.png")}
                          accessibilityLabel="Jalapeno Bee Silhouette Image">
                        </Image>
                        <View style={styles.answerBox}>
                          <Text style={styles.regularText}>Enter Guess:</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/*Step 2 instruction */}
            <View style={styles.contentContainer}>
                <Text style={styles.stepText}>Step 2: Guess the Name!</Text>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.leftInnerContainer}>
                        <Text style={styles.regularText}>
                        {`Combine the silhouette name with Jalapeno!
                        \n\nHere: Jalapeno + Bee = Jalabeeno`}
                        </Text>
                    </View>

                    <View style={styles.rightInnerContainer}>
                        <Image style={styles.demoImage}
                          source={require("../assets/images/JalapenoBee.png")}
                          accessibilityLabel="Jalapeno Bee Image">
                        </Image>
                        <View style={styles.answerBox}>
                          <Text style={styles.regularText}>Guess: Jalabeeno</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/*Step 3 instruction */}
            <View style={styles.contentContainer}>
                <Text style={styles.stepText}>Step 3: Repeat!</Text>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.leftInnerContainer}>
                        <Text style={styles.regularText}>
                        {`Guess each Jalapeno mashup until you’ve guessed them all!
                        \n\nRemember to use the hint button if you get stuck!`}
                        </Text>
                    </View>

                    <View style={styles.rightInnerContainer}>
                        <Image style={styles.step3image}
                          source={require("../assets/images/favicon.png")}
                          accessibilityLabel="It's Jalapeno Logo">
                        </Image>
                    </View>
                </View>
            </View>

            {/*Ready To Play Container*/}
            <View style={styles.LearnContainer}>
                <Text style={styles.LearnText}>Ready to Play?</Text>
            </View>

            {/*Let's Go Button*/}
            <Pressable style={styles.letsGoButton} onPress={() => router.push("/play")}>
              <Text style={styles.letsGoText}>Let's Go!</Text>
            </Pressable>

        </ScrollView>
    )
}

//style sheet for welcome page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC8E0",
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
    color: "#4A4A4A",
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

  LearnContainer: {
    backgroundColor: "#FF79CA",
    borderRadius: 20,
    height: 100,
    width: 550,
    marginTop: 40,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "#FF0099",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  LearnText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 64,
    textAlign: "center",
    color: "#393939",
  },

  contentContainer: {
    backgroundColor: "#FF79CA",
    borderRadius: 20,
    height: 300,
    width: 800,
    marginTop: 30,
    alignSelf: "center",
    borderColor: "#FF0099",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  stepText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 24,
    marginLeft: 30,
    marginTop: 20,
    color: "#4A4A4A",
  },
  regularText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 18,
    color: "#4A4A4A",
    textAlign: "left",
  },
  leftInnerContainer: {
    backgroundColor: "#FFD5EE",
    justifyContent: "center",
    width: 450,
    height: 200,
    marginLeft: 30,
    marginTop: 15,
    borderRadius: 20,
    padding: 20,
  },
  rightInnerContainer: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    width: 230,
    height: 200,
    marginTop: 15,
    marginLeft: 50,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    flexDirection: "column",
  },
  demoImage: {
    height: 120,
    width: 160,
  },
  answerBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    marginTop: 10,
    height: 30,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  step3image: {
    marginTop: 15,
    height: 275,
    width: 275,
  },
  letsGoButton: {
    height: 60,
    width: 160,
    alignSelf: "center",
    backgroundColor: "#FFF4AA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#FFEE00",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    marginTop: 40,
    marginBottom: 40,
  },

  letsGoText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 24,
    color: "#4A4A4A",
    textAlign: "center",
    textDecorationLine: "underline",
  },

});


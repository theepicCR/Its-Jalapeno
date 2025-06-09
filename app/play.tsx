import React from "react";
import { View, Text, StyleSheet, Image, Pressable, TextInput } from "react-native";
import { standardStyles } from "../styles/styles";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function GamePage() {
    const router = useRouter();

    let hint = "Hint";

    const guessed = useState(false);
    let topText = "Guess the Jalapeno!"
    let questionNum = 1;

    let width = 250;
    let height = 200;


    return (
        <View style={standardStyles.container}>
            {/*Header*/}
            <View style={standardStyles.header}>
                <View style={standardStyles.headerTopRow}>
                    <Pressable style={standardStyles.backButton} onPress = {() => router.replace("/")}>
                        <Text style={standardStyles.backButtonText}>{`← Back`}</Text>
                    </Pressable>
                    <View style={standardStyles.centerizeHeader}>
                        <Pressable style={{marginRight: 15}} onPress = {() => router.replace("/")}>
                            <View style={standardStyles.headerContent}>
                                <Text style={standardStyles.headerLogoText}> 
                                    It's Jalapeno?
                                </Text>
                                <Image style={standardStyles.logo}
                                    source={require("../assets/images/favicon.png")}
                                    accessibilityLabel="It's Jalapeno Logo">
                                </Image>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <Text style={standardStyles.headerAboutText}>
                A Game Inspired by a Meme  
                </Text>
            </View>

            <View style={styles.InstructionContainer}>
                <Text style={styles.InstructionText}>{topText}</Text>
            </View>

            <View style={styles.contentContainer}>
                <Image style={{height: height, width: width, alignSelf: "center",}}
                    source={require("../assets/images/JalapenoBeeSil.png")}
                    accessibilityLabel="It's Jalapeno Logo">
                </Image>
                <Pressable style={styles.hintButton}>
                    <Text style={styles.hintButtonText}>
                        {hint}
                    </Text>
                </Pressable>
                <TextInput style={styles.guessEnter} 
                    placeholder="Enter Guess:"
                    placeholderTextColor={"#4A4A4A"}>
                </TextInput>
            </View>
            <View style={styles.buttons}>
                <View style={styles.questionNumContainer}>
                    <Text style={styles.questionNumText}>
                        {questionNum}
                    </Text>
                </View>
                <Pressable style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>
                        Next →
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    InstructionContainer: {
    backgroundColor: "#FF79CA",
    borderRadius: 20,
    height: 75,
    width: 600,
    marginTop: 40,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "#FF0099",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  InstructionText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 48,
    textAlign: "center",
    color: "#393939",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    height: 300,
    width: 600,
    marginTop: 30,
    alignSelf: "center",
    borderColor: "#FF0099",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    padding: 20,
    //justifyContent: "center",
  },
  hintButton: {
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
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5,
  },
  hintButtonText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 14,
    textAlign: "center",
    color: "#393939",
  },
  guessEnter: {
    backgroundColor: "#D9D9D9",
    width: 250,
    height: 30,
    alignSelf: "center",
    marginTop: 5,
    borderRadius: 10,
    paddingLeft: 10,
  },
  guessEnterText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 14,
    textAlign: "center",
    color: "#4A4A4A",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
  },
  questionNumContainer: {
    backgroundColor: "#FF79CA",
    borderRadius: 40,
    height: 60,
    width: 60,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "center",
    borderColor: "#FF0099",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  questionNumText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 30,
    textAlign: "center",
    color: "#393939",
  },
  continueButton: {
    backgroundColor: "#FF79CA",
    borderRadius: 20,
    height: 60,
    width: 120,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "center",
    borderColor: "#FF0099",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  continueButtonText: {
    fontFamily: "JotiOne-Regular",
    fontSize: 24,
    textAlign: "center",
    color: "#393939",
  }
});
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { standardStyles } from "../styles/styles";
import { useRouter } from "expo-router";

export default function GamePage() {
    const router = useRouter();
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

        </View>
    )
}

const styles = StyleSheet.create({

});
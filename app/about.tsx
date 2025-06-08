import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { standardStyles } from "../styles/styles";

export default function GamePage() {

    return (
        <View style={standardStyles.container}>
            {/*Header*/}
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

        </View>
    )
}

const styles = StyleSheet.create({

});
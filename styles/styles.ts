import { StyleSheet } from "react-native";

export const standardStyles = StyleSheet.create({
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
})
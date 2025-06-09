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
    alignSelf: "center",
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
  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  centerizeHeader: {
    flex: 1,
    alignItems: "center",
    marginRight: 125,
  },
  backButton: {
    width: 100,
    height: 45,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    marginTop: 20,
    marginLeft: 40,
    borderRadius: 25,
    justifyContent: "center",
    borderColor: "#D9D9D9",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  backButtonText: {
    textAlign: "center",
    fontFamily: "JotiOne-Regular",
    fontSize: 18,
    color: "#4A4A4A",
  },
})
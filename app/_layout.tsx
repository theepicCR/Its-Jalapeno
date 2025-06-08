import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loadfonts] = useFonts ({
    "JotiOne-Regular": require("../assets/fonts/JotiOne-Regular.ttf"),
  });

  if (!loadfonts) return null;

  return (
  <Stack screenOptions={{ headerShown: false }} >
    <Stack.Screen name="index" />
    <Stack.Screen name="about" />
    <Stack.Screen name="learn" />
    <Stack.Screen name="play" />
   </Stack>
)}

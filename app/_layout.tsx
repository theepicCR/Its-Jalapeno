import { Stack, useSegments } from "expo-router";
import { useFonts } from "expo-font";

import { useEffect } from "react";

export default function RootLayout() {
  const [loadfonts] = useFonts ({
    "JotiOne-Regular": require("../assets/fonts/JotiOne-Regular.ttf"),
  });

      const segments = useSegments();

 useEffect(() => {
  try {
    console.log("Route changed:", segments.join("/"));
  } catch (error) {
    console.error("Error during route change:", error);
  }
}, [segments]);

  if (!loadfonts) return null;


  return (
  <Stack screenOptions={{ headerShown: false }} >
    <Stack.Screen name="index" />
    <Stack.Screen name="about" />
    <Stack.Screen name="learn" />
    <Stack.Screen name="play" />
   </Stack>
)}

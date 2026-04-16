import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./BatLogoStyle";
import BatLogoImage from "../../../assets/bat-logo.png";
export function Batlogo() {
  return (
    <View>
      <Text style={styles.title}>Bat Pass Generator</Text>
      <Image
        source={BatLogoImage}
        style={{
          resizeMode: "contain",
          height: 180,
        }}
      />
    </View>
  );
}

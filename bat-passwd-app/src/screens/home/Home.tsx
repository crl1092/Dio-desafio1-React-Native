import React from "react";
import { View, Text } from "react-native";
import { styles } from "./HomeStyle";
import { Batlogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Batlogo />
      </View>
      <View style={styles.textView}>
        <BatButton />
      </View>
    </View>
  );
}

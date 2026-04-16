import React from "react";
import { TextInput } from "react-native";
import { styles } from "./BatTextInputStyle";

interface BatTextInput {
  pass: string;
}

export function BatTextInput(props: BatTextInput) {
  return (
    <TextInput placeholder="passwd" style={styles.inputer} value={props.pass} />
  );
}

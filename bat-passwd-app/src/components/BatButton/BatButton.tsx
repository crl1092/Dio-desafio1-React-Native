import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import { styles } from "./BatButtonStyle";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePasswd from "../../services/passseordService";

export function BatButton() {
  const [pass, setPass] = useState("");
  function handleGeneratePasswd() {
    let generateToken = generatePasswd;
    setPass(generateToken);
  }

  function handleCopyPasswd() {
    Clipboard.setStringAsync(pass);
  }
  return (
    <>
      <BatTextInput pass={pass} />

      <TouchableOpacity onPress={handleGeneratePasswd} style={styles.button}>
        <Text style={styles.genetateText}>Generate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCopyPasswd}>
        <Text style={styles.genetateText}> COPY</Text>
      </TouchableOpacity>
    </>
  );
}

import { useState } from "react";
import { TextInput } from "react-native-paper";

export default function InsertNote() {
  const [text, setText] = useState("");
  return (
    <>
      <TextInput />
    </>
  );
}

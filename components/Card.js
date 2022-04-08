import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

function Card() {
  const [top, setTop] = useState("50%");
  const [left, setLeft] = useState("50%");

  const styles = createStyles({ top, left });

  return (
    <TouchableOpacity style={styles.card}>
      <Text>Coucou</Text>
    </TouchableOpacity>
  );
}

const createStyles = ({ top, left }) =>
  StyleSheet.create({
    card: {
      backgroundColor: "yellow",
      left: left,
      top: top,
    },
  });

export default Card;

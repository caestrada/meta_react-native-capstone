import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ onPress, children, disabled, variant }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonWrapper,
        disabled && styles.disabled,
        variant === "outline" ? styles.outline : null,
      ]}
      disabled={disabled}
    >
      <Text style={[styles.text, variant === "outline" ? styles.outlineText : null]}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: "#495E57",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#495E57",
  },
  disabled: {
    backgroundColor: "grey",
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  outlineText: {
    color: "#495E57",
  },
});

export default Button;

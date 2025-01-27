import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = ({
  selected = false,
  size = 24,
  borderWidth = 2,
  borderColor = "#000",
  selectedColor = "#000",
  backgroundColor = "transparent",
  selectedBackgroundColor = "#000",
  shape = "circle",
  onSelect,
  style,
  innerStyle,
  disabled = false,
  children,
}) => {
  const containerStyle = {
    width: size,
    height: size,
    borderRadius: shape === "circle" ? size / 2 : size / 6,
    borderWidth,
    borderColor: selected ? selectedColor : borderColor,
    backgroundColor: selected ? selectedBackgroundColor : backgroundColor,
  };

  const innerCircleStyle = {
    width: size * 0.5,
    height: size * 0.5,
    borderRadius: shape === "circle" ? size / 4 : size / 12,
    backgroundColor: selected ? selectedColor : "transparent",
  };

  return (
    <TouchableOpacity
      onPress={onSelect}
      disabled={disabled}
      style={[styles.container, style]}
    >
      <View style={[styles.radio, containerStyle]}>
        <View style={[styles.innerCircle, innerCircleStyle, innerStyle]} />
      </View>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  radio: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RadioButton;

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RadioButton from "./RadioButton";

const RadioGroup = ({
  options = [],
  value,
  onChange,
  radioProps = {},
  containerStyle,
  vertical = false,
}) => {
  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
  };

  return (
    <View
      style={[
        styles.container,
        vertical ? styles.vertical : styles.horizontal,
        containerStyle,
      ]}
    >
      {options.map((option, index) => (
        <RadioButton
          key={index}
          selected={value === option.value}
          onSelect={() => handleSelect(option.value)}
          {...radioProps}
          {...option.radioProps}
        >
          {option.label}
        </RadioButton>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
});

export default RadioGroup;

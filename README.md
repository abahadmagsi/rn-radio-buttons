# React Native Radio Buttons

A highly customizable and elegant radio button library for React Native applications. This library provides both single radio buttons and radio groups with extensive customization options.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Components](#components)
  - [RadioButton](#radiobutton)
  - [RadioGroup](#radiogroup)
- [Examples](#examples)
  - [Basic Usage](#basic-usage)
  - [Advanced Customization](#advanced-customization)
  - [Real-world Examples](#real-world-examples)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
# Using npm
npm install rn-radio-buttons

# Using yarn
yarn add rn-radio-buttons
```

## Features

- 🎨 Highly customizable appearance
- 📱 Native performance
- 🔄 Controlled and uncontrolled components
- ↕️ Vertical and horizontal layouts
- 🎯 Flexible shape options (circle/square)
- 💫 Custom styling support
- ♿ Accessibility support
- 📦 Lightweight package
- 📱 Cross-platform support (iOS & Android)

## Components

### RadioButton

A single radio button component that can be used independently or as part of a RadioGroup.

#### Basic Usage

```javascript
import { RadioButton } from "rn-radio-buttons";

const MyComponent = () => (
  <RadioButton
    selected={true}
    onSelect={() => console.log("Selected!")}
    size={24}
    borderColor="#007AFF"
  />
);
```

#### Props

| Prop                    | Type                 | Default       | Description                                   |
| ----------------------- | -------------------- | ------------- | --------------------------------------------- |
| selected                | boolean              | false         | Whether the radio button is selected          |
| size                    | number               | 24            | Size of the radio button                      |
| borderWidth             | number               | 2             | Width of the border                           |
| borderColor             | string               | '#000'        | Color of the border when unselected           |
| selectedColor           | string               | '#000'        | Color of the border when selected             |
| backgroundColor         | string               | 'transparent' | Background color when unselected              |
| selectedBackgroundColor | string               | '#000'        | Background color when selected                |
| shape                   | 'circle' \| 'square' | 'circle'      | Shape of the radio button                     |
| onSelect                | function             | -             | Callback when radio button is pressed         |
| disabled                | boolean              | false         | Whether the radio button is disabled          |
| style                   | ViewStyle            | -             | Additional styles for the container           |
| innerStyle              | ViewStyle            | -             | Additional styles for the inner circle/square |

### RadioGroup

A container component for multiple radio buttons with built-in state management.

#### Basic Usage

```javascript
import { RadioGroup } from "rn-radio-buttons";
import { Text } from "react-native";

const options = [
  { label: <Text>Option 1</Text>, value: "1" },
  { label: <Text>Option 2</Text>, value: "2" },
  { label: <Text>Option 3</Text>, value: "3" },
];

const MyComponent = () => {
  const [selected, setSelected] = useState("1");

  return (
    <RadioGroup
      options={options}
      value={selected}
      onChange={setSelected}
      vertical={true}
    />
  );
};
```

#### Props

| Prop           | Type             | Default | Description                           |
| -------------- | ---------------- | ------- | ------------------------------------- |
| options        | Array<Option>    | []      | Array of options to display           |
| value          | string           | -       | Currently selected value              |
| onChange       | function         | -       | Callback when selection changes       |
| radioProps     | RadioButtonProps | {}      | Props to pass to all RadioButtons     |
| containerStyle | ViewStyle        | -       | Additional styles for the container   |
| vertical       | boolean          | false   | Whether to display options vertically |

#### Option Type

```typescript
interface Option {
  label: React.ReactNode;
  value: string;
  radioProps?: RadioButtonProps; // Optional props for individual radio buttons
}
```

## Examples

### Basic Usage

```javascript
import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton, RadioGroup } from "rn-radio-buttons";

const BasicExample = () => {
  // Single Radio Button
  const [isSelected, setIsSelected] = useState(false);

  return (
    <RadioButton
      selected={isSelected}
      onSelect={() => setIsSelected(!isSelected)}
      size={24}
      borderColor="#007AFF"
      selectedColor="#007AFF"
    />
  );
};
```

### Advanced Customization

```javascript
const CustomizedExample = () => {
  const [selected, setSelected] = useState("1");

  const options = [
    {
      label: <Text style={{ color: "#007AFF" }}>Premium</Text>,
      value: "1",
      radioProps: {
        size: 28,
        borderColor: "#007AFF",
        selectedColor: "#007AFF",
        shape: "square",
      },
    },
    {
      label: <Text style={{ color: "#34C759" }}>Standard</Text>,
      value: "2",
      radioProps: {
        size: 28,
        borderColor: "#34C759",
        selectedColor: "#34C759",
        shape: "square",
      },
    },
  ];

  return (
    <RadioGroup
      options={options}
      value={selected}
      onChange={setSelected}
      vertical={true}
      containerStyle={{ gap: 16 }}
    />
  );
};
```

### Real-world Examples

#### Form Input

```javascript
const FormExample = () => {
  const [gender, setGender] = useState("");

  const options = [
    { label: <Text>Male</Text>, value: "male" },
    { label: <Text>Female</Text>, value: "female" },
    { label: <Text>Other</Text>, value: "other" },
  ];

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Gender</Text>
      <RadioGroup
        options={options}
        value={gender}
        onChange={setGender}
        radioProps={{
          size: 20,
          borderColor: "#666",
          selectedColor: "#007AFF",
          selectedBackgroundColor: "#E5F1FF",
        }}
        containerStyle={styles.radioGroup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  radioGroup: {
    gap: 12,
  },
});
```

#### Custom Styling

```javascript
const StyledExample = () => (
  <RadioButton
    selected={true}
    size={32}
    borderWidth={3}
    borderColor="#E5E5EA"
    selectedColor="#007AFF"
    backgroundColor="#F2F2F7"
    selectedBackgroundColor="#E5F1FF"
    shape="square"
    style={{
      marginHorizontal: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    }}
    innerStyle={{
      margin: 4,
    }}
  />
);
```

## Styling Guide

### Theme Customization

```javascript
// Example of themed radio buttons
const ThemedRadioExample = () => {
  const theme = {
    primary: "#007AFF",
    background: "#FFFFFF",
    border: "#E5E5EA",
    text: "#000000",
  };

  const options = [
    { label: <Text style={{ color: theme.text }}>Option 1</Text>, value: "1" },
    { label: <Text style={{ color: theme.text }}>Option 2</Text>, value: "2" },
  ];

  return (
    <RadioGroup
      options={options}
      value={selected}
      onChange={setSelected}
      radioProps={{
        size: 24,
        borderColor: theme.border,
        selectedColor: theme.primary,
        backgroundColor: theme.background,
        selectedBackgroundColor: `${theme.primary}20`, // 20% opacity
      }}
    />
  );
};
```

### Dark Mode Support

```javascript
const DarkModeExample = ({ isDarkMode }) => {
  const theme = {
    primary: isDarkMode ? "#0A84FF" : "#007AFF",
    background: isDarkMode ? "#000000" : "#FFFFFF",
    border: isDarkMode ? "#636366" : "#E5E5EA",
    text: isDarkMode ? "#FFFFFF" : "#000000",
  };

  return (
    <RadioButton
      selected={true}
      size={24}
      borderColor={theme.border}
      selectedColor={theme.primary}
      backgroundColor={theme.background}
      selectedBackgroundColor={`${theme.primary}20`}
    />
  );
};
```

## Best Practices

1. **Accessibility**

   - Always provide meaningful labels
   - Maintain minimum touch target size (44x44)
   - Use sufficient color contrast
   - Support screen readers

2. **Performance**

   - Memoize callbacks and options
   - Use `React.memo` for static radio buttons
   - Avoid unnecessary re-renders

3. **UX Guidelines**
   - Consistent sizing throughout your app
   - Clear visual feedback on interaction
   - Adequate spacing between options
   - Clear labeling and grouping

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the LICENSE file for details

## Support

Need help?

1. Check the documentation
2. Open an issue on GitHub
3. Contact via our support channels

---

Built with ❤️ for the React Native community.

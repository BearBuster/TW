import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
    someFun
  }) => (
    <View style={{ flex: 1 }}>
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => {setSelectedValue(value); someFun();}}
            style={[
              styles.button,
              selectedValue === value && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container, { [label]: selectedValue }]}>
        {children}
      </View>
    </View>
  );

export default PreviewLayout
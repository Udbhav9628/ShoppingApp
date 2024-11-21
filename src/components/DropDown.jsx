import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";

const orderByData = [
  { value: "ascending", label: "Lowest to Highest" },
  { value: "descending", label: "Highest to Lowest" },
];

const DropDown = ({ handleOrderBy }) => {
  const [data, setData] = useState("");

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={data}
      data={orderByData}
      valueField="value"
      labelField="label"
      placeholder="Select"
      onChange={(e) => {
        setData(e.value);
        handleOrderBy(e.value);
      }}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: 35,
    width: 180,
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#888",
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "#333",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

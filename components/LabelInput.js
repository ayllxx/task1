import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from 'react-native';
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LabelInput = ({
  label,
  label1,
  icons,
  showIcons,
  propAlignSelf,
  propWidth,
  propMarginTop,
  propWidth1,
  propFontSize,
  propColor,
}) => {
  const labelInputStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propAlignSelf, propWidth, propMarginTop]);

  const dropdownStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", propFontSize),
      ...getStyleValue("color", propColor),
    };
  }, [propFontSize, propColor]);

  return (
    <View style={[styles.labelInput, labelInputStyle]}>
      <Text style={[styles.label, styles.labelFlexBox]}>{label}</Text>
      <View style={[styles.dropdown, styles.dropdownFlexBox, dropdownStyle]}>
        <View style={[styles.placeholderIcons, styles.dropdownFlexBox]}>
          <Image
            style={styles.outlineLayout}
            contentFit="cover"
            source={require("../assets/-outline--search.png")}
          />
          <Text style={[styles.label1, styles.labelFlexBox, labelStyle]}>
            {label1}
          </Text>
          <Image
            style={[styles.outlineMenu, styles.outlineLayout]}
            contentFit="cover"
            source={require("../assets/-outline--menu.png")}
          />
        </View>
        {showIcons && (
          <Image style={styles.icons} contentFit="cover" source={icons} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox: {
    textAlign: "left",
    lineHeight: 24,
  },
  dropdownFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  outlineLayout: {
    display: "none",
    height: 24,
    width: 24,
  },
  label: {
    fontSize: FontSize.bodyL18SpRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.dark,
    alignSelf: "stretch",
  },
  label1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.paragraphMediumRegular,
    color: Color.greyGrey5,
    marginLeft: 2,
    flex: 1,
  },
  outlineMenu: {
    marginLeft: 2,
  },
  placeholderIcons: {
    flex: 1,
  },
  icons: {
    marginLeft: 8,
    height: 24,
    width: 24,
  },
  dropdown: {
    borderRadius: Border.br_5xs,
    backgroundColor: "#F6F8FA",
    width: 410,
    height: 34,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    marginTop: 16,
  },
  labelInput: {
    alignSelf: "stretch",
  },
});

export default LabelInput;

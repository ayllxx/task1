import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles2";

const Menu1 = () => {
  return (
    <View style={styles.menu1}>
      <View style={styles.menu}>
        <View style={styles.section}>
          <View style={styles.link}>
            <Text style={[styles.text, styles.textFlexBox]}>
              Total cards issued
            </Text>
          </View>
          <View style={styles.linkSpaceBlock}>
            <Text style={[styles.text, styles.textFlexBox]}>Apple pay</Text>
          </View>
          <View style={styles.linkSpaceBlock}>
            <Text style={[styles.text, styles.textFlexBox]}>Google pay</Text>
          </View>
          <View style={[styles.link3, styles.linkSpaceBlock]}>
            <Text style={[styles.text3, styles.textFlexBox]}>
              Available action 4
            </Text>
          </View>
          <View style={[styles.link3, styles.linkSpaceBlock]}>
            <Text style={[styles.text3, styles.textFlexBox]}>
              Available action 5
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.size_smi_2,
    alignSelf: "stretch",
  },
  linkSpaceBlock: {
    marginTop: 7,
    flexDirection: "row",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.textXsMedium,
    color: Color.neutral700,
  },
  link: {
    flexDirection: "row",
  },
  text3: {
    fontWeight: "600",
    fontFamily: FontFamily.deprecatedCaptionAlt,
    color: Color.textIconsBrand,
  },
  link3: {
    display: "none",
  },
  section: {
    paddingHorizontal: 9,
    paddingVertical: 7,
  },
  menu: {
    position: "absolute",
    top: -1,
    left: -1,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4.363839149475098,
    },
    shadowRadius: 13.09,
    elevation: 13.09,
    shadowOpacity: 1,
    borderRadius: 3,
    backgroundColor: Color.colorsWhite100,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 0.9,
    width: 143,
    height: 91,
    paddingHorizontal: 0,
    paddingVertical: 3,
  },
  menu1: {
    width: 141,
    height: 89,
  },
});

export default Menu1;

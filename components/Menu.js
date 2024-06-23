import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles2";

const Menu = () => {
  return (
    <View style={styles.menu3}>
      <View style={styles.menu}>
        <View style={styles.section}>
          <View style={styles.link}>
            <Text style={styles.text}>Issue a card</Text>
          </View>
          <View style={styles.linkSpaceBlock}>
            <Text style={styles.text}>Manage connections</Text>
          </View>
          <View style={[styles.link2, styles.linkSpaceBlock]}>
            <Text style={[styles.text2, styles.textFlexBox]}>Google pay</Text>
          </View>
          <View style={[styles.link2, styles.linkSpaceBlock]}>
            <Text style={[styles.text3, styles.textFlexBox]}>
              Available action 4
            </Text>
          </View>
          <View style={[styles.link2, styles.linkSpaceBlock]}>
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
  linkSpaceBlock: {
    marginTop: 7,
    flexDirection: "row",
  },
  textFlexBox: {
    fontSize: FontSize.size_smi_2,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 17,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.semiBold11_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 17,
    alignSelf: "stretch",
    color: Color.neutral700,
    fontFamily: FontFamily.textXsMedium,
    fontWeight: "500",
  },
  link: {
    flexDirection: "row",
  },
  text2: {
    color: Color.neutral700,
    fontFamily: FontFamily.textXsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi_2,
  },
  link2: {
    display: "none",
  },
  text3: {
    fontWeight: "600",
    fontFamily: FontFamily.deprecatedCaptionAlt,
    color: Color.textIconsBrand,
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
    height: 60,
    paddingHorizontal: 0,
    paddingVertical: 3,
  },
  menu3: {
    width: 141,
    height: 58,
  },
});

export default Menu;

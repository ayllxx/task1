import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding,Image } from "../GlobalStyles2";

const Group = () => {
  return (
    <View style={styles.searchParent}>
      <View style={styles.search}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/--search.png")}
        />
        <Text style={styles.search1}>Search...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    width: 12,
    height: 12,
  },
  search1: {
    fontSize: FontSize.semiBold11_size,
    lineHeight: 16,
    FontFamily: FontFamily.deprecatedCaptionAlt,
    color: Color.textSecondary,
    textAlign: "left",
    width: 420,
    marginLeft: 8,
  },
  search: {
    position: "absolute",
    marginTop: -13,
    marginLeft: -229,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorsWhite100,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
  },
  searchParent: {
    width: 456,
    height: 24,
  },
});

export default Group;

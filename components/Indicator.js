import * as React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Indicator = () => {
  return (
    <View style={styles.indicator}>
      <Image
        style={[styles.dotIcon, styles.numberPosition]}
        contentFit="cover"
        source={require("../assets/dot.png")}
      />
      <Text style={[styles.number, styles.numberPosition]}>00</Text>
      <Image
        style={styles.mediaIcon}
        contentFit="cover"
        source={require("../assets/media--icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  numberPosition: {
    display: "none",
    position: "absolute",
  },
  dotIcon: {
    top: 12,
    left: 12,
    width: 12,
    height: 12,
  },
  number: {
    marginTop: -12,
    marginLeft: -10.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.paragraphMediumRegular_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphMediumRegular,
    color: Color.backgroundSurface,
    textAlign: "center",
  },
  mediaIcon: {
    top: 5,
    left: 4,
    width: 17,
    height: 17,
    overflow: "hidden",
    position: "absolute",
  },
  indicator: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorMediumspringgreen,
    width: 26,
    height: 26,
  },
});

export default Indicator;

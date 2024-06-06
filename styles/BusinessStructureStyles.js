import { StyleSheet } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export default StyleSheet.create({
    inputFlexBox: {
      paddingVertical: Padding.p_xs,
      alignItems: "center",
      flexDirection: "row",
    },
    badgeFlexBox: {
      alignItems: "center",
      flexDirection: "row",
    },
    fillLayout: {
      height: 16,
      width: 16,
    },
    businessFlexBox: {
      textAlign: "center",
      lineHeight: 24,
    },
    label1Layout: {
      lineHeight: 24,
      textAlign: "left",
    },
    outlineLayout: {
      height: 24,
      width: 24,
    },
    input: {
      borderColor: Color.colorGainsboro_100, // Border color
      borderWidth: 1, // Border width
      height: 34, // Height of the input
      paddingHorizontal: Padding.p_base, // Horizontal padding
      marginTop: 16, // Margin top
      borderRadius: Border.br_5xs, // Border radius
      width: 410, // Width of the input
      backgroundColor: Color.backgroundSurface, // Background color
      fontSize: FontSize.paragraphMediumRegular_size, // Font size
      color: Color.greyGrey5, // Text color
      fontFamily: FontFamily.paragraphMediumRegular, // Font family
    },
  
    labelTypo: {
      color: Color.greyGrey5,
      fontFamily: FontFamily.paragraphMediumRegular,
      lineHeight: 24,
      textAlign: "left",
      fontSize: FontSize.paragraphMediumRegular_size,
    },
    labelInputsSpaceBlock: {
      marginTop: 32,
      width: 410,
    },
    groupChildLayout2: {
      height: 438,
      position: "absolute",
    },
    groupChildLayout1: {
      transform: [
        {
          rotate: "90deg",
        },
      ],
      height: 10,
      width: 10,
      backgroundColor: Color.colorSilver,
      borderRadius: Border.br_21xl,
      left: 13,
      position: "absolute",
    },
    overviewPosition: {
      left: 56,
      position: "absolute",
    },
    businessPosition: {
      left: 67,
      position: "absolute",
    },
    groupChildLayout: {
      height: 26,
      width: 26,
      left: 4,
      position: "absolute",
    },
    child: {
      top: 110,
      borderColor: Color.colorWhitesmoke_100,
      borderTopWidth: 1,
      width: 1513,
      height: 1,
      borderStyle: "solid",
      left: 0,
      position: "absolute",
    },
    button: {
      top: 38,
      right: 1349,
      borderRadius: Border.br_80xl,
      backgroundColor: Color.greyGrey1,
      paddingHorizontal: 60,
      paddingVertical: 12,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      left: 55,
      position: "absolute",
      width: 62, 
      height: 48, 
  },
    accountVerification: {
      top: 42,
      left: 200,
      lineHeight: 40,
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
      fontSize: FontSize.paragraphMediumRegular_size,
      position: "absolute",
    },
    outlineMinus: {
      display: "none",
    },
    label: {
      fontSize: FontSize.size_xs,
      color: Color.colorMediumslateblue_100,
      marginLeft: 4,
      fontFamily: FontFamily.paragraphMediumRegular,
  
    },
    fillCloseCircle: {
      marginLeft: 4,
      display: "none",
    },
    badge: {
      top: 55,
      left: 385,
      borderRadius: Border.br_10xs,
      backgroundColor: Color.colorsPurple8Opacity,
      height: 18,
      paddingLeft: Padding.p_8xs,
      paddingTop: Padding.p_12xs,
      paddingRight: Padding.p_7xs,
      paddingBottom: Padding.p_12xs,
      justifyContent: "center",
      position: "absolute",
    },
    frameGroup: {
      width: 410,
    },
    label1: {
      alignSelf: "stretch",
      fontSize: FontSize.bodyL18SpRegular_size,
      color: Color.dark,
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
      lineHeight: 24,
      marginTop:5,
    },
    outlineSearch: {
      display: "none",
    },
    pointer: {
      backgroundColor: Color.colorsBlue100Opacity,
      width: 2,
      height: 20,
      borderRadius: Border.br_5xs,
      display: "none",
    },
    labelPointer: {
      marginLeft: 8,
    },
    outlineMenu: {
      marginLeft: 8,
      display: "none",
    },
    input: {
      borderColor: Color.colorGainsboro_100,
      borderWidth: 1,
      height: 34,
      paddingHorizontal: Padding.p_base,
      marginTop: 16,
      borderRadius: Border.br_5xs,
      width: 410,
      borderStyle: "solid",
      backgroundColor: Color.backgroundSurface,
    },
    label4: {
      marginLeft: 8,
      flex: 1,
    },
    continue: {
      color: Color.backgroundSurface,
      fontFamily: FontFamily.paragraphMediumRegular,
      fontSize: FontSize.paragraphMediumRegular_size,
    },
    fillArrowLeft1: {
      marginLeft: 5,
    },
    continueParent: {
      borderRadius: Border.br_7xs,
      backgroundColor: Color.colorMediumblue,
      paddingHorizontal: Padding.p_171xl,
      paddingVertical: Padding.p_8xs,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    frameParent: {
      left: 434,
      width: 410,
      top: 170,
      position: "absolute",
    },
    groupChild: {
      top: 0,
      borderRadius: Border.br_90xl,
      backgroundColor: Color.colorGainsboro_300,
      width: 33,
      left: 0,
    },
    groupItem: {
      top: 47,
    },
    groupInner: {
      top: 77,
    },
    rectangleView: {
      top: 107,
    },
    groupChild1: {
      top: 137,
    },
    groupChild2: {
      top: 167,
    },
    businessStructure: {
      top: 4,
      textAlign: "center",
      lineHeight: 24,
      color: Color.colorBlack,
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
      fontSize: FontSize.paragraphMediumRegular_size,
    },
    bankDetails1: {
      color: Color.colorBlack,
      textAlign: "center",
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
      fontSize: FontSize.paragraphMediumRegular_size,
    },
    bankDetails: {
      top: 229,
    },
    supportingDocuments: {
      top: 289,
    },
    stepAuthentication: {
      top: 349,
      textAlign: "center",
      lineHeight: 24,
      color: Color.colorBlack,
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
      fontSize: FontSize.paragraphMediumRegular_size,
    },
    overview: {
      top: 409,
      textAlign: "center",
      lineHeight: 24,
      color: Color.colorBlack,
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
      fontSize: FontSize.paragraphMediumRegular_size,
    },
    businessRepresentative1: {
      color: Color.colorDimgray_100,
      fontFamily: FontFamily.paragraphMediumRegular,
      fontSize: FontSize.paragraphMediumRegular_size,
    },
    businessRepresentative: {
      top: 40,
    },
    businessDetails: {
      top: 70,
    },
    businessOwners: {
      top: 100,
    },
    businessExecutives: {
      top: 130,
    },
    businessDirectors: {
      top: 160,
    },
    groupIcon: {
      top: 4,
    },
    groupChild3: {
      top: 228,
    },
    groupChild4: {
      top: 288,
    },
    groupChild5: {
      top: 348,
    },
    groupChild6: {
      top: 408,
    },
    rectangleParent: {
      width: 248,
      top: 161,
      left: 101,
    },
    view: {
      width: "100%",
      height: 982,
      overflow: "hidden",
      flex: 1,
      backgroundColor: Color.backgroundSurface,
    },
    errorText: {
      color: 'red',
      fontSize: 12,
    }
  });
  
import * as React from "react";

import { StyleSheet, Text, View } from "react-native";

import { Color, Border, FontFamily, FontSize, Padding,Image } from "../GlobalStyles2";

const SideBar = () => {
  return (
    <View style={styles.sidebar}>
      <View style={styles.logo}>
        <Image
          style={styles.logoChild}
          contentFit="cover"
          source={require("../assets/group-12.png")}
        />
        <Text style={[styles.metrix, styles.metrixTypo]}>Metrix</Text>
      </View>
      <View style={styles.menuitems}>
        <View style={[styles.menuItem, styles.menuItemLayout]} />
        <View style={styles.list}>
          <View style={styles.iconBackground}>
            <View style={[styles.background, styles.activePosition]} />
            <Image
              style={[styles.outlineCreditCard, styles.outlineLayout]}
              contentFit="cover"
              source={require("../assets/-outline--creditcard.png")}
            />
            <LinearGradient
              style={[styles.counter, styles.counterFlexBox]}
              locations={[0, 1]}
              colors={["#6989fe", "#3c64f4"]}
            >
              <Text style={[styles.caption, styles.metrixTypo]}>9</Text>
            </LinearGradient>
          </View>
          <Image
            style={[styles.outlineInfo, styles.outlineInfoSpaceBlock]}
            contentFit="cover"
            source={require("../assets/-outline--info.png")}
          />
          <Text style={styles.label}>Information</Text>
          <View style={[styles.labelCounter, styles.outlineInfoSpaceBlock]}>
            <LinearGradient
              style={[styles.counter1, styles.counterFlexBox]}
              locations={[0, 1]}
              colors={["#6989fe", "#3c64f4"]}
            >
              <Text style={[styles.caption, styles.metrixTypo]}>8</Text>
            </LinearGradient>
            <Image
              style={[styles.outlineMenu, styles.outlineLayout]}
              contentFit="cover"
              source={require("../assets/-outline--menu.png")}
            />
            <Text style={styles.label1}>Label</Text>
          </View>
        </View>
        <View style={[styles.active, styles.activePosition]}>
          <View>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/innercontainer.png")}
            />
            <View style={styles.cardParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/card1.png")}
              />
              <Image
                style={[styles.menuItemIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/menu-item.png")}
              />
              <Image
                style={[styles.menuItemIcon1, styles.menuItemLayout]}
                contentFit="cover"
                source={require("../assets/menu-item1.png")}
              />
              <Image
                style={[styles.menuItemIcon1, styles.menuItemLayout]}
                contentFit="cover"
                source={require("../assets/menu-item2.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.logout}>
          <Image
            style={[styles.logoutChild, styles.outlineLayout]}
            contentFit="cover"
            source={require("../assets/frame-9.png")}
          />
        </View>
      </View>
      <View style={styles.banner}>
        <View style={styles.container}>
          <View style={styles.figiftParent}>
            <Image
              style={[styles.figiftIcon, styles.outlineLayout]}
              contentFit="cover"
              source={require("../assets/figift.png")}
            />
            <Text style={[styles.freeGiftAwaits, styles.freeGiftAwaitsTypo]}>
              Free Gift Awaits You!
            </Text>
          </View>
          <View style={styles.upgradeYourAccountParent}>
            <Text
              style={[styles.upgradeYourAccount, styles.freeGiftAwaitsTypo]}
            >
              Upgrade your account
            </Text>
            <Image
              style={styles.fichevronDownIcon}
              contentFit="cover"
              source={require("../assets/fichevrondown.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metrixTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  menuItemLayout: {
    width: 26,
    height: 18,
  },
  activePosition: {
    top: 0,
    position: "absolute",
  },
  outlineLayout: {
    width: 24,
    height: 24,
  },
  counterFlexBox: {
    backgroundColor: Color.gradientsBlue,
    paddingVertical: 0,
    borderRadius: Border.br_80xl,
    flexDirection: "row",
    alignItems: "center",
    display: "none",
  },
  outlineInfoSpaceBlock: {
    marginLeft: 16,
    display: "none",
  },
  iconLayout: {
    width: 18,
    height: 18,
  },
  freeGiftAwaitsTypo: {
    width: 144,
    fontFamily: FontFamily.label1Regular,
    textAlign: "left",
  },
  logoChild: {
    height: "100%",
    width: "8.92%",
    top: "0%",
    right: "91.08%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  metrix: {
    top: 14,
    left: 78,
    fontSize: FontSize.subHeading3Bold_size,
    fontFamily: FontFamily.subHeading3Bold,
    color: Color.black60,
    position: "absolute",
  },
  logo: {
    height: "5.08%",
    width: "196.58%",
    top: "1.37%",
    right: "-108.22%",
    bottom: "93.55%",
    left: "11.64%",
    display: "none",
    position: "absolute",
  },
  menuItem: {
    top: 42,
    alignItems: "center",
    height: 18,
    left: 22,
    position: "absolute",
  },
  background: {
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Color.colorsGreen8Opacity,
    borderRadius: Border.br_5xs,
  },
  outlineCreditCard: {
    marginTop: -12,
    marginLeft: -12,
    top: "50%",
    left: "50%",
    height: 24,
    position: "absolute",
  },
  caption: {
    lineHeight: 20,
    fontFamily: FontFamily.bodyS14SpBold,
    color: Color.colorsWhite100,
    fontSize: FontSize.deprecatedBodyAlt_size,
  },
  counter: {
    top: -4,
    right: -10,
    height: 20,
    paddingHorizontal: 6,
    position: "absolute",
  },
  iconBackground: {
    width: 32,
    height: 32,
    display: "none",
  },
  outlineInfo: {
    height: 24,
    width: 24,
  },
  label: {
    flex: 1,
    fontWeight: "500",
    fontFamily: FontFamily.bodyL18SpMedium,
    textAlign: "left",
    color: Color.greyGrey6,
    lineHeight: 24,
    fontSize: FontSize.bodyL18SpRegular_size,
    marginLeft: 16,
    display: "none",
  },
  counter1: {
    paddingHorizontal: 8,
    height: 24,
  },
  outlineMenu: {
    marginLeft: 12,
    height: 24,
  },
  label1: {
    fontFamily: FontFamily.bodyL18SpRegular,
    textAlign: "right",
    marginLeft: 12,
    color: Color.greyGrey6,
    lineHeight: 24,
    fontSize: FontSize.bodyL18SpRegular_size,
    display: "none",
  },
  labelCounter: {
    flexDirection: "row",
    alignItems: "center",
  },
  list: {
    top: -11,
    left: 11,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.textIconsBrand,
    width: 41,
    height: 41,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  menuItemIcon: {
    marginTop: 35,
  },
  menuItemIcon1: {
    marginTop: 35,
    height: 18,
  },
  cardParent: {
    marginTop: 35,
  },
  active: {
    width: 205,
    paddingRight: 22,
    left: 22,
  },
  menuitems: {
    top: 131,
    left: 5,
    width: 63,
    height: 186,
    position: "absolute",
  },
  logoutChild: {
    height: 24,
  },
  logout: {
    backgroundColor: Color.colorIndianred,
    padding: Padding.p_2xs,
    borderRadius: Border.br_base,
  },
  bottom: {
    top: 942,
    left: 13,
    flexDirection: "row",
    position: "absolute",
  },
  figiftIcon: {
    height: 24,
    overflow: "hidden",
  },
  freeGiftAwaits: {
    color: Color.black100,
    height: 19,
    marginLeft: 12,
    fontSize: FontSize.deprecatedBodyAlt_size,
  },
  figiftParent: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  upgradeYourAccount: {
    fontSize: FontSize.semiBold11_size,
    color: Color.black40,
    display: "flex",
    alignItems: "center",
    height: 18,
  },
  fichevronDownIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  upgradeYourAccountParent: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    top: 11,
    left: 20,
    position: "absolute",
  },
  banner: {
    top: 836,
    left: 32,
    backgroundColor: Color.colorBurlywood,
    width: 233,
    height: 82,
    borderRadius: Border.br_base,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  sidebar: {
    backgroundColor: Color.colorsWhite100,
    width: 73,
    height: 1024,
    overflow: "hidden",
    borderRadius: Border.br_5xs,
  },
});

export default SideBar;

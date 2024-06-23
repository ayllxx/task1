import React, { useMemo, useState } from "react";

import { StyleSheet, Text, View, Pressable,Image } from "react-native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles2";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const MenuItems = ({ home, menuItemTop, propColor, onHomePress }) => {
  const [showIssueOptions, setShowIssueOptions] = useState(false);
  const [showConnectOptions, setShowConnectOptions] = useState(false);
  const [showLinkOptions, setShowLinkOptions] = useState(false);

  const soonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", menuItemTop),
    };
  }, [menuItemTop]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={styles.menuitems}>
      <View style={styles.dashboardInner}>
        <View
          style={[
            styles.accountswitcherWrapper,
            styles.accountswitcherPosition,
          ]}
        >
          <View
            style={[styles.accountswitcher, styles.accountswitcherPosition]}
          >
            <Image
              style={[styles.businessIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/business.png")}
            />
            
            <Text style={[styles.accountName, styles.text1Typo]}>
              NewBridge Technologies
            </Text>
            <Image
              style={[styles.iconchevrondown1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/iconchevrondown1.png")}
            />
          </View>
        </View>
      </View>
      <Pressable style={[styles.menuItem0, styles.menuItemPosition]} onPress={onHomePress}>

        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      </Pressable>
      <Pressable
        style={[styles.menuItem, styles.menuItemPosition]}
        onPress={() => setShowIssueOptions(!showIssueOptions)}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/card.png")}
        />
        <Text style={[styles.issue, styles.homeTypo]}>Issue</Text>
        <Image
          style={[styles.iconchevrondown, styles.iconchevrondownLayout]}
          contentFit="cover"
          source={require("../assets/iconchevrondown.png")}
        />
      </Pressable>
      {showIssueOptions && (
        <View style={styles.optionsContainer}>
          <Text style={[styles.optionItem, styles.homeTypo]}>Total Card Issues</Text>
          <Text style={[styles.optionItem, styles.homeTypo]}>Apple Pay</Text>
          <Text style={[styles.optionItem, styles.homeTypo]}>Google Pay</Text>
        </View>
      )}
      <Pressable style={[styles.menuItem1, styles.activePosition, showIssueOptions && styles.shiftedPosition]}>
        <Image
          style={[styles.subscriptionIcon, styles.innercontainerPosition]}
          contentFit="cover"
          source={require("../assets/subscription.png")}
        />
        <Text style={[styles.automate, styles.homeTypo]}>Automate</Text>
        <Text style={[styles.soon, soonStyle]}>Soon</Text>
      </Pressable>
      <Pressable
        style={[styles.menuItem2, styles.menuItemPosition, showIssueOptions && styles.shiftedPosition1]}
        onPress={() => setShowConnectOptions(!showConnectOptions)}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/transfer.png")}
        />
        <Text style={[styles.connect, styles.homeTypo]}>Connect</Text>
        <Image
          style={[styles.iconchevrondown1, styles.iconchevrondownLayout]}
          contentFit="cover"
          source={require("../assets/iconchevrondown.png")}
        />
      </Pressable>
      {showConnectOptions && (
        <View style={[styles.optionsContainer2, showIssueOptions && styles.shiftedOptionsContainer2]}>
          <Text style={[styles.optionItem, styles.homeTypo]}>Total App Installations</Text>
          <Text style={[styles.optionItem, styles.homeTypo]}>iOS Install</Text>
          <Text style={[styles.optionItem, styles.homeTypo]}>Android Install</Text>
        </View>
      )}
      <Pressable style={[
        styles.menuItem3,
        styles.menuItemPosition,
        showIssueOptions && !showConnectOptions && !showLinkOptions && styles.shiftedPosition2,
        showConnectOptions && !showIssueOptions && !showLinkOptions && styles.shiftedPosition3,
        showLinkOptions && !showIssueOptions && !showConnectOptions && styles.shiftedPositionLink,
        (showIssueOptions && showConnectOptions) && !showLinkOptions && styles.shiftedPosition4,
        (showIssueOptions && showLinkOptions) && !showConnectOptions && styles.shiftedPositionIssueLink,
        (showConnectOptions && showLinkOptions) && !showIssueOptions && styles.shiftedPositionConnectLink,
        (showIssueOptions && showConnectOptions && showLinkOptions) && styles.shiftedPositionAll
      ]}
        onPress={() => setShowLinkOptions(!showLinkOptions)}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/paymentlinks.png")}
        />
        <Text style={[styles.issue, styles.homeTypo]}>Link</Text>
        <Image
          style={[styles.iconchevrondown, styles.iconchevrondownLayout]}
          contentFit="cover"
          source={require("../assets/iconchevrondown.png")}
        />
      </Pressable>
      {showLinkOptions && (
        <View style={[styles.optionsContainer3, (showIssueOptions || showConnectOptions) && styles.shiftedOptionsContainer3,
        (showIssueOptions && showConnectOptions && showLinkOptions) && styles.shiftedOptionsContainer4,
        (showIssueOptions && showLinkOptions) && !showConnectOptions && styles.shiftedOptionsContainer5,
        (showConnectOptions && showLinkOptions) && !showIssueOptions && styles.shiftedOptionsContainer6,]}>
          <Text style={[styles.optionItem, styles.homeTypo]}>Issue a Card</Text>
          <Text style={[styles.optionItem, styles.homeTypo]}>Manage Connections</Text>
        </View>
      )}
      <View style={[styles.active, styles.activePosition]}>
        <View style={[styles.innercontainer, styles.innercontainerPosition]}>
          <Image
            style={[styles.subscriptionIcon, styles.innercontainerPosition]}
            contentFit="cover"
            source={home}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountName: {
    left: 40,
    textAlign: "left",
    top: -82.5,
    FontFamily: FontFamily.semiBold11,
    fontSize: FontSize.semiBold11_size,
    color: Color.neutral500,
  },
  businessIcon: {
    top: -82.5,
    left: 16,
    position: "absolute",
},
iconLayout2: {
  height: 16,
  width: 16,
},
  iconLayout1: {
    height: 12,
    width: 12,
  },
  menuItemPosition: {
    paddingRight: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  homeTypo: {
    color: Color.neutral500,
    fontSize: FontSize.bodyL18SpRegular_size,
    textAlign: "left",
  },
  iconchevrondownLayout: {
    height: 12,
    width: 12,
  },
  activePosition: {
    left: 16,
    height: 19,
    position: "absolute",
  },
  innercontainerPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  home: {
    left: 30,
    textAlign: "left",
    FontFamily: FontFamily.semiBold11,
    color: Color.neutral500,
    fontWeight: "500",
    fontSize: FontSize.bodyL18SpRegular_size,
  },
  issue: {
    marginLeft: 12,
    textAlign: "left",
    FontFamily: FontFamily.semiBold11,
    color: Color.neutral500,
    fontWeight: "500",
    fontSize: FontSize.bodyL18SpRegular_size,
  },
  iconchevrondown: {
    marginLeft: 12,
  },
  iconchevrondown1: {
    marginLeft: 12,
  },
  menuItem: {
    top: 59,
  },
  pickerContainer: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    width: '100%',
    color: Color.neutral700,
  },
  subscriptionIcon: {
    top: 1,
    height: 18,
    width: 18,
  },
  automate: {
    top: "-5.26%",
    left: "24.45%",
    textAlign: "left",
    FontFamily: FontFamily.semiBold11,
    color: Color.neutral500,
    fontWeight: "500",
    fontSize: FontSize.bodyL18SpRegular_size,
    position: "absolute",
  },
  soon: {
    top: -5,
    left: 117,
    fontSize: FontSize.size_5xs,
    lineHeight: 16,
    FontFamily: FontFamily.textXsMedium,
    color: Color.primary500Main,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },

  menuItem1: {
    top: 113,
    width: 127,
    height: 19,
  },
  connect: {
    marginLeft: 13,
    textAlign: "left",
    FontFamily: FontFamily.semiBold11,
    color: Color.neutral500,
    fontWeight: "500",
    fontSize: FontSize.bodyL18SpRegular_size,
  },
  iconchevrondown1: {

    top: -95,
    left: 190,
  },
  menuItem2: {
    top: 167,
  },
  menuItem3: {
    top: 220,
  },
  innercontainer: {
    top: 0,
    width: 80,
    height: 19,
  },
  active: {
    top: 4,
    height: 19,
    width: 205,
  },
  menuitems: {
    top: 122,
    left: 9,
    height: 186,
    width: 205,
    position: "absolute",
  },
  text: {
    fontWeight: "500",
    FontFamily: FontFamily.textXsMedium,
    color: Color.neutral700,
  },
  optionsContainer: {
    marginTop: 10,
    marginLeft: 32,
    top: 55,
  },
  optionsContainer2: {
    marginTop: 10,
    marginLeft: 32,
    top: 150,
  },
  optionsContainer3: {
    marginTop: 10,
    marginLeft: 32,
    top: 200,
  },
  shiftedOptionsContainer2: {
    top: 120, // Adjust this value based on the height of the Issue options
  },
  shiftedOptionsContainer3: {
    top: 320, // Adjust this value based on the height of the Issue and Connect options
  },
  shiftedOptionsContainer4: {
    top: 150, // Adjust this value based on the height of the Issue and Connect options
  },
  shiftedOptionsContainer5: {
    top: 160, // Adjust this value based on the height of the Issue and Connect options
  },
  shiftedOptionsContainer6: {
    top: 180, // Adjust this value based on the height of the Issue and Connect options
  },
  optionItem: {
    fontSize: FontSize.bodyL18SpRegular_size,
    color: Color.neutral500,
    marginVertical: 5,
  },
  shiftedPosition: {
    top: 210, // Adjust this value based on the height of the options
  },
  shiftedPosition1: {
    top: 250, // Adjust this value based on the height of the options
  },
  shiftedPosition2: {
    top: 290, // Adjust this value based on the height of the options
  },
  shiftedPosition3: {
    top: 330, // Adjust this value based on the height of the options
  },
  shiftedPositionLink: {
    top: 220, // Adjust this value based on the height of the options
  },
  shiftedPosition4: {
    top: 410, // Adjust this value based on the height of the options
  },
  shiftedPositionIssueLink: {
    top: 290, // Adjust this value based on the height of the options
  },
  shiftedPositionConnectLink: {
    top: 330, // Adjust this value based on the height of the options
  },
  shiftedPositionAll: {
    top: 410, // Adjust this value based on the height of the options
  },
});

export default MenuItems;

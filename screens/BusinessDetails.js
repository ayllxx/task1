import * as React from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LabelInput from "../components/LabelInput";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const BusinessDetails = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.view}>
            <View style={styles.child} />
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("BusinessStructure")}
            >
                <Image
                    style={styles.outlineLayout}
                    contentFit="cover"
                    source={require("../assets/-fill--arrowleft.png")}
                />
            </Pressable>
            <Text style={[styles.accountVerification, styles.overviewClr]}>
                Account verification
            </Text>
            <View style={styles.badge}>

                <Text style={[styles.label, styles.businessTypo]}>In progress</Text>
            </View>
            <View style={styles.inner}>
                <View style={[styles.frameParent, styles.groupChildPosition1]}>
                    <View style={styles.frameGroup}>
                        <View style={styles.frameGroup}>
                            <View style={styles.frameGroup}>
                                <Text style={[styles.label1, styles.label1Typo]}>VAT</Text>
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}  // Style for email input
                                    placeholder="VAT Number"
                                    placeholderTextColor="#757d8a"
                                />

                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Industry</Text>
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}  // Style for email input
                                    placeholder="Please select your industry..."
                                    placeholderTextColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Organization website</Text>
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}  // Style for email input
                                    placeholder="www.example.com"
                                    placeholderTextColor="#757d8a"
                                />

                                <View style={[styles.continueParent, styles.labelInputsSpaceBlock, { width: 410 }, { height: 40 }]}>
                                    <Text style={[styles.continue, styles.label1Layout, { color: '#FFFFFF' }]}>Continue</Text>
                                    <Image
                                        style={[styles.fillArrowLeft1, styles.fillLayout]}
                                        resizeMode="cover"  // Changed from contentFit to resizeMode
                                        source={require("../assets/-fill--arrowleft1.png")}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
                <View style={[styles.groupChild, styles.groupChildLayout2]} />
                <View style={[styles.groupItem, styles.itemGroupLayout]} />
                <View style={[styles.groupInner, styles.itemGroupLayout]} />
                <View style={[styles.rectangleView, styles.itemGroupLayout]} />
                <View style={[styles.groupChild1, styles.itemGroupLayout]} />
                <View style={[styles.groupChild2, styles.itemGroupLayout]} />
                <Pressable
                    style={[styles.businessStructure, styles.overviewPosition]}
                    onPress={() => navigation.navigate("BusinessStructure")}
                >
                    <Text style={[styles.businessStructure, styles.label1Type]}>
                    Business structure
                </Text>
                </Pressable>
                <Pressable
                    style={[styles.bankDetails, styles.overviewPosition]}
                    onPress={() => navigation.navigate("BankDetails")}
                >
                    <Text style={[styles.bankDetails1, styles.label1Typo]}>
                        Bank details
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.supportingDocuments, styles.overviewPosition]}
                    onPress={() => navigation.navigate("SupportingDocuments")}
                >
                    <Text style={[styles.bankDetails1, styles.label1Typo]}>
                        Supporting documents
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.stepAuthentication, styles.overviewPosition]}
                    onPress={() => {
                        navigation.navigate("Authentication");
                    }}>
                    <Text style={[styles.bankDetails1, styles.businessFlexBox]}>
                        2 step authentication
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.bankDetails1, styles.overviewPosition]}
                    onPress={() => {
                        navigation.navigate("");
                    }}>
                    <Text style={[styles.overview, styles.businessFlexBox]}>
                        Overview
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessRepresentative, styles.businessPosition]}
                    onPress={() => navigation.navigate("BusinessRepresentative")}
                >
                    <Text style={[styles.businessRepresentative1, styles.businessTypo]}>
                        Business representative
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDetails, styles.businessPosition]}
                    onPress={() => navigation.navigate("BusinessDetails")}
                >
                    <Text style={[styles.businessRepresentative2, styles.businessTypo]}>
                        Business details
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessOwners, styles.businessPosition]}
                    onPress={() => navigation.navigate("BusinessOwners")}
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business owners
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessExecutives, styles.businessPosition]}
                    onPress={() => navigation.navigate("BusinessExecutives")}
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business executives
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDirectors, styles.businessPosition]}
                    onPress={() => navigation.navigate("BusinessDirectors")}
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business directors
                    </Text>
                </Pressable>
                
                <Image
                    style={[styles.groupChild3, styles.groupChildLayout]}
                    contentFit="cover"
                    source={require("../assets/group-37136.png")}
                />
                <Image
                    style={[styles.groupChild4, styles.groupChildLayout]}
                    contentFit="cover"
                    source={require("../assets/group-37137.png")}
                />
                <Image
                    style={[styles.groupChild5, styles.groupChildLayout]}
                    contentFit="cover"
                    source={require("../assets/group-37138.png")}
                />
                <Image
                    style={[styles.groupChild6, styles.groupChildLayout]}
                    contentFit="cover"
                    source={require("../assets/group-37139.png")}
                />
            </View>
            <View style={[styles.indicator, styles.groupChildLayout]}>
                <Image
                    style={styles.dotIcon}
                    contentFit="cover"
                    source={require("../assets/dot.png")}
                />
                <Text style={[styles.number, styles.numberPosition]}>00</Text>
                <Image
                    style={styles.mediaIcon}
                    contentFit="cover"
                    source={require("../assets/media--icon1.png")}
                />
            </View>
            <View style={[styles.item, styles.itemGroupLayout]} />
        </View>
    );
};

const styles = StyleSheet.create({
    overviewClr: {
        color: Color.colorBlack,
        fontSize: FontSize.paragraphMediumRegular_size,
    },
    fillLayout: {
        width: 16,
        height: 16,
    },
    businessTypo: {
        fontFamily: FontFamily.paragraphMediumRegular,
        lineHeight: 24,
    },
    groupChildPosition1: {
        top: 0,
        left: 0,
    },
    label1Typo: {
        lineHeight: 24,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
    },
    inputLayout: {
        marginTop: 16,
        height: 34,
        borderWidth: 1,
        borderColor: Color.colorGainsboro_100,
        borderRadius: Border.br_5xs,
        width: 410,
        flexDirection: "row",
        borderStyle: "solid",
        backgroundColor: Color.shadesWhite,
    },
    outlineLayout: {
        height: 24,
        width: 24,
    },
    dropdownFlexBox: {
        alignItems: "center",
        flexDirection: "row",
    },
    labelTypo: {
        color: Color.greyGrey5,
        fontFamily: FontFamily.paragraphMediumRegular,
        lineHeight: 24,
        textAlign: "left",
        fontSize: FontSize.paragraphMediumRegular_size,

    },
    numberTypo: {
        color: Color.shadesWhite,
        fontFamily: FontFamily.paragraphMediumRegular,
        lineHeight: 24,
        fontSize: FontSize.paragraphMediumRegular_size,
    },
    numberPosition: {
        left: "50%",
        position: "absolute",
    },
    groupChildLayout2: {
        height: 438,
        position: "absolute",
    },
    itemGroupLayout: {
        transform: [
            {
                rotate: "90deg",
            },
        ],
        height: 10,
        width: 10,
        borderRadius: Border.br_21xl,
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
        paddingHorizontal: Padding.p_41xl,
        paddingVertical: Padding.p_xs,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        left: 40,
        position: "absolute",
    },
    accountVerification: {
        top: 42,
        left: 200,
        lineHeight: 40,
        textAlign: "left",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        color: Color.colorBlack,
        position: "absolute",
    },
    outlineMinus: {
        display: "none",
        height: 16,
    },
    label: {
        fontSize: FontSize.size_xs,
        color: Color.colorMediumslateblue_100,
        marginLeft: 4,
        textAlign: "center",
    },
    fillCloseCircle: {
        marginLeft: 4,
        display: "none",
        height: 16,
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
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    frameGroup: {
        width: 410,
    },
    label1: {
        fontSize: FontSize.bodyL18SpRegular_size,
        color: Color.dark,
        alignSelf: "stretch",
        textAlign: "left",
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
    labelInputs: {
        marginTop: 32,
        width: 410,
    },
    irelandIeIcon: {
        borderRadius: 2,
        height: 16,
        width: 24,
        overflow: "hidden",
    },
    us: {
        color: Color.colorBlack,
        textAlign: "left",
        fontSize: FontSize.paragraphMediumRegular_size,
        fontFamily: FontFamily.paragraphMediumRegular,
    },
    chevronDownIcon: {
        width: 20,
        height: 20,
        overflow: "hidden",
    },
    dropdown: {
        justifyContent: "space-between",
        paddingLeft: Padding.p_base,
        paddingTop: Padding.p_xs,
        paddingRight: Padding.p_xs,
        paddingBottom: Padding.p_xs,
        alignSelf: "stretch",
        overflow: "hidden",
    },

    helpIcon: {
        marginLeft: 8,
        display: "none",
        height: 16,
    },
    textInput: {
        paddingTop: Padding.p_9xs,
        paddingRight: Padding.p_base,
        paddingBottom: Padding.p_8xs,
        flex: 1,
    },
    input4: {
        shadowColor: "rgba(16, 24, 40, 0.05)",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        overflow: "hidden",
    },
    labelInputsParent: {
        marginTop: 32,
    },
    continue: {
        color: Color.backgroundSurface,
        fontFamily: FontFamily.paragraphMediumRegular,
        fontSize: FontSize.paragraphMediumRegular_size,
    },
    fillArrowLeft1: {
        marginLeft: 5,
        height: 16,
    },
    continueParent: {
        borderRadius: Border.br_7xs,
        paddingHorizontal: Padding.p_171xl,
        paddingVertical: Padding.p_8xs,
        backgroundColor: Color.colorMediumblue,
        marginTop: 32,
        width: 410,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    frameParent: {
        borderRadius: 5,
        width: 410,
        position: "absolute",
    },
    inner: {
        left: 434,
        height: 608,
        width: 410,
        top: 161,
        position: "absolute",
    },
    placeholderIcons: {
        flex: 1,
    },
    icons: {
        marginLeft: 8,
    },
    dropdown1: {
        marginLeft: -113,
        top: 201,
        width: 201,
        paddingHorizontal: Padding.p_base,
        paddingVertical: Padding.p_xs,
        alignItems: "center",
        height: 34,
        borderWidth: 1,
        borderColor: Color.colorGainsboro_100,
        left: "50%",
        borderRadius: Border.br_5xs,
        flexDirection: "row",
        borderStyle: "solid",
        backgroundColor: Color.shadesWhite,
    },
    groupChild: {
        borderRadius: Border.br_90xl,
        backgroundColor: Color.colorGainsboro_300,
        width: 33,
        top: 0,
        left: 0,
    },
    groupItem: {
        top: 47,
        backgroundColor: Color.colorMediumspringgreen, //prevoius color, move down next time
        left: 13,
        height: 10,
        width: 10,
        borderRadius: Border.br_21xl,
    },
    groupInner: {
        top: 77,
        backgroundColor: Color.colorSilver,
        left: 13,
        height: 10,
        width: 10,
        borderRadius: Border.br_21xl,
    },
    rectangleView: {
        top: 107,
        backgroundColor: Color.colorSilver,
        left: 13,
        height: 10,
        width: 10,
        borderRadius: Border.br_21xl,
    },
    groupChild1: {
        top: 137,
        backgroundColor: Color.colorSilver,
        left: 13,
        height: 10,
        width: 10,
        borderRadius: Border.br_21xl,
    },
    groupChild2: {
        top: 167,
        backgroundColor: Color.colorSilver,
        left: 13,
        height: 10,
        width: 10,
        borderRadius: Border.br_21xl,
    },
    businessStructure: {
        top: 2,
        textAlign: "center",
        lineHeight: 24,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        color: Color.colorBlack,
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
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        color: Color.colorBlack,
        fontSize: FontSize.paragraphMediumRegular_size,
    },
    overview: {
        top: 409,
        textAlign: "center",
        lineHeight: 24,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        color: Color.colorBlack,
        fontSize: FontSize.paragraphMediumRegular_size,
    },
    businessRepresentative1: {
        color: Color.colorDimgray_100,
        textAlign: "center",
        fontSize: FontSize.paragraphMediumRegular_size,
        fontFamily: FontFamily.paragraphMediumRegular,
    },
    businessRepresentative2: {
        color: Color.colorsBlue100Opacity,
        textAlign: "center",
        fontSize: FontSize.paragraphMediumRegular_size,
        fontFamily: FontFamily.paragraphMediumRegular,
    },
    businessRepresentative: {
        top: 40,
    },
    businessDetails1: {
        color: Color.colorDimgray_100,
        textAlign: "center",
        fontSize: FontSize.paragraphMediumRegular_size,
        fontFamily: FontFamily.paragraphMediumRegular,
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
        color: Color.colorBlack,
    },
    groupIcon: {
        top: 4,
        left: 4,
    },
    groupChild3: {
        top: 228,
        left: 4,
    },
    groupChild4: {
        top: 288,
        left: 4,
    },
    groupChild5: {
        top: 348,
        left: 4,
    },
    groupChild6: {
        top: 408,
        left: 4,
    },
    rectangleParent: {
        width: 248,
        top: 161,
        left: 101,
        height: 438,
    },
    dotIcon: {
        top: 12,
        left: 12,
        width: 12,
        height: 12,
        display: "none",
        position: "absolute",
    },
    number: {
        marginTop: -12,
        marginLeft: -10.5,
        top: "50%",
        color: Color.shadesWhite,
        fontFamily: FontFamily.paragraphMediumRegular,
        lineHeight: 24,
        fontSize: FontSize.paragraphMediumRegular_size,
        textAlign: "center",
        display: "none",
    },
    mediaIcon: {
        width: 17,
        height: 17,
        left: 4,
        top: 5,
        position: "absolute",
        overflow: "hidden",
    },
    indicator: {
        top: 165,
        left: 105,
        borderRadius: Border.br_5xl,
        backgroundColor: Color.colorMediumspringgreen,
    },
    businessFlexBox: {
        textAlign: "center",
        lineHeight: 24,
      },
    item: {
        top: 238,
        left: 114,
        height: 10,
        width: 10,
        borderRadius: Border.br_21xl,
        backgroundColor: Color.colorsBlue100Opacity,
    },
    view: {
        width: "100%",
        height: 982,
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
});

export default BusinessDetails;
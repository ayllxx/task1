import * as React from "react";
import { Image, View, Pressable, Text, TextInput } from "react-native";
import styles from "../styles/BusinessRepresentativeStyles";
import { useNavigation } from "@react-navigation/native";

import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const BusinessRepresentative = () => {
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
                                <Text style={[styles.label1, styles.label1Typo]}>Name</Text>
                                <View style={{ flexDirection: 'row' }}>  {/* This line keeps the name inputs side by side */}
                                    <TextInput
                                        style={[styles.input, styles.labelTypo, { flex: 1, marginRight: 8, width:205 }]}  // Adjust style here
                                        placeholder="First Name"
                                        placeholderTextColor="#757d8a"
                                    />
                                    <TextInput
                                        style={[styles.input, styles.labelTypo, { flex: 1 , width:205}]}  // Adjust style here
                                        placeholder="Last Name"
                                        placeholderTextColor="#757d8a"
                                    />
                                </View>
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Email</Text>
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}  // Style for email input
                                    placeholder="Email"
                                    placeholderTextColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Address</Text>
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}  // Style for email input
                                    placeholder="Address Line 1"
                                    placeholderTextColor="#757d8a"
                                />
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}  // Style for email input
                                    placeholder="Address Line 2"
                                    placeholderTextColor="#757d8a"
                                />
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}  // Style for email input
                                    placeholder="City"
                                    placeholderTextColor="#757d8a"
                                />
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}  // Style for email input
                                    placeholder="Zip"
                                    placeholderTextColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Phone</Text>
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}  // Style for email input
                                    placeholder="Phone"
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
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
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


export default BusinessRepresentative;


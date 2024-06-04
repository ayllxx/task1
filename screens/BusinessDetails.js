import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, TextInput, Alert } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/BusinessDetailsStyles";
import { Picker } from "@react-native-picker/picker";
import { firestore } from '../firebase'; // Adjust the import path as needed
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const BusinessDetails = () => {
    const navigation = useNavigation();
    const [selectedIndustry, setSelectedIndustry] = useState(".");
    const [vatNumber, setVatNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validate = () => {
        const newErrors = {};
        if (!vatNumber) newErrors.vatNumber = "*VAT Number is required*";
        if (selectedIndustry === ".") newErrors.industry = "*Industry is required*";
        if (!website) newErrors.website = "*Organization website is required*";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validate()) {
            try {
                // Save data to Firestore
                await addDoc(collection(firestore, 'businessDetails'), {
                    vatNumber,
                    selectedIndustry,
                    website,
                    timestamp: serverTimestamp()
                });
                setSubmissionStatus("Data submitted successfully!");
                setErrorMessage("");
                navigation.navigate("Business Owners");
            } catch (error) {
                console.error("Error adding document: ", error);
                setErrorMessage("Error submitting data. Please try again.");
            }
        } else {
            setErrorMessage("Please fill all required fields");
        }
    };

    const clearAllErrors = () => {
        setErrors({});
        setErrorMessage("");
        setSubmissionStatus("");
    };

    return (
        <View style={styles.view}>
            <View style={styles.child} />
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Business Representative")}
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
                                {errors.vatNumber && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.vatNumber}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="VAT Number"
                                    placeholderTextColor="#757d8a"
                                    value={vatNumber}
                                    onChangeText={(text) => { setVatNumber(text); clearAllErrors(); }}
                                />

                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Industry</Text>
                                {errors.industry && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.industry}</Text>}
                                <Picker
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    selectedValue={selectedIndustry}
                                    onValueChange={(itemValue) => {
                                        setSelectedIndustry(itemValue);
                                        clearAllErrors();
                                    }}
                                >
                                    <Picker.Item label="Please select your industry..." value="." />
                                    <Picker.Item label="Industry 1" value="Industry 1" />
                                    <Picker.Item label="Industry 2" value="Industry 2" />
                                    <Picker.Item label="Industry 3" value="Industry 3" />
                                </Picker>

                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Organization website</Text>
                                {errors.website && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.website}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="www.example.com"
                                    placeholderTextColor="#757d8a"
                                    value={website}
                                    onChangeText={(text) => { setWebsite(text); clearAllErrors(); }}
                                />

                                {submissionStatus ? (
                                    <Text style={successTextStyles.successText}>{submissionStatus}</Text>
                                ) : errorMessage ? (
                                    <Text style={errorTextStyles.errorText}>{errorMessage}</Text>
                                ) : null}

                                <Pressable
                                    style={[styles.continueParent, styles.labelInputsSpaceBlock, { width: 410, height: 34 }]}
                                    onPress={handleSubmit}
                                >
                                    <Text style={[styles.continue, styles.label1Layout, { color: '#FFFFFF' }]}>Continue</Text>
                                    <Image
                                        style={[styles.fillArrowLeft1, styles.fillLayout]}
                                        resizeMode="cover"
                                        source={require("../assets/-fill--arrowleft1.png")}
                                    />
                                </Pressable>
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
                    onPress={() => navigation.navigate("Business Structure")}
                >
                    <Text style={[styles.businessStructure, styles.label1Type]}>
                        Business structure
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.bankDetails, styles.overviewPosition]}
                    onPress={() => navigation.navigate("Bank Details")}
                >
                    <Text style={[styles.bankDetails1, styles.label1Typo]}>
                        Bank details
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.supportingDocuments, styles.overviewPosition]}
                    onPress={() => navigation.navigate("Supporting Documents")}
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
                    onPress={() => navigation.navigate("Business Representative")}
                >
                    <Text style={[styles.businessRepresentative1, styles.businessTypo]}>
                        Business representative
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDetails, styles.businessPosition]}
                    onPress={() => navigation.navigate("Business Details")}
                >
                    <Text style={[styles.businessRepresentative2, styles.businessTypo]}>
                        Business details
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessOwners, styles.businessPosition]}
                    onPress={() => navigation.navigate("Business Owners")}
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business owners
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessExecutives, styles.businessPosition]}
                    onPress={() => navigation.navigate("Business Executives")}
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business executives
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDirectors, styles.businessPosition]}
                    onPress={() => navigation.navigate("Business Directors")}
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

const errorTextStyles = StyleSheet.create({
    errorText: {
        color: 'red',
        fontSize: 12,
    }
});

const successTextStyles = StyleSheet.create({
    successText: {
        color: 'green',
        fontSize: 12,
    }
});

export default BusinessDetails;

import React, { useState } from "react";
import { View, Text, Pressable, TextInput, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { firestore } from '../firebase'; // Adjust the import path as needed
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import styles from '../styles/BusinessRepresentativeStyles'; // Adjust import path as needed

const BusinessRepresentative = () => {
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState("+353");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validate = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = "*First Name is required*";
        if (!lastName) newErrors.lastName = "*Last Name is required*";
        if (!email) newErrors.email = "*Email is required*";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "*Email is invalid*";
        if (!addressLine1) newErrors.addressLine1 = "*Address Line 1 is required*";
        if (!city) newErrors.city = "*City is required*";
        if (!zip) newErrors.zip = "*Zip is required*";
        if (!phone) newErrors.phone = "*Phone number is required*";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validate()) {
            try {
                // Save data to Firestore
                await addDoc(collection(firestore, 'businessRepresentatives'), {
                    firstName,
                    lastName,
                    email,
                    addressLine1,
                    addressLine2,
                    city,
                    zip,
                    phone,
                    selectedValue,
                    timestamp: serverTimestamp()
                });
                setSubmissionStatus("Data submitted successfully!");
                setErrorMessage("");
                navigation.navigate("Business Details");
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
                onPress={() => navigation.navigate("Business Structure")}
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
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, width: 205 }}>
                                        {errors.firstName && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12, }}>{errors.firstName}</Text>}
                                        <TextInput
                                            style={[styles.input, styles.labelTypo, { marginRight: 10, width: 200 }]}
                                            placeholder="First Name"
                                            placeholderTextColor="#757d8a"
                                            value={firstName}
                                            onChangeText={(text) => { setFirstName(text); clearAllErrors(); }}
                                        />
                                    </View>
                                    <View >
                                        {errors.lastName && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12, }}>{errors.lastName}</Text>}
                                        <TextInput
                                            style={[styles.input, styles.labelTypo, { flex: 1, width: 200 }]}
                                            placeholder="Last Name"
                                            placeholderTextColor="#757d8a"
                                            value={lastName}
                                            onChangeText={(text) => { setLastName(text); clearAllErrors(); }}
                                        />
                                    </View>
                                </View>
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Email</Text>
                                {errors.email && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12, }}>{errors.email}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Email"
                                    placeholderTextColor="#757d8a"
                                    value={email}
                                    onChangeText={(text) => { setEmail(text); clearAllErrors(); }}
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Address</Text>
                                {errors.addressLine1 && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12, }}>{errors.addressLine1}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Address Line 1"
                                    placeholderTextColor="#757d8a"
                                    value={addressLine1}
                                    onChangeText={(text) => { setAddressLine1(text); clearAllErrors(); }}
                                />
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Address Line 2"
                                    placeholderTextColor="#757d8a"
                                    value={addressLine2}
                                    onChangeText={(text) => { setAddressLine2(text); clearAllErrors(); }}
                                />
                                {errors.city && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12, }}>{errors.city}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="City"
                                    placeholderTextColor="#757d8a"
                                    value={city}
                                    onChangeText={(text) => { setCity(text); clearAllErrors(); }}
                                />
                                {errors.zip && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12, }}>{errors.zip}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Zip"
                                    placeholderTextColor="#757d8a"
                                    value={zip}
                                    onChangeText={(text) => { setZip(text); clearAllErrors(); }}
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Phone</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Picker
                                        style={[styles.input, styles.labelTypo, { width: 121 }]}
                                        selectedValue={selectedValue}
                                        onValueChange={(itemValue) => { setSelectedValue(itemValue); clearAllErrors(); }}
                                    >
                                        <Picker.Item label="+353" value="+353" />
                                        <Picker.Item label="+354" value="+354" />
                                        <Picker.Item label="+355" value="+355" />
                                    </Picker>
                                    <View style={{ width: 249 }}>
                                        {errors.phone && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12, }}>{errors.phone}</Text>}
                                        <TextInput
                                            style={[styles.input, styles.labelTypo, { width: 289 }]}
                                            placeholder="085 1234567"
                                            placeholderTextColor="#757d8a"
                                            value={phone}
                                            onChangeText={(text) => { setPhone(text); clearAllErrors(); }}
                                        />
                                    </View>
                                </View>
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
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
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

export default BusinessRepresentative;

import React, { useState } from "react";
import { View, Text, Pressable, TextInput, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { firestore } from '../firebase'; // Adjust the import path as needed
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import styles from '../styles/BusinessRepresentativeStyles'; // Adjust import path as needed

const BusinessRepresentative = () => {
    const navigation = useNavigation(); // Initialize navigation hook
    const [areaCode, setAreaCode] = useState("+353"); // State to manage the selected country code
    const [firstName, setFirstName] = useState(""); // State to manage first name input
    const [lastName, setLastName] = useState(""); // State to manage last name input
    const [email, setEmail] = useState(""); // State to manage email input
    const [addressLine1, setAddressLine1] = useState(""); // State to manage address line 1 input
    const [addressLine2, setAddressLine2] = useState(""); // State to manage address line 2 input
    const [city, setCity] = useState(""); // State to manage city input
    const [zip, setZip] = useState(""); // State to manage zip code input
    const [phone, setPhone] = useState(""); // State to manage phone number input
    const [errors, setErrors] = useState({}); // State to manage form errors
    const [submissionStatus, setSubmissionStatus] = useState(""); // State to manage submission status
    const [errorMessage, setErrorMessage] = useState(""); // State to manage error messages

    // Function to validate form inputs
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

    // Function to handle form submission
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
                    phone: `${areaCode} ${phone}`, // Combine area code and phone number
                    areaCode, // Include areaCode in the data being saved
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

    // Function to clear all errors
    const clearAllErrors = () => {
        setErrors({});
        setErrorMessage("");
        setSubmissionStatus("");
    };

    return (
        <View style={styles.view}>
            {/* Background child element */}
            <View style={styles.child} />

            {/* Back button */}
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Business Structure")} // Navigate to Business Structure screen
            >
                <Image
                    style={styles.outlineLayout}
                    contentFit="cover"
                    source={require("../assets/-fill--arrowleft.png")} // Back button icon
                />
            </Pressable>

            {/* Account verification text */}
            <Text style={[styles.accountVerification, styles.overviewClr]}>
                Account verification
            </Text>

            {/* Badge indicating progress */}
            <View style={styles.badge}>
                <Text style={[styles.label, styles.businessTypo]}>In progress</Text>
            </View>

            <View style={styles.inner}>
                <View style={[styles.frameParent, styles.groupChildPosition1]}>
                    <View style={styles.frameGroup}>
                        <View style={styles.frameGroup}>
                            <View style={styles.frameGroup}>
                                {/* Name input fields */}
                                <Text style={[styles.label1, styles.label1Typo]}>Name</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, width: 205 }}>
                                        {errors.firstName && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.firstName}</Text>}
                                        <TextInput
                                            style={[styles.input, styles.labelTypo, { marginRight: 10, width: 200 }]}
                                            placeholder="First Name"
                                            placeholderTextColor="#757d8a"
                                            value={firstName}
                                            onChangeText={(text) => { setFirstName(text); clearAllErrors(); }}
                                        />
                                    </View>
                                    <View>
                                        {errors.lastName && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.lastName}</Text>}
                                        <TextInput
                                            style={[styles.input, styles.labelTypo, { flex: 1, width: 200 }]}
                                            placeholder="Last Name"
                                            placeholderTextColor="#757d8a"
                                            value={lastName}
                                            onChangeText={(text) => { setLastName(text); clearAllErrors(); }}
                                        />
                                    </View>
                                </View>

                                {/* Email input */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Email</Text>
                                {errors.email && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.email}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Email"
                                    placeholderTextColor="#757d8a"
                                    value={email}
                                    onChangeText={(text) => { setEmail(text); clearAllErrors(); }}
                                />

                                {/* Address input fields */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Address</Text>
                                {errors.addressLine1 && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.addressLine1}</Text>}
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
                                {errors.city && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.city}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="City"
                                    placeholderTextColor="#757d8a"
                                    value={city}
                                    onChangeText={(text) => { setCity(text); clearAllErrors(); }}
                                />
                                {errors.zip && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.zip}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Zip"
                                    placeholderTextColor="#757d8a"
                                    value={zip}
                                    onChangeText={(text) => { setZip(text); clearAllErrors(); }}
                                />

                                {/* Phone input fields */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Phone</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Picker
                                        style={[styles.input, styles.labelTypo, { width: 121 }]}
                                        selectedValue={areaCode}
                                        onValueChange={(itemValue) => { setAreaCode(itemValue); clearAllErrors(); }}
                                    >
                                        <Picker.Item label="+353" value="+353" />
                                        <Picker.Item label="+354" value="+354" />
                                        <Picker.Item label="+355" value="+355" />
                                    </Picker>
                                    <View style={{ width: 249 }}>
                                        {errors.phone && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.phone}</Text>}
                                        <TextInput
                                            style={[styles.input, styles.labelTypo, { width: 289 }]}
                                            placeholder="085 1234567"
                                            placeholderTextColor="#757d8a"
                                            value={phone}
                                            onChangeText={(text) => { setPhone(text); clearAllErrors(); }}
                                        />
                                    </View>
                                </View>

                                {/* Continue button */}
                                <Pressable
                                    style={[styles.continueParent, styles.labelInputsSpaceBlock, { width: 410, height: 34 }]}
                                    onPress={handleSubmit}
                                >
                                    <Text style={[styles.continue, styles.label1Layout, { color: '#FFFFFF' }]}>Continue</Text>
                                    <Image
                                        style={[styles.fillArrowLeft1, styles.fillLayout]}
                                        resizeMode="cover"
                                        source={require("../assets/-fill--arrowleft1.png")} // Continue button icon
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* Navigation menu at the side */}
            <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
                <View style={[styles.groupChild, styles.groupChildLayout2]} />
                <View style={[styles.groupItem, styles.itemGroupLayout]} />
                <View style={[styles.groupInner, styles.itemGroupLayout]} />
                <View style={[styles.rectangleView, styles.itemGroupLayout]} />
                <View style={[styles.groupChild1, styles.itemGroupLayout]} />
                <View style={[styles.groupChild2, styles.itemGroupLayout]} />

                {/* Navigation buttons */}
                <Pressable
                    style={[styles.businessStructure, styles.overviewPosition]}
                    onPress={() => { navigation.navigate("Business Structure");
                    }} // Navigate to Business Structure screen
                >
                    <Text style={[styles.businessStructure, styles.label1Type]}>
                        Business structure
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.bankDetails, styles.overviewPosition]}
                    onPress={() => {
                        if (validate()) {
                            navigation.navigate("");
                        } else {
                            setShowErrors(true);
                        }
                    }} // Navigate to Bank Details screen
                >
                    <Text style={[styles.bankDetails1, styles.label1Typo]}>
                        Bank details
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.supportingDocuments, styles.overviewPosition]}
                    onPress={() => {
                        if (validate()) {
                            navigation.navigate("");
                        } else {
                            setShowErrors(true);
                        }
                    }} // Navigate to Supporting Documents screen
                >
                    <Text style={[styles.bankDetails1, styles.label1Typo]}>
                        Supporting documents
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.stepAuthentication, styles.overviewPosition]}
                    onPress={() => {
                        if (validate()) {
                            navigation.navigate("");
                        } else {
                            setShowErrors(true);
                        }
                    }}
                >
                    <Text style={[styles.bankDetails1, styles.businessFlexBox]}>
                        2 step authentication
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.bankDetails1, styles.overviewPosition]}
                    onPress={() => {
                        if (validate()) {
                            navigation.navigate("");
                        } else {
                            setShowErrors(true);
                        }
                    }}
                >
                    <Text style={[styles.overview, styles.businessFlexBox]}>
                        Overview
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessRepresentative, styles.businessPosition]}
                    onPress={() => {
                        navigation.navigate("Business Representative");
                    }} // Navigate to Business Representative screen
                >
                    <Text style={[styles.businessRepresentative1, styles.businessTypo]}>
                        Business representative
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDetails, styles.businessPosition]}
                    onPress={() => {
                        if (validate()) {
                            navigation.navigate("Business Details");
                        } else {
                            setShowErrors(true);
                        }
                    }} // Navigate to Business Details screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business details
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessOwners, styles.businessPosition]}
                    onPress={() => {
                        if (validate()) {
                            navigation.navigate("");
                        } else {
                            setShowErrors(true);
                        }
                    }} // Navigate to Business Owners screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business owners
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessExecutives, styles.businessPosition]}
                    onPress={() => {
                        if (validate()) {
                            navigation.navigate("");
                        } else {
                            setShowErrors(true);
                        }
                    }} // Navigate to Business Executives screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business executives
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDirectors, styles.businessPosition]}
                    onPress={() => {
                        if (validate()) {
                            navigation.navigate("");
                        } else {
                            setShowErrors(true);
                        }
                    }} // Navigate to Business Directors screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business directors
                    </Text>
                </Pressable>

                {/* Decorative images */}
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

            {/* Indicator elements */}
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

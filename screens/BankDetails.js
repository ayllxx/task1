import * as React from "react";
import { useState } from "react";
import { Image, View, Pressable, Text, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import styles from "../styles/BankDetailsStyles";

const BankDetails = () => {
    const navigation = useNavigation();
    const [selectedCurrency, setSelectedCurrency] = useState(".");
    const [selectedCountry, setSelectedCountry] = useState(".");
    const [iban, setIban] = useState("");
    const [confirmIban, setConfirmIban] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (selectedCurrency === ".") newErrors.currency = "Currency is required";
        if (selectedCountry === ".") newErrors.country = "Country of Bank Account is required";
        if (!iban) newErrors.iban = "IBAN is required";
        if (!confirmIban) newErrors.confirmIban = "Confirm IBAN is required";
        if (iban !== confirmIban) newErrors.confirmIban = "IBANs do not match";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleContinue = () => {
        if (validate()) {
            navigation.navigate("SupportingDocuments");
        } else {
            Alert.alert("Validation Error", "Please fill all required fields correctly");
        }
    };

    const clearErrors = () => {
        setErrors({});
    };

    return (
        <View style={styles.view}>
            <View style={styles.child} />
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("BusinessDirectors")}
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
                                <Text style={[styles.label1, styles.label1Typo]}>Currency</Text>
                                {errors.currency && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.currency}</Text>}
                                <Picker
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    selectedValue={selectedCurrency}
                                    onValueChange={(itemValue) => {
                                        setSelectedCurrency(itemValue);
                                        clearErrors();
                                    }}
                                >
                                    <Picker.Item label="Select a currency..." value="." />
                                    <Picker.Item label="USD" value="usd" />
                                    <Picker.Item label="EUR" value="eur" />
                                    <Picker.Item label="GBP" value="gbp" />
                                </Picker>

                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Country of Bank Account</Text>
                                {errors.country && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.country}</Text>}
                                <Picker
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    selectedValue={selectedCountry}
                                    onValueChange={(itemValue) => {
                                        setSelectedCountry(itemValue);
                                        clearErrors();
                                    }}
                                >
                                    <Picker.Item label="Country" value="." />
                                    <Picker.Item label="Ireland" value="ireland" />
                                    <Picker.Item label="UK" value="uk" />
                                    <Picker.Item label="US" value="us" />
                                </Picker>

                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>IBAN</Text>
                                {errors.iban && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.iban}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Enter your IBAN"
                                    placeholderTextColor="#757d8a"
                                    value={iban}
                                    onChangeText={setIban}
                                    onFocus={clearErrors}
                                />
                                
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Confirm IBAN</Text>
                                {errors.confirmIban && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12 }}>{errors.confirmIban}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Confirm IBAN"
                                    placeholderTextColor="#757d8a"
                                    value={confirmIban}
                                    onChangeText={setConfirmIban}
                                    onFocus={clearErrors}
                                />

                                <Pressable
                                    style={[styles.continueParent, styles.labelInputsSpaceBlock, { width: 410 }, { height: 34 }]}
                                    onPress={handleContinue}
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
                    <Text style={[styles.bankDetails2, styles.label1Typo]}>
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
                    source={require("../assets/group-371361.png")}
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
                <View style={[styles.indicator1, styles.indicatorLayout]}>
                    <Image
                        style={styles.dotIcon}
                        contentFit="cover"
                        source={require("../assets/dot.png")}
                    />
                    <Text style={[styles.number, styles.submitTypo]}>00</Text>
                    <Image
                        style={styles.mediaIcon}
                        contentFit="cover"
                        source={require("../assets/media--icon1.png")}
                    />
                </View>
            </View>
            <View style={[styles.item, styles.itemGroupLayout]} />
        </View>
    );
};

export default BankDetails;

import * as React from "react";
import { Image, View, Pressable, Text, TextInput, Alert } from "react-native";
import styles from "../styles/BusinessRepresentativeStyles";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

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

    const handleContinue = () => {
        if (validate()) {
            navigation.navigate("BusinessDetails");
        } else {
            Alert.alert("Validation Error", "Please fill all required fields");
        }
    };
    const clearAllErrors = () => {
        setErrors({});
    };

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
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, width: 205 }}>
                                        {errors.firstName && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1,fontSize: 12, }}>{errors.firstName}</Text>}
                                        <TextInput
                                            style={[styles.input, styles.labelTypo, { marginRight: 10, width: 200 }]}
                                            placeholder="First Name"
                                            placeholderTextColor="#757d8a"
                                            value={firstName}
                                            onChangeText={setFirstName}
                                            onFocus={() => clearAllErrors()}
                                        />
                                    </View>
                                    <View >
                                    {errors.lastName && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1,fontSize: 12, }}>{errors.lastName}</Text>}
                                        <TextInput
                                            style={[styles.input, styles.labelTypo, { flex: 1, width: 200 }]}
                                            placeholder="Last Name"
                                            placeholderTextColor="#757d8a"
                                            value={lastName}
                                            onChangeText={setLastName}
                                            onFocus={() => clearAllErrors()}
                                        />
                                    </View>
                                </View>
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Email</Text>
                                {errors.email && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1,fontSize: 12, }}>{errors.email}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Email"
                                    placeholderTextColor="#757d8a"
                                    value={email}
                                    onChangeText={setEmail}
                                    onFocus={() => clearAllErrors()}
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Address</Text>
                                {errors.addressLine1 && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1, fontSize: 12, }}>{errors.addressLine1}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Address Line 1"
                                    placeholderTextColor="#757d8a"
                                    value={addressLine1}
                                    onChangeText={setAddressLine1}
                                    onFocus={() => clearAllErrors()}
                                />
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Address Line 2"
                                    placeholderTextColor="#757d8a"
                                    value={addressLine2}
                                    onFocus={() => clearAllErrors()}
                                />
                                {errors.city && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1,fontSize: 12, }}>{errors.city}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="City"
                                    placeholderTextColor="#757d8a"
                                    value={city}
                                    onChangeText={setCity}
                                    onFocus={() => clearAllErrors()}
                                />
                                {errors.zip && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1,fontSize: 12, }}>{errors.zip}</Text>}
                                <TextInput
                                    style={[styles.input, styles.labelTypo, { width: 410 }]}
                                    placeholder="Zip"
                                    placeholderTextColor="#757d8a"
                                    value={zip}
                                    onChangeText={setZip}
                                    onFocus={() => clearAllErrors()}
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Phone</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Picker
                                        style={[styles.input, styles.labelTypo, { width: 121 }]}
                                        selectedValue={selectedValue}
                                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                    >
                                        <Picker.Item label="+353" value="+353" />
                                        <Picker.Item label="+354" value="+354" />
                                        <Picker.Item label="+355" value="+355" />
                                    </Picker>
                                    <View style={{ width: 249 }}>
                                    {errors.phone && <Text style={{ color: 'red', marginBottom: -17, marginTop: 1,fontSize: 12, }}>{errors.phone}</Text>}
                                        <TextInput
                                            style={[styles.input, styles.labelTypo, { width: 289 }]}
                                            placeholder="085 1234567"
                                            placeholderTextColor="#757d8a"
                                            value={phone}
                                            onChangeText={setPhone}
                                            onFocus={() => clearAllErrors()}
                                        />
                                    </View>
                                </View>
                                <Pressable
                                    style={[styles.continueParent, styles.labelInputsSpaceBlock, { width: 410, height: 34 }]}
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

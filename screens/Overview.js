import React, { useState, useEffect } from "react";
import { Image, View, Pressable, Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firestore } from '../firebase'; // Adjust the import path as needed
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import LabelInput from "../components/LabelInput";
import styles from "../styles/OverviewStyles";

// Main component function
const Overview = () => {
    const navigation = useNavigation(); // Initialize navigation hook
    const [data, setData] = useState({}); // State to manage fetched data
    const [loading, setLoading] = useState(true); // State to manage loading status

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Function to fetch the latest document from a given collection
        const fetchLatestDoc = async (collectionName) => {
            const q = query(collection(firestore, collectionName), orderBy('timestamp', 'desc'), limit(1));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                return querySnapshot.docs[0].data();
            }
            return {};
        };

        // Function to fetch data from multiple collections
        const fetchData = async () => {
            try {
                const businessStructureData = await fetchLatestDoc('businessStructure');
                const businessRepresentativeData = await fetchLatestDoc('businessRepresentatives');
                const businessDetailsData = await fetchLatestDoc('businessDetails');
                const bankDetailsData = await fetchLatestDoc('bankDetails');

                setData({
                    ...businessStructureData,
                    ...businessRepresentativeData,
                    ...businessDetailsData,
                    ...bankDetailsData,
                });
            } catch (error) {
                console.error("Error fetching documents: ", error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchData();
    }, []);

    // Render a loading indicator while data is being fetched
    if (loading) {
        return (
            <View style={loaderStyles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={loaderStyles.loadingText}>Loading</Text>
            </View>
        );
    }

    // Check if the phone field already includes the area code
    const phoneWithAreaCode = data.phone && data.phone.startsWith(data.areaCode) ? data.phone : `${data.areaCode} ${data.phone}`;

    return (
        <ScrollView style={styles.view}>
            {/* Background child element */}
            <View style={styles.child} />

            {/* Back button */}
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Authentication")} // Navigate to Authentication screen
            >
                <Image
                    style={styles.outlineLayout}
                    contentFit="cover"
                    source={require("../assets/back_arrow.png")} // Back button icon
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
                                {/* Business Structure Section */}
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginBottom: 24 }]}>Business Structure</Text>

                                {/* Business Address */}
                                <Text style={[styles.label1, styles.label1Typo, { marginBottom: 8 }]}>Business Address</Text>
                                <Text style={styles.textStyle}>
                                    {data.businessAddress || "N/A"}
                                </Text>

                                {/* Business Type */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 , marginBottom:8,}]}>Type of business</Text>
                                <Text style={styles.textStyle}>
                                    {data.selectedType || "N/A"}
                                </Text>

                                {/* Address Line 1 */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16, marginBottom:8, }]}>Address</Text>
                                <Text style={styles.textStyle}>
                                    {data.addressLine1 || "N/A"}
                                </Text>

                                {/* City */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16, marginBottom:8, }]}>City</Text>
                                <Text style={styles.textStyle}>
                                    {data.city || "N/A"}
                                </Text>

                                {/* ZIP */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 , marginBottom:8,}]}>ZIP</Text>
                                <Text style={styles.textStyle}>
                                    {data.zip || "N/A"}
                                </Text>


                                {/* Business Representative Section */}
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginTop: 24, marginBottom: 24 }]}>Business Representative</Text>

                                {/* First Name */}
                                <Text style={[styles.label1, styles.label1Typo,{marginBottom:8,}]}>First Name</Text>
                                <Text style={styles.textStyle}>
                                    {data.firstName || "N/A"}
                                </Text>

                                {/* Last Name */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 , marginBottom:8,}]}>Last Name</Text>
                                <Text style={styles.textStyle}>
                                    {data.lastName || "N/A"}
                                </Text>

                                {/* Email */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 , marginBottom:8,}]}>Email</Text>
                                <Text style={styles.textStyle}>
                                    {data.email || "N/A"}
                                </Text>

                                {/* Phone Number */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16, marginBottom:8, }]}>Phone Number</Text>
                                <Text style={styles.textStyle}>
                                    {phoneWithAreaCode || "N/A"}
                                </Text>

                                {/* Address Line 1 */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16, marginBottom:8, }]}>Address</Text>
                                <Text style={styles.textStyle}>
                                    {data.addressLine1 || "N/A"}
                                </Text>

                                {/* Business Details Section */}
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginTop: 24, marginBottom: 16 }]}>Business Details</Text>

                                {/* VAT */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16, marginBottom:8, }]}>VAT</Text>
                                <Text style={styles.textStyle}>
                                    {data.vatNumber || "N/A"}
                                </Text>

                                {/* Industry */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 , marginBottom:8,}]}>Industry</Text>
                                <Text style={styles.textStyle}>
                                    {data.selectedIndustry || "N/A"}
                                </Text>

                                {/* Organization Website */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16, marginBottom:8, }]}>Organization website</Text>
                                <Text style={styles.textStyle}>
                                    {data.website || "N/A"}
                                </Text>

                                {/* Bank Details Section */}
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginTop: 24, marginBottom: 8 }]}>Bank Details</Text>

                                {/* Currency */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 , marginBottom:8,}]}>Currency</Text>
                                <Text style={styles.textStyle}>
                                    {data.selectedCurrency || "N/A"}
                                </Text>

                                {/* Country of Bank Account */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 , marginBottom:8,}]}>Country of bank account</Text>
                                <Text style={styles.textStyle}>
                                    {data.selectedCountry || "N/A"}
                                </Text>

                                {/* IBAN */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 , marginBottom:8,}]}>IBAN</Text>
                                <Text style={styles.textStyle}>
                                    {data.iban || "N/A"}
                                </Text>

                                {/* Continue Button */}
                                <Pressable
                                    style={[styles.continueParent, styles.labelInputsSpaceBlock, { width: 410, height: 34 }]}
                                    onPress={() => {
                                        navigation.navigate("Dashboard")
                                    }}
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

            {/* Navigation menu at the bottom */}
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
                    onPress={() => navigation.navigate("Business Structure")} // Navigate to Business Structure screen
                >
                    <Text style={[styles.businessStructure, styles.label1Type]}>
                        Business structure
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.bankDetails, styles.overviewPosition]}
                    onPress={() => navigation.navigate("Bank Details")} // Navigate to Bank Details screen
                >
                    <Text style={[styles.bankDetails1, styles.label1Typo]}>
                        Bank details
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.supportingDocuments, styles.overviewPosition]}
                    onPress={() => navigation.navigate("Supporting Documents")} // Navigate to Supporting Documents screen
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
                        navigation.navigate("Overview");
                    }}>
                    <Text style={[styles.overview, styles.businessFlexBox]}>
                        Overview
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessRepresentative, styles.businessPosition]}
                    onPress={() => navigation.navigate("Business Representative")} // Navigate to Business Representative screen
                >
                    <Text style={[styles.businessRepresentative1, styles.businessTypo]}>
                        Business representative
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDetails, styles.businessPosition]}
                    onPress={() => navigation.navigate("Business Details")} // Navigate to Business Details screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business details
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessOwners, styles.businessPosition]}
                    onPress={() => navigation.navigate("Business Owners")} // Navigate to Business Owners screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business owners
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessExecutives, styles.businessPosition]}
                    onPress={() => navigation.navigate("Business Executives")} // Navigate to Business Executives screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business executives
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDirectors, styles.businessPosition]}
                    onPress={() => navigation.navigate("Business Directors")} // Navigate to Business Directors screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business directors
                    </Text>
                </Pressable>

                {/* Decorative images */}
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
            <View style={[styles.indicator2, styles.indicatorLayout]}>
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
            <View style={[styles.indicator3, styles.indicatorLayout]}>
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
            <View style={[styles.item, styles.itemGroupLayout]} />
        </ScrollView>
    );
};

const loaderStyles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Overview;

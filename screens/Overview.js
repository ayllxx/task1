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
                                <Text style={[styles.label1, styles.label1Typo, { marginBottom: 0 }]}>Business Address</Text>
                                <LabelInput
                                    label1={data.businessAddress || "N/A"}
                                    showIcons
                                    propAlignSelf="unset"
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Business Type */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Type of business</Text>
                                <LabelInput
                                    label1={data.selectedType || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Address Line 1 */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Address</Text>
                                <LabelInput
                                    label1={data.addressLine1 || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* City */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>City</Text>
                                <LabelInput
                                    label1={data.city || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* ZIP */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>ZIP</Text>
                                <LabelInput
                                    label1={data.zip || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Business Representative Section */}
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginTop: 24, marginBottom: 24 }]}>Business Representative</Text>
                                
                                {/* First Name */}
                                <Text style={[styles.label1, styles.label1Typo]}>First Name</Text>
                                <LabelInput
                                    label1={data.firstName || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Last Name */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Last Name</Text>
                                <LabelInput
                                    label1={data.lastName || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Email */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Email</Text>
                                <LabelInput
                                    label1={data.email || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Phone Number */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Phone Number</Text>
                                <LabelInput
                                    label1={phoneWithAreaCode || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Address Line 1 */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Address</Text>
                                <LabelInput
                                    label1={data.addressLine1 || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Business Details Section */}
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginTop: 24, marginBottom: 24 }]}>Business Details</Text>

                                {/* VAT */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>VAT</Text>
                                <LabelInput
                                    label1={data.vatNumber || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Industry */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Industry</Text>
                                <LabelInput
                                    label1={data.selectedIndustry || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Organization Website */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Organization website</Text>
                                <LabelInput
                                    label1={data.website || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Bank Details Section */}
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginTop: 24, marginBottom: 8 }]}>Bank Details</Text>

                                {/* Currency */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Currency</Text>
                                <LabelInput
                                    label1={data.selectedCurrency || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Country of Bank Account */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Country of bank account</Text>
                                <LabelInput
                                    label1={data.selectedCountry || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* IBAN */}
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>IBAN</Text>
                                <LabelInput
                                    label1={data.iban || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />

                                {/* Continue Button */}
                                <Pressable
                                    style={[styles.continueParent, styles.labelInputsSpaceBlock, { width: 410, height: 34 }]}
                                    onPress={() => {
                                        // Add press handler here
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

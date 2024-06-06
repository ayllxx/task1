import React, { useState, useEffect } from "react";
import { Image, View, Pressable, Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firestore } from '../firebase'; // Adjust the import path as needed
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import LabelInput from "../components/LabelInput";
import styles from "../styles/OverviewStyles";

const Overview = () => {
    const navigation = useNavigation();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestDoc = async (collectionName) => {
            const q = query(collection(firestore, collectionName), orderBy('timestamp', 'desc'), limit(1));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                return querySnapshot.docs[0].data();
            }
            return {};
        };

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
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Loading</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.view}>
            <View style={styles.child} />
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Authentication")}
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
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginBottom: 24 }]}>Business Structure</Text>
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
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Type of business</Text>
                                <LabelInput
                                    label1={data.selectedType || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Address</Text>
                                <LabelInput
                                    label1={data.addressLine1 || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>City</Text>
                                <LabelInput
                                    label1={data.city || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>ZIP</Text>
                                <LabelInput
                                    label1={data.zip || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginTop: 24, marginBottom: 24 }]}>Business Representative</Text>
                                <Text style={[styles.label1, styles.label1Typo]}>First Name</Text>
                                <LabelInput
                                    label1={data.firstName || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Last Name</Text>
                                <LabelInput
                                    label1={data.lastName || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Email</Text>
                                <LabelInput
                                    label1={data.email || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Phone Number</Text>
                                <LabelInput
                                    label1={data.phone || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Address</Text>
                                <LabelInput
                                    label1={data.addressLine1 || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginTop: 24, marginBottom: 24 }]}>Business Details</Text>
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>VAT</Text>
                                <LabelInput
                                    label1={data.vatNumber || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                /><Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Industry</Text>
                                <LabelInput
                                    label1={data.selectedIndustry || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                /><Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Organization website</Text>
                                <LabelInput
                                    label1={data.website || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.mainLabel, styles.label1Typo, { marginTop: 24, marginBottom: 8 }]}>Bank Details</Text>
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Currency</Text>
                                <LabelInput
                                    label1={data.selectedCurrency || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>Country of bank account</Text>
                                <LabelInput
                                    label1={data.selectedCountry || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Text style={[styles.label1, styles.label1Typo, { marginTop: 16 }]}>IBAN</Text>
                                <LabelInput
                                    label1={data.iban || "N/A"}
                                    propWidth={410}
                                    propWidth1={410}
                                    propFontSize={16}
                                    propColor="#757d8a"
                                />
                                <Pressable
                                    style={[styles.continueParent, styles.labelInputsSpaceBlock, { width: 410, height: 34 }]}
                                    onPress={() => {
                                        // add press handler here ....
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
                        navigation.navigate("Overview");
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

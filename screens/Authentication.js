import * as React from "react";
import { Image, View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/AuthenticationStyles"; // Import styles

const Authentication = () => {
    const navigation = useNavigation(); // Initialize navigation
    const [isSmsHovered, setIsSmsHovered] = React.useState(false);
    const [isAuthenticatorHovered, setIsAuthenticatorHovered] = React.useState(false);

    return (
        <View style={styles.view}>
            {/* Background child element */}
            <View style={styles.child} />

            {/* Back button */}
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Supporting Documents")} // Navigate to Supporting Documents screen
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

                                {/* Security prompt */}
                                <Text style={[styles.label1, styles.label1Typo, { marginBottom: 16 }]}>
                                    Keep your account secure
                                </Text>

                                {/* SMS option button */}
                                <Pressable
                                    style={({ pressed }) => [
                                        styles.button1,
                                        isSmsHovered && styles.hoveredBG,
                                       
                                        { justifyContent: 'flex-start', alignItems: 'flex-start' } // Adjust alignment here
                                    ]}
                                    onHoverIn={() => setIsSmsHovered(true)}
                                    onHoverOut={() => setIsSmsHovered(false)}
                                    onPress={() => {
                                        // Add your handler here
                                    }}
                                >
                                    <Text style={[styles.addABusiness, styles.businessTypo, isSmsHovered && styles.hoveredText, { textAlign: 'left' }]}>
                                        Use SMS
                                    </Text>
                                </Pressable>

                                {/* Authenticator app option button */}
                                <Pressable
                                    style={({ pressed }) => [
                                        styles.button2,
                                        isAuthenticatorHovered && styles.hoveredBG2,
                                        { justifyContent: 'flex-start', alignItems: 'flex-start',  } // Adjust alignment here
                                    ]}
                                    onHoverIn={() => setIsAuthenticatorHovered(true)}
                                    onHoverOut={() => setIsAuthenticatorHovered(false)}
                                    onPress={() => {
                                        // Add your handler here
                                    }}
                                >
                                    <Text style={[styles.addABusiness, styles.businessTypo, isAuthenticatorHovered && styles.hoveredText, { textAlign: 'left' }]}>
                                        Use an authenticator app
                                    </Text>
                                </Pressable>

                                {/* Continue button */}
                                <Pressable
                                    style={[
                                        styles.continueParent,
                                        styles.labelInputsSpaceBlock,
                                        { width: 410, height: 34, top: 25}
                                    ]}
                                    onPress={() => navigation.navigate("Overview")} // Navigate to Overview screen
                                >
                                    <Text style={[styles.continue, styles.label1Layout, { color: '#FFFFFF' }]}>
                                        Continue
                                    </Text>
                                    <Image
                                        style={[styles.fillArrowLeft1, styles.fillLayout]}
                                        resizeMode="cover"
                                        source={require("../assets/back_arrow.png")} // Continue button icon
                                    />
                                </Pressable>

                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* Navigation menu on the side */}
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
                    onPress={() => navigation.navigate("")} // Navigate to Business Structure screen
                >
                    <Text style={[styles.businessStructure, styles.label1Type]}>
                        Business structure
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.bankDetails, styles.overviewPosition]}
                    onPress={() => navigation.navigate("")} // Navigate to Bank Details screen
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
                    onPress={() => navigation.navigate("Authentication")} // Navigate to Authentication screen
                >
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

                {/* Other navigation buttons */}
                <Pressable
                    style={[styles.businessRepresentative, styles.businessPosition]}
                    onPress={() => navigation.navigate("")} // Navigate to Business Representative screen
                >
                    <Text style={[styles.businessRepresentative1, styles.businessTypo]}>
                        Business representative
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDetails, styles.businessPosition]}
                    onPress={() => navigation.navigate("")} // Navigate to Business Details screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business details
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessOwners, styles.businessPosition]}
                    onPress={() => navigation.navigate("")} // Navigate to Business Owners screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business owners
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessExecutives, styles.businessPosition]}
                    onPress={() => navigation.navigate("")} // Navigate to Business Executives screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business executives
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.businessDirectors, styles.businessPosition]}
                    onPress={() => navigation.navigate("")} // Navigate to Business Directors screen
                >
                    <Text style={[styles.businessDetails1, styles.businessTypo]}>
                        Business directors
                    </Text>
                </Pressable>

                {/* Decorative images */}
                <Image
                    style={[styles.groupChild5, styles.groupChildLayout]}
                    contentFit="cover"
                    source={require("../assets/group-371381.png")}
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

            <View style={[styles.item, styles.itemGroupLayout]} />
        </View>
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

export default Authentication;

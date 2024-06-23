import React, { useState } from "react";
import { View, Text, Pressable, TextInput, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { firestore } from '../firebase'; // Adjust the import path as needed
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import styles from '../styles/BusinessStructureStyles'; // Adjust import path as needed

// Main component function
const BusinessStructure = () => {
  const navigation = useNavigation(); // Initialize navigation hook
  const [selectedType, setSelectedType] = useState("."); // State to manage the selected business type
  const [businessAddress, setBusinessAddress] = useState(""); // State to manage the business address input
  const [addressLine1, setAddressLine1] = useState(""); // State to manage the address line 1 input
  const [addressLine2, setAddressLine2] = useState(""); // State to manage the address line 2 input
  const [city, setCity] = useState(""); // State to manage the city input
  const [zip, setZip] = useState(""); // State to manage the zip code input
  const [showErrors, setShowErrors] = useState(false); // State to manage the display of errors
  const [submissionStatus, setSubmissionStatus] = useState(""); // State to manage the submission status
  const [errorMessage, setErrorMessage] = useState(""); // State to manage error messages

  // Function to check if the form is valid
  const isFormValid = () => {
    return (
      businessAddress.trim() !== "" &&
      addressLine1.trim() !== "" &&
      city.trim() !== "" &&
      zip.trim() !== "" &&
      selectedType !== "."
    );
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (isFormValid()) {
      try {
        // Save data to Firestore
        await addDoc(collection(firestore, 'businessStructure'), {
          businessAddress,
          addressLine1,
          addressLine2,
          city,
          zip,
          selectedType,
          timestamp: serverTimestamp(),
          authen: "verified",
          userID: "admin",

        });
        setSubmissionStatus("Data submitted successfully!"); // Set success message
        setErrorMessage(""); // Clear any previous error message
        navigation.navigate("Business Representative"); // Navigate to the next screen
      } catch (error) {
        console.error("Error adding document: ", error);
        setErrorMessage("Error submitting data. Please try again."); // Set error message on failure
      }
    } else {
      setShowErrors(true); // Show errors if the form is invalid
    }
  };

  const handleNavigation = (screen) => {
    if (isFormValid()) {
      navigation.navigate(screen);
    } else {
      setShowErrors(true); // Show errors if the form is invalid
      setErrorMessage("Please fill all required fields before proceeding.");
    }
  };

  return (
    <View style={styles.view}>
            {/* Background child element */}
            <View style={styles.child} />

            {/* Back button */}
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Business Owners")} // Navigate to Authentication screen
            >
                <Image
                    style={styles.outlineLayout}
                    contentFit="cover"
                    source={require("../assets/back_arrow.png")} // Back button icon
                />
            </Pressable>
      {/* Account verification text */}
      <Text style={styles.accountVerification}>Account verification</Text>

      {/* Badge indicating progress */}
      <View style={[styles.badge, styles.badgeFlexBox]}>
        <Image
          style={[styles.outlineMinus, styles.fillLayout]}
          contentFit="cover"
          source={require("../assets/-outline--minus.png")}
        />
        <Text style={[styles.label, styles.businessFlexBox]}>In progress</Text>
        <Image
          style={[styles.fillCloseCircle, styles.fillLayout]}
          contentFit="cover"
          source={require("../assets/-fill--closecircle.png")}
        />
      </View>
      
      {/* Form container */}
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.frameGroup}>
            <View style={styles.frameGroup}>
              
              {/* Business address input */}
              <Text style={styles.label1}>Business address</Text>
              {showErrors && businessAddress.trim() === "" && (
                <Text style={[styles.errorText, { marginBottom: -17, marginTop: 1 }]}>*Registered Business Address is required*</Text>
              )}
              <TextInput
                style={[styles.input, styles.labelTypo, { width: 410 }]}
                placeholder="Registered business address"
                placeholderTextColor="#757d8a"
                value={businessAddress}
                onChangeText={(text) => { setBusinessAddress(text); setShowErrors(false); }}
              />

              {/* Business type selection */}
              <Text style={[styles.label1, { marginTop: 10 }]}>Type</Text>
              {showErrors && selectedType === "." && (
                <Text style={[styles.errorText, { marginBottom: -17, marginTop: 1 }]}>*Type of Business is required*</Text>
              )}
              <Picker
                style={[styles.input, styles.labelTypo, { width: 410 }]}
                selectedValue={selectedType}
                onValueChange={(itemValue) => { setSelectedType(itemValue); setShowErrors(false); }}
              >
                <Picker.Item label="Type of business" value="." />
                <Picker.Item label="Business 1" value="Business 1" />
                <Picker.Item label="Business 2" value="Business 2" />
              </Picker>
            </View>
          </View>

          {/* Address input fields */}
          <View style={styles.labelInputsSpaceBlock}>
            <Text style={[styles.label1, styles.label1Layout]}>Address</Text>
            {showErrors && addressLine1.trim() === "" && (
              <Text style={[styles.errorText, { marginBottom: -17, marginTop: 1 }]}>*Address Line 1 is required*</Text>
            )}
            <TextInput
              style={[styles.input, styles.labelTypo, { width: 410 }]}
              placeholder="Address line 1"
              placeholderTextColor="#757d8a"
              value={addressLine1}
              onChangeText={(text) => { setAddressLine1(text); setShowErrors(false); }}
            />
            
            <TextInput
              style={[styles.input, styles.labelTypo, { width: 410 }]}
              placeholder="Address line 2"
              placeholderTextColor="#757d8a"
              value={addressLine2}
              onChangeText={(text) => { setAddressLine2(text); setShowErrors(false); }}
            />

            {showErrors && city.trim() === "" && (
              <Text style={[styles.errorText, { marginBottom: -17, marginTop: 1 }]}>*City is required*</Text>
            )}
            <TextInput
              style={[styles.input, styles.labelTypo, { width: 410 }]}
              placeholder="City"
              placeholderTextColor="#757d8a"
              value={city}
              onChangeText={(text) => { setCity(text); setShowErrors(false); }}
            />

            {showErrors && zip.trim() === "" && (
              <Text style={[styles.errorText, { marginBottom: -17, marginTop: 1 }]}>*ZIP is required*</Text>
            )}
            <TextInput
              style={[styles.input, styles.labelTypo, { width: 410 }]}
              placeholder="ZIP"
              placeholderTextColor="#757d8a"
              value={zip}
              onChangeText={(text) => { setZip(text); setShowErrors(false); }}
            />
          </View>
        </View>

       

        {/* Continue button */}
        <Pressable
          style={[
            styles.continueParent,
            styles.labelInputsSpaceBlock,
            { width: 410, height: 34 }
          ]}
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

      {/* Navigation menu at the side */}
      <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
        <View style={[styles.groupChild, styles.groupChildLayout2]} />
        <View style={[styles.groupItem, styles.groupChildLayout1]} />
        <View style={[styles.groupInner, styles.groupChildLayout1]} />
        <View style={[styles.rectangleView, styles.groupChildLayout1]} />
        <View style={[styles.groupChild1, styles.groupChildLayout1]} />
        <View style={[styles.groupChild2, styles.groupChildLayout1]} />

        {/* Navigation buttons */}
        <Text style={[styles.businessStructure, styles.overviewPosition]}>
          Business structure
        </Text>
        <Pressable
          style={[styles.bankDetails, styles.overviewPosition]}
          onPress={() => handleNavigation("")} // Navigate to Bank Details screen
        >
          <Text style={[styles.bankDetails1, styles.businessFlexBox]}>
            Bank details
          </Text>
        </Pressable>
        <Pressable
          style={[styles.supportingDocuments, styles.overviewPosition]}
          onPress={() => handleNavigation("")} // Navigate to Supporting Documents screen
        >
          <Text style={[styles.bankDetails1, styles.businessFlexBox]}>
            Supporting documents
          </Text>
        </Pressable>
        <Pressable
          style={[styles.stepAuthentication, styles.overviewPosition]}
          onPress={() => handleNavigation("")}
        >
          <Text style={[styles.bankDetails1, styles.businessFlexBox]}>
            2 step authentication
          </Text>
        </Pressable>
        <Pressable
          style={[styles.bankDetails1, styles.overviewPosition]}
          onPress={() => handleNavigation("")}
        >
          <Text style={[styles.overview, styles.businessFlexBox]}>
            Overview
          </Text>
        </Pressable>

        <Pressable
          style={[styles.businessRepresentative, styles.businessPosition]}
          onPress={() => handleNavigation("Under Review")} // Navigate to Business Representative screen
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business representative
          </Text>
        </Pressable>
        <Pressable
          style={[styles.businessDetails, styles.businessPosition]}
          onPress={() => handleNavigation("")} // Navigate to Business Details screen
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business details
          </Text>
        </Pressable>
        <Pressable
          style={[styles.businessOwners, styles.businessPosition]}
          onPress={() => handleNavigation("")} // Navigate to Business Owners screen
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business owners
          </Text>
        </Pressable>
        <Pressable
          style={[styles.businessExecutives, styles.businessPosition]}
          onPress={() => handleNavigation("")} // Navigate to Business Executives screen
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business executives
          </Text>
        </Pressable>
        <Pressable
          style={[styles.businessDirectors, styles.businessPosition]}
          onPress={() => handleNavigation("")} // Navigate to Business Directors screen
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business directors
          </Text>
        </Pressable>

        {/* Decorative images */}
        <Image
          style={[styles.groupIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-37135.png")}
        />
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
    </View>
  );
};


export default BusinessStructure;

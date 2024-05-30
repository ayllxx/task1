import * as React from "react";
import { View, Text, Pressable, TextInput, Image, StyleSheet } from "react-native";
import styles from '../styles/BusinessStructureStyles';
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const BusinessStructure = () => {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = React.useState(".");
  const [businessAddress, setBusinessAddress] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const isFormValid = () => {
    return (
      businessAddress.trim() !== "" &&
      addressLine1.trim() !== "" &&
      city.trim() !== "" &&
      zip.trim() !== "" &&
      selectedType !== "."
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      navigation.navigate("BusinessRepresentative");
    } else {
      setShowErrors(true);
    }
  };

  return (
    <View style={styles.view}>
      <View style={styles.child} />
      <View style={[styles.button, styles.inputFlexBox]}>
        <Image
          style={styles.outlineLayout}
          contentFit=""
          source={require("../assets/-fill--arrowleft.png")}
        />
      </View>
      <Text style={styles.accountVerification}>Account verification</Text>
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
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.frameGroup}>
            <View style={styles.frameGroup}>
              <Text style={styles.label1}>Business address</Text>
              {showErrors && businessAddress.trim() === "" && (
                <Text style={[errorTextStyles.errorText, {marginBottom:-17,marginTop:1}]}>*You need to fill this field to continue*</Text>
              )}
              <TextInput
                style={[styles.input, styles.labelTypo, { width: 410 }]}
                placeholder="Registered business address"
                placeholderTextColor="#757d8a"
                value={businessAddress}
                onChangeText={(text) => { setBusinessAddress(text); setShowErrors(false); }}
              />
              <Text style={[styles.label1, { marginTop: 10 }]}>Type</Text>
              {showErrors && selectedType === "." && (
                <Text style={[errorTextStyles.errorText, {marginBottom:-17,marginTop:1}]}>*You need to fill this field to continue*</Text>
              )}
              <Picker
                style={[styles.input, styles.labelTypo, { width: 410 }]}
                selectedValue={selectedType}
                onValueChange={(itemValue) => { setSelectedType(itemValue); setShowErrors(false); }}
              >
                <Picker.Item label="Type of business" value="." />
                <Picker.Item label="Business 1" value="business1" />
                <Picker.Item label="Business 2" value="business2" />
              </Picker>
            </View>
          </View>
          <View style={styles.labelInputsSpaceBlock}>
            <Text style={[styles.label1, styles.label1Layout]}>Address</Text>
            {showErrors && addressLine1.trim() === "" && (
              <Text style={[errorTextStyles.errorText, {marginBottom:-17, marginTop:1}]}>*You need to fill this field to continue*</Text>
            )}
            <TextInput
              style={[styles.input, styles.labelTypo, { width: 410 }]}
              placeholder="Address line 1"
              placeholderTextColor="#757d8a"
              value={addressLine1}
              onChangeText={(text) => { setAddressLine1(text); setShowErrors(false); }}
            />
            {showErrors && city.trim() === "" && (
              <Text style={[errorTextStyles.errorText, {marginBottom:-17,marginTop:1}]}>*You need to fill this field to continue*</Text>
            )}
            <TextInput
              style={[styles.input, styles.labelTypo, { width: 410 }]}
              placeholder="Address line 2"
              placeholderTextColor="#757d8a"
              value={addressLine2}
              onChangeText={(text) => { setAddressLine2(text); setShowErrors(false); }}
            />
            {showErrors && city.trim() === "" && (
              <Text style={[errorTextStyles.errorText, {marginBottom:-17,marginTop:1}]}>*You need to fill this field to continue*</Text>
            )}
            <TextInput
              style={[styles.input, styles.labelTypo, { width: 410 }]}
              placeholder="City"
              placeholderTextColor="#757d8a"
              value={city}
              onChangeText={(text) => { setCity(text); setShowErrors(false); }}
            />
            {showErrors && zip.trim() === "" && (
              <Text style={[errorTextStyles.errorText, {marginBottom:-17,marginTop:1}]}>*You need to fill this field to continue*</Text>
            )}
            <TextInput
              style={[styles.input, styles.labelTypo, { width: 410 }]}
              placeholder="Zip"
              placeholderTextColor="#757d8a"
              value={zip}
              onChangeText={(text) => { setZip(text); setShowErrors(false); }}
            />
          </View>
        </View>
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
            source={require("../assets/-fill--arrowleft1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
        <View style={[styles.groupChild, styles.groupChildLayout2]} />
        <View style={[styles.groupItem, styles.groupChildLayout1]} />
        <View style={[styles.groupInner, styles.groupChildLayout1]} />
        <View style={[styles.rectangleView, styles.groupChildLayout1]} />
        <View style={[styles.groupChild1, styles.groupChildLayout1]} />
        <View style={[styles.groupChild2, styles.groupChildLayout1]} />
        <Text style={[styles.businessStructure, styles.overviewPosition]}>
          Business structure
        </Text>
        <Pressable
          style={[styles.bankDetails, styles.overviewPosition]}
          onPress={() => navigation.navigate("BankDetails")}
        >
          <Text style={[styles.bankDetails1, styles.businessFlexBox]}>
            Bank details
          </Text>
        </Pressable>
        <Pressable
          style={[styles.supportingDocuments, styles.overviewPosition]}
          onPress={() => navigation.navigate("SupportingDocuments")}
        >
          <Text style={[styles.bankDetails1, styles.businessFlexBox]}>
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
          onPress={handleSubmit}
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business representative
          </Text>
        </Pressable>
        <Pressable
          style={[styles.businessDetails, styles.businessPosition]}
          onPress={() => navigation.navigate("BusinessDetails")}
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business details
          </Text>
        </Pressable>
        <Pressable
          style={[styles.businessOwners, styles.businessPosition]}
          onPress={() => navigation.navigate("BusinessOwners")}
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business owners
          </Text>
        </Pressable>
        <Pressable
          style={[styles.businessExecutives, styles.businessPosition]}
          onPress={() => navigation.navigate("BusinessExecutives")}
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business executives
          </Text>
        </Pressable>
        <Pressable
          style={[styles.businessDirectors, styles.businessPosition]}
          onPress={() => navigation.navigate("BusinessDirectors")}
        >
          <Text
            style={[styles.businessRepresentative1, styles.businessFlexBox]}
          >
            Business directors
          </Text>
        </Pressable>
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

const errorTextStyles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
  }
});

export default BusinessStructure;



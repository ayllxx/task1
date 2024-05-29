import * as React from "react";
import {View, Text, Pressable, TextInput, Image } from "react-native";
import styles from '../styles/BusinessStructureStyles'; 
import { useNavigation } from "@react-navigation/native";


const BusinessStructure = () => {
  const navigation = useNavigation();

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
              <TextInput
                style={[styles.input, styles.labelTypo,{ width: 410 }]}
                placeholder="Registered business address" // Use placeholder for label
                placeholderTextColor="#757d8a" // Placeholder text color
              />
              <Text style={[styles.label1, {marginTop: 10}]}>Type</Text>
              <TextInput
                style={[styles.input, styles.labelTypo,{ width: 410 }]}
                placeholder="Type of business" // Use placeholder for label
                placeholderTextColor="#757d8a" // Placeholder text color
              />
            </View>
          </View>
          <View style={styles.labelInputsSpaceBlock}>
            <Text style={[styles.label1, styles.label1Layout]}>Address</Text>

              <TextInput
                style={[styles.input, styles.labelTypo,{ width: 410 }]}
                placeholder="Address line 1" // Use placeholder for label
                placeholderTextColor="#757d8a" // Placeholder text color
              />
              <TextInput
                style={[styles.input, styles.labelTypo,{ width: 410 }]}
                placeholder="Address line 2" // Use placeholder for label
                placeholderTextColor="#757d8a" // Placeholder text color
              />
              
              <TextInput
                style={[styles.input, styles.labelTypo,{ width: 410 }]}
                placeholder="City" // Use placeholder for label
                placeholderTextColor="#757d8a" // Placeholder text color
              />
            <TextInput
                style={[styles.input, styles.labelTypo,{ width: 410 }]}
                placeholder="Zip" // Use placeholder for label
                placeholderTextColor="#757d8a" // Placeholder text color
              />
          </View>
        </View>
        <View style={[styles.continueParent, styles.labelInputsSpaceBlock,{ width: 410 }]}>
          <Text style={[styles.continue, styles.label1Layout,]}>Continue</Text>
          <Image
            style={[styles.fillArrowLeft1, styles.fillLayout]}
            contentFit="cover"
            source={require("../assets/-fill--arrowleft1.png")}
          />
        </View>
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
          onPress={() => navigation.navigate("BusinessRepresentative")}
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

export default BusinessStructure;


import React from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable, Alert } from 'react-native';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Color } from "../GlobalStyles";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzZkoogz_ynPuVuK0MenCK5-dOBwD1Lmk",
    authDomain: "test1-9edec.firebaseapp.com",
    projectId: "test1-9edec",
    storageBucket: "test1-9edec.appspot.com",
    messagingSenderId: "800457748616",
    appId: "1:800457748616:web:5027a58a8918ac57ea6f3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const UnderReview = ({ navigation }) => {

    const checkAuthentication = async () => {
        try {
            const q = query(collection(db, "businessStructure"), where("authen", "==", "verified"));
            const querySnapshot = await getDocs(q);
            let isAuthenticated = false;

            querySnapshot.forEach((doc) => {
                if (doc.data().authen === "verified") {
                    isAuthenticated = true;
                }
            });

            if (isAuthenticated) {
                navigation.navigate('Dashboard'); // Navigate to Dashboard if verified
            } else {
                Alert.alert("Not Verified", "Your account is not verified yet.");
            }
        } catch (error) {
            console.error("Error fetching document: ", error);
            Alert.alert("Error", "There was an error checking the authentication status.");
        }
    };

    return (
        <SafeAreaView style={styles1.container}>
            <Text style={styles1.text}>Your application is now under review</Text>
            <Text style={styles1.text1}>We will be in contact with you soon</Text>
            <Pressable
                style={styles1.button}
                onPress={checkAuthentication}
            >
                <Text style={styles1.buttonText}>Back to Digiroad</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 34,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
    },
    text1: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
    },
    button: {
        top: 10,
        justifyContent: 'center',
        backgroundColor: Color.colorMediumblue,
        borderRadius: 6,
        width: 410,
        height: 34,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '400',
        top: -2,
        lineHeight: 24,
    },
});

export default UnderReview;

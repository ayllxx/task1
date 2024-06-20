import React from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable } from 'react-native';
import { Padding, Color} from "../GlobalStyles";

const UnderReview = () => {
    return (
        <SafeAreaView style={styles1.container}>
            <Text style={styles1.text}>Your application is now under review</Text>
            <Text style={styles1.text1}>We will be in contact with you soon</Text>
            <Pressable
                style={styles1.button}
                onPress={() => {
                    // Add your press handler logic here
                    console.log('Button pressed');
                }}
            >
                <Text style={styles1.buttonText}>Back to Digiroad </Text>
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
        textAlign: 'Inter-Regular',
        fontWeight: '400',
        top: - 2,
        lineHeight: 24,
        
    },
});

export default UnderReview;

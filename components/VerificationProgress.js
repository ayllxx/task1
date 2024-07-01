import React, { useState, useEffect } from "react";
import { Image, Text, View, Pressable, Alert, ActivityIndicator } from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase"; // Import firestore correctly
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import styles from "../styles/Dashboard1Styles";

const VerificationProgress = () => {
  const navigation = useNavigation(); // Use useNavigation to get the navigation object
  const [isVerified, setIsVerified] = useState(false);


  const checkAuthentication = async () => {
    try {
      const q = query(collection(firestore, "businessStructure"), where("authen", "==", "verified"));
      const querySnapshot = await getDocs(q);
      let isAuthenticated = false;

      querySnapshot.forEach((doc) => {
        if (doc.data().authen === "verified") {
          isAuthenticated = true;
        }
      });

      setIsVerified(isAuthenticated);
    } catch (error) {
      console.error("Error fetching document: ", error);
      Alert.alert("Error", "There was an error checking the authentication status.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const handlePress = () => {
    navigation.navigate('Business Structure');
  };

 

  if (isVerified) {
    return null; // Don't render the component if the user is verified
  }

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <View style={styles.rightGroup}>
          <View style={styles.createButton}>
            <Text style={styles.create}>Create</Text>
            <Image
              style={[styles.chevrondownIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/--chevrondown.png")}
            />
          </View>
          <View style={[styles.help, styles.helpSpaceBlock]}>
            <Image
              style={styles.iconLayout2}
              contentFit="cover"
              source={require("../assets/--help.png")}
            />
            <Text style={styles.help1}>Help</Text>
          </View>
          <View style={styles.helpSpaceBlock}>
            <View style={styles.iconLayout2}>
              <Image
                style={[styles.notificationsIcon, styles.iconPosition1]}
                contentFit="cover"
                source={require("../assets/--notifications.png")}
              />
              <View style={[styles.badgeCount, styles.textLayout]}>
                <Image
                  style={[styles.backgroundIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/background.png")}
                />
                <Text style={[styles.text, styles.textLayout]}>1</Text>
              </View>
            </View>
            <Image
              style={[styles.settingsIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/--settings.png")}
            />
            <Image
              style={[styles.settingsIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/--person.png")}
            />
          </View>
        </View>
        <View style={[styles.leftGroup, styles.iconParentFlexBox]}>
          <View style={styles.accountswitchercactuspractice}>
            <View style={styles.accountswitcher1}>
              <Image
                style={[styles.accountIcon1, styles.accountIconLayout]}
                contentFit="cover"
                source={require("../assets/account-icon3.png")}
              />
              <Text style={[styles.accountName1, styles.developersTypo]}>
                Cactus Practice
              </Text>
              <Image
                style={[styles.arrowrightIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/iconchevrondown2.png")}
              />
            </View>
          </View>
          <View style={[styles.activateButton1, styles.helpSpaceBlock]}>
            <Text style={styles.activateAccount}>Activate account</Text>
            <Image
              style={[styles.arrowrightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/--arrowright.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.verifyYourAccountParent, styles.verifyLayout]}>
        <View style={[styles.verifyYourAccount, styles.verifyLayout]}>
          <Image
            style={styles.rightBand2}
            contentFit="cover"
            source={require("../assets/right-band-2.png")}
          />
          <Image
            style={styles.rightBand1}
            contentFit="cover"
            source={require("../assets/right-band-1.png")}
          />
          <View style={[styles.verifyYourAccountChild, styles.groupItemLayout]} />
          <View style={[styles.verifyYourAccountInner, styles.groupLayout]}>
            <View style={[styles.ellipseParent, styles.groupLayout]}>
              <Image
                style={[styles.ellipseParent, styles.groupLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-437.png")}
              />
              <Text style={[styles.text1, styles.textTypo2]}>5</Text>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <View>
            <View>
              <Text style={[styles.verifyYourAccount1, styles.text7Layout]}>
                Verify your account
              </Text>
              <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
                <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <View style={[styles.groupInner, styles.groupInnerLayout]} />
                  <View style={[styles.rectangleView, styles.groupInnerLayout]} />
                  <View style={[styles.ellipseParent, styles.groupLayout]}>
                    <View style={[styles.ellipseParent, styles.groupLayout]}>
                      <Image
                        style={[styles.ellipseParent, styles.groupLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-435.png")}
                      />
                      <Text style={styles.text2}>1</Text>
                    </View>
                  </View>
                  <View style={[styles.groupFrame, styles.groupLayout]}>
                    <View style={[styles.ellipseParent, styles.groupLayout]}>
                      <Image
                        style={[styles.ellipseParent, styles.groupLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-436.png")}
                      />
                      <Text style={[styles.text3, styles.textTypo2]}>2</Text>
                    </View>
                  </View>
                  <View style={[styles.groupView, styles.groupLayout]}>
                    <View style={[styles.ellipseParent, styles.groupLayout]}>
                      <Image
                        style={[styles.ellipseParent, styles.groupLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-4371.png")}
                      />
                      <Text style={[styles.text4, styles.textTypo2]}>3</Text>
                    </View>
                  </View>
                  <View style={[styles.groupWrapper1, styles.groupLayout]}>
                    <View style={[styles.ellipseParent, styles.groupLayout]}>
                      <Image
                        style={[styles.ellipseParent, styles.groupLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-4372.png")}
                      />
                      <Text style={[styles.text4, styles.textTypo2]}>4</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.tellUsMoreAboutYourBusineParent}>
              <Text style={[styles.tellUsMore, styles.text7Layout]}>
                Tell us more about your business
              </Text>
              <View style={styles.ctaWrapper}>
                <Pressable onPress={handlePress}>
                  <View style={[styles.cta, styles.activateFlexBox]}>
                    <Text style={[styles.continue, styles.text7Layout]}>
                      Continue
                    </Text>
                    <Image
                      style={[styles.fillArrowLeft, styles.iconLayout2]}
                      contentFit="cover"
                      source={require("../assets/-fill--arrowleft.png")}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VerificationProgress;

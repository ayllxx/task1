import React, { useState, useEffect } from "react";
import { Text, View, Pressable, ScrollView, TextInput, Picker, Alert, Image, ActivityIndicator } from "react-native";
import MenuItems from "../components/MenuItems";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import styles from "../styles/DashboardStyles";
import styles1 from "../styles/Dashboard1Styles";
import VerificationProgress from "../components/VerificationProgress";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase"; // Import firestore correctly
import TotalInstallationsChart from "../components/charts/TotalInstallationsChart";
import InteractiveChart from "../components/charts/InteractiveChart";
import DataTransferredChart from "../components/charts/DataTransferredChart";
import ConnectionsEstablished from "../components/charts/ConnectionsChart";
import DisputesChart from "../components/charts/DisputesChart";

const Dashboard = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("7");
  const [selectedButton, setSelectedButton] = useState('12 Months');
  const [selectedButtonInstall, setSelectedButtonInstall] = useState('6 Months');
  const [topPosition, setTopPosition] = useState(0); // Initial top position
  const [isVerified, setIsVerified] = useState(false);
  const [timeframe, setTimeframe] = useState('12months');
  const [loading, setLoading] = useState(true); // Loader state

  const data = {
    '12months': [
        { shortName: 'Feb', fullName: 'February', uv: 50, pv: 40 },
        { shortName: 'Mar', fullName: 'March', uv: 60, pv: 50 },
        { shortName: 'Apr', fullName: 'April', uv: 55, pv: 45 },
        { shortName: 'May', fullName: 'May', uv: 70, pv: 60 },
        { shortName: 'Jun', fullName: 'June', uv: 75, pv: 65 },
        { shortName: 'Jul', fullName: 'July', uv: 80, pv: 70 },
        { shortName: 'Aug', fullName: 'August', uv: 85, pv: 75 },
        { shortName: 'Sep', fullName: 'September', uv: 90, pv: 80 },
        { shortName: 'Oct', fullName: 'October', uv: 100, pv: 90 },
        { shortName: 'Nov', fullName: 'November', uv: 110, pv: 100 },
        { shortName: 'Dec', fullName: 'December', uv: 120, pv: 110 },
        { shortName: 'Jan', fullName: 'January', uv: 130, pv: 120 }
    ],
  };

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
      if (isAuthenticated) {
        setTopPosition(topPosition - 275); // Move up 275px if authenticated
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
      Alert.alert("Error", "There was an error checking the authentication status.");
    } finally {
      setLoading(false); // Hide the loader
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.dashboard}>
      <View style={styles.sidebar}>
        <View style={styles.logo}>
          <Image
            style={[styles.logoChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
        </View>
        <MenuItems
          home={require("../assets/home.png")}
          menuItemTop={-3}
          propColor="#635bff"
        />
        <View style={styles.bottom}>
          <View style={styles.logout}>
            <View style={styles.logoutChild} />
          </View>
        </View>
        <Image
          style={[styles.iconlybulklogout, styles.figiftIconLayout]}
          contentFit="cover"
          source={require("../assets/iconlybulklogout.png")}
        />
        <Text style={[styles.logout1, styles.logout1Typo]}>Logout</Text>
        <View style={styles.banner}>
          <View style={styles.container}>
            <View style={styles.figiftParent}>
              <Image
                style={[styles.figiftIcon, styles.figiftIconLayout]}
                contentFit="cover"
                source={require("../assets/figift.png")}
              />
              <Text style={[styles.freeGiftAwaits, styles.freeGiftAwaitsTypo]}>
                Free Gift Awaits You!
              </Text>
            </View>
            <View style={styles.upgradeYourAccountParent}>
              <Text style={[styles.upgradeYourAccount, styles.freeGiftAwaitsTypo]}>
                Upgrade your account
              </Text>
              <Image
                style={[styles.fichevronDownIcon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/fichevrondown.png")}
              />
            </View>
          </View>
        </View>
        {!isVerified && (
          <Pressable style={[styles1.activateButton, styles1.activateFlexBox]}>
            <Text style={styles1.activateAccount}>Activate account</Text>
            <Image
              style={[styles1.arrowrightIcon, styles1.iconLayout1]}
              contentFit="cover"
              source={require("../assets/--arrowright.png")}
            />
          </Pressable>
        )}

        <View style={styles.testdata}>
          <Text style={[styles.testData, styles.testDataTypo]}>Test data</Text>
          <Pressable
            style={styles.elementsLivemodeswitchoff}
            onPress={() => navigation.navigate("Dashboard1")}
          >
            <View style={[styles.track, styles.bg3Layout]} />
            <Image
              style={[styles.bobIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/bob.png")}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.right}>
        <View style={styles.globaltab}>
          <View style={styles.tabWrapper}>
            <Text style={[styles.testData, styles.testDataTypo]}>Developers</Text>
          </View>
        </View>
        <View style={styles.spacer40px} />
      </View>
      {/* Last 7 days */}
      <View style={[styles.dateControlWrapper,{ top: 706 + topPosition }]}>
        <Picker
          selectedValue={selectedValue}
          style={[styles.text, styles.dateControl]}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            setTimeframe(itemValue);  // update the timeframe when selectedValue changes
          }}
        >
          <Picker.Item label="Last 7 days" value="7days" />
          <Picker.Item label="Month" value="30days" />
          <Picker.Item label="6 Months" value="6months" />
          <Picker.Item label="Year" value="12months" />
        </Picker>
      </View>

      <Image
        style={[styles.dashboardChild, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      {/* TOP RIGHT HAND GROUP */}
      <View style={styles.toolbar}>
        <View style={[styles.rightGroup, styles.groupIconFlexBox]}>
          <Pressable style={[styles.createButton, styles.searchFlexBox]}>
            <Text style={[styles.create, styles.accountTypo]}>Create</Text>
            <Image
              style={[styles.chevrondownIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/--chevrondown.png")}
            />
          </Pressable>
          <Pressable style={[styles.help, styles.helpSpaceBlock]}>
            <Image
              style={styles.iconLayout2}
              contentFit="cover"
              source={require("../assets/--help.png")}
            />
            <Text style={[styles.help1, styles.accountTypo]}>Help</Text>
          </Pressable>
          <View style={styles.helpSpaceBlock}>
            <Pressable style={styles.iconLayout2}>
              <Image
                style={[styles.notificationsIcon, styles.iconPosition1]}
                contentFit="cover"
                source={require("../assets/--notifications.png")}
              />
              <Pressable style={[styles.badgeCount, styles.text1Layout]}>
                <Image
                  style={[styles.backgroundIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/background.png")}
                />
                <Text style={[styles.text1, styles.text1Layout]}>1</Text>
              </Pressable>
            </Pressable>
            <Pressable>
              <Image
                style={[styles.settingsIcon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/--settings.png")}
              />
            </Pressable>
            <Pressable>
              <Image
                style={[styles.settingsIcon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/--person.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.leftGroup, styles.groupIconFlexBox]}>
          <View style={styles.accountswitchercactuspractice}>
            <View style={styles.accountswitcher1}>
              <Image
                style={styles.accountIconLayout}
                contentFit="cover"
                source={require("../assets/account-icon1.png")}
              />
              <Text style={[styles.accountName1, styles.accountTypo]}>
                Cactus Practice
              </Text>
              <Image
                style={[styles.iconchevrondown, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/iconchevrondown2.png")}
              />
            </View>
          </View>
          <View style={[styles.activateButton, styles.helpSpaceBlock]}>
            <Text style={[styles.activateAccount, styles.accountTypo]}>V</Text>
            <Image
              style={[styles.arrowrightIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/--arrowright.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.chartBottom, styles.trackBorder]} />
      <Image
        style={styles.dashboardItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <GroupComponent style={[{ top: 600 + topPosition }]} />
      <VerificationProgress style={[{ top: 600 + topPosition }]} />
      <View style={[styles.chart, styles.chartPosition1, { top: 340 + topPosition }]}>
        <View style={[styles.bg, styles.bgBorder]} />
        <View style={[styles.lines, styles.linesPosition]}></View>
        <View style={[styles.graph, styles.linesPosition]}>
          <InteractiveChart />
        </View>
        <Text style={[styles.text2, styles.textTypo1]}>Virtual cards issued</Text>

        <Text style={[styles.text4, styles.textTypo]}>5,987</Text>
        <Image
          style={[styles.glyphIcon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/glyph.png")}
        />
      </View>
      {/* Total Installation */}
      
      <View style={[styles.chart2, styles.chartPosition1, { top: 340 + topPosition }]}>
        
        <View style={[styles.bg2, styles.bg2Position]} />
        
        <Text style={[styles.text5, styles.textPosition]}>Total Installation</Text>
        <Text style={[styles.text6, styles.textPosition]}>5,987</Text>
        
        <TotalInstallationsChart />
        
      </View>

      <View style={[styles.chart21, styles.chartLayout, { top: 743 + topPosition }]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <DataTransferredChart timeframe={timeframe} />
        <Text style={[styles.primary, styles.primaryTypo]}>
          <Text style={styles.text7}>{`15,345+   `}</Text>
          <Text style={styles.documentsTransfered}>Documents Transfered</Text>
        </Text>
        <Text style={[styles.title, styles.titleTypo]}>Data Transferred</Text>
        <View style={[styles.deprecatedBadge, styles.deprecatedPosition]}>
          <View style={[styles.badgebase, styles.badgebaseSpaceBlock]}>
            <Image
              style={[styles.leftwrapperIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/leftwrapper.png")}
            />
            <Text style={[styles.badgeLabel, styles.badgeTypo]}>Positive</Text>
            <Image
              style={[styles.rightwrapperIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rightwrapper.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.chart3, styles.chartLayout, { top: 743 + topPosition }]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <ConnectionsEstablished timeframe={timeframe} />
        <Text style={[styles.primary1, styles.primaryTypo]}>
          <Text style={styles.text7}>{`100  `}</Text>
          <Text style={styles.documentsTransfered}>Connections Established</Text>
        </Text>
        <View style={[styles.titleWrapper, styles.titlePosition]}>
          <Text style={styles.titleTypo}>Connections</Text>
        </View>
        <View style={[styles.deprecatedBadge1, styles.deprecatedLayout]}>
          <View style={[styles.badgebase1, styles.badgebaseSpaceBlock]}>
            <Image
              style={[styles.leftwrapperIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/leftwrapper1.png")}
            />
            <Text style={[styles.badgeLabel1, styles.badgeTypo]}>Negative</Text>
            <Image
              style={[styles.rightwrapperIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rightwrapper1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.chart4, styles.chartLayout, { top: 743 + topPosition }]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <DisputesChart timeframe={timeframe} />
        <Text style={[styles.primary2, styles.primaryTypo]}>5</Text>
        <Text style={[styles.title2, styles.titleTypo]}>Disputes</Text>
        <View style={[styles.deprecatedBadge2, styles.deprecatedLayout]}>
          <View style={[styles.badgebase1, styles.badgebaseSpaceBlock]}>
            <Image
              style={[styles.leftwrapperIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/leftwrapper2.png")}
            />
            <Text style={[styles.badgeLabel1, styles.badgeTypo]}>Negative</Text>
            <Image
              style={[styles.rightwrapperIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rightwrapper2.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.searchWrapper}>
        <View style={[styles.search2, styles.searchFlexBox]}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/--search.png")}
          />
          <TextInput
            style={[styles.search1, { outline: "none" }]}
            placeholder="Search..."
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};


export default Dashboard;

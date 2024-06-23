import * as React from "react";

import { Text, View, Pressable, ScrollView, TextInput, Picker,Image } from "react-native";
import MenuItems from "../components/MenuItems";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import styles from "../styles/DashboardStyles";
import { useState } from 'react';


const Dashboard = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("7");
  const [selectedButton, setSelectedButton] = useState('12 Months');
  const [selectedButtonInstall, setSelectedButtonInstall] = useState('6 Months');

  const handlePress = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const handlePress2 = (buttonName) => {
    setSelectedButtonInstall(buttonName);
  };

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
        propColor="#635bff" />
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
              <Text
                style={[styles.upgradeYourAccount, styles.freeGiftAwaitsTypo]}
              >
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
            <Text style={[styles.testData, styles.testDataTypo]}>
              Developers
            </Text>
          </View>
        </View>
        <View style={styles.spacer40px} />
      </View>
      {/*Last 7 days*/}

      <View style={styles.dateControlWrapper}>


        <Picker
          selectedValue={selectedValue}
          style={[styles.text, styles.dateControl]}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);

          }}
        >
          <Picker.Item label="Last 7 days" value="7" />
          <Picker.Item label="Last 14 days" value="14" />
          <Picker.Item label="Month" value="30" />
          <Picker.Item label="6 Months" value="180" />
          <Picker.Item label="Year" value="365" />
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
      {/*group comp*/}
      <GroupComponent />
      <View style={[styles.chart, styles.chartPosition1]}>
        <View style={[styles.bg, styles.bgBorder]} />
        <View style={[styles.lines, styles.linesPosition]}>
          <View style={[styles.linesChild, styles.linesChildPosition]} />
          <View style={[styles.linesItem, styles.linesChildPosition]} />
          <View style={[styles.linesInner, styles.linesChildPosition]} />
          <View style={[styles.lineView, styles.linesChildPosition]} />
          <View style={[styles.linesChild1, styles.linesChildPosition]} />
        </View>
        <View style={[styles.graph, styles.linesPosition]}>
          <Image
            style={[styles.bgIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.feb, styles.febTypo]}>Feb</Text>
          <Text style={[styles.mar, styles.febTypo]}>Mar</Text>
          <Text style={[styles.apr, styles.febTypo]}>Apr</Text>
          <Text style={[styles.may, styles.febTypo]}>May</Text>
          <Text style={[styles.jun, styles.febTypo]}>Jun</Text>
          <Text style={[styles.jul, styles.febTypo]}>Jul</Text>
          <Text style={[styles.aug, styles.febTypo]}>Aug</Text>
          <Text style={[styles.sep, styles.febTypo]}>Sep</Text>
          <Text style={[styles.oct, styles.febTypo]}>Oct</Text>
          <Text style={[styles.nov, styles.febTypo]}>Nov</Text>
          <Text style={[styles.dec, styles.febTypo]}>Dec</Text>
          <Text style={[styles.jan, styles.febTypo]}>Jan</Text>
        </View>
        <View style={[styles.chartChild, styles.bgBorder]} />
        <Image
          style={[styles.chartItem, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={[styles.text2, styles.textTypo1]}>
          Virtual cards issued
        </Text>
        <View style={styles.popup}>
          <View style={[styles.union, styles.bg1ShadowBox]}>
            <Image
              style={[styles.unionChild, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/polygon-1.png")}
            />
            <View style={[styles.bg1, styles.bg1ShadowBox]} />
          </View>
          <Text style={[styles.text3, styles.textTypo1]}>1,232</Text>
          <Text style={[styles.june2022, styles.logout1Typo]}>June 2022</Text>
        </View>
        <View style={styles.buttonprimarywithIconLeftParent}>
      <Pressable
        style={[
          styles.buttonprimarywithIconLeft,
          selectedButton === '12 Months' && styles.selectedButton,
        ]}
        onPress={() => handlePress('12 Months')}
      >
        <View style={[styles.iconParent, styles.groupIconFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Text
            style={[
              styles.buttonName,
              styles.buttonTypo1,
              selectedButton === '12 Months' && styles.selectedText,
            ]}
          >
            12 Months
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.buttonprimarywithIconLeft1,
          styles.buttonprimarywithIconLayout1,
          selectedButton === '6 Months' && styles.selectedButton,
        ]}
        onPress={() => handlePress('6 Months')}
      >
        <View style={[styles.iconParent, styles.groupIconFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
          <Text
            style={[
              styles.buttonName1,
              styles.buttonTypo1,
              selectedButton === '6 Months' && styles.selectedText,
            ]}
          >
            6 Months
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.buttonprimarywithIconLeft2,
          styles.buttonprimarywithIconLayout1,
          selectedButton === '30 Days' && styles.selectedButton,
        ]}
        onPress={() => handlePress('30 Days')}
      >
        <View style={[styles.iconParent, styles.groupIconFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Text
            style={[
              styles.buttonName1,
              styles.buttonTypo1,
              selectedButton === '30 Days' && styles.selectedText,
            ]}
          >
            30 Days
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.buttonprimarywithIconLeft3,
          styles.buttonprimarywithIconLayout1,
          selectedButton === '7 Days' && styles.selectedButton,
        ]}
        onPress={() => handlePress('7 Days')}
      >
        <View style={[styles.iconParent, styles.groupIconFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon3.png")}
          />
          <Text
            style={[
              styles.buttonName1,
              styles.buttonTypo1,
              selectedButton === '7 Days' && styles.selectedText,
            ]}
          >
            7 Days
          </Text>
        </View>
      </Pressable>
    </View>
        <Text style={[styles.text4, styles.textTypo]}>5,987</Text>
        <Image
          style={[styles.glyphIcon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/glyph.png")}
        />
      </View>
      {/*Total Installation*/}
      <View style={[styles.chart2, styles.chartPosition1]}>
        <View style={[styles.bg2, styles.bg2Position]} />
        
        <Text
          style={[styles.text5, styles.textPosition]}
        >{`Totall Installation  `}</Text>
        <View
          style={[styles.buttonprimarywithIconLeftGroup, styles.textPosition]}
        >
          <View>
      <Pressable
        style={[
          styles.buttonprimarywithIconLeft4,
          selectedButtonInstall === '12 Month' && styles.selectedButtonInstall,
        ]}
        onPress={() => handlePress2('12 Month')}
      >
        <View style={[styles.iconParent1, styles.groupIconFlexBox]}>
          <Image
            style={[styles.icon4, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon4.png")}
          />
          <Text
            style={[
              styles.buttonName4,
              styles.buttonTypo,
              selectedButtonInstall === '12 Month' && styles.selectedTextInstall,
            ]}
          >
            12 Months
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.buttonprimarywithIconLeft5,
          styles.buttonprimarywithIconLayout,
          selectedButtonInstall === '6 Months' && styles.selectedButtonInstall,
        ]}
        onPress={() => handlePress2('6 Months')}
      >
        <View style={[styles.iconParent1, styles.groupIconFlexBox]}>
          <Image
            style={[styles.icon4, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon5.png")}
          />
          <Text
            style={[
              styles.buttonName5,
              styles.buttonTypo,
              selectedButtonInstall === '6 Months' && styles.selectedTextInstall,
            ]}
          >
            6 Months
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.buttonprimarywithIconLeft6,
          styles.buttonprimarywithIconLayout,
          selectedButtonInstall === '30 Days' && styles.selectedButtonInstall,
        ]}
        onPress={() => handlePress2('30 Days')}
      >
        <View style={[styles.iconParent1, styles.groupIconFlexBox]}>
          <Image
            style={[styles.icon4, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon6.png")}
          />
          <Text
            style={[
              styles.buttonName5,
              styles.buttonTypo,
              selectedButtonInstall === '30 Days' && styles.selectedTextInstall,
            ]}
          >
            30 Days
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.buttonprimarywithIconLeft7,
          styles.buttonprimarywithIconLayout,
          selectedButtonInstall === '7 Days' && styles.selectedButtonInstall,
        ]}
        onPress={() => handlePress2('7 Days')}
      >
        <View style={[styles.iconParent1, styles.groupIconFlexBox]}>
          <Image
            style={[styles.icon4, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon7.png")}
          />
          <Text
            style={[
              styles.buttonName5,
              styles.buttonTypo,
              selectedButtonInstall === '7 Days' && styles.selectedTextInstall,
            ]}
          >
            7 Days
          </Text>
        </View>
      </Pressable>
    </View>
        </View>
        <Image
          style={[styles.bgIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <Text style={[styles.text6, styles.textPosition]}>5,987</Text>
      </View>
      <View style={[styles.chart21, styles.chartLayout]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <Image
          style={[styles.bgIcon2, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg2.png")}
        />
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
      <View style={[styles.chart3, styles.chartLayout]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <Image
          style={[styles.bgIcon2, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg3.png")}
        />
        <Text style={[styles.primary1, styles.primaryTypo]}>
          <Text style={styles.text7}>{`100  `}</Text>
          <Text style={styles.documentsTransfered}>
            Connections Established
          </Text>
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
      <View style={[styles.chart4, styles.chartLayout]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <Image
          style={[styles.bgIcon2, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg4.png")}
        />
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
            onChangeText={text => console.log(text)}
          />
        </View>
      </View>
    </ScrollView>

  );
};



export default Dashboard;

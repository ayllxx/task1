import * as React from "react";

import {Text, View, Pressable, TextInput,Picker,Image } from "react-native";
import MenuItems from "../components/MenuItems";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import styles from "../styles/Dashboard1Styles";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from 'react';

const Dashboard1 = () => {
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
      <View style={styles.searchWrapper}>
        <View style={[styles.search2, styles.searchFlexBox]}>
          <Image
            style={styles.iconSearch}
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
      <View style={[styles.sidebar, styles.sidebarPosition]}>
        <View style={styles.logo}>
          <Image
            style={[styles.logoChild, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
          <Text style={styles.metrix}>Metrix</Text>
        </View>
        <MenuItems
          home={require("../assets/home1.png")}
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

        <View style={[styles.activateButton, styles.activateFlexBox]}>
          <Text style={styles.activateAccount}>Activate account</Text>
          <Image
            style={[styles.arrowrightIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/--arrowright.png")}
          />
        </View>
        <View style={styles.testdata}>
          <Text style={styles.testData}>Test data</Text>
          <View
            style={[styles.elementsLivemodeswitchoff, styles.elementsLayout]}
          >
            <View style={[styles.track, styles.trackPosition]} />
            <Image
              style={[styles.bobIcon, styles.bobIconLayout]}
              contentFit="cover"
              source={require("../assets/bob2.png")}
            />
          </View>
          <Pressable
            style={styles.elementsLayout}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <View style={[styles.track1, styles.trackPosition]} />
            <Image
              style={[styles.bobIcon1, styles.bobIconLayout]}
              contentFit="cover"
              source={require("../assets/bob2.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.dev, styles.devSpaceBlock]}>
          <Image
            style={styles.codeIcon}
            contentFit="cover"
            source={require("../assets/code.png")}
          />
          <Text style={[styles.developers, styles.developersTypo]}>
            Developers
          </Text>
        </View>
      </View>

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
          <View
            style={[styles.verifyYourAccountChild, styles.groupItemLayout]}
          />
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
                <View
                  style={[styles.rectangleParent, styles.groupWrapperLayout]}
                >
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <View style={[styles.groupInner, styles.groupInnerLayout]} />
                  <View
                    style={[styles.rectangleView, styles.groupInnerLayout]}
                  />
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
              </View>
            </View>
          </View>
        </View>
      </View>
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
            style={styles.bgIcon}
            contentFit="cover"
            source={require("../assets/bg5.png")}
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
          style={[styles.chartItem, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-111.png")}
        />
        <Text style={[styles.text7, styles.textTypo1]}>
          Virtual cards issued
        </Text>
        <View style={styles.popup}>
          <View style={[styles.union, styles.bg1ShadowBox]}>
            <Image
              style={[styles.unionChild, styles.childIconLayout]}
              contentFit="cover"
              source={require("../assets/polygon-11.png")}
            />
            <View style={[styles.bg1, styles.bg1ShadowBox]} />
          </View>
          <Text style={[styles.text8, styles.textTypo1]}>1,232</Text>
          <Text style={[styles.june2022, styles.logout1Typo]}>June 2022</Text>
        </View>
        <View style={styles.buttonprimarywithIconLeftParent}>
        <Pressable
        style={[
          styles.buttonprimarywithIconLeft,
          styles.buttonprimarywithIconLayout2,
          selectedButton === '7 Days' && styles.selectedButton,
        ]}
        onPress={() => handlePress('7 Days')}
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
              selectedButton === '7 Days' && styles.selectedText,
            ]}
          >
           7 Days
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
          selectedButton === '12 Months' && styles.selectedButton,
        ]}
        onPress={() => handlePress('12 Months')}
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
              selectedButton === '12 Months' && styles.selectedText,
            ]}
          >
            12 Months
          </Text>
        </View>
      </Pressable>
      
    </View>
        <Text style={[styles.text9, styles.textTypo]}>5,987</Text>
        <Image
          style={[styles.glyphIcon, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/glyph2.png")}
        />
      </View>
      <View style={[styles.chart5, styles.chartPosition1]}>
        <View style={[styles.bg2, styles.bg2Position]} />
        <Image
          style={[styles.glyphIcon1, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/glyph1.png")}
        />
        <Text
          style={[styles.text10, styles.textPosition]}
        >{`Totall Installation  `}</Text>
        <View
          style={[styles.buttonprimarywithIconLeftGroup, styles.textPosition]}
        >
         
            <Pressable
        style={[
          styles.buttonprimarywithIconLeft4,
          styles.buttonprimarywithIconLayout,
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
        <Image
          style={[styles.bgIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <Text style={[styles.text11, styles.textPosition]}>5,987</Text>
      </View>
      <View style={styles.chart2}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <Image
          style={[styles.bgIcon2, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg9.png")}
        />
        <Text style={[styles.primary, styles.primaryTypo]}>
          <Text style={styles.text12}>{`15,345+   `}</Text>
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
      <View style={[styles.chart3, styles.chartPosition]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <Image
          style={[styles.bgIcon2, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg10.png")}
        />
        <Text style={[styles.primary1, styles.primaryTypo]}>
          <Text style={styles.text12}>{`100  `}</Text>
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
      <View style={[styles.chart4, styles.chartPosition]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <Image
          style={[styles.bgIcon2, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg11.png")}
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
      <GroupComponent rectangleViewTop={983} />

    </ScrollView>
  );
};



export default Dashboard1;

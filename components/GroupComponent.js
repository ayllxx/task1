import React, { useMemo } from "react";
import { Text, StyleSheet, View,Image } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color,} from "../GlobalStyles2";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ rectangleViewTop }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangleViewTop),
    };
  }, [rectangleViewTop]);

  return (
    <View style={[styles.dashboardInner, groupViewStyle]}>
      <View style={[styles.dataParent, styles.dataPosition]}>
        <View style={[styles.data, styles.dataPosition]}>
          <View style={[styles.top, styles.topFlexBox]}>
            <Text style={styles.title}>All services are online</Text>
          </View>
          <View style={styles.list}>
            <View style={[styles.top, styles.topFlexBox]}>
              <View style={styles.content}>
                <View style={[styles.top, styles.topFlexBox]}>
                  <View style={styles.barSpaceBlock}>
                    <Text style={styles.api}>API</Text>
                  </View>
                  <View style={[styles.status, styles.statusSpaceBlock]}>
                    <View style={[styles.badge, styles.badgePosition]}>
                      <View style={[styles.badgeBase, styles.badgeSpaceBlock]}>
                        <Image
                          style={styles.dotIcon}
                          contentFit="cover"
                          source={require("../assets/-dot.png")}
                        />
                        <Text style={[styles.text, styles.textTypo]}>
                          Online
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.bar, styles.barSpaceBlock]}>
              <View style={styles.barChild} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
            </View>
            <View style={styles.divider} />
            <View style={styles.containerWrapper}>
              <View style={[styles.container1, styles.topFlexBox]}>
                <View style={styles.content}>
                  <View style={[styles.top, styles.topFlexBox]}>
                    <View style={styles.barSpaceBlock}>
                      <Text style={styles.api}>Webhooks</Text>
                    </View>
                    <View style={[styles.status, styles.statusSpaceBlock]}>
                      <View style={[styles.badge, styles.badgePosition]}>
                        <View
                          style={[styles.badgeBase, styles.badgeSpaceBlock]}
                        >
                          <Image
                            style={styles.dotIcon}
                            contentFit="cover"
                            source={require("../assets/-dot.png")}
                          />
                          <Text style={[styles.text, styles.textTypo]}>
                            Online
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.bar, styles.barSpaceBlock]}>
              <View style={styles.barChild} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
            </View>
            <View style={styles.divider} />
            <View style={styles.containerWrapper}>
              <View style={[styles.container1, styles.topFlexBox]}>
                <View style={styles.content}>
                  <View style={[styles.top, styles.topFlexBox]}>
                    <View style={styles.barSpaceBlock}>
                      <Text style={styles.api}>Dashboard</Text>
                    </View>
                    <View style={[styles.status, styles.statusSpaceBlock]}>
                      <View style={[styles.badge2, styles.badgePosition]}>
                        <View
                          style={[styles.badgeBase2, styles.badgeSpaceBlock]}
                        >
                          <Image
                            style={styles.dotIcon}
                            contentFit="cover"
                            source={require("../assets/-dot1.png")}
                          />
                          <Text style={[styles.text2, styles.textTypo]}>
                            Down
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.bar, styles.barSpaceBlock]}>
              <View style={styles.barChild} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barChild318, styles.barChildLayout]} />
              <View style={[styles.barChild318, styles.barChildLayout]} />
              <View style={[styles.barChild318, styles.barChildLayout]} />
            </View>
            <View style={styles.divider} />
            <View style={styles.containerWrapper}>
              <View>
                <View style={[styles.container1, styles.topFlexBox]}>
                  <View style={styles.content}>
                    <View style={[styles.top, styles.topFlexBox]}>
                      <View style={styles.barSpaceBlock}>
                        <Text style={styles.api}>DigiRoad.js</Text>
                      </View>
                      <View style={[styles.status3, styles.statusSpaceBlock]}>
                        <View style={[styles.badge3, styles.badgePosition]}>
                          <View
                            style={[styles.badgeBase3, styles.badgeSpaceBlock]}
                          >
                            <Image
                              style={styles.dotIcon}
                              contentFit="cover"
                              source={require("../assets/-dot2.png")}
                            />
                            <Text style={[styles.text3, styles.textTypo]}>
                              Partial degradation
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.bar, styles.barSpaceBlock]}>
              <View style={styles.barChild} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barItem, styles.barChildLayout]} />
              <View style={[styles.barChild424, styles.barChildLayout]} />
              <View style={[styles.barChild424, styles.barChildLayout]} />
              <View style={[styles.barChild424, styles.barChildLayout]} />
              <View style={[styles.barChild424, styles.barChildLayout]} />
              <View style={[styles.barChild424, styles.barChildLayout]} />
            </View>
            <View style={styles.divider} />
          </View>
          <View style={styles.containerWrapper}>
            <View style={[styles.container1, styles.topFlexBox]}>
              <View style={styles.content}>
                <View style={[styles.top, styles.topFlexBox]}>
                  <View style={styles.barSpaceBlock}>
                    <Text style={styles.api}>Support time</Text>
                  </View>
                  <View style={[styles.status, styles.statusSpaceBlock]}>
                    <View style={[styles.badge, styles.badgePosition]}>
                      <View style={[styles.badgeBase, styles.badgeSpaceBlock]}>
                        <Image
                          style={styles.dotIcon}
                          contentFit="cover"
                          source={require("../assets/-dot.png")}
                        />
                        <Text style={[styles.text, styles.textTypo]}>
                          Online
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.bar, styles.barSpaceBlock]}>
            <View style={styles.barChild} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
            <View style={[styles.barItem, styles.barChildLayout]} />
          </View>
        </View>
        <View style={styles.uptimeParent}>
          <Text style={[styles.uptime, styles.uptimeTypo]}>Uptime</Text>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-211.png")}
          />
          <Text style={[styles.partialDegradation, styles.uptimeTypo]}>
            Partial degradation
          </Text>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-22.png")}
          />
          <Text style={[styles.downTime, styles.uptimeTypo]}>Down time</Text>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-23.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataPosition: {
    left: 0,
    top: 0,
    width: 1141,
    position: "absolute",
  },
  topFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  statusSpaceBlock: {
    marginLeft: 8,
    height: 22,
  },
  badgePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    flexDirection: "row",
    position: "absolute",
  },
  badgeSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingTop: Padding.p_11xs,
    paddingLeft: Padding.p_7xs,
    justifyContent: "center",
    borderRadius: Border.br_base,
    paddingRight: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    marginLeft: 6,
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.semiBold11_size,
    FontFamily: FontFamily.textXsMedium,
    fontWeight: "500",
  },
  barSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
  },
  barChildLayout: {
    marginLeft: 4,
    height: 23,
    width: 6,
    borderRadius: Border.br_12xs,
  },
  uptimeTypo: {
    color: Color.black,
    FontFamily: FontFamily.label1Regular,
    fontSize: FontSize.size_lg_6,
    top: "0%",
    height: "100%",
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    bottom: "23.48%",
    top: "23.48%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "2.84%",
    height: "53.03%",
    overflow: "hidden",
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    FontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.neutral800,
    flex: 1,
  },
  top: {
    alignSelf: "stretch",
  },
  api: {
    fontSize: FontSize.bold16_size,
    FontFamily: FontFamily.textXsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.neutral800,
  },
  dotIcon: {
    width: 8,
    height: 8,
    overflow: "hidden",
  },
  text: {
    color: Color.success700,
  },
  badgeBase: {
    backgroundColor: Color.success50,
  },
  badge: {
    width: "108.33%",
    right: "-4.17%",
    left: "-4.17%",
  },
  status: {
    width: 60,
  },
  content: {
    flex: 1,
  },
  barChild: {
    height: 23,
    width: 6,
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorMediumspringgreen,
  },
  barItem: {
    backgroundColor: Color.colorMediumspringgreen,
    marginLeft: 4,
  },
  bar: {
    marginTop: 24,
  },
  divider: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 1,
    height: 1,
    marginTop: 24,
    alignSelf: "stretch",
  },
  container1: {
    width: 1109,
  },
  containerWrapper: {
    marginTop: 24,
  },
  text2: {
    color: Color.colorCrimson_100,
  },
  badgeBase2: {
    backgroundColor: Color.colorCrimson_200,
  },
  badge2: {
    width: "101.67%",
    right: "-0.83%",
    left: "-0.83%",
  },
  barChild318: {
    backgroundColor: Color.colorCrimson_100,
  },
  text3: {
    color: Color.colorGoldenrod_100,
  },
  badgeBase3: {
    backgroundColor: Color.colorGoldenrod_200,
  },
  badge3: {
    width: "102.99%",
    right: "-1.49%",
    left: "-1.49%",
  },
  status3: {
    width: 134,
  },
  barChild424: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  list: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  data: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorsWhite100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
  },
  uptime: {
    width: "12.9%",
    left: "5.35%",
  },
  groupChild: {
    top: "18.94%",
    right: "97.16%",
    bottom: "28.03%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "2.84%",
    height: "53.03%",
    overflow: "hidden",
    position: "absolute",
  },
  partialDegradation: {
    width: "34.28%",
    left: "32.39%",
  },
  groupItem: {
    right: "70.12%",
    left: "27.04%",
  },
  downTime: {
    width: "19.19%",
    left: "80.81%",
  },
  groupInner: {
    right: "21.68%",
    left: "75.48%",
  },
  uptimeParent: {
    height: "3.37%",
    width: "43.21%",
    top: "2.94%",
    right: "1.75%",
    bottom: "93.69%",
    left: "55.04%",
    position: "absolute",
  },
  dataParent: {
    height: 783,
  },
  dashboardInner: {
    top: 708,
    left: 259,
    height: 783,
    width: 1141,
    position: "absolute",
  },
});

export default GroupComponent;

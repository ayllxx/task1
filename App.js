import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import BusinessStructure from "./screens/BusinessStructure";
import BusinessRepresentative from "./screens/BusinessRepresentative";
import BusinessDetails from "./screens/BusinessDetails";
import BusinessOwners from "./screens/BusinessOwners";
import BusinessExecutives from "./screens/BusinessExecutives";
import BusinessDirectors from "./screens/BusinessDirectors";
import BankDetails from "./screens/BankDetails";
import SupportingDocuments from "./screens/SupportingDocuments";
import Authentication from "./screens/Authentication";
import Overview from "./screens/Overview";
import UnderReview from "./screens/UnderReview";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {hideSplashScreen && (
          <>
            <Stack.Screen
              name="Business Structure"
              component={BusinessStructure}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Business Representative"
              component={BusinessRepresentative}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Business Details"
              component={BusinessDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Business Owners"
              component={BusinessOwners}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Business Executives"
              component={BusinessExecutives}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Business Directors"
              component={BusinessDirectors}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bank Details"
              component={BankDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Supporting Documents"
              component={SupportingDocuments}
              options={{ headerShown: false }}
              
            />
            <Stack.Screen
              name="Authentication"
              component={Authentication}
              options={{ headerShown: false }}
              
            />
            <Stack.Screen
              name="Overview"
              component={Overview}
              options={{ headerShown: false }}
              
            />
            <Stack.Screen
              name="Under Review"
              component={UnderReview}
              options={{ headerShown: false }}
              
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
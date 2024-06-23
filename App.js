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
import Dashboard from "./screens/Dashboard";
import Dashboard1 from "./screens/Dashboard1";
import SideBar from "./components/SideBar";
import Group from "./components/Group";
import Menu from "./components/Menu";
import Menu1 from "./components/Menu1";
import Menu2 from "./components/Menu2";



const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "PlusJakartaSans-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "SFProText-Regular": require("./assets/fonts/SFProText-Regular.otf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "SFMedium": require("./assets/fonts/SFProMedium.ttf"),
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
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard1"
              component={Dashboard1}
              options={{ headerShown: false }}
            />
            
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
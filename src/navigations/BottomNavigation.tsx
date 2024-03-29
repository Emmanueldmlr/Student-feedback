import React, { useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainScreenProps, RootStackParamList } from "../types/NavigationType";
import { Icon, Text } from "@gluestack-ui/themed";
import { Bell, CirclePlus, LucideIcon, Newspaper, User } from "lucide-react-native";
import FeedsScreen from "../screens/Feeds";
import PostScreen from "../screens/Post";
import NotificationScreen from "../screens/Notification";
import ProfileScreen from "../screens/Profile";

const Tab = createBottomTabNavigator<RootStackParamList>();
const BottomScreen = ({ navigation, route }: MainScreenProps) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: LucideIcon = Newspaper;
          if (route.name === "Feeds") {
            iconName = Newspaper;
          } else if (route.name === "Post") {
            iconName = CirclePlus;
          }
          if (route.name === "Notification") {
            iconName = Bell;
          }
          if (route.name === "Profile") {
            iconName = User;
          }
          const iconColor = focused ? "#2B6F13" : "#333333";
          return <Icon as={iconName} size="xl" color={iconColor} />;
        },
        headerTitleAlign: "center",
        headerTintColor: "#333333",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 12,
          color: "#333333",
        },
        headerStyle: {
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        },
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 10,
          height: 70,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              fontWeight="$bold"
              fontSize="$sm"
              color={focused ? "#2B6F13" : "#333333"}
            >
              Feeds
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              fontWeight="$bold"
              fontSize="$sm"
              color={focused ? "#2B6F13" : "#333333"}
            >
              Post
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              fontWeight="$bold"
              fontSize="$sm"
              color={focused ? "#2B6F13" : "#333333"}
            >
              Notification
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              fontWeight="$bold"
              fontSize="$sm"
              color={focused ? "#2B6F13" : "#333333"}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomScreen;

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Feeds: undefined;
  Post: undefined;
  Main: { screen: keyof RootStackParamList };
  Profile: undefined;
  Notification: undefined;
};

export type NavigationProps = BottomTabNavigationProp<RootStackParamList>;


export type FeedsScreenProps = StackScreenProps<RootStackParamList, "Feeds">;
export type PostScreenProps = StackScreenProps<RootStackParamList, "Post">;
export type MainScreenProps = StackScreenProps<RootStackParamList, "Main">;

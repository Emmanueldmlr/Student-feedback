import {
  View,
  Text,
  VStack,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  Icon,
  Tabs,
 ScrollView
} from "@gluestack-ui/themed";
import { MessageCircle, Search, Upload } from "lucide-react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FeedbackCard } from "../components/FeedbackCard";
import Header from "../components/Header";

const FeedsScreen = () => {
  const [tabState, setTabState] = React.useState("tab1");
  return (
    <SafeAreaView>
      <VStack padding="$4" marginBottom="$8">
        <Header/>
        <Tabs value="tab1" marginTop="$2">
          <Tabs.TabList
            borderBottomColor="$#D9D9D9"
            borderBottomWidth={1}
            width="$full"
            alignItems="center"
            rounded="$none"
          >
            <Tabs.Tab
              value="tab1"
              flex={1}
              paddingVertical="$3"
              borderBottomColor={
                tabState === "tab1" ? "#2B6F13" : "transparent"
              }
              borderBottomWidth={tabState === "tab1" ? 2 : 0}
              onPress={() => setTabState("tab1")}
              rounded="$none"
            >
              <Tabs.TabTitle textAlign="center" fontSize="$md" color="#2B6F13">
                Resolved
              </Tabs.TabTitle>
            </Tabs.Tab>
            <Tabs.Tab
              value="tab2"
              flex={1}
              onPress={() => setTabState("tab2")}
              paddingVertical="$3"
              borderBottomColor={
                tabState === "tab2" ? "#2B6F13" : "transparent"
              }
              borderBottomWidth={tabState === "tab2" ? 2 : 0}
              rounded="$none"
            >
              <Tabs.TabTitle textAlign="center" fontSize="$md">
                Unresolved
              </Tabs.TabTitle>
            </Tabs.Tab>
          </Tabs.TabList>
          <Tabs.TabPanels>
            <Tabs.TabPanel value="tab1">
              <VStack marginTop="$4">
                <ScrollView
                  style={{
                    width: "100%",
                    height: "93%",
                  }}
                  showsVerticalScrollIndicator={false}
                >
                  <View
                    maxWidth="$40"
                    backgroundColor="$#FFF8E7"
                    padding="$4"
                    alignSelf="center"
                  >
                    <Text fontSize="$sm">Today, 10th of March</Text>
                  </View>
                  <FeedbackCard />
                  <FeedbackCard />
                  <FeedbackCard />
                  <FeedbackCard />
                </ScrollView>
              </VStack>
            </Tabs.TabPanel>
            <Tabs.TabPanel value="tab2">
              <VStack marginTop="$4">
                <ScrollView
                  style={{
                    width: "100%",
                    height: "93%",
                  }}
                  showsVerticalScrollIndicator={false}
                >
                  <View
                    maxWidth="$40"
                    backgroundColor="$#FFF8E7"
                    padding="$4"
                    alignSelf="center"
                  >
                    <Text fontSize="$sm">Today, 10th of March</Text>
                  </View>
                  <FeedbackCard />
                  <FeedbackCard />
                  <FeedbackCard />
                  <FeedbackCard />
                </ScrollView>
              </VStack>
            </Tabs.TabPanel>
          </Tabs.TabPanels>
        </Tabs>
      </VStack>
    </SafeAreaView>
  );
};

export default FeedsScreen;

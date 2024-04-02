import React from "react";
import { Center, Divider, HStack, Image, Text, View, VStack } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { FeedbackCard } from "../components/FeedbackCard";
import { ScrollView } from "react-native-gesture-handler";

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <VStack padding="$4" marginBottom="$8">
        <Header />
        <Center>
          <Image
            size="xl"
            source={{
              uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            }}
            alt="Profile Picture"
            mt="$5"
            rounded="$xl"
          />
          <Text fontSize="$md" mt="$4" color="#333333" fontWeight="$bold">
            Damilare Bakare
          </Text>
          <Text fontSize="$sm" mt="$2" color="#333333">
            drebakare@yahoo.com
          </Text>
          <HStack mt="$4" gap="$2">
            <HStack
              alignItems="center"
              gap="$1"
              bg="#FFF8E8"
              p="$3"
              rounded="$xl"
            >
              <Text fontSize="$sm" color="#333333" fontWeight="$bold">
                12
              </Text>
              <Text fontSize="$sm" color="#333333">
                Posts
              </Text>
            </HStack>
            <HStack
              alignItems="center"
              gap="$1"
              bg="#fff"
              p="$3"
              rounded="$xl"
              borderWidth="$1"
              borderColor="#333333"
            >
              <Text fontSize="$sm" color="#333333" fontWeight="$bold">
                1,234
              </Text>
              <Text fontSize="$sm" color="#333333">
                Comments
              </Text>
            </HStack>
            <HStack
              alignItems="center"
              gap="$1"
              bg="#FFF8E8"
              p="$3"
              rounded="$xl"
            >
              <Text fontSize="$sm" color="#333333" fontWeight="$bold">
                1,234
              </Text>
              <Text fontSize="$sm" color="#333333">
                Upvotes
              </Text>
            </HStack>
          </HStack>
        </Center>
        <Divider mt="$6" bg="#CACACA" />
        <VStack>
          <ScrollView
            style={{
              width: "100%",
              height: "50%",
            }}
            showsVerticalScrollIndicator={false}
          >
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </ScrollView>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}

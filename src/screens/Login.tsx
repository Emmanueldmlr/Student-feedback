import { Text, View, VStack, Icon, Input, InputField, Button } from "@gluestack-ui/themed";

import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { LoginIcon } from "../icons/LoginIcon";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        paddingHorizontal="$5"
        flex={1}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <VStack alignItems="center" gap="$5" marginBottom="$10">
          <Icon as={LoginIcon} size="xl" color="black" />
          <Text fontSize="$2xl" textAlign="center" color="#333333">
            Login to your account
          </Text>
        </VStack>
        <Text fontSize="$md" color="#121212" marginBottom="$2">
          Email
        </Text>
        <Input variant="rounded" size="xl" borderRadius={10}>
          <InputField fontSize="$sm" placeholder="Enter you Email" />
        </Input>
        <Text fontSize="$md" color="#121212" marginBottom="$2" marginTop="$5">
          Password
        </Text>
        <Input variant="rounded" size="xl" borderRadius={10}>
          <InputField fontSize="$sm" placeholder="Enter you Password" />
        </Input>
        <Text
          fontSize="$md"
          color="#154604"
          textAlign="right"
          marginBottom="$2"
          marginTop="$2"
        >
          Forgot Password?
        </Text>
        <Button marginTop="$10" backgroundColor="#154604" size="xl">
          <Text color="white" fontWeight="$bold">Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

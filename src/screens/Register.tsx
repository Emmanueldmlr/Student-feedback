import { Text, Input, InputField, View, HStack } from "@gluestack-ui/themed";
import { UserRoundPlus } from "lucide-react-native";
import React from "react";
import AuthWrapper from "../components/AuthWrapper";
import { RegisterIcon } from "../icons/RegisterIcon";


const RegistrationScreen = () => {
  return (
    <AuthWrapper
      icon={UserRoundPlus}
      buttonTitle="Sign up"
      title="Create a new account"
    >
      <HStack width="$full" gap="$4" marginBottom="$4">
        <View flex={1}>
          <Text fontSize="$md" color="#121212" marginBottom="$2">
            First Name
          </Text>
          <Input variant="rounded" size="xl" borderRadius={10}>
            <InputField fontSize="$sm" placeholder="Enter you First Name" />
          </Input>
        </View>
        <View flex={1}>
          <Text fontSize="$md" color="#121212" marginBottom="$2">
            Last Name
          </Text>
          <Input variant="rounded" size="xl" borderRadius={10}>
            <InputField fontSize="$sm" placeholder="Enter you Last Name" />
          </Input>
        </View>
      </HStack>
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
    </AuthWrapper>
  );
};

export default RegistrationScreen;

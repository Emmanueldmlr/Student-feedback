import { Text, Input, InputField } from "@gluestack-ui/themed";

import React from "react";
import { LoginIcon } from "../icons/LoginIcon";
import AuthWrapper from "../components/AuthWrapper";
import { LogIn } from "lucide-react-native";

const LoginScreen = () => {
  return (
    <AuthWrapper
      hasForgotElement={true}
      icon={LogIn}
      buttonTitle="Login"
      title="Login to your account"
    >
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

export default LoginScreen;

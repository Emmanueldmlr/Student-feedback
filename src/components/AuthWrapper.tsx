import { Button, Icon, Text, View, VStack } from "@gluestack-ui/themed";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AuthWrapper = ({
  icon,
  children,
  title,
  buttonTitle,
  hasForgotElement = false,
}: {
  icon: any;
  children: ReactNode;
  title: string;
  buttonTitle: string;
  hasForgotElement?: boolean;
}) => {
    const router = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        paddingHorizontal="$5"
        flex={1}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <VStack marginBottom="$10">
          <VStack gap="$2" marginBottom="$6" alignItems="center">
            <Icon as={icon} size="xl" color="black" />
            <Text fontSize="$2xl" textAlign="center" color="#333333">
              {title}
            </Text>
          </VStack>
          {children}
          {hasForgotElement && (
            <Text
              fontSize="$md"
              color="#154604"
              textAlign="right"
              marginBottom="$2"
              marginTop="$2"
            >
              Forgot Password?
            </Text>
          )}
          <Button marginTop="$10" backgroundColor="#154604" size="xl">
            <Text color="white" fontWeight="$bold">
              {buttonTitle}
            </Text>
          </Button>
          {hasForgotElement ? (
            <Text marginTop="$4" textAlign="center" fontSize="$sm">
              Don't have account?{" "}
              <Text
                color="#154604"
                fontWeight="$bold"
                onPress={() => router.navigate("Signup" as never)}
              >
                Create Account
              </Text>
            </Text>
          ) : (
            <Text marginTop="$4" textAlign="center" fontSize="$sm">
              Already have an account?{" "}
              <Text
                color="#154604"
                fontWeight="$bold"
                onPress={() => router.navigate("Login" as never)}
              >
                Login
              </Text>
            </Text>
          )}
        </VStack>
      </View>
    </SafeAreaView>
  );
};

export default AuthWrapper;

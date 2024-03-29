import {
  Text,
  VStack,
  Icon,
  Card,
  HStack,
  Image,
} from "@gluestack-ui/themed";
import { MessageCircle,  Upload } from "lucide-react-native";

export const FeedbackCard = () => {
  return (
    <Card size="md" elevation="$0" variant="elevated" m="$3">
      <HStack gap="$2">
        <HStack gap="$4" flex={1}>
          <Image
            alt="profile"
            size="xs"
            borderRadius={100}
            source={{
              uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            }}
          />
          <VStack gap="$1">
            <Text size="sm" fontWeight="$bold" color="$#4B4B4B">
              Bakare Damilare
            </Text>
            <Text size="xs" fontWeight="$light" color="$#2B6F13">
              Repair: Library Wing 1
            </Text>
          </VStack>
        </HStack>
        <Text size="xs" fontWeight="$light">
          10:23PM
        </Text>
      </HStack>
      <Text size="sm" marginTop="$4" color="$#333333">
        Even in my secondary school, we didn’t used to have rats in HOH library,
        talk more of a whole OAU what is this?
      </Text>
      <HStack marginTop="$4">
        <HStack alignItems="center" gap="$1" flex={1}>
          <Text size="sm" fontFamily="$heading" color="$#333333">
            14
          </Text>
          <Icon as={Upload} size="sm" mt="$0.5" ml="$0.5" mr="$1" />
          <Text size="sm" fontFamily="$heading" color="$#333333">
            Up votes
          </Text>
        </HStack>
        <HStack alignItems="center" gap="$1">
          <Text size="sm" fontFamily="$heading" color="$#333333">
            54
          </Text>
          <Icon as={MessageCircle} size="sm" mt="$0.5" ml="$0.5" mr="$1" />
          <Text size="sm" fontFamily="$heading" color="$#333333">
            Comments
          </Text>
        </HStack>
      </HStack>
    </Card>
  );
};

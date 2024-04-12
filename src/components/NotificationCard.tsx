import { Image, Text } from '@gluestack-ui/themed';
import { HStack, Icon, VStack } from '@gluestack-ui/themed';
import React from 'react'
import { ImageSourcePropType } from 'react-native/types';

const NotificationCard = ({icon, image, title, text}: {
    icon: any;
    image: ImageSourcePropType;
    title: string;
    text: string;
}) => {
  return (
    <HStack marginVertical="$2" bg="$#FAFAFA" padding="$6" gap="$6">
      <Icon as={icon} size="xl" mt="$0.5" ml="$0.5" mr="$1" />
      <VStack>
        <Text fontSize="$md" color="#333333" fontWeight="$bold">
          {title}
        </Text>
        <Text
          fontSize="$sm"
          color="#333333"
          maxWidth="90%"
          my="$2"
          fontStyle="italic"
          lineHeight="$md"
        >
            {text}
        </Text>
        <Image
          source={image}
          width="90%"
          alt="comment image"
          rounded="$md"
        />
      </VStack>
    </HStack>
  );
}

export default NotificationCard

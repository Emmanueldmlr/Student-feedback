import { HStack, Icon, Image, ScrollView, Text, View, VStack } from '@gluestack-ui/themed';
import { IconNode } from 'lucide-react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import NotificationCard from '../components/NotificationCard';
import { CommentIcon } from '../icons/CommentIcon';
import { InfoIcon } from '../icons/InfoIcon';
import { ResolvedIcon } from '../icons/ResolvedIcon';

const NotificationScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <View padding="$4">
          <Header />
        </View>
        <ScrollView
          style={{
            width: "100%",
            height: "88%",
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
          <NotificationCard
            icon={ResolvedIcon}
            image={require("../../assets/image.png")}
            title="Your complaint has been resolved!!"
            text="Even in my secondary school, we didn’t used to have rats in HOH libr...."
          />
          <NotificationCard
            icon={CommentIcon}
            image={require("../../assets/image.png")}
            title="Three new comments on your complaint"
            text="Even in my secondary school, we didn’t used to have rats in HOH libr...."
          />
          <NotificationCard
            icon={InfoIcon}
            image={require("../../assets/image.png")}
            title="Your post has been flagged!!"
            text="Even in my secondary school, we didn’t used to have rats in HOH libr...."
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default NotificationScreen;

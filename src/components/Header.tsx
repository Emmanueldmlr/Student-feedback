import { Input, InputSlot, InputIcon, Icon, InputField } from '@gluestack-ui/themed';
import React from 'react'
import {  Search } from "lucide-react-native";

const Header = () => {
  return (
    <Input borderColor="#E1E1E1" size="lg" rounded="$lg">
      <InputSlot marginLeft="$4">
        <InputIcon>
          <Icon as={Search} />
        </InputIcon>
      </InputSlot>
      <InputField
        color="$black"
        fontSize="$sm"
        placeholder="Search for anything"
      />
    </Input>
  );
}

export default Header

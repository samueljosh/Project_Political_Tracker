import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Pressable  } from 'react-native';
import {
  Avatar, HStack, NativeBaseProvider, Box, Stack, Center, Menu, HamburgerIcon,
} from "native-base"

export function TopMenu() {
  return (
    <Stack space={3} alignItems="center">
      {/* <Heading>HStack</Heading> */}
      <HStack space={3} alignItems="center">
        <Center
          width="100%"
          height="50px"
          bg="primary.50"
          rounded="md"
          _text={{
            color: "white",
          }}
          shadow={3}
        >
          <Menu
            trigger={(triggerProps) => {
              return (
                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                  <HamburgerIcon />
                </Pressable>
              )
            }}
          >    <Menu.Item>Arial</Menu.Item>

          </Menu>
        </Center>

      </HStack>
    </Stack>
  )
}


export const Tracking = () => {
  return (
    <HStack space={2}>
      <Avatar
        source={{
          uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
      >
        SS
      </Avatar>
      <Avatar
        source={{
          uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
        }}
      >
        GG
      </Avatar>
      <Avatar
        source={{
          uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
        }}
      >
        RS
      </Avatar>
      <Avatar
        source={{
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      >
        AK
      </Avatar>
    </HStack>
  )
}
export default function App() {
  return (
    <NativeBaseProvider>
      <Center>
        <TopMenu />
        <Tracking />
      </Center>

      <View style={styles.container}>
        <Box>Hello world</Box>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

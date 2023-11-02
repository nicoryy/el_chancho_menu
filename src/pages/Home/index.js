import { Box, Input, Text, Pressable, Avatar } from "native-base";
import React from "react";
import { light_blue, light_grey } from "../../theme/colors";
import { Keyboard } from "react-native";
import { logo } from "../../assets/assets";

export default function Home({navigation}) {
    return (
        <Pressable
            onPress={() => Keyboard.dismiss()}
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Avatar source={{uri:logo}} size={'2xl'} marginBottom={10}/>
            <Box alignItems={"center"} justifyContent={"center"} w={220}>
                <Input
                    borderRadius={5}
                    borderColor={light_grey}
                    variant={"outline"}
                    w={150}
                    placeholder="Mesa"
                    keyboardType="numeric"
                    h={45}
                />
                <Pressable
                    backgroundColor={light_blue}
                    paddingX={4}
                    paddingY={1}
                    borderWidth={2}
                    borderColor={light_grey}
                    borderRadius={5}
                    marginTop={5}
                    w={150}
                    h={45}
                    onPress={() => {
                        Keyboard.dismiss()
                        navigation.navigate('Menu')                        
                    }}
                >
                    <Text
                        color={"white"}
                        paddingTop={1}
                        textAlign={"center"}
                        fontWeight={600}
                    >
                        Começar
                    </Text>
                </Pressable>
            </Box>
        </Pressable>
    );
}

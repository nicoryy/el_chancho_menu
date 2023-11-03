import {
    Avatar,
    Box,
    FlatList,
    Heading,
    Icon,
    Image,
    Pressable,
    Stack,
    Text,
} from "native-base";
import React from "react";
import { bg_logo, logo } from "../../assets/assets";
import { Feather } from "@expo/vector-icons";
import { light_grey, white } from "../../theme/colors";
import { Alert } from "react-native";
import { data } from "../../data/menus";
import MenuItem from "../../components/MenuItem";

export default function Menu({ navigation }) {

    const renderItem = ({ item }) => <MenuItem data={item}/>

    return (
        <Box safeArea flex={1}>
            <Box
                justifyContent={"center"}
                w={"100%"}
                h={200}
                backgroundColor={"amber.300"}
                alignItems={"center"}
            >
                <Image
                    position={"absolute"}
                    src={bg_logo}
                    alt="bg_logo"
                    w={"100%"}
                    h={"100%"}
                />
                <Avatar size={"xl"} source={{ uri: logo }} />
                <Pressable
                    position={"absolute"}
                    right={5}
                    top={5}
                    borderRadius={24}
                    backgroundColor={white}
                    p={2}
                    onPress={() =>
                        Alert.alert(
                            "Error",
                            "Function still under development..."
                        )
                    }
                >
                    <Icon
                        as={Feather}
                        color={light_grey}
                        name="search"
                        size={"xl"}
                    />
                </Pressable>
            </Box>

            <Box p={5}>
                <Heading marginBottom={5}>Cardápio</Heading>
                <Stack>
                    <FlatList
                        marginBottom={260}
                        keyExtractor={ (item, index) => item.id }
                        numColumns={2}
                        data={data.menus}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={()=> <Box p={2}/>}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                    />
                </Stack>
            </Box>
        </Box>
    );
}

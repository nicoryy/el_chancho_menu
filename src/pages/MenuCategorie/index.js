import {
    Box,
    Divider,
    FlatList,
    Heading,
    Icon,
    Pressable,
    Text,
} from "native-base";
import { light_blue, light_grey } from "../../theme/colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { data } from "../../data/menus";
import Product from "../../components/Product";

export default function MenuCategorie(props) {
    const item = props.route.params;
    const navigation = useNavigation();

    const product_list = data[item.name];

    return (
        <Box safeArea>
            <Box
                h={100}
                backgroundColor={light_blue}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Pressable
                    position={"absolute"}
                    left={5}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        as={Feather}
                        name="arrow-left"
                        size={"lg"}
                        color={"white"}
                    />
                </Pressable>
                <Heading color={"white"} size={"md"}>
                    {item.name}
                </Heading>
            </Box>

            <Box>
                <FlatList
                    // marginBottom={180}
                    keyExtractor={(item, index) => item.id}
                    data={product_list}
                    renderItem={({ item }) => <Product data={item} />}
                    showsVerticalScrollIndicator={false}
                />
            </Box>
        </Box>
    );
}
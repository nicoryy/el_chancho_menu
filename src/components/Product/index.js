import { Box, Divider, Heading, Image, Pressable, Text } from "native-base";
import { light_grey } from "../../theme/colors";
import { Alert } from "react-native";

export default function Product({ data }) {
    return (
        <Pressable
            onLongPress={()=> Alert.alert('Error', "This function's still on development")}
            w={"100%"}
            h={100}
            flexDir={"row"}
            justifyContent={"space-between"}
            p={5}
            mb={5}
        >
            <Box w={200}>
                <Heading noOfLines={2} size={"sm"}>
                    {data.name} - SERVE {data.qtd} PESSOAS
                </Heading>
                <Text noOfLines={2} color={light_grey}>
                    {data.desc}
                </Text>
                <Heading size={"sm"}>R$ {data.price}</Heading>
            </Box>

            <Image
                src={data.imgUrl}
                alt="product img"
                w={"24"}
                h={"24"}
                borderRadius={10}
            />
            
            <Divider thickness={1} position={'absolute'} marginLeft={5} marginTop={2}/>
        </Pressable>
    );
}

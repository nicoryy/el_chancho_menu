import { Actionsheet, Box, Button, Divider, Heading, Image, Pressable, Text, useDisclose } from "native-base";
import { light_blue, light_grey } from "../../theme/colors";
import { Alert } from "react-native";

export default function Product({ data, classification }) {
    // console.log(classification.name);

    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();

    return (
        <Pressable
            onPress={onOpen}
            w={"100%"}
            h={100}
            flexDir={"row"}
            justifyContent={"space-between"}
            p={5}
            mb={5}
        >

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Box
                    width={'100%'}
                    alignItems={'center'}
                    gap={5}
                    >
                        <Image
                        src={data.imgUrl}
                        alt={data.name}
                        w={'100%'}
                        h={200}
                        borderRadius={15}
                        />
                        
                        <Heading>
                            {data.name}
                        </Heading>

                        <Text
                        pr={5}
                        pl={5}
                        >
                            {data.desc}
                        </Text>

                        <Box
                        w={'100%'}
                        flexDir={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        >
                            <Heading>
                                R$ {data.price}
                            </Heading>

                            <Button
                            backgroundColor={light_blue}
                            >
                                Comandar
                            </Button>
                        </Box>
                    </Box>
                </Actionsheet.Content>
            </Actionsheet>



            <Box w={200}>
                {classification.name == "ENTRADAS" ? 
                <Heading noOfLines={2} size={"sm"}>
                    {data.name} - SERVE {data.qtd} PESSOAS
                </Heading> : 
                <Heading noOfLines={2} size={"sm"}>
                    {data.name}
                </Heading>
            }
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

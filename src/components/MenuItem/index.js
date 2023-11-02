import { useNavigation } from "@react-navigation/native";
import { Box, Heading, Image, Pressable } from "native-base";
import { Alert } from "react-native";


export default function MenuItem({ data }){
    const navigation = useNavigation()

    return(
        <Pressable
            onPress={()=> {
                // Alert.alert('Categoria', data.name)
                navigation.navigate('MenuCategorie', {...data})
            }}
        >
            <Image
            src={data.imgUrl}
            alt={data.name}
            w={40}
            h={40}
            borderRadius={20}
            />
            <Heading isTruncated w={40} marginTop={2} size={"md"}>
                {data.name}
            </Heading>
        </Pressable>
    )
}
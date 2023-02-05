import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export function Header(){
    return(
         <Flex p="5" align="center" gap="5">
            <Image w="90" h="90" src="./img/3413591.png"/>
            <Flex direction="column">
                <Heading>Escola UA</Heading>
                <Text>Chakra UI </Text>
            </Flex>
         </Flex>
    )   
}
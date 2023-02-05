import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface VerticalCardProps{
    card:
        {
            image:{
                url: string;
                alt: string;
                },
            publish_date:string;
            title: string;
            content: string;  
        } 
    
}

export function VerticalCard({card}:VerticalCardProps){
    
    const{image,publish_date, title, content } = card

    return(
        <Flex>
        <Image src={image.url} alt={image.alt}/>
            <VStack>
            <Text>{publish_date}</Text>
            <Heading>{title}</Heading>
            <Text>{content}</Text>
            </VStack>
        </Flex>
    )
}
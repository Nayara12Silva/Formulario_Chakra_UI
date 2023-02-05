import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button} from "@chakra-ui/react";
import React from "react";

 export function CardVert(){
    return(
        <>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
>
         <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '300px' }}
            src="https://images.unsplash.com/photo-1673101075633-1732778c8da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt='Mullher'
         />

        <Stack>
        <CardBody>
            <Heading size='md'>The perfect latte</Heading>
            <Text py='2'>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                e vem sendo utilizado desde o século XVI,
                quando um impressor desconhecido pegou uma bandeja de tipos
            </Text>
        </CardBody>

        <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Acessar
            </Button>
        </CardFooter>
        </Stack>
        </Card>
        </>
    )
}
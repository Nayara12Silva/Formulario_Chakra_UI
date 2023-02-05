import { Card, CardBody, CardFooter, Heading, Text, Button, SimpleGrid, CardHeader} from "@chakra-ui/react";
import React from "react";

export function CardMulti(){
    return(
     <>
        <SimpleGrid spacing={3} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>Acessar</Button>
                </CardFooter>
            </Card> {/* Fim do primeiro Card */}
      
            <Card>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>Acessar</Button>
                </CardFooter>
            </Card>  {/* Fim do Segundo Card */}
            <Card>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>Acessar</Button>
                </CardFooter> {/* Fim do terceiro Card */}
            </Card>
    </SimpleGrid>
 </>
    )
}
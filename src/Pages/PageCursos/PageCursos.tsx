import { Select, Center, Flex, HStack, FormControl, FormLabel, Input, Box, Radio, RadioGroup, Button } from "@chakra-ui/react"
import React from 'react'

export function FormCursos (){
    const [value, setValue] = React.useState('1')
    return(
        <>
        <Box h='100vh' >
            <Center as = "header"color='#000' bg='cyan' w='100%' h={150} fontWeight='bold' fontSize='20' pb='16'
            position='relative'>
                Cadastro de Cursos
            </Center>
            <Flex align='center' justify='center' h='calc(100vh -150)'>
                <Center  color='black' w='100%' maxW={840} top='16' position='absolute' p='6' borderRadius={10}
                 boxShadow="0 1px 2pc #ccc" bg="#ffffff">
                <FormControl display="flex" flexDir='column' gap={4}>
                    <HStack spacing={4}>
                        <Box w ='100%'>
                        <FormLabel htmlFor="nome">Nome do curso</FormLabel>
                        <Input type='text' id="nome" name="nome" />
                        </Box>
                        
                    </HStack>
                    
                    <HStack spacing={4}>
                        <Box w='100%'>
                        <FormLabel htmlFor="mae">Nome da Mãe</FormLabel>
                        <Input type='text' id="mae" name="mae" />
                        </Box>
                        <Box w='100%'>
                        <FormLabel htmlFor="tipoCurso">Modalidade</FormLabel>
                        <RadioGroup onChange={setValue} value={value}>
                        <Radio id="presencial" value='presencial'>Presencial</Radio>
                        <Radio id="ead" value='ead'>EAD</Radio>
                       </RadioGroup>
                       </Box>
                    </HStack>
                    <HStack spacing={4}>
                       <Box w='100%'>
                        <FormLabel htmlFor="cpf">Carga Horária do curso</FormLabel>
                        <Input type='text' id="cpf" name="cpf" placeholder="000.000.000-00"/>
                        </Box>
                        <Box w='100%'>
                        <FormLabel htmlFor="docente">Docente</FormLabel>
                        <Select placeholder='Selecione uma opção' id='docente'>
                            <option value='option1'>Lucimara</option>
                            <option value='option2'>Bruno</option>
                            <option value='option3'>Allan</option>
                            <option value='option4'>Carlos</option>
                        </Select>
                        </Box>
                    </HStack>
                
                    <HStack spacing={4} justify='center'>
                        <Box w='40%' textAlign='center'  >
                            <Button w={100} p='3' borderRadius={10} bg='#63ff08' color="#ffffff"
                             type="submit" fontSize='x1' fontWeight='bold' className='enviar'>
                                Enviar
                            </Button>
                        </Box>
                        <Box w='40%' textAlign='center' >
                            <Button w={100} p='3' borderRadius={10} bg='#ff0000' color="#ffffff"
                             type="submit" fontSize='x1' fontWeight='bold' className='cancelar'>
                                Cancelar
                            </Button>
                        </Box>
                    </HStack>
                    
                </FormControl>
                </Center>
            </Flex>
        </Box>
        </>
    )
}
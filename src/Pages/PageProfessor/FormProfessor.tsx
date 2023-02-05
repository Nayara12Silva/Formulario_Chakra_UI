import { Select, Center, Flex, HStack, FormControl, FormLabel, Input, Box, Radio, RadioGroup, Button } from "@chakra-ui/react"
import React from 'react'

export function FormProfessor (){
    const [value, setValue] = React.useState('1')
    return(
        <>
        <Box h='100vh' >
            <Center as = "header"color='#000' bg='cyan' w='100%' h={150} fontWeight='bold' fontSize='20' pb='16' position='relative'>
             Cadastro de Professores
            </Center>
            <Flex align='center' justify='center' h='calc(100vh -150)'>
            <Center  color='black' w='100%' maxW={840} top='16' position='absolute' p='6' borderRadius={10} boxShadow="0 1px 2pc #ccc" bg="#ffffff">
            <FormControl display="flex" flexDir='column' gap={4}>
                    <HStack spacing={4}>
                        <Box w ='100%'>
                        <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                        <Input type='text' id="nome" name="nome" />
                        </Box>
                        <Box w ='100%'>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input type='email' id="email" name="email" />
                        </Box>
                    </HStack>
                    <HStack spacing={4}>
                        <Box w ='100%'>
                        <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                        <Input type='date' id="nasc" name="nasc" />
                        </Box>
                        <Box w ='100%'>
                        <FormLabel htmlFor="telefone">Telefone</FormLabel>
                        <Input type='text' id="telefone" name="telefone" placeholder="(00) 00000-0000"/>
                        </Box>
                    </HStack>
                    <HStack spacing={4}>
                        <Box w='100%'>
                        <FormLabel htmlFor="cpf">CPF</FormLabel>
                        <Input type='text' id="cpf" name="cpf" placeholder="000.000.000-00"/>
                        </Box>
                        <Box w='100%'>
                        <FormLabel htmlFor="sexo">Sexo</FormLabel>
                        <RadioGroup onChange={setValue} value={value}>
                        <Radio id="femenino" value='femenino'>Femenino</Radio>
                        <Radio id="masculino" value='masculino'>Masculino</Radio>
                        <Radio id="outro" value='outro'>Outro</Radio>
                       </RadioGroup>
                       </Box>
                    </HStack>
                    <HStack spacing={4}>
                        <Box w='100%'>
                        <FormLabel htmlFor="graduacao">Graduação</FormLabel>
                        <Select placeholder='Selecione uma opção' id='graduacao'>
                            <option value='option1'>Bacharelado</option>
                            <option value='option2'>Licenciatura</option>
                            <option value='option3'>Tecnólogo</option>
                            <option value='option4'> Pós-graduação</option>
                            <option value='option5'> Mestrado </option>
                            <option value='option6'> Doutorado </option>
                        </Select>
                        </Box>
                        <Box w='100%'>
                        <FormLabel htmlFor="disc">Disciplina</FormLabel>
                        <Select placeholder='Selecione uma opção' id="disc">
                            <option value='option1'>Finanças e Orçamentos.</option>
                            <option value='option2'>Planejamento Estratégico</option>
                            <option value='option3'>Sistemas de Informaçõe</option>
                            <option value='option4'>Gestão da Segurança de TI.</option>
                            <option value='option5'>Ferramentas de Desenvolvimento para Web.</option>
                            <option value='option6'>Banco de Dados</option>
                        </Select>
                        </Box>
                    </HStack>
                    <HStack spacing={4}>
                        <Box w='100%'>
                        <FormLabel htmlFor="turno">Turno</FormLabel>
                        <Select placeholder='Selecione uma opção' id="turno">
                            <option value='option1'>Manhã </option>
                            <option value='option2'>Tarde </option>
                            <option value='option3'>Noite </option>
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
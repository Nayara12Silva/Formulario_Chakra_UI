import { Select, Center, Flex, HStack, FormControl, FormLabel, Input, Box, Radio, RadioGroup, Button } from "@chakra-ui/react"
import React from 'react'

export function FormAluno (){
    const [value, setValue] = React.useState('1')
    return(
        <>
        <Box h='100vh' >
            <Center as = "header"color='#000' bg='cyan' w='100%' h={150} fontWeight='bold' fontSize='20' pb='16'
            position='relative'>
                Cadastro de Alunos
            </Center>
            <Flex align='center' justify='center' h='calc(100vh -150)'>
                <Center  color='black' w='100%' maxW={840} top='16' position='absolute' p='6' borderRadius={10}
                 boxShadow="0 1px 2pc #ccc" bg="#ffffff">
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
                        <FormLabel htmlFor="mae">Nome da Mãe</FormLabel>
                        <Input type='text' id="mae" name="mae" />
                        </Box>
                        <Box w='100%'>
                        <FormLabel htmlFor="telefone">Sexo</FormLabel>
                        <RadioGroup onChange={setValue} value={value}>
                        <Radio id="femenino" value='femenino'>Femenino</Radio>
                        <Radio id="masculino" value='masculino'>Masculino</Radio>
                        <Radio id="outro" value='outro'>Outro</Radio>
                       </RadioGroup>
                       </Box>
                    </HStack>
                    <HStack spacing={4}>
                       <Box w='100%'>
                        <FormLabel htmlFor="cpf">CPF</FormLabel>
                        <Input type='text' id="cpf" name="cpf" placeholder="000.000.000-00"/>
                        </Box>
                        <Box w='100%'>
                        <FormLabel htmlFor="curso">Curso Matriculado</FormLabel>
                        <Select placeholder='Selecione uma opção' id='curso'>
                            <option value='option1'>Tecnologia da informação</option>
                            <option value='option2'>Recursos Humanos</option>
                            <option value='option3'>Administração</option>
                            <option value='option4'>Segurança do Trabalho</option>
                        </Select>
                        </Box>
                    </HStack>
                    <HStack spacing={4}>
                    <Box w='100%'>
                        <FormLabel htmlFor="turma">Turma</FormLabel>
                        <Select placeholder='Selecione uma opção' id="turma">
                            <option value='option1'>Turma 1-A</option>
                            <option value='option2'>Turma 1-B</option>
                            <option value='option3'>Turma 2-A</option>
                            <option value='option4'>Turma 2-B</option>
                        </Select>
                        </Box>
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
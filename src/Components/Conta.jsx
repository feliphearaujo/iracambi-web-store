import styles from './conta.module.css'
import Navbar from './header/components/navbar/Navbar'
import {
    Flex,
    Box,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    HStack,


} from "@chakra-ui/react";


export default function Conta() {
    return (
        <>
            <Navbar />



            <div className={styles.conta}>
                <div className={styles.box}>

                    <Box p={50} >
                        <Flex>
                            <Center w="100%"

                                color={"white"}
                                top={90}
                                p={20}>
                                <FormControl display='flex' flexDir='column' gap='4' mt={5}>
                                    <VStack spacing='5'>
                                        <Box w='100%'>
                                            <FormLabel
                                                fontSize='20px'
                                                display='flex'
                                                justifyContent='center'
                                                paddingBottom='10px'
                                                fontWeight='bold'
                                            >
                                                Continuar com
                                            </FormLabel>

                                            <Box display='flex' justifyContent='center' >  <Input display='flex ' width='100%' borderRadius='10px' border='none' alignItems='center' id='email' placeholder='  E-mail' focusBorderColor='yellow.400' /></Box>

                                        </Box>
                                    </VStack>
                                    <Box w='100%'>
                                        <FormLabel
                                            fontSize='20px'
                                            display='flex'
                                            justifyContent='center'
                                            paddingBottom='10px'
                                            fontWeight='bold'

                                        >
                                            Criar Conta
                                        </FormLabel>

                                        <VStack spacing='5'>
                                            <Input id='email' placeholder='  E-mail' focusBorderColor='yellow.400' borderRadius='10px' border='none' width='100%' />
                                            <Input id='senha' placeholder='  Senha' focusBorderColor='yellow.400' borderRadius='10px' border='none' width='100%' />

                                        </VStack>

                                    </Box>



                                    <HStack justify='center' marginTop='20px'>
                                        <Button w={250}
                                            fontWeight='bold'
                                            type='submit'
                                            fontSize='xl'
                                            backgroundColor='olivedrab'
                                            color='white'
                                            borderRadius='10px'
                                            border='none'
                                            m={5}
                                        >Enviar</Button>
                                        <Button w={250}
                                            fontWeight='bold'
                                            type='submit'
                                            fontSize='xl'
                                            backgroundColor='olivedrab'
                                            color='white'
                                            borderRadius='10px'
                                            border='none'
                                            m={1}
                                        >Cadastrar</Button>
                                    </HStack>

                                </FormControl>
                            </Center>
                        </Flex>
                    </Box>
                </div>
            </div>

            <div>
                <img  className={styles.imgConta} src="https://i.pinimg.com/originals/84/30/99/843099630e0d092ce1ec83f8d458a4cb.jpg" alt="" />
            </div>

        </>

    )
}
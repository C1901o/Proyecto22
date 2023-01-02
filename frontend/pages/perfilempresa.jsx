import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Container, Stack,Button ,Heading,Card, CardHeader, CardBody,StackDivider,Box,Text,Flex,Menu,
    MenuList,
    MenuButton,
    MenuItem,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    MenuDivider,EditIcon, Grid } from '@chakra-ui/react'
import Swal from "sweetalert2";

const perfilempresa =()=>{

    const [trabajadores, settrabajadores] = useState([])
    const routes = useRouter()

    const getalltrabajadores = async () => {
        const response = await axios.get(`${process.env.url}/Trabajador/ver`)
        settrabajadores(response.data)
    }

    useEffect(() => {
        getalltrabajadores()
    }, [])


    const showtrabajadores = () => {
    
        return trabajadores.map(trabajador => {
            return (
                        <Card my={6} mx={3}>
                            <CardHeader>
                                <Heading size='md'>Nombre</Heading>
                                <Text pt='2' fontSize='sm'>{trabajador.Nombre}</Text>
                            </CardHeader>
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='3'>
                                    <Box>
                                        <Heading size='xs'>Cargo</Heading>
                                        <Text pt='3' fontSize='sm'>{trabajador.Cargo}</Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>Numero</Heading>
                                        <Text pt='3' fontSize='sm'>{trabajador.Numero}</Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
            )
        })
    }

    const [Registros, setRegistros] = useState([])

    const getallRegistro = async () => {
        const response = await axios.get(`${process.env.url}/registro/ver`)
        setRegistros(response.data)
    }

    useEffect(() => {
        getallRegistro()
    }, [])


    const showregistro = () => {
    
        return Registros.map(Registro => {
            return (
                        <Card my={6} mx={3}>
                            <CardHeader>
                                <Heading size='md'>Informe</Heading>
                                <Text pt='2' fontSize='sm'>{Registro.Informe}</Text>
                            </CardHeader>
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='3'>
                                    <Box>
                                        <Heading size='xs'>Registro</Heading>
                                        <Text pt='3' fontSize='sm'>{Registro._id}</Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>Fecha</Heading>
                                        <Text pt='3' fontSize='sm'>{Registro.fecha}</Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>Supervisado por:</Heading>
                                        <Text pt='2' fontSize='sm'>{Registro.administrador}</Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>Ejecutado por:</Heading>
                                        <Text pt='2' fontSize='sm'>{Registro.Empresa}</Text>
                                    </Box>
                                    <Stack direction='row' spacing={4}>
                                        <Button colorScheme='teal' variant='solid'onClick={()=>routes.push(`/registro/${Registro._id}`)}>Borrar</Button>
                                    </Stack>
                                </Stack>
                            </CardBody>
                        </Card>
            )
        })
    }


    return(
        <Flex>
            <Container maxW="container.xl">
                <Heading my={50} textAlign={"Center"}>Bienvenido A Tu Perfil</Heading>
                <Menu>
                    <MenuButton as={Button}>
                        Opciones
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={()=>routes.push('/Registroempresa')}>Crear registro</MenuItem>
                        <MenuItem onClick={()=>routes.push('/trabajador')}>Crear Trabajador</MenuItem>
                    </MenuList>
                </Menu>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>Registro</Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Grid templateColumns='repeat(5, 1fr)' textAlign={"center"} border='1px' borderColor={'Menu'} borderRadius={'3xl'}>
                                    {showregistro()}
                                </Grid>
                            </AccordionPanel>
                        </h2>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>Trabajadores</Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Grid templateColumns='repeat(5, 1fr)' textAlign={"center"} border='1px' borderColor={'Menu'} borderRadius={'3xl'}>
                                    {showtrabajadores()}
                                </Grid>
                            </AccordionPanel>
                        </h2>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Flex>
        //<Button colorScheme={"telegram"} my={3} onClick={()=>routes.push('/Registro')}>Crear resgistro</Button>
    )
}

export default perfilempresa
import React, { useState } from "react";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input,Stack,Textare,InputGroup,InputRightAddon,InputLeftAddon } from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const vecino=()=>{
    const ruta= useRouter()
    const [valores,setvalores]= useState({
        Nombre:'',
        Apellido:'',
        Casa:'',
        Telefono:'',
        Correo:'',
    })


    const onSubmint = async (e)=>{
        e.preventDefault()
        const response = await axios.post(`${process.env.url}/vecinos/crear`,valores)
        if(response.status === 201 ){
            Swal.fire({
                title: 'Vecino Ingresado',
                text: 'Creado Exitosamente',
                icon:'success',
                confirmButtonText:'OK'
            }).then(() => {
                ruta.push('/admin')
            })
        }else{
            Swal.fire({
                title: 'Error',
                text: 'Prueve nuevamente',
                icon:'error',
                confirmButtonText:'OK'
            })
        }
    }

    const onChange=(e)=>{
         setvalores({
            ...valores,
            [e.target.name]:e.target.value
         })
    }


    return(
        <Flex>
            <Container maxW={"container.sm"} centerContent my={5}>
                <Heading my={5}>Crear un nuevo Vecino</Heading>
                <Stack>
                    <FormControl my={3}>
                        <FormLabel>Nombre</FormLabel>
                        <Input placeholder="Ingrese el nombre" type={"text"} onChange={onChange} name={"Nombre"} />
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Apellido</FormLabel>
                        <Input placeholder="Apellido" type={"text"} onChange={onChange} name={"Apellido"} />
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Casa</FormLabel>
                        <Input placeholder="123" type={"number"} onChange={onChange} name={"Casa"}/>
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Telefono</FormLabel>
                        <Input placeholder="9 1234 5678" type={"number"} onChange={onChange} name={"Telefono"}/>
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Correo</FormLabel>
                        <Input placeholder="vecino@gmail.com" type={"email"} onChange={onChange} name={"Correo"}/>
                    </FormControl>
                    <FormControl >
                        <Button mx={5} type="submit" onClick={onSubmint}>Crear</Button>
                        <Button mx={5} type="submit" onClick={()=>{ruta.push('/admin')}}>Vovler</Button>
                    </FormControl>
                </Stack>
            </Container>
        </Flex>
    )
}

export default vecino

import React, { useState } from "react";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input,Stack,Textare,InputGroup,InputRightAddon,InputLeftAddon } from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const crearadmin=()=>{
    const ruta= useRouter()
    const [valores,setvalores]= useState({
        Nombre:'',
        Fono:''
    })


    const onSubmint = async (e)=>{
        e.preventDefault()
        const response = await axios.post(`${process.env.url}/admin/crear`,valores)
        if(response.status === 201 ){
            Swal.fire({
                title: 'Administrador Ingresado',
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
                <Heading my={5}>Crear un nuevo administrador</Heading>
                <Stack>
                    <FormControl my={3}>
                        <FormLabel>Nombre</FormLabel>
                        <Input placeholder="El nombre" type={"text"} onChange={onChange} name={"Nombre"} />
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Telefono</FormLabel>
                        <Input placeholder="9 1234 5678" type={"number"} onChange={onChange} name={"Fono"} />
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

export default crearadmin

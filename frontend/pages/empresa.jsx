import React, { useState } from "react";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input,Stack,Textare,InputGroup,InputRightAddon,InputLeftAddon } from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const empresa=()=>{
    const ruta= useRouter()
    const [valores,setvalores]= useState({
        Nombre:'',
        Direccion:'',
        Numero:'',
        Responsable:''
    })


    const onSubmint = async (e)=>{
        e.preventDefault()
        const response = await axios.post(`${process.env.url}/Empresa/crear`,valores)
        if(response.status === 201 ){
            Swal.fire({
                title: 'Empresa Creada',
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
                <Heading my={5}>Crear tu informe</Heading>
                <Stack>
                    <FormControl my={3}>
                        <FormLabel>Nombre</FormLabel>
                        <Input placeholder="Ingresa tu nombre" type={"text"} onChange={onChange} name={"Nombre"} />
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Direccion</FormLabel>
                        <Input placeholder="Direccion" type={"text"} onChange={onChange} name={"Direccion"} />
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Numero</FormLabel>
                        <Input placeholder="+569 1234 5678" type={"number"} onChange={onChange} name={"Numero"}/>
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Responsable</FormLabel>
                        <Input placeholder="Representante" type={"date"} onChange={onChange} name={"Responsable"}/>
                    </FormControl>
                    <FormControl>
                        <Button mx={5} type="submit" onClick={onSubmint}>Crear</Button>
                        <Button mx={5} type="submit" onClick={()=>{ruta.push('/admin')}}>Vovler</Button>
                    </FormControl>
                </Stack>
            </Container>
        </Flex>
    )
}

export default empresa

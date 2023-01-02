import React, { useState } from "react";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input,Stack,Textare,InputGroup,InputRightAddon,InputLeftAddon } from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const registro=()=>{
    const ruta= useRouter()
    const [valores,setvalores]= useState({
        Nombre:'',
        Encargado:'',
        Informe:'',
        fecha:'',
        Tiempo:'',
        administrador:'',
        Empresa:''
    })


    const onSubmint = async (e)=>{
        e.preventDefault()
        const response = await axios.post(`${process.env.url}/registro/crear`,valores)
        if(response.status === 201 ){
            Swal.fire({
                title: 'Registro Ingresado',
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
                        <Input placeholder="nombre" type={"text"} onChange={onChange} name={"Nombre"} />
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Encargado</FormLabel>
                        <Input placeholder="Responsable de la tarea" type={"text"} onChange={onChange} name={"Encargado"} />
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Descripcion</FormLabel>
                        <Input placeholder="Brebe descripcion" type={"text"} onChange={onChange} name={"Informe"}/>
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>fecha</FormLabel>
                        <Input placeholder="12/34/5678" type={"date"} onChange={onChange} name={"fecha"}/>
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Tiempo</FormLabel>
                        <InputGroup>
                            <Input placeholder="Tiempo Estimado" type={"number"} onChange={onChange} name={"Tiempo"}/>
                            <InputRightAddon children='Hrs'/>
                        </InputGroup>
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Administrador</FormLabel>
                        <Input placeholder="Admiistrador valido" onChange={onChange} name={"administrador"}></Input>
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Empresa</FormLabel>
                        <Input placeholder="Empresa encargada" onChange={onChange} name={"Empresa"}/>
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

export default registro

import React, { useState } from "react";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input,Stack,Textare,InputGroup,InputRightAddon,InputLeftAddon } from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const trabajador=()=>{
    const ruta= useRouter()
    const [valores,setvalores]= useState({
        Nombre:'',
        Cargo:'',
        Numero:'',
        Responsable:'',
        Empresa:'63b0e796a0433925dcee0d81'
    })


    const onSubmint = async (e)=>{
        e.preventDefault()
        const response = await axios.post(`${process.env.url}/Trabajador/crear`,valores)
        if(response.status === 201 ){
            Swal.fire({
                title: 'Trabajador Ingresado',
                text: 'Creado Exitosamente',
                icon:'success',
                confirmButtonText:'OK'
            }).then(() => {
                ruta.push('/perfilempresa')
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
                <Heading my={5}>Crear tu colaborador</Heading>
                <Stack>
                    <FormControl my={3}>
                        <FormLabel>Nombre</FormLabel>
                        <Input placeholder="Ingrese el nombre" type={"text"} onChange={onChange} name={"Nombre"} />
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Cargo</FormLabel>
                        <Input placeholder="Profeccion" type={"text"} onChange={onChange} name={"Cargo"} />
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Numero</FormLabel>
                        <Input placeholder="9 1234 5678" type={"number"} onChange={onChange} name={"Numero"}/>
                    </FormControl>
                    <FormControl my={3}>
                        <FormLabel>Jefe directo</FormLabel>
                        <Input placeholder="Ingrese responsable" type={"text"} onChange={onChange} name={"Responsable"}/>
                    </FormControl>
                    <FormControl >
                        <Button mx={5} type="submit" onClick={onSubmint}>Crear</Button>
                        <Button mx={5} type="submit" onClick={()=>{ruta.push('/perfilempresa')}}>Vovler</Button>
                    </FormControl>
                </Stack>
            </Container>
        </Flex>
    )
}

export default trabajador

import { useState } from "react"
import { Button, Container, Stack, Input ,Heading,Image, Flex} from "@chakra-ui/react"
import {useRouter} from 'next/router'
import {login} from '../data/Administrador'

export default function Home() {
  const[email, setEmail] = useState('')
  const router = useRouter()
    
  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const onsubmit = async (e) => {
    e.preventDefault()
    try{
      router.push('/admin')
      const response = await login(email)
      localStorage.setItem('email',response.data.Administrador)
      
      
    }catch(error){
      console.log(error)
    }
    console.log(email)
  const response = await login(email)
}
  return (
    /*
    <Container maxW="container.xl" centerContent>
      <Heading textAlign={"center"} my={10}>Ingrese el ususario</Heading>
      <Stack>
        <Input onChange={handleChange} type={"email"} />
        <Input placeholder="******" type={"password"} mb={6}/>
        <Button colorSCheme="teal" onClick={onsubmit}>Ingresar</Button>
      </Stack>
    </Container>*/

    
    <Stack p={90}>
      <Flex my={100} Heading="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Heading mb={6} textAlign={"center"}>Ingresar</Heading>
          <Input  onChange={handleChange} variant={"filled"} placeholder="nombre@correo.cl" type={"email"} mb={3}/>
          <Button colorScheme="telegram" onClick={onsubmit}>Ingresa</Button>
        </Flex>
      </Flex>
    </Stack>
  )
}

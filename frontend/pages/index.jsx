import { useState } from "react"
import { Button, Container, Stack, Input ,Heading,Image} from "@chakra-ui/react"

export default function Home() {
  return (
      <Container centerContent maxW="md" my={150}>
        <Image  background={"#1a365d"} boxSize='200px' fallbackSrc='https://www.ubiobio.cl/mcc/images/ubbdescargagradientesolo.png' alt='FACE UBB' />
        <Heading>Login</Heading>
        <Input placeholder="Correo Electronico" type={"email"} my={8} textAling={"Center"}></Input>
        <Input placeholder="Contraseña" type={"password"}></Input>
        <Button my={10}>Ingresar</Button>
      </Container> 
  )
}

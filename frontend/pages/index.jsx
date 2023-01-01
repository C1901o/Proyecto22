import { useState } from "react"
import { Button, Container, Stack, Input ,Heading,Image, Flex} from "@chakra-ui/react"

export default function Home() {
  return (
    <Stack p={90}>
      <Flex my={100} Heading="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Heading mb={6}>Ingresar</Heading>
          <Input variant={"filled"} placeholder="nombre@correo.cl" type={"email"} mb={3}/>
          <Input placeholder="******" type={"password"} mb={6}/>
          <Button colorScheme="telegram">Ingresa</Button>
        </Flex>
      </Flex>
    </Stack>
  )
}

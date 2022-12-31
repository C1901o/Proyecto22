//import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"

function myapp({Component,pageProps}){
  return(
    <ChakraProvider>
       <Component{...pageProps}/>
    </ChakraProvider>
  )
}

export default myapp

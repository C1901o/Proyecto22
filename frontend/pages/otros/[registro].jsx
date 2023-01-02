import { useRouter } from 'next/router'
import axios from 'axios'
import { Container, Heading, Button } from '@chakra-ui/react'

export async function getServerSideProps(context) {
    try {
        const response = await axios.delete(`${process.env.url}/registro/delete/${context.params.registro}`)
        //llamar a mail para enviar mail a dmin y epresa
        return {
            props: {
                data: null
            }
        }
    } catch (err) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
}

const registros = () => {

    const ruta = useRouter()
    const { registros } = router.query
    return (
        <Container my={100} border={'1px'} borderColor='MenuText' borderRadius={'3xl'} maxW={'container.md'} centerContent direction="column">
            <Heading my={10}>Registro eliminado</Heading>
            <Button my={5} colorScheme='teal' variant='solid'onClick={()=>ruta.push('/admin')}>Volver</Button>
        </Container>
    )
}

export default registros
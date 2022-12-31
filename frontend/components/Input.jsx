import react from "react";
import { Input, Stack } from "@chakra-ui/react";

const InputGenerico=({Text})=>{
    return(
        <Stack>
            <Input placeholder={Text}></Input>
        </Stack>
    )
}

export default InputGenerico
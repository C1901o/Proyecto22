import React from "react";
import {FormControl, FormLabel,Input} from "@chakra-ui/react"

const formadmin=({onChange, placeholder,label,type,name,onBlur,value})=>{
    return(
        <FormControl my={3}>
            <FormLabel>{label}</FormLabel>
            <Input placeholder={placeholder} type={type} onChange={onChange} name={name} />
        </FormControl>
    )
}

export default formadmin
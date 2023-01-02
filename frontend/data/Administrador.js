import axios from 'axios'

const login = async (email) =>{
    const response = await axios.post(`${process.env.url}/admin/login`,'{mail}');
    console.log(response)
    return response
}

module.exports = {
    login
}
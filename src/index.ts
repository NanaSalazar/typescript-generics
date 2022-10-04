import axios, { AxiosResponse } from 'axios'

export type ResponseUser = { name: string, id: number, email: string }

axios.get<Array<ResponseUser>>('http://localhost:3001/users').then( (response) => {
    console.log('------ response.data -----')
    console.log(response.data)
    const resposta = response.data[0]
    console.log(resposta.name)
})

const maria: ResponseUser = {
    name: 'Silvia',
    id: 3,
    email: 'maria@server.com'
}

/* axios.post<ResponseUser>('http://localhost:3001/users', { name: "", email: ""} ).then( (response) => {
    console.log(response.data.name)
    
}) */

const getUser = (id: number): Promise<AxiosResponse<ResponseUser>> => {
    return axios.get('http://localhost:3001/users/' + id)
}

getUser(3).then( (response) => console.log(response.data.name))
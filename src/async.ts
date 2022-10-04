import axios from 'axios'
import { ResponseUser } from './index'

async function Fn(): Promise<number> {
    return 2
}

const fn = Fn()
fn.then( n => console.log('Valor de n: ' + n))

async function getUser(id: number): Promise<ResponseUser> {
    try {
        const response = await axios.get<ResponseUser>('http://localhost:3001/users/' + id)
        console.log(response.data.name)
        return response.data

    } catch (e) {
        throw new Error('Error')
    }
    
}

getUser(12).then(dados => {
    console.log('-----dados-----')
    console.log(dados)
}).catch(e => {
    console.log('Não funcionou')
    console.log(e)
})
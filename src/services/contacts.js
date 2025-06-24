import axios from 'axios'
const baseUrl = '/api/contacts' // Usa ruta relativa para aprovechar el proxy

const getAll = () => axios.get(baseUrl).then(res => res.data)
const create = newObject => axios.post(baseUrl, newObject).then(res => res.data)

export default { getAll, create }
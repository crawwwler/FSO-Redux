import axios from "axios"
const baseUrl = 'http://localhost:3001/anecdotes'


// here , we return an axios promise so the result of http req can be handled by useQuery func
export const getAll = () => {
    return axios.get(baseUrl).then(res => res.data)
}

export const createAnc = (anc) => {
    return axios.post(baseUrl, anc).then(res => res.data)
}

export const updateAnc = (anc) => {
    return axios.put(`${baseUrl}/${anc.id}`, anc).then(res => res.data)
}
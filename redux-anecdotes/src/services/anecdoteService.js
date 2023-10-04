import axios from "axios"
const baseUrl = 'http://localhost:3001/anecdotes'


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const sendAnecdote = async (content) => {
    const newObj = { content: content, votes: 0 }
    const response = await axios.post(baseUrl, newObj)
    return response.data
}

const updateAnecdote = async (obj) => {
    const id = obj.id
    const response = await axios.put(`${baseUrl}/${id}`, obj)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, sendAnecdote, updateAnecdote }
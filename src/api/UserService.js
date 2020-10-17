import axios from "axios";

const API_URL = "http://localhost:8080/api/1.0/users";

export const getUsers = () => {
    return axios.get(API_URL)
}

export const addUser = (body) => {
    return axios.post(API_URL,body)
}

export const getUserById = (id) => {
    return axios.get(API_URL+"/"+id)
}

export const updateUser = (body,id) => {
    return axios.put(API_URL +"/"+id,body)
} 

export const deleteUser = (id) => {
    return axios.delete(API_URL+"/"+id)
}
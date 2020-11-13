import axios from "axios";

const api = axios.create({ baseURL: "/api" });

export const addtag = async (input) => {
    console.log("POST" , input)
    const response = await api.post("/addtag", JSON.stringify({input}), {headers:{
      'content-type': 'application/json'
    } })
    return response.data
  }
  
  export const create = async (newStore) => {
    console.log("POST", newStore)
    const response = await api.post("/butiker/newstore", newStore)
    return response.data
  };

  export const remove = async userToBeRemoved => {
    console.log("DELETE /", userToBeRemoved)
    const response = await api.post("/delete", JSON.stringify({email:userToBeRemoved}), {headers:{
      'content-type': 'text/json'
    } })
    console.log("Response", response);
    return response
  }
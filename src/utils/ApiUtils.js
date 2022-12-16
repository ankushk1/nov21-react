import axios from 'axios'
const baseUrl = "http://localhost:8000"


export const signUp = async (userData) => {

  try{
    const response = await axios({
      method:"POST",
      url:`${baseUrl}/user/signup`,
      data: userData
    })
    return response
  } catch (err) {
    return err.response
  }

}


export const signIn = async (userData) => {
  try{
    const response = await axios({
      method:"POST",
      url:`${baseUrl}/user/signin`,
      data: userData
    })
    return response
  } catch (err) {
    return err.response
  }

}


export const getProducts = async () => {
  try{
    const response = await axios({
      method:"GET",
      url:`${baseUrl}/product/getProducts`,
      headers:{
        "access-token": localStorage.getItem('jwt')
      }
    })
    return response
  } catch (err) {
    return err.response
  }
}

export const createProduct = async (productData) => {
  try{
    const response = await axios({
      method:"POST",
      url:`${baseUrl}/product/create`,
      headers:{
        "access-token": localStorage.getItem('jwt')
      },
      data: productData
    })
    return response
  } catch (err) {
    return err.response
  }
}



export const getCategories= async () => {
  try{
    const response = await axios({
      method:"GET",
      url:`${baseUrl}/category/getCategories`,
      headers:{
        "access-token": localStorage.getItem('jwt')
      }
    })
    return response
  } catch (err) {
    return err.response
  }
}
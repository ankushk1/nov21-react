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
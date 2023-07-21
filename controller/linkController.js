import axios from 'axios'

async function handleLink(req, res, next) {
  const { userName } = req.user
  
  try {
    const sheetUrl = "https://script.google.com/macros/s/AKfycbyVbpGAxA1tFbrSAurHIhdAnq45EGFoYxYYpJnBY2RaOwVZQXzLrvKeKcc7POOtAUth/exec"
    const response = await axios.post(sheetUrl, {
      userName
    })
    const userData = await response.data.data

    return res.status(200).json({
      status: "success",
      data: userData
    })
    
  } catch (err) {
    return res.status(500).json({
      status: "error",
      meesage: "an error occured"
    })
  }
  
}

export default handleLink
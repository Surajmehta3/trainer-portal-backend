import jwt from 'jsonwebtoken'

function handleAuth (req, res, next) {
  const token = req.cookies.token
  const secretKey = "trainer-portal"
  
  if (!token) {
    return res.status(404).json({message: "Invalid Token please login again"})
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; 
    next()
  } catch (err) {
    return res.status(404).json({message: "Invalid Token please login again"})
  }

  // return res.sendStatus(200)
}

export default handleAuth
const setAuthCookie = (res, authToken) => {
  res.cookie('Authorization-token', `Bearer ${authToken}`, {
    maxAge: 900000,
    httpOnly: true,
    sameSite: false,
  })
}

const utils = {
  setAuthCookie,
}

export default utils

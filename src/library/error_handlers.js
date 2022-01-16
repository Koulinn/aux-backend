const statusErrorMiddleware = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({
      success: false,
      msg: err.msg,
    })
  } else {
    next(err)
  }
}

const serverError = (err, req, res, next) => {
  console.log(err, 'FROM serverError Middleware')

  res.status(500).send({
    success: false,
    msg: err.msg || 'Server error',
  })
}

// !important serverError MUST be the last
const errorHandlers = [statusErrorMiddleware, serverError]

export default errorHandlers

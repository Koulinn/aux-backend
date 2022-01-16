const notFound = (err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send({
      success: false,
      msg: err.msg,
    })
  } else {
    next(err)
  }
}

const badRequest = (err, req, res, next) => {
  if (err.status === 400) {
    res.status(400).send({
      success: false,
      msg: err.msg,
    })
  } else {
    next(err)
  }
}

const unauthorized = (err, req, res, next) => {
  if (err.status === 401) {
    console.log(err)
    res.status(401).send({
      status: false,
      message: err.msg,
    })
  } else {
    next(err)
  }
}

const forbidden = (err, req, res, next) => {
  if (err.status === 403) {
    res.status(400).send({
      success: false,
      msg: err.msg,
    })
  } else {
    next(err)
  }
}

const serverError = (err, req, res, next) => {
  console.log(err)

  res.status(500).send({
    success: false,
    msg: err.msg || 'Server error',
  })
}

// !important serverError MUST be the last
const errorHandlers = [
  notFound,
  badRequest,
  unauthorized,
  forbidden,
  serverError,
]

export default errorHandlers

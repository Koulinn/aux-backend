const createError = (status, msg) => {
  const err = {
    status: status,
    msg: msg,
  }
  throw err
}

const checkBodyForInjection = (body) => {
  for (const [key, value] of Object.entries(body)) {
    if (value.match(';')) {
      return true
    }
  }
  return false
}

const utils = {
  createError,
  checkBodyForInjection,
}
export default utils

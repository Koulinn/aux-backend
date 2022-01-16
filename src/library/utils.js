const createError = (status, msg) => {
  const err = {
    status: status,
    msg: msg,
  }
  return err
}

const utils = {
  createError,
}

export default utils

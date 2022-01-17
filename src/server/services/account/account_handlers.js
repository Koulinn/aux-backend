import user_queries from './query_handlers.js'
import lib from '../../../library/index.js'

const {
  utils: { readQuery },
} = lib

const { createAccountWithEmailAndPasswordQuery } = user_queries

const create = async (req, res, next) => {
  try {
    const query = createAccountWithEmailAndPasswordQuery(req.body)
    const DB_res = await readQuery(query)
    const { acc_id } = DB_res[0][0]

    console.log(acc_id, '')

    res.status(201).send({ success: true, acc_id })
  } catch (error) {
    next()
  }
}

const userHandlers = {
  create,
}

export default userHandlers
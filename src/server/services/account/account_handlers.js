import user_queries from './query_handlers.js'
import lib from '../../../library/index.js'

const {
  utils: { readQuery },
} = lib

const { createAccountWithEmailAndPasswordQuery } = user_queries

const create = async (req, res, next) => {
  try {
    const query = await createAccountWithEmailAndPasswordQuery(req.body)
    const DB_res = await readQuery(query)
    const { acc_id } = DB_res[0][0]

    res.status(201).send({ success: true, acc_id })
  } catch (error) {
    next(error)
  }
}

const userHandlers = {
  create,
}

export default userHandlers

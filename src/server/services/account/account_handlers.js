import user_queries from './query_handlers.js'
import lib from '../../../library/index.js'

const {
  utils: { readQuery },
} = lib

const { createAccountWithEmailAndPasswordQuery, createUserQuery } = user_queries

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

const createUser = async (acc_id, profile) => {
  try {
    const personalInfo = {
      first_name: profile.name.givenName,
      last_name: profile.name.familyName,
      avatar: profile.photos[0].value,
    }
    const query = await createUserQuery(acc_id, personalInfo)
    const DB_res = await readQuery(query)

    return DB_res[0][0].acc_id
  } catch (error) {
    console.log(error, 'From createUser')
  }
}

const redirect = (req, res, next) => {
  const { authToken, refresh_token } = req.user

  if (authToken && refresh_token) {
    res.cookie('Authorization-token', `Bearer ${authToken}`, {
      maxAge: 900000,
      httpOnly: true,
      sameSite: false,
    })

    res.redirect(
      `http://localhost:3000/dashboard&?refresh_token=${refresh_token}`
    )
  } else {
    res.redirect(`http://localhost:3000/login`)
  }
}

const userHandlers = {
  create,
  redirect,
  createUser,
}

export default userHandlers

import { sendError } from 'h3'
import { createUser } from '../db/user'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { email, name } = body

  if (!email || !name)
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid params' }))

  const userData = {
    email,
    name,
  }
  await createUser(userData)
  return {
    body: {
      message: 'user created successfully!',
    },
  }
})

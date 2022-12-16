import { prisma } from '.'

export const createUser = (userData: any) => {
  return prisma.user.create({
    data: userData,
  })
}


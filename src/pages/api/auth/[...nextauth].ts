import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import GoogleProvider from 'next-auth/providers/google'

const googleID = process.env.GOOGLE_ID
const googleSecret = process.env.GOOGLE_SECRET

if (!googleID || !googleSecret) {
    throw new Error('Missing Google ID or secret')
}

export const authConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: googleID,
            clientSecret: googleSecret,
        }),
    ],
    callbacks: {
        session: async ({session, user}) => {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        },
    },
    
} satisfies NextAuthOptions

export default NextAuth(authConfig)

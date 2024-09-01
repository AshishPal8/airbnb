import bcrypt from 'bcrypt'
import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'


export async function POST(request: Request){
    const {name, email, password} = await request.json()

    const existingUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if(existingUser){
        return NextResponse.json("Email already in use", {status: 401})
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
        data: {
            email, name, hashedPassword
        }
    })

    return NextResponse.json(user)
}
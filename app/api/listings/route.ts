import prisma from '@/app/libs/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'
import { NextResponse } from 'next/server';

export async function POST(request: Request){
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return NextResponse.error()
    }

    const body = await request.json();
    const {
        title,
        description,
        imageSrc, 
        category, 
        roomCount, 
        bathroomCount, 
        guestCount, 
        location,
        price
    } = body;

    Object.keys(body)


}
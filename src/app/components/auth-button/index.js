// 'use server'
import { getSession } from '@/lib/session';
import Link from 'next/link';
// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
//  } from './../../components/ui/avatar'
export default async function AuthButton() {
    const session = await getSession();

    // Render the Link component conditionally based on session status
    return session?.user_details ? (
        <Link href="/my-account">
            {/* <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
        </Link>
    ) : (
        <Link href="/auth/login">
            {/* <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
        </Link>
    );
}

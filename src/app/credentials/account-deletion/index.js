import * as React from "react"

import { Button } from "./../../components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import { AlertCircle } from 'lucide-react';
export function Deleteaccount() {
    return (
        <div className="account-delete-tab">
            <div className="content-wrapper flex justify-center py-12">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle className="text-center text-red-600 flex justify-center">
                            <AlertCircle width={60} height={60} />
                        </CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='text-red-600 py-1 text-justify text-lg'>
                        All your account data will be wiped off completely and this is non-reversible process <span className="font-bold"> BE CERTAIN ! </span>
                    </CardContent>
                    <CardFooter className='pt-3'>
                        <Button className='w-full bg-[#3c2f27] hover:bg-red-600 rounded-none'>Delete Account</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

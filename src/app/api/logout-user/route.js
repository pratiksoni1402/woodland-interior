export const dynamic = 'force-dynamic'
import { getSession } from "@/lib/session"
export async function GET(){
    const session = await getSession();
    if(session?.user_details){
        session.destroy()
    }
}
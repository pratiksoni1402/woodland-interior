import { getIronSession, type IronSession } from "iron-session";
import { cookies } from 'next/headers';

export interface SessionUserDetails {
    firstname?: string;
    lastname?: string;
    email?: string;
}

export interface SessionData {
    id?: string;
    user_details?: SessionUserDetails | null;
}

const sessionPassword = process.env.SESSION_PASS || "woodland-interiors-session-secret-key-32chars";

export async function getSession(): Promise<IronSession<SessionData>> {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, { 
        password: sessionPassword, 
        cookieName: "woodland-interiors-cookies" 
    });

    return session;
}

export async function getSessionId(): Promise<string> {
    const session = await getSession();
    if (!session?.id) {
        const newSessionId = crypto.randomUUID();
        session.id = newSessionId;
        await session.save();
        return newSessionId;
    }

    return session.id;
}

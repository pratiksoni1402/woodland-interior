import { getIronSession } from "iron-session";
import { cookies } from 'next/headers';


export async function getSession() {
    const session = await getIronSession(cookies(), { password: process.env.SESSION_PASS, cookieName: "woodland-interiors-cookies" });

    return session;
}

export async function getSessionId() {
    const session = await getSession();
    if (!session?.id) {
        const newSessionId = crypto.randomUUID()
        session.id = newSessionId;
        await session.save();
        return newSessionId;
    }

    return session.id;
}


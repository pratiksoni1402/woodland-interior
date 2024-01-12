import { getIronSession } from "iron-session";
import { cookies } from 'next/headers';

export function getSession() {
    const session = getIronSession(cookies(), { password: process.env.SESSION_PASS, cookieName: "woodland-interiors-cookies" });

    return session
}

export async function getSessionId() {
    const session = getSession()

    if (!session?.id) {
        session.set('id', crypto.randomUUID())
        await session.save();
    }

    return session.id
}

// export async function post(req, res) {
//     const session = getIronSession(req, res, { password: "...", cookieName: "..." });
//     session.username = "Alison";
//     await session.save();
// }
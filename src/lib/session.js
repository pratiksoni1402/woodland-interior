import { getIronSession } from "iron-session";
const getPass = env("SESSION_PASS")


export function get(req, res) {
    const session = getIronSession(req, res, { password: "...", cookieName: "..." });
}

export async function post(req, res) {
    const session = getIronSession(req, res, { password: "...", cookieName: "..." });
    session.username = "Alison";
    await session.save();
}
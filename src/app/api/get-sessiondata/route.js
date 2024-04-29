export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { getSession } from "@/lib/session";
export async function GET() {
  const getSessionData = await getSession();
  return Response.json({ getSessionData });
}
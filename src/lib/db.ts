import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { contactSubmissions } from "../../shared/schema";

const { Pool } = pg;

let _db: ReturnType<typeof drizzle> | null = null;

function getDb() {
  if (!_db) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL must be set.");
    }
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    _db = drizzle(pool);
  }
  return _db;
}

export async function saveContactSubmission(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
}) {
  const db = getDb();
  const [result] = await db
    .insert(contactSubmissions)
    .values(data)
    .returning();
  return result;
}

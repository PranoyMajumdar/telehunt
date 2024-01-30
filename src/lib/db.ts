import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL as string;


export const client = postgres(connectionString)
export const db = drizzle(client);

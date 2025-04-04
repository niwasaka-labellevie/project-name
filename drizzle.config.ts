import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: 'mysql', // 'postgresql' | 'sqlite' | 'turso'
  schema: './src/db/schema.ts'
})
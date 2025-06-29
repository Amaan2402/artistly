import { Client, Account, Databases, Storage } from "appwrite";

export const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string) // Replace with your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string); // Replace with your project ID

export const account = new Account(client);
export const db = new Databases(client);
export const storage = new Storage(client);

export { ID } from "appwrite";

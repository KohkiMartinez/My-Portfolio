"use server"

import { db } from "@/app/db/db";
import { messages } from "@/app/db/schema";
import { revalidatePath } from "next/cache";

export async function addMessageToDatabase(input: string) {
    console.log(input);

    try {
        await db.insert(messages).values({ message: input });
        revalidatePath('/')
    } catch (err) {
        console.log(err)
        return {
            ok: false
        }
    }


    return {
        ok: true
    }
    

}
"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import {  use } from "react"

const ClientComponent = () => {
    const supabase = createClientComponentClient()

    const login = async () => {
        const { error, data } = await supabase.auth.signInWithOAuth({
            provider: "google",
        })
        console.log(error, data)
    }

    const getUserProfile = async () => {
        const { error, data } = await supabase.auth.getUser()
        console.log(error, data)
    }

    use(getUserProfile());
    return <>
        <button onClick={login}>google</button>
    </>
}

export default ClientComponent
"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { use } from "react"

const supabase = createClientComponentClient()

const login = async () => {
    const { error, data } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: "https://memory-game.christhapa.com.np"
        }
    })
    console.log(error, data)
}

const getUserProfile = async () => {
    const { error, data } = await supabase.auth.getSession()
    console.log(error, data)
}

const getUser = async () => {
    const { error, data } = await supabase.auth.getUser()
    console.log(error, data)
}


const ClientComponent = () => {
    use(getUserProfile());
    use(getUser());
    return <>
        <button onClick={login}>google</button>
    </>
}

export default ClientComponent
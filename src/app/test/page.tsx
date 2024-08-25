"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState, useEffect } from "react"

export const ClientComponent = () => {
    const supabase = createClientComponentClient()
    const [users, setUsers] = useState<any[]>([])

    const getUsers = async () => {
        const { data, error } = await supabase.from("users").select("*")
        setUsers(data ?? [])
    }

    const login = async () => {
        const { error, data } = await supabase.auth.signInWithOAuth({
            provider: "google"
        })
        console.log(error, data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return <>
        <h2>{users.length}</h2>
        <button onClick={login}>google</button>
    </>
}

export default ClientComponent
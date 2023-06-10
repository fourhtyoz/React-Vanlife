import { redirect } from "react-router-dom"

export function requireAuth() {
    const isLoggedIn = false
    if (!isLoggedIn) {
        console.log('not logged in')
        return redirect('/login')
    }
}
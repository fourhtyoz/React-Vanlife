import { redirect } from "react-router-dom"

export async function requireAuth() {
    const loggedInStatus = (localStorage.getItem('loggedin') === 'true')
    const isLoggedIn = loggedInStatus
    
    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first.")
    }
}
import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const loggedInStatus = (localStorage.getItem('loggedin') === 'true')
    const isLoggedIn = loggedInStatus
    const path = new URL(request.url).pathname
    
    if (!isLoggedIn) {
        throw redirect(`/login?message=You must log in first&redirectTo=${path}`)
    }
}
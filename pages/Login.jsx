import React from "react"
import { useLoaderData, useActionData, useNavigation, Form, redirect } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const credentials = {email, password}
    let url = new URL(request.url).searchParams.get('redirectTo') || '/host'
    try {
        await loginUser(credentials)
        return redirect(url)
    } catch(err) {
        return 'Error'
    }
}

export default function Login() {
    const message = useLoaderData()
    const error = useActionData()
    const navigation = useNavigation()

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {error && <h3 className="red">{error}</h3>}
            {message && <h3 className="red">{message}</h3>}
            <Form method='post' className="login-form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === 'submitting'}>
                    {navigation.state === 'submitting' ? 'Logging in' : 'Log in'}
                </button>
            </Form>
        </div>
    )
}

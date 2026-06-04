import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";



function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login: authLogin} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await login({ email, password })
            authLogin(response.data)
            navigate('/courses')

        } catch (err) {
            setError('Email ou mot de passe incorrect')
        }
    }

    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Connexion
            </h2>

            {error && (
                <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center">
                    {error}
                </p>
            )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="john@gmail.com"
                />
            
            </div>


            <div>
                <label className="block text-gray-700 font-medium mb-1">Mot de passe</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus-ring-blue-400"
                    password="*******"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                Se connecter 
            </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
            Pas encore de compte ?{' '}

            <a href="/register" className="text-blue-600 font-medium hover:underline">
                S'inscrire
            </a>
        </p>

        </div>
    </div>
    )
}

export default Login
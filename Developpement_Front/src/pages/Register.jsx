import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { useAuth } from "../context/AuthContext";


function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('STUDENT')
    const [error, setError] = useState('')
    const { login: authLogin} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await register({firstName, lastName, email, password, role})
            authLogin(response.data)
            navigate('/login')
        }catch (err){
            setError('firstName, lastName, email, password ou role incorrect')
        }
    }


    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Inscription
                </h2>

            { error &&
                (
                        <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center">
                            {error}
                        </p>
                )
            }

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Prenom</label>
                    <input 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="John"
                    />
                </div>



                <div>
                    <label className="block text-gray-700 font-medium mb-1">Nom</label>
                    <input 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="KENEDY"
                    />
                </div>


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
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="****************"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Role</label>
                    <select name="role" id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="STUDENT">STUDENT</option>
                    <option value="INSTRUCTOR">INSTRUCTOR</option>

                </select>
                </div>

                <button type="submit"
                        className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    S'inscrire
                    
                </button>
            </form>

            <p className="text-center text-gray-500 mt-4">
                Vous avez déjà un compte ? {' '}
                <a href="/login" className="text-blue-600 font-medium hover:underline">
                    Connexion
                </a>
            </p>

            </div>
        </div>
    )
}

export default Register
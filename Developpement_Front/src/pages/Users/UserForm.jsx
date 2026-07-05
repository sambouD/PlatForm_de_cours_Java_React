import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../services/usersService";



function UserForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const [error, setError] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect (() => {
        getUserById(id).then(response => {
            setFirstName(response.data.firstName),
            setLastName(response.data.lastName),
            setEmail(response.data.email),
            setEmail(response.data.email),
            setRole(response.data.role)
        })

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { firstName, lastName, email, role}
        await updateUser(id, data)
        navigate('/users')
    }


return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Modifier l'utilisateur
            </h2>
        { error &&
            (
                <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center">
                        {error}
                </p>
            )
        }
        <form onSubmit={handleSubmit}  className="flex flex-col gap-4" >

            <div>
                <label className="block text-gray-700 font-medium mb-1">Prénom</label>
                <input 
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="prenom"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-1">Nom</label>
                <input 
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="nom"
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
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input 
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                readOnly
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Créer
            </button>

        </form>
        </div>
    </div>
)

}

export default UserForm
import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/usersService"
import { Link } from "react-router-dom"




const Userlistes = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then(response => {
            setUsers(response.data)
        })
    }, [])


    return(
        <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4"> Liste Utilisateurs</h2>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="w-full text-sm text-left">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="px-6 py-3">Prénom</th>
                            <th className="px-6 py-3">Nom</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{user.firstName}</td>
                                <td className="px-6 py-4">{user.lastName}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.role}</td>
                                <td className="px-6 py-4">
                                    <Link to={`/users/${user.id}`} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
                                        Voir
                                    </Link>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        
        </div>
    )
}

export default Userlistes
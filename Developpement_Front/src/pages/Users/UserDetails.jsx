import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getUserById } from "../../services/usersService";
import { getEnrollmentsByStudent } from "../../services/enrollments";




const UserDetails = () => {

    const [user, setUsers] = useState(null)
    const [enrollments, setEnrollments] = useState([])

    const { id } = useParams();

    useEffect(() => {
        getUserById(id).then(response => {
            setUsers(response.data)
        }).catch(err => {
            console.log('Erreur', err)
        })
    }, [])

    useEffect(() => {
        getEnrollmentsByStudent(id).then(response => {
            setEnrollments(response.data)
        })
    }, [])

if (!user) return <p className="text-center mt-10">Chargement...</p>

return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    {user.firstName} {user.lastName}
            </h2>
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-gray-500 text-sm">L'Email</p>
                    <p className="text-gray-800 font-medium">{user.email}</p>
                </div>
                <div>
                    <p  className="text-gray-500 text-sm">Role</p>
                    <p className="text-gray-800 font-medium">{user.role}</p>
                </div>

                {user.role ==='STUDENT' && (
                    <div> 
                        <p className="text-gray-500 text-sm">Cours inscrits</p>
                        {enrollments.map(enrollment => (
                            <div key={enrollment.id}>
                                <p className="text-gray-800 font-medium">{enrollment.courseTitle}</p>
                            </div>
                        ))}

                    </div>
                )}
            </div>
            <div className="flex gap-3 mt-6">
                <Link to={`/users/${user.id}/edit`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Modifier
                </Link>
            </div>
        </div>

    </div>
)

}

export default UserDetails
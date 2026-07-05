import { useEffect, useState } from "react";
import { createCourse, getAllCourses, getCourseById, updateCourse } from "../services/coursesService";
import { getAllUsers} from"../services/usersService";
import { useNavigate, useParams } from "react-router-dom";



function CourseForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [userId, setUserId] = useState('')
    const [error, setError] = useState('')
    const [users, setUsers] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()
    const isEditMode = !!id


    useEffect(() => {
    if (isEditMode) {
        getCourseById(id).then(response => {
            setTitle(response.data.title),
            setDescription(response.data.description),
            setCreatedAt(response.data.createdAt),
            setUserId(response.data.userId || '')
        })
        
    }
    }, []);

    useEffect(() => {
        getAllUsers().then(response => {
            setUsers(response.data.filter(u => u.role === 'INSTRUCTOR'))
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { title, description, createdAt, userId}

        if (isEditMode) {
            await updateCourse(id, data)
        } else {
            await createCourse(data)
        }
        navigate('/courses')
    }


return(
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                {isEditMode ? 'Modifier la commande' : 'Créer une commande'}

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
                <label className="block text-gray-700 font-medium mb-1">Titre</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Mathématique, SVT..."
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-1">Description</label>
                <input 
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Une description "
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-1">Date</label>
                <input 
                    type="date"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="ANNEE-MOIS-JOUR "

                />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-1">INSTRUCTEUR</label>
                <select 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                        {users.map(user => (  //  le map qui définit "user"
                            <option key={user.id} value={user.id}>
                                {user.firstName} {user.lastName}
                            </option>
                        ))}

                </select>
            </div>
        
            <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                {isEditMode ? 'Modifier' : 'Créer'}
            </button>
        </form>
        </div>
        
    </div>   
    )

}

export default CourseForm
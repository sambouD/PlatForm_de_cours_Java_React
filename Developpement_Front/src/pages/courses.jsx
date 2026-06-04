import { useEffect, useState } from "react"
import { getAllCourses } from "../services/coursesService"
import { Link } from "react-router-dom"


const Courses = () => {
        const [courses, setCourses] = useState([])

    useEffect(() => {
        getAllCourses().then(response => {
            setCourses(response.data)
        })
    }, []);


return (
<div className="p-6">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">Liste des cours</h2>
    
    <div className="overflow-x-auto rounded-lg shadow">
    <table className="w-full text-sm text-left">
        <thead className="bg-black text-white">
        <tr>
            <th className="px-6 py-3">Titre</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Créé le</th>
            <th className="px-6 py-3">Professeur</th>
            <th className="px-6 py-3">Actions</th>
        </tr>
        </thead>
        <tbody>
        {courses.map(course => (
            <tr key={course.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{course.title}</td>
                <td className="px-6 py-4">{course.description}</td>
                <td className="px-6 py-4">{course.createdAt}</td>
                <td className="px-6 py-4">{course.userName}</td>
                <td className="px-6 py-4">
                <Link to={`/courses/${course.id}`} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
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

export default Courses

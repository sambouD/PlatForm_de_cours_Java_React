import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCourseById } from "../services/coursesService";
import { Link } from "react-router-dom"



const CourseDetails = () => {
    const [course, setCourses] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        getCourseById(id).then(response => {
            setCourses(response.data)
        }).catch(err => {
        console.log('Erreur:', err)
    })
    }, []);
    
if (!course) return <p className="text-center mt-10">Chargement...</p>
return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                {course.title}
            </h2>

            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-gray-500 text-sm">Description</p>
                    <p className="text-gray-800 font-medium">{course.description}</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Créé le</p>
                    <p className="text-gray-800 font-medium">{course.createdAt}</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Professeur</p>
                    <p className="text-gray-800 font-medium">{course.userName}</p>
                </div>
            </div>
        </div>
        <div className="flex gap-3 mt-6">
            <Link to="/courses" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Modifier
            </Link>

        </div>
    </div>

    )
    
}

export default CourseDetails
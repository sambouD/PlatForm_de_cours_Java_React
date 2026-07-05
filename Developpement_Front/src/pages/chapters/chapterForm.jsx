import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createChapter, getAllChapters, getChapterById, updateChapter } from "../../services/chapterService";
import { getAllCourses } from "../../services/coursesService";





function ChapterForm() {

    const [content, setContent] = useState('')
    const [orderIndex, setOrderIndex] = useState('')
    const [title, setTitle] = useState('')
    const [courseId, setCourseId] = useState('')
    const [error, setError] = useState('')
    const [courses, setCourses] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()
    const isEditMode = !!id

    useEffect(() => {
        if(isEditMode) {
            getChapterById(id).then(response => {
                setContent(response.data.content),
                setOrderIndex(response.data.orderIndex),
                setTitle(response.data.title),
                setCourseId(response.data.courseId || '')
            })
        }
    }, []);


    useEffect(() => {
        getAllCourses().then(response => {
            setCourses(response.data)
        })
    }, [])

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {content, orderIndex, title, courseId}

        if (isEditMode) {
            await updateChapter(id, data)
        } else {
            await createChapter(data)
        }
        navigate('/chapters')
    }

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    {isEditMode ? 'Modifier' : 'Créer' }
                </h2>

                {error &&
                (
                    <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center">
                        {error}
                    </p>
                )
                }

                <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Titre</label>
                        <input 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="chapitre...."
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Contenu</label>
                        <input 
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="un description..."
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Commande</label>
                        <input 
                            type="number"
                            value={orderIndex}
                            onChange={(e) => setOrderIndex(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Cours</label>
                        <select 
                            value={courseId}
                            onChange={(e) => setCourseId(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {courses.map(course => (
                                <option key={course.id} value={course.id}>
                                    {course.title}
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

export default ChapterForm
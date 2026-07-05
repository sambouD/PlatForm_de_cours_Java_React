import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getChapterById } from "../../services/chapterService";





const ChapterDetails = () => {
    const [chapter, setChapters] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        getChapterById(id).then(response => {
            setChapters(response.data)
        }).catch(err => {
            console.log('Erreur: ', err);  
        })
    }, [])

    if(!chapter) return <p className="text-center mt-10">Chargement...</p>

return (
    <div  className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                {chapter.title}
            </h2>

            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-gray-500 text-sm">Contenu</p>
                    <p className="text-gray-800 font-medium"> {chapter.content}</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Commande</p>
                    <p className="text-gray-800 font-medium"> {chapter.orderIndex}</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Cours</p>
                    <p className="text-gray-800 font-medium"> {chapter.courseTitle}</p>
                </div>
            </div>

            <div className="flex gap-3 mt-6">
                <Link to={`/chapters/${chapter.id}/edit`}  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Modifier
                </Link>

        
            </div>
        </div>

    </div>
)
}

export default ChapterDetails
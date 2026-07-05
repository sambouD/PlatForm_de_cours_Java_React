import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getAllChapters } from "../../services/chapterService";


const ChaptersListes = () => {

    const [chapters, setChapters] = useState([])

    useEffect(() => {
        getAllChapters().then(response => {
            setChapters(response.data)
        })
    }, []);



return (
    <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Liste des chapitres</h2>
        <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full text-sm text-left">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="px-6 py-3">Contenu</th>
                        <th className="px-6 py-3">Commande</th>
                        <th className="px-6 py-3">Titre</th>
                        <th className="px-6 py-3">Cours</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {chapters.map(chapter => (
                        <tr key={chapter.id} className="border-b hover:bg-gray-50">
                            <td className="px-6 py-4">{ chapter.content}</td>
                            <td className="px-6 py-4">{ chapter.orderIndex}</td>
                            <td className="px-6 py-4">{ chapter.title}</td>
                            <td className="px-6 py-4">{ chapter.courseTitle}</td>
                            <td className="px-6 py-4">
                                <Link to={`/chapters/${chapter.id}`} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
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
        <div className="flex gap-3 mt-6">
            <Link to="/chapters/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Créer
            </Link>            
        </div>
    </div>
)
}

export default ChaptersListes
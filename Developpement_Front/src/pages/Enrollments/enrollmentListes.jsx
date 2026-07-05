import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getAllEnrollments } from "../../services/enrollments"




const EnrollmentListes = () => {
    const [enrollments, setEnrollments] = useState([])

    useEffect(() => {
        getAllEnrollments().then(response => {
            setEnrollments(response.data)
        })
    }, []);


    return(
        <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Liste d'inscrits</h2>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="w-full text-sm text-left">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="px-6 py-3"> Date d'inscription</th>
                            <th className="px-6 py-3"> Cours</th>
                            <th className="px-6 py-3"> Elèves</th>
                            <th className="px-6 py-3"> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map(enrollment => (
                            <tr key={enrollment.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{enrollment.enrolledAt}</td>
                                <td className="px-6 py-4">{enrollment.userName}</td>
                                <td className="px-6 py-4">{enrollment.courseTitle}</td>
                                <td className="px-6 py-4">
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

export default EnrollmentListes
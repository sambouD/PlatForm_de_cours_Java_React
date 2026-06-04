import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"




function Navbar() {

    const {token, logout} = useAuth()



return (
        <nav className="bg-blue-600 px-6 py-4 flex justify-between items-center shadow-md">
            
            <Link to="/" className="text-white text-xl font-bold">
                🎓 E-Learning
            </Link>

            <ul className="flex items-center gap-6">
                {token ? (
                    <>
                        <li>
                            <Link to="/courses" className="text-white hover:text-blue-200 transition">
                                Cours
                            </Link>
                        </li>
                        <li>
                            <Link to="/users" className="text-white hover:text-blue-200 transition">
                                Utilisateurs
                            </Link>
                        </li>
                        <li>
                            <Link to="/chapters" className="text-white hover:text-blue-200 transition">
                                Chapitres
                            </Link>
                        </li>
                        <li>
                            <Link to="/enrollments" className="text-white hover:text-blue-200 transition">
                                Inscriptions
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={logout}
                                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
                            >
                                Déconnexion
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="text-white hover:text-blue-200 transition">
                                Connexion
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
                                Inscription
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}
export default Navbar
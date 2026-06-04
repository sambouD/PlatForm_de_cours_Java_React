import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/courses";
import Navbar from './components/Navbar'
import CourseDetails from "./pages/CourseDetails";

function App() {
return(
<BrowserRouter>
      <Navbar />
            <Routes>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<Register />}/>
                  <Route path="/courses" element={< Courses/>}/>
                  <Route path="/users" element={<h1>Utilisateurs</h1>}/>
                  <Route path="/chapters" element={<h1>Chapitres</h1>}/>
                  <Route path="/enrollments" element={<h1>Inscription</h1>}/>


            {/** Cours détail et fourmulaire */}

                  <Route path="/courses/:id" element= {< CourseDetails/>}/>
                  <Route path="/courses/new" element= {<h1>Création du cours</h1>}/>
                  <Route path="/courses/edit" element= {<h1>Modification du cours</h1>}/>
            {/** utilisateur détail et fourmulaire */}
                  <Route path="/users/:id" element= {<h1>Détails de l'utilsateur</h1>}/>
                  <Route path="/users/new" element= {<h1>Création d'un utilsateur</h1>}/>
                  <Route path="/users/edit" element= {<h1>Modification d'un utilsateur</h1>}/>

            {/** chapitre détail et fourmulaire */}
                  <Route path="/chapters/:id" element= {<h1>Détails du chapitre</h1>}/>
                  <Route path="/chapters/new" element= {<h1>Création d'un chapitre</h1>}/>
                  <Route path="/chapters/edit" element= {<h1>Modification d'un chapitre</h1>}/>

            {/** incription détail et fourmulaire */}
                  <Route path="/enrollments/:id" element= {<h1>Détails de l'inscription</h1>}/>
                  <Route path="/enrollments/:id" element= {<h1>Inscription</h1>}/>
                  <Route path="/enrollments/:studentId" element= {<h1>Détails de student inscrit</h1>}/>
                  <Route path="/enrollments/:courseId" element= {<h1>Détails d'un student inscrit à ce cours </h1>}/>


            </Routes>
</BrowserRouter>
)
}

export default App
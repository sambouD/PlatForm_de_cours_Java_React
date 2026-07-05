import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/courses";
import Navbar from './components/Navbar'
import CourseDetails from "./pages/CourseDetails";
import CourseForm from "./pages/courseForm";
import Userlistes from "./pages/Users/UsersListes";
import UserDetails from "./pages/Users/UserDetails";
import UserForm from "./pages/Users/UserForm";
import ChaptersListes from "./pages/chapters/ChaptersListes";
import ChapterDetails from "./pages/chapters/chapterDetails";
import ChapterForm from "./pages/chapters/chapterForm";
import EnrollmentListes from "./pages/Enrollments/enrollmentListes";


function App() {
return(
<BrowserRouter>
      <Navbar />
            <Routes>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<Register />}/>
                  <Route path="/courses" element={< Courses/>}/>
                  <Route path="/users" element={< Userlistes/>}/>
                  <Route path="/chapters" element={<ChaptersListes />}/>
                  <Route path="/enrollments" element={< EnrollmentListes/>}/>

            {/** Cours détail et fourmulaire */}

                  <Route path="/courses/:id" element= {< CourseDetails/>}/>
                  <Route path="/courses/new" element= {< CourseForm/>}/>
                  <Route path="/courses/:id/edit" element= {< CourseForm/>}/>


            {/** utilisateur détail et fourmulaire */}
                  <Route path="/users/:id" element= {< UserDetails />}/>
                  <Route path="/users/new" element= {<h1>Création d'un utilsateur</h1>}/>
                  <Route path="/users/:id/edit" element= {<UserForm />}/>

            {/** chapitre détail et fourmulaire */}
                  <Route path="/chapters/:id" element= {<ChapterDetails/>}/>
                  <Route path="/chapters/new" element= {<ChapterForm />}/>
                  <Route path="/chapters/:id/edit" element= {<ChapterForm />}/>

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
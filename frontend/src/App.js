// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Teacherlogin from './components/TeacherLogin';
import TeacherSignup from './components/TeacherSignup';
import TeacherHomepage from './components/TeacherHomepage';
import UserHomepage from './components/UserHomepage';
import StudentsList from './components/StudentsList';
import Addexam from './components/Addexam';
import Studenthomepage from './components/Studenthomepage';
import Exampage from './components/Exampage';
import { useState } from 'react';
import Alert from './components/Alert';
import Instruction from './components/Instruction';
import Forgpass from './components/Forgpass';
import Forgpasemail from './components/Forgpasemail';
import Questions from './components/Questions';
import Questiondiv from './components/Questiondiv';
import EditExamPage from './components/EditExamPage';
import ResultsPage from './components/ResultsPage';
import Start from './components/Start';
import Results from './components/Results';
import EditProfile from './components/EditProfile';
import AdminRequests from './components/AdminRequests';
import Contact from './components/Contact';
import Faq from './components/Faq';
function App() {
  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>{
     setalert({
       msg:message,
       type:type
     })
     setTimeout(() => {
       setalert(null);
     }, 1500);

  }
  return (
   <>
    <Alert alert={alert} />
    <Router>
    <Routes>
    <Route exact path="/contact" element={<Contact showalert={showalert}/>}/>
    <Route exact path="/faq" element={<Faq showalert={showalert}/>}/>
    <Route exact path="/profile" element={<EditProfile showalert={showalert}/>}/>
    <Route exact path="/adminrequests" element={<AdminRequests showalert={showalert}/>}/>
    <Route exact path="/results" element={<Results showalert={showalert}/>}/>
    <Route exact path="/login" element={<Login showalert={showalert}/>}/>
    <Route exact path="/" element={<Start showalert={showalert}/>}/>
    <Route exact path="/teacherlogin" element={<Teacherlogin showalert={showalert} />}/>
    <Route exact path="/teachersignup" element={<TeacherSignup showalert={showalert} />}/>
    <Route exact path="/teacherhomepage" element={<TeacherHomepage showalert={showalert}/>}/>
    <Route exact path="/userhomepage" element={<UserHomepage showalert={showalert}/>}/>
    <Route exact path="/studentlist" element={<StudentsList showalert={showalert}/>}/>
    <Route exact path="/addexam" element={<Addexam showalert={showalert} />}/>
    <Route exact path="/studenthomepage" element={<Studenthomepage showalert={showalert} />}/>
    <Route exact path="/exampage"   element={<Exampage  showalert={showalert} />}/>
    <Route exact path="/instruction" element={<Instruction/>}/>
    <Route exact path="/forgpass/:param1/:param2" element={<Forgpass showalert={showalert}/>}/>
    <Route exact path="/forgpassemail" element={<Forgpasemail showalert={showalert}/>}/>
    <Route exact path="/questions" element={<Questions showalert={showalert}/>}/>
    <Route exact path="/questiondiv" element={<Questiondiv showalert={showalert}/>}/>
    <Route exact path="/editexampage" element={<EditExamPage showalert={showalert}/>}/>
    <Route exact path="/resultpage" element={<ResultsPage showalert={showalert}/>}/>

  
    </Routes>
    </Router>
   </>
  );
}

export default App;

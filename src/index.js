import React,{ useState,useEffect,useRef } from "react";
import ReactDOM from 'react-dom/client';
// import PostWritePage from './component/page/PostWritePage';
// import PostViewPage from './component/page/PostViewPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GNB from './component/ui/GNB';
import { useNavigate, useParams ,useLocation } from "react-router-dom";
import Mainpage from './component/page/MainPage'
import ProjectPage from './component/page/ProjectPage'
import PersonalPage from './component/page/PersonalPage'
import StudentPage from './component/page/StudentPage'
import ScrapPage from './component/page/ScrapPage'
import ProjectDetailPage from './component/page/ProjectDetailPage'
const root = ReactDOM.createRoot(document.getElementById('root'));

function App(props){
    const postId = useParams().id

    return(
        <BrowserRouter>
        <GNB></GNB> 
            <Routes>
                <Route path="/" element={<Mainpage/>}/>
                <Route path="ProjectPage" element={<ProjectPage/>}/>
                <Route path="StudentPage" element={<StudentPage/>}/>
                <Route path="PersonalPage" element={<PersonalPage/>}/>
                <Route path="ScrapPage" element={<ScrapPage/>}/>
                <Route path="ProjectDetailPage" element={<ProjectDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

root.render(<App/>);




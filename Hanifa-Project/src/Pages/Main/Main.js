import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import StudentDashboard from '../Dashboard/StudentDashboard';
import AdminDashboard from '../Dashboard/AdminDashboard';
import TeacherDashboard from '../Dashboard/TeacherDashboard';
import StudentAdmit from '../Student/StudentAdmit';
import AllStudents from '../Student/AllStudents';
import StudentDetails from '../Student/StudentDetails';
import AddTrainer from '../Trainers/AddTrainer';
import AllTrainers from '../Trainers/AllTrainers';
import TrainerDetails from '../Trainers/TrainerDetails';
import BookList from '../Library/BookList';
import Addbook from '../Library/Addbook';
import FeeCollection from '../Payments/FeeCollection';
import CreatePayment from '../Payments/CreatePayment';
import AllBatchs from '../Batch/AllBatchs';
import AddNewBatch from '../Batch/AddNewBatch';
import Course from '../Course/Course';
import Attendance from '../Attendance/Attendance';
import ProfileSetting from '../ProfileSetting/ProfileSetting';
import Video from '../Library/Video';

const Main = () => {

    const [userDetail, setuserDetail] = useState({
        userName: '',
        userPhoto: ''
    });
    const [isAdmin, setIsAdmin] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [role, setRole] = useState(0);
    useEffect(() => {
        setuserDetail(JSON.parse(localStorage.getItem("user")));
        const role = Number(localStorage.getItem("Role"));
        setRole(role);
        if (role === 1) {
            setIsAdmin(true);
        }
        if (role === 2) {
            setIsTeacher(true);
        }
        if (role === 3) {
            setIsStudent(true);
        }
    }, [userDetail?.userName]);
    return (
        <Router>

            <NavBar>
                <Routes>
                    {isAdmin &&
                        <>
                            <Route path='/' element={<AdminDashboard />} />
                            <Route path='/StudentAdmit' element={<StudentAdmit />} />
                            <Route path='/AllStudents' element={<AllStudents />} />
                            <Route path='/StudentDetails' element={<StudentDetails />} />
                            <Route path='/AddTrainer' element={<AddTrainer />} />
                            <Route path='/AllTrainers' element={<AllTrainers />} />
                            <Route path='/TrainerDetails' element={<TrainerDetails />} />
                            <Route path='/AddBook' element={<Addbook />} />
                            <Route path='/BookList' element={<BookList />} />
                            <Route path='/FeeCollection' element={<FeeCollection />} />
                            <Route path='/CreatePayment' element={<CreatePayment />} />
                            <Route path='/AllBatchs' element={<AllBatchs />} />
                            <Route path='/AddNewBatch' element={<AddNewBatch />} />
                            <Route path='/Course' element={<Course />} />
                            <Route path='/Attendance' element={<Attendance />} />
                            <Route path='/ProfileSetting' element={<ProfileSetting />} />
                            <Route path='/Video' element={<Video />} />
                        </>
                    }
                    {isTeacher &&
                        <>
                            <Route path='/' element={<TeacherDashboard />} />
                            <Route path='/TrainerDetails' element={<TrainerDetails />} />
                            <Route path='/ProfileSetting' element={<ProfileSetting />} />
                            <Route path='/BookList' element={<BookList />} />
                            <Route path='/Course' element={<Course />} />
                            <Route path='/AllBatchs' element={<AllBatchs />} />

                        </>
                    }
                    {isStudent &&
                        <>
                            <Route path='/' element={<StudentDashboard />} />
                            <Route path='/StudentDetails' element={<StudentDetails />} />
                            <Route path='/ProfileSetting' element={<ProfileSetting />} />
                            <Route path='/BookList' element={<BookList />} />
                            <Route path='/Course' element={<Course />} />
                        </>
                    }
                </Routes>
            </NavBar>

        </Router>
    )
}
export default Main;
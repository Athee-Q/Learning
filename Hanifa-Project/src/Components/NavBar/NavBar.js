import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Model from '../Model/Model'
import Login from '../../Pages/Login/Login';

const NavBar = ({ children }) => {
    const [userDetail, setuserDetail] = useState({
        userName: '',
        userPhoto: ''
    });
    const [userName, setUserName] = useState('');
    const [userPhoto, setUserPhoto] = useState('');
    const [style, setStyle] = useState("navbar-nav  sidebar sidebar-dark accordion");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    useEffect(() => {
        const role = Number(localStorage.getItem("Role"));
        if (role === 1) {
            setIsAdmin(true);
        }
        if (role === 2) {
            setIsTeacher(true);
        }
        if (role === 3) {
            setIsStudent(true);
        }

        setuserDetail(JSON.parse(localStorage.getItem("user")));
        setUserName(userDetail?.userName ?? '');
        setUserPhoto(!userDetail?.userPhoto ? "img/undraw_profile.svg" : userDetail.userPhoto);
    }, [userDetail?.userName, isAdmin, isTeacher, isStudent]);

    const changeStyle = () => {
        if (style === "navbar-nav  sidebar sidebar-dark accordion") {
            setStyle("navbar-nav  sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav  sidebar sidebar-dark accordion")
        }
    };
    return (
        <>
            {isAdmin || isTeacher || isStudent ?
                <>
                    <nav id='topnav' className="navbar navbar-expand navbar-light  topbar  static-top shadow  " style={{ backgroundColor: "#112B3C" }} >
                        
                        <div className="navbar-brand  mx-3" onClick={changeStyle} ><span style={{color:"white", fontWeight:"bold"}}>KITS CAMPS</span></div>
                        <ul className="navbar-nav ml-auto">
                            
                            <div className="topbar-divider d-none d-sm-block"></div>
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-white small">{userName}</span>
                                    <img className="img-profile rounded-circle"
                                        src={userPhoto} />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown">
                                   
                                    <Link className="dropdown-item" href="#" to="/ProfileSetting">
                                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" ></i>
                                        <span>Settings</span>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div id="wrapper" className='sidenavfixed'>
                        {isAdmin &&
                            <ul className={style} style={{ backgroundColor: "#112B3C" }} id="accordionSidebar">
                                {/* <a className="sidebar-brand d-flex align-items-center justify-content-center " href="#">

                                    <div className="sidebar-brand-text mx-3">KITS camps</div>
                                    <div className="text-center d-none d-md-inline">
                                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                                    </div>
                                </a> */}
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/"
                                        aria-expanded="true" aria-controls="collapseAttendance">
                                        <i class="fas fa-fw fa-tachometer-alt" aria-hidden="true"></i>&nbsp;
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                        aria-expanded="true" aria-controls="collapseUtilities">
                                        <i class="fa fa-users " aria-hidden="true"></i>&nbsp;
                                        <span>Trainers Profile</span>
                                    </a>
                                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                        data-parent="#accordionSidebar">
                                        <div className="bg-white py-2 collapse-inner rounded">

                                            <Link className="collapse-item" to="/AddTrainer" >Add Trainer</Link>
                                            <Link className="collapse-item" to="/AllTrainers" >All Trainer</Link>

                                        </div>
                                    </div>
                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                        aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-graduation-cap  " aria-hidden="true"></i>&nbsp;
                                        <span>Students Profile</span>
                                    </a>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                        <div className="bg-white py-2 collapse-inner rounded">

                                            <Link className='collapse-item' to="/StudentAdmit">

                                                <span>Student Admit</span>
                                            </Link>
                                            <Link className='collapse-item' to="/AllStudents">

                                                <span>All Students</span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/Course"
                                        aria-expanded="true" aria-controls="collapseSubject">
                                        <i class="fa fa-id-card " aria-hidden="true"></i>&nbsp;
                                        <span>Course Details</span>
                                    </Link>

                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseClass"
                                        aria-expanded="true" aria-controls="collapseClass">
                                        <i class="fa fa-table  " aria-hidden="true"></i>&nbsp;
                                        <span>Batch Details</span>
                                    </a>
                                    <div id="collapseClass" className="collapse" aria-labelledby="headingClass"
                                        data-parent="#accordionSidebar">
                                        <div className="bg-white py-2 collapse-inner rounded">
                                            <Link className="collapse-item" to="/AllBatchs" >All Batch</Link>
                                            <Link className="collapse-item" to="/AddNewBatch" >Add New Batch</Link>
                                        </div>
                                    </div>
                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLibrary"
                                        aria-expanded="true" aria-controls="collapseLibrary">
                                        <i class="fa fa-book  " aria-hidden="true"></i>&nbsp;
                                        <span> Digital Library</span>
                                    </a>
                                    <div id="collapseLibrary" className="collapse" aria-labelledby="headingLibrary"
                                        data-parent="#accordionSidebar">
                                        <div className="bg-white py-2 collapse-inner rounded">
                                            <Link className="collapse-item" to="/BookList" >All Documents</Link>
                                            <Link className="collapse-item" to="/AddBook" >Add Documents </Link>
                                        </div>
                                    </div>
                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAccount"
                                        aria-expanded="true" aria-controls="collapseAccount">
                                        <i class="fa fa-briefcase " aria-hidden="true"></i>&nbsp;
                                        <span>Payments</span>
                                    </a>
                                    <div id="collapseAccount" className="collapse" aria-labelledby="headingAccount"
                                        data-parent="#accordionSidebar">
                                        <div className="bg-white py-2 collapse-inner rounded">

                                            <Link className="collapse-item" to="/FeeCollection" >Fee Collection</Link>
                                            <Link className="collapse-item" to="/CreatePayment" >Create Payment</Link>

                                        </div>
                                    </div>
                                </li>

                                <hr className="sidebar-divider my-0" />

                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/Attendance"
                                        aria-expanded="true" aria-controls="collapseAttendance">
                                        <i class="fa fa-list-alt " aria-hidden="true"></i>&nbsp;
                                        <span>Attendance</span>
                                    </Link>
                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/ProfileSetting"
                                        aria-expanded="true" aria-controls="collapseAttendance">
                                        <i class="fa fa-cog" aria-hidden="true"></i>&nbsp;
                                        <span>Profile Setting</span>
                                    </Link>

                                </li>
                            </ul>
                        }
                        {isTeacher &&
                            <ul className={style} style={{ backgroundColor: "#112B3C" }} id="accordionSidebar">
                                {/* <a className="sidebar-brand d-flex align-items-center justify-content-center " href="#">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                    </div>
                                    <div className="sidebar-brand-text mx-3">KITS camps</div>
                                    <div className="text-center d-none d-md-inline">
                                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                                    </div>
                                </a> */}
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/"
                                        aria-expanded="true" aria-controls="collapseAttendance">
                                        <i class="fas fa-fw fa-tachometer-alt" aria-hidden="true"></i>&nbsp;
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <hr className="sidebar-divider my-0" />

                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/TrainerDetails"
                                        aria-expanded="true" aria-controls="collapseParent">
                                        <i class="fa fa-user-plus  " aria-hidden="true"></i>&nbsp;
                                        <span>Profile</span>
                                    </Link>

                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/Course"
                                        aria-expanded="true" aria-controls="collapseSubject">
                                        <i class="fa fa-id-card " aria-hidden="true"></i>&nbsp;
                                        <span>Course Details</span>
                                    </Link>
                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item ">
                                    <Link className='nav-link' to="/AllBatchs " aria-expanded="true">
                                        <i className="fa fa-table"></i>&nbsp;
                                        <span>Batch Detail</span>
                                    </Link>
                                </li>

                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/Attendance"
                                        aria-expanded="true" aria-controls="collapseAttendance">
                                        <i class="fa fa-list-alt " aria-hidden="true"></i>&nbsp;
                                        <span>Attendance</span>
                                    </Link>
                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item ">
                                    <Link className='nav-link' to="/BookList">
                                        <i className="fa fa-book"></i>&nbsp;
                                        <span>Library</span>
                                    </Link>
                                </li>
                            </ul>
                        }
                        {isStudent &&
                            <ul className={style} style={{ backgroundColor: "#112B3C" }} id="accordionSidebar">
                                {/* <a className="sidebar-brand d-flex align-items-center justify-content-center " href="#">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                    </div>
                                    <div className="sidebar-brand-text mx-3">KITS camps</div>
                                    <div className="text-center d-none d-md-inline">
                                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                                    </div>
                                </a> */}
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/"
                                        aria-expanded="true" aria-controls="collapseAttendance">
                                        <i class="fas fa-fw fa-tachometer-alt" aria-hidden="true"></i>&nbsp;
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <hr className="sidebar-divider my-0" />

                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/StudentDetails"
                                        aria-expanded="true" aria-controls="collapseParent">
                                        <i class="fa fa-user-plus  " aria-hidden="true"></i>&nbsp;
                                        <span>Profile</span>
                                    </Link>

                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/Course"
                                        aria-expanded="true" aria-controls="collapseSubject">
                                        <i class="fa fa-id-card " aria-hidden="true"></i>&nbsp;
                                        <span>Course Details</span>
                                    </Link>

                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item ">
                                    <Link className='nav-link' to="/BookList">
                                        <i className="fa fa-book"></i>&nbsp;
                                        <span>Documents</span>
                                    </Link>
                                </li>
                                <hr className="sidebar-divider my-0" />
                                <li className="nav-item">
                                    <Link className="nav-link " href="#" to="/Attendance"
                                        aria-expanded="true" aria-controls="collapseAttendance">
                                        <i class="fa fa-list-alt " aria-hidden="true"></i>&nbsp;
                                        <span>Attendance</span>
                                    </Link>
                                </li>
                            </ul>
                        }
                        <div id="content-wrapper" className="d-flex flex-column ">
                            <div >
                                <div  className="container-fluid mt-4">{children}</div>
                            </div>
                        </div>
                    </div>
                    <Model />
                </>
                : <Login />
            }
        </>
    )
}

export default NavBar;

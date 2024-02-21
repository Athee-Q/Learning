import React, { useState, useEffect } from 'react';

const TeacherDashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    useEffect(() => {

        
    }, []);
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Teacher Dashboard</h1>
            </div>
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total assigned batch</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">2</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-graduation-cap fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                      No of Students </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">25</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-users fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Batch Completed</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">40%</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-user-plus fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Student Placement
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">59%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-money fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Recent Activities</h6>
                        </div>
                        <div className="card-body">
                            <p className="mb-0">NEW CRASH COURSE !!! </p>
                            <p>
                                NET Core is used to create server applications that run on Windows, Linux and Mac.
                                It does not currently support creating desktop applications with a user interface. Developers can write applications and libraries in VB.NET, C# and F# in both runtimes
                            </p>
                            <p className="mb-0">Before working with this theme, you should become familiar with the
                                Bootstrap framework, especially the utility classNamees.</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 mb-4">


                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Attendance</h6>
                        </div>
                        <div className="card-body">
                            <div className='row '>

                                <div className="col">
                                    <label className='label'>Total Student : </label>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <p className=''> 21</p>
                                </div>                        
                                <div className="col">
                                    <label className='label'>No of Student Absent : </label>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <p className=''> 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-12 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary ">Announcements</h6>
                            <div className="row justify-content-end mt-lg-n4">   <button className="btn btn-primary btn-md" onClick={openModal}>ADD</button></div>
                            <div className={`modal fade ${showModal ? 'show' : ''}`} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
                                <div className="modal-dialog modal-lg modal-dialog-centered">
                                    <div className="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Enter a Announcement</h4>
                                        </div>
                                        <div className="modal-body">
                                            <textarea className="form-control" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={closeModal}>Add</button>
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body" style={{overflowY:'scroll',height:'300px'}}>
                            <div className="list-group" >
                                <small class="text-muted">16 October, 2023</small>
                                <div class="d-flex w-55 justify-content-between">
                                    <h6 class="mb-1" style={{ color: 'purple' }}>Knila</h6>
                                    <small>5 min ago</small>
                                </div>
                                <p class="mb-1">New 2 Month .NETCore Crash Course! </p>

                                <small class="text-muted">10 October, 2023</small>
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1" style={{ color: 'purple' }}>Knila </h6>
                                    <small>6 days ago</small>
                                </div>
                                <p class="mb-1">Monthly Fee Details has been published.</p>

                                <small class="text-muted">9 October, 2023</small>
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1" style={{ color: 'blue' }}> Jenny</h6>
                                    <small class="text-muted">7 days ago</small>
                                </div>
                                <p class="mb-1">Syllabus change from today.</p>

                                <small class="text-muted">8 October, 2023</small>
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="" style={{ color: 'green' }}>Kylie</h6>
                                    <small class="text-muted">8 days ago</small>
                                </div>
                                <p class="mb-1">HBD Sanjay!</p>
                                <small class="text-muted">9 October, 2023</small>
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1" style={{ color: 'purple' }}> Knila</h6>
                                    <small class="text-muted">7 days ago</small>
                                </div>
                                <p class="mb-1">Two new cources on Angular and Javascript!</p>
                                <small class="text-muted">5 October, 2023</small>
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1" style={{ color: 'purple' }}> Knila</h6>
                                    <small class="text-muted">11 days ago</small>
                                </div>
                                <p class="mb-1">Classes will start from 10 am today.</p>
                                <small class="text-muted">2 October, 2023</small>
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1" style={{ color: 'purple' }}> Knila</h6>
                                    <small class="text-muted">7 days ago</small>
                                </div>
                                <p class="mb-1">The institution will remain closed tomorrow due to a government holiday.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeacherDashboard;
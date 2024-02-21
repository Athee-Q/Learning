import React from 'react';


const StudentDashboard = () => { 
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800"> Student Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Enter Feedback</a>
            </div>
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total class hours</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">50</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
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
                                        No of classes pending</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">21</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
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
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Attendance percentage
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">78%</div>
                                        </div>
                                        <div className="col">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
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
                                        Assesment pending</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">1</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                </div>
                <div className="col-lg-12 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Announcements</h6>
                        </div>
                        <div className="card-body" style={{ overflowY: 'scroll', height: '300px' }}>
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
export default StudentDashboard;
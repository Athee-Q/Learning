import React, { useState, useEffect, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from "react-router-dom";



export const Video = () => {
    const { state } = useLocation();
    const [idState, setIdState] = useState(null);
    const [studentDetail, setStudentDetail] = useState({});
    const navigation = useNavigate();
    const screenshotRef = useRef(null);



    useEffect(() => {

        if (state) {
            setIdState(state.id);
            localStorage.setItem("studentId", state.id);
        }
        setIdState(localStorage.getItem("studentId"));
        if (idState) {
            const items = JSON.parse(localStorage.getItem("studentList"));
            if (items) {
                const filterItems = items?.find(item => {
                    return item.id === idState;
                });

                if (filterItems) {
                    setStudentDetail(filterItems)
                }
            }
        }

    }, [idState, state]);

    const handleEdit = (id, key) => {
        const confirmed = window.confirm(
            "Are you sure you want to edit this data?"
        );
        if (confirmed && id && key === 's') {
            navigation("/StudentEdit", { state: { id: id, key: key, edit: true } });
        };
    }
    return (

        <div className="bg-white p-4 shadow">
            <div className="row">
                <div className='col'>
                    <h3 className="">Details</h3>
                </div>

            </div>
            <hr className="sidebar-divider my-0 " />

            <div className='row mt-4' ref={screenshotRef}>
          
                <div className='col'>
                <div className="ratio ratio-4x3">
                        <iframe width ='1500' height='800'src="https://www.youtube.com/embed/BBpAmxU_NQo?si=8IQ6o8hgZGYAYpnu" title="YouTube video" ></iframe>
                    </div>


                    {/* <div className="row">
                        <div className="col">
                            <label className='label'>Name : </label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.firstName} {studentDetail.lastName}</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col">
                            <label className='label'>Gender :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.gender}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Father Name :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''> {studentDetail.fathername}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Mother Name :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.mothername}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Date of Birth :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.birthdate}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Religion :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.religion}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Father Occupation :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.fatheroccupation}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>E-mail :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.email}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Admission Date :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.admissionno}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Class:</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.studentClassName}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Section :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.section}</p>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Roll :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.rollno}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'>Address :</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.address}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className='label'> Phone:</label>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <p className=''>{studentDetail.phone}</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}
export default Video;
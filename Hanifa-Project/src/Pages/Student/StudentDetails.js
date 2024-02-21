import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPrint, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export const StudentDetails = () => {
    const { state } = useLocation();
    const [idState, setIdState] = useState(null);
    const [studentDetail, setStudentDetail] = useState({});
    const navigation = useNavigate();
    const screenshotRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }
    const captureScreenshot = () => {
        if (screenshotRef.current) {
            html2canvas(screenshotRef.current)
                .then(canvas => {
                    const screenshotUrl = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    pdf.addImage(screenshotUrl, 'PNG', 10, 10, 190, 130);
                    pdf.save('StudentDetail.pdf');
                });
        }
    };
    useEffect(() => {
        let isAdmin = localStorage.getItem('Role') === '1' ? true : false

        if (isAdmin) {
            if (state) {
                setIdState(state.id);
                localStorage.setItem("studentId", state.id);
            }
            setIdState(localStorage.getItem("studentId"));
        }
        else {
            setIdState(localStorage.getItem("studentId"));
        }
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
            navigation("/StudentAdmit", { state: { id: id, key: key, edit: true } });
        };
    }
    return (

        <div>
            <div className="col-12 bg-white p-4 shadow">
                <div className="row">
                    <div className='col'>
                        <h3 className="">Personal Detail</h3>
                    </div>
                    <div className='col'>
                        <div className='row justify-content-end'>
                            <div className="col-1">
                                <a href="#!" className="rounded-3"> <FontAwesomeIcon icon={faPenToSquare} className="icon"
                                    onClick={() => handleEdit(studentDetail.id, 's')}
                                /></a>
                            </div>
                            <div className="col-1">
                                <a href="#!" className="rounded-3"><FontAwesomeIcon icon={faPrint} className="icon" /></a>
                            </div>
                            <div className="col-1">
                                <a href="#!" className="rounded-3"><FontAwesomeIcon icon={faDownload} className="icon" onClick={captureScreenshot} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="sidebar-divider my-0 " />
                <div className='row mt-4' ref={screenshotRef}>
                    <div className='col-lg-2 col-md-3 col-sm-12'>

                        <img className=" h-25 m-5" src={studentDetail.photo} alt={studentDetail.firstName} />
                        {/* <label className='label'>Classes Attended</label> */}
                    </div>
                    <div className='col-lg-5 col-lg-5 col-sm-12'>
                        <h3>Student Information</h3>
                        <div className='col mt-4 mr-5'>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Name: </label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.firstName} {studentDetail.lastName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Course:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.studentCourseName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Batch:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''> {studentDetail.batch}</p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Gender:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.gender}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Date of Birth:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.birthdate}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Admission No:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.admissionno}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Batch Time:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.time}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Assigned Trainers:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.trainer}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>E-Mail:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.email}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Phone Number:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-lg-5 col-sm-12'>
                        <h3>Parent Information</h3>
                        <div className='col mt-4 mr-5'>

                            <div className="row">
                                <div className="col">
                                    <label className='label'>Father: </label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.fathername}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Mobile:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.parentphone}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>E-Mail:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''> {studentDetail.email}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Occupation:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.fatheroccupation}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Mother:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.mothername}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Mobile:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.motherphone}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>E-mail:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.emailmother}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Occupation:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.motheroccupation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 d-flex justify-content-end" >


                        <button type="submit" className="btn btn-secondary btn-md " onClick={openModal}> Comment</button>


                        <div className={`modal fade ${showModal ? 'show' : ''}`} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Enter a Comment</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col">
                                                <label >Popup date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="birthdate"
                                                    name="birthdate"
                                                />
                                            </div>
                                            <div className="col ">
                                                <label>Batch Details</label>
                                                <select
                                                    id="inputState"
                                                    className="form-control"
                                                    name="batch"
                                                >
                                                    <option value="Admin" >Admin</option>
                                                    <option value="Admin" >Trainers</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label >comments</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <textarea className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={closeModal}>Add</button>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            <br></br>
            <div className="col-12 bg-white p-4 shadow">
                <div className="row">
                    <div className='col'>
                        <h3 className="">Fee Detail</h3>
                    </div>

                </div>
                <hr className="sidebar-divider my-0 " />
                <div className='row mt-4' ref={screenshotRef}>
                    <div className='col-lg-2 col-md-3 col-sm-12'>

                        
                    </div>
                    <div className='col-lg-5 col-lg-5 col-sm-12'>

                        <div className='col mt-4 mr-5'>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Course Fees: </label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.firstName} {studentDetail.lastName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Discount Amount:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.studentCourseName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Installment Detail:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''> {studentDetail.batch}</p>

                                </div>
                            </div>
                            
                      
                        </div>
                    </div>
                    <div className='col-lg-5 col-lg-5 col-sm-12'>

                        <div className='col mt-4 mr-5'>
                        <div className="row">
                                <div className="col">
                                    <label className='label'>Amount Pending:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.gender}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className='label'>Payment Status:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.birthdate}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label className='label'>Payment Mode:</label>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <p className=''>{studentDetail.admissionno}</p>
                                </div>
                            </div>
                           
                          
                        </div>
                    </div>
                </div>


            </div >
            <br></br>
        </div>


    )
}
export default StudentDetails;
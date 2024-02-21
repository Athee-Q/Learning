import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPrint, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const TrainerDetails = () => {
    const {state } = useLocation();
    const [idState, setIdState] = useState(null);
    const [teacherDetail, setTeacherDetail] = useState({});
    const navigation = useNavigate();
    const screenshotRef = useRef(null);

    const captureScreenshot = () => {
        if (screenshotRef.current) {
            html2canvas(screenshotRef.current)
                .then(canvas => {
                    const screenshotUrl = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    pdf.addImage(screenshotUrl, 'PNG', 10, 10, 190, 130); 
                    pdf.save('TeacherDetail.pdf');
                });
        }
    };


    useEffect(() => {
        
        if (state) {
            setIdState(state.id );
            localStorage.setItem("teacherId", state.id);
        }
        else {
            setIdState(localStorage.getItem("teacherId"));
        }
        if (idState) {
            const items = JSON.parse(localStorage.getItem("teacherList"));
            if (items) {
                const filterItems = items?.find(item => {
                    return item.id === idState;
                });
                if (filterItems) {
                    setTeacherDetail(filterItems)
                }
            }
        }
    }, [idState, state]);
    const handleEdit = (id, key) => {
        const confirmed = window.confirm(
            "Are you sure you want to edit this data?"
        );
        if (confirmed && id) {
            navigation("/AddTeacher", { state: { id: id } });
        };
    }

    return (
        <>

            <div className="bg-white p-4 shadow">
                <div className="row">
                    <div className='col'>
                        <h3 className="">Details</h3>
                    </div>
                    <div className='col'>
                        <div className='row justify-content-end'>
                            <div className="col-1">
                                <a href="#!" className="rounded-3"> <FontAwesomeIcon icon={faPenToSquare} className="icon"

                                    onClick={() => handleEdit(teacherDetail.id)} /></a>
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
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <img className=" h-25 m-5" src={teacherDetail.photo} alt={teacherDetail.firstName} />
                    </div>
                    <div className='col'>
                        <div className="row">
                            <div className="col">
                                <label className='label'> Name: </label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <p className=''>{teacherDetail.firstName}{teacherDetail.lastName} </p>
                            </div>
                        </div>
                       
              
                        
                        <div className="row">
                            <div className="col">
                                <label className='label'> Mobile:</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <p className=''>{teacherDetail.phone}</p>
                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="col">
                                <label className='label'> E-mail :</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <p className=''>{teacherDetail.email}</p>
                            </div>
                        </div>
                   
                       

                       
                     
                        <div className="row">
                            <div className="col">
                                <label className='label'>Official Phone:</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <p className=''>{teacherDetail.phone}</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className='col'>
                    <div className="row">
                            <div className="col">
                                <label className='label'>Course :</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <p className=''>{teacherDetail.course}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className='label'>No of Students: </label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <p className=''></p>
                            </div>
                        </div>
              
                        
                        <div className="row">
                            <div className="col">
                                <label className='label'>No of Batch:</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <p className=''></p>
                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="col">
                                <label className='label'>Ongoing Batch:</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <p className=''></p>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>


        </>
    )
}
export default TrainerDetails;
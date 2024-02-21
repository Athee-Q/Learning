import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash, faSort } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { Modal, Button } from 'react-bootstrap';


const AllStudents = () => {
    const navigation = useNavigate();
    const [studentList, setStudentList] = useState([]);
    const [searchRoll, setSearchRoll] = useState('');
    const [searchSection, setSearchSection] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isChecked, setIsChecked] = useState(true);
    const [showModal, setShowModal] = useState(false);
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
        const storedStudentList = JSON.parse(localStorage.getItem('studentList')) || [];
        setStudentList(storedStudentList);
    }, []);


    const handleDelete = (index) => {
        const studentLists = [...studentList];
        const removeStudent = studentLists.filter((item) => item.id !== index);
        setStudentList(removeStudent);
        localStorage.setItem('studentList', JSON.stringify(removeStudent));
    };

    const handleEdit = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to edit this data?"
        );
        if (confirmed && id) {
            navigation("/StudentAdmit", { state: { id: id, edit: true } });
        };
    }
    const handleView = (id) => {
        if (id) {
            navigation("/StudentDetails", { state: { id: id } });
        };
    }
    const handleSearch = () => {
        const trimmedSearchRoll = searchRoll.trim();
        const trimmedSearchSection = searchSection.trim();
        console.log("Search Roll:", trimmedSearchRoll);
        console.log("Search Section:", trimmedSearchSection);
        const filteredResults = studentList.filter(item => {
            const rollMatches = item.rollno && item.rollno.includes(trimmedSearchRoll);
            const sectionMatches = item.section && item.section.includes(trimmedSearchSection);
            return rollMatches && sectionMatches;
        });
        console.log("Filtered Results:", filteredResults);
        setSearchResults(filteredResults);
    };
    const handleSwitchChange = (checked) => {
        setIsChecked(checked);
        if (!checked) {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='bg-white p-4 shadow'>
            <h3 className="p-2">All Students </h3>
            <div className='row justify-content-end mt-lg-n5'>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <input type="text" className="form-control" placeholder="#Search Reg No Here..." value={searchRoll}
                        onChange={(e) => setSearchRoll(e.target.value)} />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <input type="text" className="form-control" placeholder="#Type Batch..." value={searchSection}
                        onChange={(e) => setSearchSection(e.target.value)} />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                    <button className="btn btn-warning btn-md btn-block" onClick={handleSearch}>SEARCH</button>
                </div>
            </div>
            <div className='mt-5 col-lg-12 col-sm-12 table-responsive'>
                <table className="table  table-sm table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Reg Number</th>
                            <th scope="col" >Photo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Parents Name</th>
                            <th scope="col">Course</th>
                            <th scope="col">Batch</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">Prime Number</th>
                            <th scope="col">Prime E-mail</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.length > 0 ? (
                            studentList.map((result, index) => (
                                <tr key={index}>

                                    <td>{result.admissionno}</td>
                                    <td><img src={result.photo} width="30" height="30" alt="Student Photo" /></td>
                                    <td>{`${result.firstName} ${result.lastName}`}</td>
                                    <td>{result.gender}</td>
                                    <td>{`${result.fathername}, ${result.mothername}`}</td>
                                    <td>{result.studentCourseName}</td>
                                    <td>{result.batch}</td>
                                    <td>{result.birthdate}</td>
                                    <td>{result.phone}</td>
                                    <td>{result.email}</td>
                                    <td className='actions' style={{ textAlign: 'center' }}>
                                    {isAdmin && <>
                                        <span className='p-2'>
                                            <BootstrapSwitchButton
                                                checked={isChecked}
                                                size="xs"
                                                onlabel='Active'
                                                offlabel='Deactive'
                                                width={100}
                                                onstyle="outline-success"
                                                offstyle="outline-danger"
                                                onChange={handleSwitchChange}
                                            />
                                        </span>
                                        <Modal show={showModal} onHide={handleCloseModal}>
                                            <Modal.Header >
                                                <Modal.Title>Deactivation Warning</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p>You have deactivated the user</p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleCloseModal}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal></>}

                                        <span className='action  p-2'
                                            onClick={() => handleView(result.id)}
                                        >
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                        {isAdmin && <>
                                        <span
                                            className='action1 p-2'
                                            style={{ color: 'green' }}
                                            onClick={() => handleEdit(result.id)}     >
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </span>
                                        <span
                                            className='action2 p-2'
                                            style={{ color: 'red' }}
                                            onClick={() => handleDelete(result.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span></>}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr >
                                <td colspan="11" style={{ textAlign: 'center' }} >No Record</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default AllStudents;
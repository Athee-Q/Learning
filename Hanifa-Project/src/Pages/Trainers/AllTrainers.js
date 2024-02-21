import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash, faSort } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { Modal, Button } from 'react-bootstrap';

export const AllTrainers = () => {
    const navigation = useNavigate();
    const [teacherList, setTeacherList] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchCourse, setSearchCourse] = useState('');
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
        const storedTeacherList = JSON.parse(localStorage.getItem('teacherList')) || [];
        setTeacherList(storedTeacherList);
    }, []);
    const handleDelete = (index) => {
        const teacherLists = [...teacherList];
        const removeTeacher = teacherLists.filter((item) => item.id !== index);
        setTeacherList(removeTeacher);
        localStorage.setItem('teacherList', JSON.stringify(removeTeacher));
    };
    const handleEdit = (id) => {

        const confirmed = window.confirm(
            "Are you sure you want to edit this data?"
        );

        if (confirmed && id) {

            navigation("/AddTrainer", { state: { id: id } });

        };

    }
    const handleView = (id) => {

        if (id) {

            navigation("/TrainerDetails", { state: { id: id, key: 't' } });

        };

    }
    const handleSearch = () => {
        const trimmedSearchId = searchId.trim();
        const trimmedSearchCourse = searchCourse.trim();

        console.log("Search ID:", trimmedSearchId);
        console.log("Search Course:", trimmedSearchCourse);

        const filteredResults = teacherList.filter(item => {
            const idMatches = item.idno && item.idno.includes(trimmedSearchId);
            const courseMatches = item.course && item.course.includes(trimmedSearchCourse);
            return idMatches && courseMatches;
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
            <h3 className="p-2">All Trainers</h3>
            <div className='row justify-content-end mt-lg-n5'>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <input type="text" className="form-control" placeholder="#Search by ID Here.." value={searchId}
                        onChange={(e) => setSearchId(e.target.value)} />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <input type="text" className="form-control" placeholder="#Type Course..." value={searchCourse}
                        onChange={(e) => setSearchCourse(e.target.value)} />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                    <button className="btn btn-warning btn-md btn-block" onClick={handleSearch}>SEARCH</button>
                </div>
            </div>
            <div className='mt-5 col-lg-12  col-md-12 col-sm-12 table-responsive'>
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th scope="col" >Avatar</th>
                            <th scope="col">Trainer Name</th>
                            <th scope="col">Offical Mobile</th>
                            <th scope="col">Offcial Email</th>
                            <th scope="col">Courses</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teacherList.length > 0 ? (
                            teacherList.map((result, index) => (
                                <tr key={index} >
                                    <td><img src={result.photo} width="30" height="30" alt="Teacher Photo" /></td>
                                    <td>{`${result.firstName} ${result.lastName}`}</td>
                                    <td>{result.phone}</td>
                                    <td>{result.email}</td>
                                    <td>{result.course}</td>
                                    <td className='actions' style={{ textAlign: 'center' }}>
                                        {isAdmin &&
                                            <>
                                                <span className='p-2'>
                                                    <BootstrapSwitchButton checked={true} size="xs" onlabel='Active' offlabel='Deactive' width={100} onstyle="outline-success" offstyle="outline-danger" />
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
                                                </Modal>
                                            </>}
                                        <span className='p-2'
                                            onClick={() => handleView(result.id)}  >

                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                        {isAdmin &&
                                            <>
                                                <span
                                                    className='p-2'
                                                    style={{ color: 'green' }}
                                                    onClick={() => handleEdit(result.id)}
                                                >
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </span>
                                                <span
                                                    className='p-2'
                                                    style={{ color: 'red' }}
                                                    onClick={() => handleDelete(result.id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </>
                                        }
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colspan="6" style={{ textAlign: 'center' }} >No Record</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AllTrainers;
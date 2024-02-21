import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
export const Course = () => {

  const { state } = useLocation();
  const navigation = useNavigate();
  const [idState, setIdState] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [batchName, setBatchName] = useState("");
  const [duration, setDuration] = useState("");
  const [subjectList, setSubjectList] = useState([]);
  const [searchcourseName, setSearchcourseName] = useState('');
  const [searchduration, setSearchduration] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [assessment, setAssessment] = useState([]);
  const [project, setProject] = useState([]);
  const [role, setRole] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isSave, setIsSave] = useState(false);
  useEffect(() => {
    const storedSubjectList = JSON.parse(localStorage.getItem('subjectList')) || [];
    setSubjectList(storedSubjectList);
    setRole(Number(localStorage.getItem("Role")));
    let role = Number(localStorage.getItem("Role"));
    if (role === 1) {
      setIsAdmin(true);
    }
    if (role === 2) {
      setIsTeacher(true);
    }
    if (role === 3) {
      setIsStudent(true);
    }
    if (state) {
      setIdState(state.id);
    }
    if (idState) {
      const items = JSON.parse(localStorage.getItem("subjectList"));
      if (items) {
        const filterItems = items?.find(item => {
          return item.id === idState;
        });

        if (filterItems) {
          setCourseName(filterItems?.courseName);
          setBatchName(filterItems?.batchName);
          setDuration(filterItems?.Duration);
          setAssessment(filterItems?.assessment);
          setProject(filterItems?.project);
        }
      }
    }
  }, [idState, state ,isSave]);
  const addSubjectFunc = (e) => {
    e.preventDefault()
    if (
      !batchName ||
      !courseName ||
      !duration ||
      !assessment ||
      !project

    ) {
      alert("Please fill in all required fields before saving.");
      return;
    }
    let obj = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      batchName: batchName,
      courseName: courseName,
      duration: duration,
      assessment: assessment,
      project: project

    };
    if (!idState) {
      const getData = JSON.parse(localStorage.getItem("subjectList"));
      if (getData) {
        let includeData = getData;
        includeData.unshift(obj);
        localStorage.setItem("subjectList", JSON.stringify(includeData));
      } else {
        let includeData = [];
        includeData.push(obj);
        localStorage.setItem("subjectList", JSON.stringify(includeData));
      }
    } else {
      const getData = JSON.parse(localStorage.getItem("subjectList"));
      if (getData) {
        const findIndex = getData?.findIndex((item) => {
          return item.id === idState;
        });
        const filterItems = getData?.find((item) => {
          return item.id === idState;
        });
        if (filterItems) {
          const fetchData = getData;
          fetchData.splice(findIndex, 1, obj);
          localStorage.setItem("subjectList", JSON.stringify(fetchData));

        }
      }
    }
    setIsSave(true)
  };
  const handleDelete = (index) => {
    const subjectLists = [...subjectList];
    const removeSubject = subjectLists.filter((item) => item.id !== index);
    setSubjectList(removeSubject);
    localStorage.setItem('subjectList', JSON.stringify(removeSubject));
  };
  const handleEdit = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to edit this data?"
    );
    if (confirmed && id) {
      navigation("/Subject", { state: { id: id } });
    };
  }
  const handleSearch = () => {
    const cleanedCourseName = searchcourseName.trim();
    const cleanedDuration = searchduration.trim();
    console.log("Search ID:", cleanedCourseName);
    console.log("Search by Author:", cleanedDuration);
    const filteredResults = subjectList.filter(item => {
      const idMatches = item.courseName && item.courseName.includes(cleanedCourseName);
      const writerMatches = item.duration && item.duration.includes(cleanedDuration);
      return idMatches && writerMatches;
    });
    console.log("Filtered Results:", filteredResults);

    setSearchResults(filteredResults);
  };
  const formRef = useRef(null);
  const handleReset = (e) => {
    e.preventDefault()
    if (formRef.current) {
      formRef.current.reset();
    }
    setCourseName('');
    setBatchName('');
    setDuration('');
    setAssessment('');
    setProject('');
  };
  return (
    <>
      {isAdmin && <div className='row '>
        <div className='col-lg-3 col-md-3 col-sm-12'>
          <div className='row justify-content-center'>
            <div className='col-12 bg-white p-4 shadow '>
              <div className='row'>
                <div className='col '>
                  <h3 className="">Create Course</h3>
                  <hr className="hr" />
                </div>
              </div>
              <div className='row '>
                <div className='col'>
                  <form >
                    <div className="form-row">
                      <div className="form-group col-lg-10 col-md-10 col-sm-12">
                        <label className="labeladmit" For="text">Course Name *</label>
                        <input
                          type="text"
                          name="courseName"
                          value={courseName}
                          onChange={(e) => setCourseName(e.target.value)}
                          className="form-control"
                          required />
                      </div>
                    </div>
                    <div className='row'>
                      <div className="form-group col-lg-10 col-md-10 col-sm-12">
                        <label For="text">Duration</label>
                        <select id="inputState" className="form-control" name="duration" value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          required >
                          <option selected>Please Select Duration </option>
                          <option>1 week</option>  <option>15 Days</option>  <option>1 month</option>  <option>2 months</option>
                          <option>3 month</option>  <option>4 months</option>  <option>5 months</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-lg-10 col-md-10 col-sm-12">
                        <label > Batch Detail *</label>
                        <select id="inputState" className="form-control" name="class" value={batchName}
                          onChange={(e) => setBatchName(e.target.value)}
                          required >
                          <option selected>Please Select Batch *</option>
                          <option>Offline</option>  <option>Online</option>  <option>Weekdays</option>  <option>Weekend</option>
                        </select>
                      </div>
                    </div>
                    <div className='row'>
                      <div className="form-group col-lg-10 col-md-10 col-sm-12">
                        <label For="text">No of Assessment</label>
                        <select id="inputState" className="form-control" name="assessment" value={assessment}
                          onChange={(e) => setAssessment(e.target.value)}
                          required >
                          <option selected>Select Assessment *</option>
                          <option>1 </option>  <option>2</option>  <option>3</option>  <option>4</option>
                          <option>5</option>  <option>6</option>  <option>7</option>
                        </select>
                      </div>
                    </div>
                    <div className='row'>
                      <div className="form-group col-lg-10 col-md-10 col-sm-12">
                        <label For="text">No of Project</label>
                        <select id="inputState" className="form-control" name="project" value={project}
                          onChange={(e) => setProject(e.target.value)}
                          required >
                          <option selected>Select Project *</option>
                          <option>1 </option>  <option>2</option>  <option>3</option>  <option>4</option>
                          <option>5</option>  <option>6</option>  <option>7</option>
                        </select>
                      </div>
                    </div>
                    <div className='row justify-content-center'>
                      <div className="form-group col-lg-10 col-md-10 col-sm-12">
                        <div className='row'>
                          <div className='col-lg-4 col-md-4 col-sm-12'>
                            <button type="submit" className="btn btn-warning btn-md btn-block" onClick={addSubjectFunc}> Save </button>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <button type="submit" className="btn btn-secondary btn-md btn-block" onClick={handleReset}> Reset </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          <div className='bg-white p-4 shadow '>
            <h3 className=" p-2">All Courses</h3>
            <div className='row justify-content-end'>
              <div className='col-lg-3 col-md-3 col-sm-12'>
                <input type="text" className="form-control" placeholder="Search Course" value={searchcourseName}
                  onChange={(e) => setSearchcourseName(e.target.value)} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <input type="text" className="form-control" placeholder="Search by Duration" value={searchduration}
                  onChange={(e) => setSearchduration(e.target.value)} />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <button className="btn btn-warning btn-md btn-block" onClick={handleSearch}>SEARCH</button>
              </div>
            </div>

            <div className='row'>
              <div className='mt-3 col-lg-12 col-sm-12 table-responsive'>
                <table className="table  table-sm table-hover" >
                  <thead>
                    <tr>
                      <th scope="col" >Course Name</th>
                      <th scope="col"> Course Duration</th>
                      <th scope="col">No of Assessment</th>
                      <th scope="col">No of Project</th>

                      <th scope="col" style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.length > 0 ? (
                      searchResults.map((result, index) => (
                        <tr key={index}>
                          <td><input className="form-check-input" type="checkbox" value="" /></td>
                          <td>{result.courseName}</td>
                          <td>{result.duration}</td>
                          <td>{result.assessment}</td>
                          <td>{result.project}</td>
                          <td className='actions' style={{ textAlign: 'center' }}>
                            <span className='action1 p-2' style={{ color: 'green' }}>
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                            <span
                              className='action2 p-2'
                              style={{ color: 'red' }}
                              onClick={() => handleDelete(index)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      subjectList.map((subject, index) => (
                        <tr key={index}>

                          <td>{subject.courseName}</td>
                          <td>{subject.duration}</td>
                          <td>{subject.assessment}</td>
                          <td>{subject.project}</td>
                          <td className='actions' style={{ textAlign: 'center' }}>
                            <span
                              className='action1 p-2'
                              style={{ color: 'green' }}
                              onClick={() => handleEdit(subject.id)}
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                            <span
                              className='action2 p-2'
                              style={{ color: 'red' }}
                              onClick={() => handleDelete(subject.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>}
      {(isStudent || isTeacher) &&
        <div className='row '>
          <div className='col-12'>
            <div className='bg-white p-4 shadow '>
              <h3 className=" p-2">All Courses</h3>
              <div className='row justify-content-end'>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                  <input type="text" className="form-control" placeholder="Search Course" value={searchcourseName}
                    onChange={(e) => setSearchcourseName(e.target.value)} />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <input type="text" className="form-control" placeholder="Search by Duration" value={searchduration}
                    onChange={(e) => setSearchduration(e.target.value)} />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                  <button className="btn btn-warning btn-md btn-block" onClick={handleSearch}>SEARCH</button>
                </div>
              </div>
              <div className='row'>
                <div className='mt-3 col-lg-12 col-sm-12 table-responsive'>
                  <table className="table  table-sm table-hover" >
                    <thead>
                      <tr>
                        <th scope="col" >Course Name</th>
                        <th scope="col"> Course Duration</th>
                        <th scope="col">No of Assessment</th>
                        <th scope="col">No of Project</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResults.length > 0 ? (
                        searchResults.map((result, index) => (
                          <tr key={index}>

                            <td>{result.courseName}</td>
                            <td>{result.duration}</td>
                            <td>{result.assessment}</td>
                            <td>{result.project}</td>

                          </tr>
                        ))
                      ) : (
                        <tr >
                          <td colspan="4" style={{ textAlign: 'center' }} >No Record</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default Course;
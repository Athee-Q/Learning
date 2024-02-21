
import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, } from "react-bootstrap";
import {  useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';


export const Schedule = () => {
  
  const { state } = useLocation();
  const navigation = useNavigate();
  const [idState, setIdState] = useState(null);
  const [subjectType, setSubjectType] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [subjectClassName, setSubjectClassName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectList, setSubjectList] = useState([]);
  const [searchsubjectName, setSearchsubjectName] = useState('');
  const [searchsubjectCode, setSearchsubjectCode] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 

  useEffect(() => {
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
          setSubjectName(filterItems?.subjectName);
          setSubjectClassName(filterItems?.SubjectClassName);
          setSubjectType(filterItems?.subjectType);
          setSubjectCode(filterItems?.subjectCode);
        }
      }
    }
  }, [idState, state]);
  const addSubjectFunc = (e) => {
    e.preventDefault()
    if (
      subjectClassName.trim() === "" ||
      subjectName.trim() === "" ||
      subjectType.trim() === "" ||
      subjectCode.trim() === ""
 

    ) {
      alert("Please fill in all required fields before saving.");
      return; // Prevent saving if any required field is empty
    }
    let obj = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      subjectClassName: subjectClassName,
      subjectName: subjectName,
      subjectType:subjectType,
      subjectCode: subjectCode,
    };
    if (!idState) {
      //Save the data
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
  };
  useEffect(() => {
    const storedSubjectList = JSON.parse(localStorage.getItem('subjectList')) || [];
    setSubjectList(storedSubjectList);
  }, []);

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
    const cleanedSubjectName = searchsubjectName.trim();
    const cleanedSubjectCode = searchsubjectCode.trim();
  
    console.log("Search ID:", cleanedSubjectName);
    console.log("Search by Author:", cleanedSubjectCode);
  
    const filteredResults = subjectList.filter(item => {
      const idMatches = item.subjectName && item.subjectName.includes(cleanedSubjectName);
      const writerMatches = item.subjectCode && item.subjectCode.includes(cleanedSubjectCode);
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
    setSubjectName('');
    setSubjectClassName('');
    setSubjectType('');
    setSubjectCode('');
  };

  return (
   
    <Container fluid className='p-0' >
    <Row>
      <Col lg={4}>
        <Container fluid className='px-4 py-2'>
       
            
              <div className=' add-class1-form '>
                <div className='heading1'>     <h3 className="p-2">Add New Exam </h3>
                  
                </div>
                <div><hr className="hr" /></div>
                <div className='available-count-heading mt-4 pt-2 '>
                  <div className='heading1'>
                    <form >
                      <div className='admitform1'>
                        <div className="form-row row">
                          <div className="form-group col-md-10">
                            <label className="labeladmit" For="text">Subject Name *</label>
                            <input
                              type="text"
                              name="subjectName"
                              value={subjectName}
                              onChange={(e) => setSubjectName(e.target.value)}
                              className="form-control"
                              style={{ backgroundColor: "rgb(240, 241, 242)", marginTop: "10px" }}
                              required
                            />
                          </div>
                        
                        </div>
                      </div>
                      <div className='admitform2'>
                        <div className="form-row row">
                        <div className="form-group col-md-10">
                            <label  For="inputState">Subject Type *</label>
                            <select id="inputState" className="form-control" name="class" value={subjectType}
                              onChange={(e) => setSubjectType(e.target.value)} style={{ backgroundColor: "rgb(240, 241, 242)", marginTop: "10px" }}
                              required >
                              <option selected>Select Subject Type</option>
                              <option>Theory</option>  <option>Practical</option>  
                            </select>

                          </div>
                        </div>
                      </div>
                      <div className='admitform2'>
                        <div className="form-row row">
                        <div className="form-group col-md-10">
                            <label  For="inputState"> Select Class *</label>
                            <select id="inputState" className="form-control" name="class" value={subjectClassName}
                              onChange={(e) => setSubjectClassName(e.target.value)} style={{ backgroundColor: "rgb(240, 241, 242)", marginTop: "10px" }}
                              required >
                              <option selected>Please Select Class *</option>
                              <option>Grade 1</option>  <option>Grade 2</option>  <option>Grade 3</option>  <option>Grade 4</option>  <option>Grade 5</option>
                              <option>Grade 6</option>  <option>Grade 7</option>  <option>Grade 8</option>  <option>Grade 9</option>  <option>Grade 10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='admitform2'>
                        <div className='form-row row'>
                        <div className="form-group col-md-10">
                            <label For="text">Subject Code</label>
                            <input
                              type="text"
                              name="subjectCode"
                              value={subjectCode}
                              onChange={(e) => setSubjectCode(e.target.value)}
                              className="form-control"
                              style={{ backgroundColor: "rgb(240, 241, 242)", marginTop: "10px" }}
                              required
                            />
                          </div>
                        </div>
                      </div>


                      <button type="submit" className="btn btn-primary btn-lg" onClick={addSubjectFunc}>Save</button>
                      <button type="submit" className="btn btn-secondary btn-lg" onClick={handleReset}>
                        Reset
                      </button>

                    </form>
                  </div>
                </div>
              </div>
            
  
        </Container>
      </Col>
    
      <Col lg={8} >
            <Container fluid className='px-4 py-2'>

    
    
                  <div className='all-student1-form'>
                    <div className='heading1'>
                      <h3 className="p-2">All Subjects</h3>
                      <div className="col-sm-4">
                        <div className="search-boxclass0">
                          <input type="text" className="form-control" placeholder="Search Subject" value={searchsubjectName}
                            onChange={(e) => setSearchsubjectName(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="search-boxclass">
                          <input type="text" className="form-control" placeholder="Search by Subject Code" value={searchsubjectCode}
                            onChange={(e) => setSearchsubjectCode(e.target.value)} />
                        </div>

                      </div>
                      <div className="col-sm-2">
                        <div className="search-box1">

                          <button className="button" style={{ color: 'white' }} onClick={handleSearch}>SEARCH</button>
                        </div>
                      </div>
                    </div>
                    <div><hr className="hr" /></div>
                    <table style={tableStyle} className="table table-striped" selectableRows="">
                      <thead>
                        <tr>
                          <th><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                        
                          <th scope="col" >Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Subject Type</th>
                          <th scope="col">Class</th>
 

                          <th scope="col" style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchResults.length > 0 ? (
                          searchResults.map((result, index) => (
                            <tr key={index}>
                              <td><input className="form-check-input" type="checkbox" value="" /></td>
                        
                              <td>{result.subjectCode}</td>
                              <td>{result.subjectName}</td>
                              <td>{result.subjectType}</td>
                              <td>{result.subjectClassName}</td>
                      
                              <td className='actions' style={{ textAlign: 'center' }}>
                           
                                <span className='action1 p-2' style={{ color: 'green' }}>
                                  <FontAwesomeIcon icon={faPenToSquare} />
                                </span>

                                <span
                                  className='action2 p-2'
                                  style={{ color: 'red' }}
                                  onClick={() => handleDelete(index)} // Call handleDelete on click
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          subjectList.map((subject, index) => (
                            <tr key={index}>
                              <td><input className="form-check-input" type="checkbox" value="" /></td>
                              <td>{subject.subjectCode}</td>
                              <td>{subject.subjectName}</td>
                              <td>{subject.subjectType}</td>
                              <td>{subject.subjectClassName}</td>
                         

                              <td className='actions' style={{ textAlign: 'center' }}>
                           
                                <span
                                  className='action1 p-2'
                                  style={{ color: 'green' }}
                                  onClick={() => handleEdit(subject.id)}// Call handleDelete on click
                                >
                                  <FontAwesomeIcon icon={faPenToSquare} />
                                </span>
                                <span
                                  className='action2 p-2'
                                  style={{ color: 'red' }}
                                  onClick={() => handleDelete(subject.id)} // Call handleDelete on click
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
         
         
                     </Container>

          </Col>  
    </Row>
  </Container>

  )
}

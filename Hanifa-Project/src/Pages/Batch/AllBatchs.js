import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faSort } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


export const AllBatchs = () => {
  const navigation = useNavigate();
  const [stuclassList, setStuclassList] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchSubject, setSearchSubject] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedStuclassList = JSON.parse(localStorage.getItem('stuclassList')) || [];
    setStuclassList(storedStuclassList);
  }, []);


  const handleDelete = (index) => {
    const stuclassLists = [...stuclassList];
    const removestuclass = stuclassLists.filter((item) => item.id !== index);
    setStuclassList(removestuclass);
    localStorage.setItem('stuclassList', JSON.stringify(removestuclass));
  };

  const handleEdit = (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to edit this data?"
    );

    if (confirmed && id) {

      navigation("/AddNewClass", { state: { id: id } });

    };

  }

  const handleSearch = () => {

    console.log("Search ID:", searchId);
    console.log("Search Subject:", searchSubject);

    const filteredResults = stuclassList.filter(item => {
      const idMatches = item.idno && item.idno.includes(searchId.trim());
      const subjectMatches = item.subjectName && item.subjectName.includes(searchSubject.trim());
      return idMatches && subjectMatches;
    });

    console.log("Filtered Results:", filteredResults);

    setSearchResults(filteredResults);
  };
  return (
    <div className='bg-white p-4 shadow'>




      <h3 className="p-2">All Batch Schedule</h3>

      <div className='row justify-content-end mt-lg-n5'>

        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="search-box">
            <input type="text" className="form-control" placeholder="#Search by trainer Here.." value={searchId}
              onChange={(e) => setSearchId(e.target.value)} />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="search-box1">
            <input type="text" className="form-control" placeholder="#Type Course..." value={searchSubject}
              onChange={(e) => setSearchSubject(e.target.value)} />
          </div>

        </div>

        <div className="col-lg-2 col-md-2 col-sm-12">
          <button className="btn btn-warning btn-md btn-block" onClick={handleSearch}>SEARCH</button>
        </div>
      </div>


      <div className='mt-5 col-lg-12 col-sm-12 table-responsive'>
        <table className="table  table-sm table-hover" >
          <thead>
            <tr>

              <th scope="col"> Trainer Name</th>
              <th scope="col">Course Name</th>
              <th scope="col">Batch Type</th>
              <th scope="col">Batch Duration</th>
              <th scope="col">Start Date </th>

              <th scope="col" style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <tr key={index}>

                  <td>{result.teacherName}</td>
                  <td>{result.courseName}</td>
                  <td>{result.batchName}</td>
                  <td>{result.duration}</td>
                  <td>{result.joindate}</td>
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
              <tr >
                <td colspan="6" style={{ textAlign: 'center' }} >No Record</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllBatchs;
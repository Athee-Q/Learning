

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash, faSort } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export const FeeCollection = () => {
  const navigation = useNavigate();
  const [FeeList, setFeeList] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedFeeList = JSON.parse(localStorage.getItem('FeeList')) || [];
    setFeeList(storedFeeList);
  }, []);


  const handleDelete = (index) => {
    const FeeLists = [...FeeList];
    const removeFee = FeeLists.filter((item) => item.id !== index);
    setFeeList(removeFee);
    localStorage.setItem('FeeList', JSON.stringify(removeFee));
  };
  const handleEdit = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to edit this data?"
    );

    if (confirmed && id) {
      navigation("/CreatePayment", { state: { id: id } });
    };

  }

  const handleSearch = () => {
    console.log("Search ID:", searchId);
    console.log("Search Phone:", searchPhone);
    const filteredResults = FeeList.filter(item => {
      const idMatches = item.idno && item.idno.includes(searchId.trim());
      const phoneMatches = item.phoneName && item.phoneName.includes(searchPhone.trim());
      return idMatches && phoneMatches;
    });

    console.log("Filtered Results:", filteredResults);
    setSearchResults(filteredResults);
  };
  return (
    <div className='bg-white p-4 shadow'>
      <h3 className="p-2">Student Fee Collection</h3>
      <div className='row justify-content-end mt-lg-n5'>
        <div className="col-lg-3 col-md-3 col-sm-12">

          <input type="text" className="form-control" placeholder="#Search by ID Here.." value={searchId}
            onChange={(e) => setSearchId(e.target.value)} />

        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">

          <input type="text" className="form-control" placeholder="#Phone number" value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)} />

        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <button className="btn btn-warning btn-md btn-block" onClick={handleSearch}>SEARCH</button>
        </div>
      </div>

      <div className='mt-5 col-lg-12 col-sm-12 table-responsive'>
        <table className="table  table-sm table-hover" >
          <thead>
            <tr>

           
              <th scope="col" >Registration No</th>
              <th scope="col">Student Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Prime Mobile</th>
              <th scope="col">Prime Email</th>
              <th scope="col">Course </th>
              <th scope="col">Batch</th>
              <th scope="col">Course Fee</th>
            
           
              <th scope="col">Amount pending</th>
              <th scope="col">Comment</th>
              <th scope="col" style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.idno}</td>
                  <td>{result.firstName} </td>
                  <td>{result.gender}</td> fathername
                  <td>{result.subjectName}</td>Mobile
                  <td>{result.accountClassName}</td>Email
                  <td>{result.courseName}</td>
                  <td>{result.batchName}</td>
                  
                  <td>{result.totalFee}</td>
                  <td>{result.amtpending}</td>
                  <td>{result.comment}</td>
                  <td className='actions' style={{ textAlign: 'center' }}>
                    <span className='action  p-2'>
                      <FontAwesomeIcon icon={faEye} />
                    </span>
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
              <td colspan="11" style={{ textAlign: 'center' }} >No Record</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default FeeCollection;
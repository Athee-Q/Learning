import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faSort ,faEye} from '@fortawesome/free-solid-svg-icons';
import {  useNavigate } from "react-router-dom";


export const BookList = () => {
  const navigation = useNavigate();
  const [libraryList, setLibraryList] = useState([]);
  const [searchCourse, setSearchCourse] = useState('');
  const [searchwriterName, setWriterName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedLibraryList = JSON.parse(localStorage.getItem('libraryList')) || [];
    setLibraryList(storedLibraryList);
  }, []);

 
  const handleDelete = (index) => {
    const libraryLists = [...libraryList];
    const removeLibrary = libraryLists.filter((item) => item.id !== index);
    setLibraryList(removeLibrary);
    localStorage.setItem('libraryList', JSON.stringify(removeLibrary));
  };

  const handleEdit = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to edit this data?"
    );

    if (confirmed && id) {

      navigation("/Addbook", { state: { id: id } });

    };

  }
  const handleSearch = () => {

    console.log("Search Course Name:", searchCourse);
    console.log("Search by Author:", searchwriterName);

    const filteredResults = libraryList.filter(item => {
      const idMatches = item.idno && item.idno.includes(searchCourse.trim());
      const writerMatches = item.writerName && item.writerName.includes(searchwriterName.trim());
      return idMatches && writerMatches;
    });

    console.log("Filtered Results:", filteredResults);

    setSearchResults(filteredResults);
  };
  const handleView = (id) => {

    if (id) {
        navigation("/Video", { state: { id: id, key: 's' } });

    };

}

  return (
    <div className='bg-white p-4 shadow'>
        
                
             
                      <h3 className="p-2">All Document List</h3>
                      <div className='row justify-content-end mt-lg-n5'>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                   
                          <input type="text" className="form-control" placeholder="Search ID" value={searchCourse}
                            onChange={(e) => setSearchCourse(e.target.value)} />
                      
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                 <input type="text" className="form-control" placeholder="Search by Uploader" value={searchwriterName}
                            onChange={(e) => setWriterName(e.target.value)} />
                  
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                    <button className="btn btn-warning btn-md btn-block" onClick={handleSearch}>SEARCH</button>
                </div>
                      </div>
              
                
                      <div className='mt-5 col-lg-12 col-sm-12 table-responsive'>
                      <table className="table  table-sm table-hover" >
                      <thead>
                        <tr>
                        
                        
                          <th scope="col" >Course Name</th>
                          <th scope="col">Document Detail</th>
                          <th scope="col">Document Format</th>
                          <th scope="col">Created Date</th>
                          <th scope="col">Uploaded By</th>
                          <th scope="col" style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {libraryList.length > 0 ? (
                          libraryList.map((library, index) => (
                            <tr key={index}>
                             
                             
                              <td>{library.course}</td>
                              <td>{library.documentdetail}</td>
                              <td>{library.docformat}</td>
                              <td>{library.uploadDate}</td>
                              <td>{library.writerName}</td>
                              <td className='actions' style={{ textAlign: 'center' }}>
                              <span className='action  p-2'
                                            onClick={() => handleView(library.id)}
                                        >
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                <span
                                  className='action1 p-2'
                                  style={{ color: 'green' }}
                                  onClick={() => handleEdit(library.id)}
                                >
                                  <FontAwesomeIcon icon={faPenToSquare} />
                                </span>
                                <span
                                  className='action2 p-2'
                                  style={{ color: 'red' }}
                                  onClick={() => handleDelete(library.id)} 
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
export default BookList;
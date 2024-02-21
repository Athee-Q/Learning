
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Addbook = () => {
  const { state } = useLocation();
  const navigation = useNavigate();
  const [idState, setIdState] = useState(null);
  const [course, setCourse] = useState("");
  const [writerName, setWriterName] = useState("");


  const [documentdetail, setDocumentdetail] = useState("");
  const [docformat, setDocformat] = useState("");
  const [uploadDate, setUploadDate] = useState("");
  const [idno, setIdNo] = useState("");

  useEffect(() => {
    if (state) {
      setIdState(state.id);
    }
    if (idState) {
      const items = JSON.parse(localStorage.getItem("libraryList"));
      if (items) {
        const filterItems = items?.find(item => {
          return item.id === idState;
        });

        if (filterItems) {
          setCourse(filterItems?.course);
          setWriterName(filterItems?.writerName);
          setDocumentdetail(filterItems?.documentdetail);
          setDocformat(filterItems?.docformat);
          setUploadDate(filterItems?.uploadDate);
          setIdNo(filterItems?.idno);
        }
      }
    }
  }, [idState, state]);
  const addLibraryFunc = (e) => {
    e.preventDefault()
    let obj = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      course: course,
      writerName: writerName,
      documentdetail: documentdetail,
      docformat: docformat,
      uploadDate: uploadDate,
      idno: idno,

    };
    if (!idState) {
      //Save the data
      const getData = JSON.parse(localStorage.getItem("libraryList"));
      if (getData) {
        let includeData = getData;
        includeData.unshift(obj);
        localStorage.setItem("libraryList", JSON.stringify(includeData));
      } else {
        let includeData = [];
        includeData.push(obj);
        localStorage.setItem("libraryList", JSON.stringify(includeData));
      }
      navigation("/BookList");
    } else {
      const getData = JSON.parse(localStorage.getItem("libraryList"));
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
          localStorage.setItem("libraryList", JSON.stringify(fetchData));
          navigation("/BookList");
        }
      }
    }
  };
  const formRef = useRef(null);
  const handleReset = (e) => {
    e.preventDefault()
    if (formRef.current) {
      formRef.current.reset();
    }
    setCourse('');
    setWriterName('');
    setDocumentdetail('');
    setDocformat('');
    setUploadDate('');
    setIdNo('');
  };
  return (
    < form className='bg-white p-4 shadow'>
      <div className='row pl-2'>
        <h3 className="p-2">Document Information </h3></div>
      <div><hr className="hr" /></div>
      <div className='row pl-4 '>
        <div className='col-12'>
          <div className=" row">
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label className="labeladmit" For="text">Course</label>
              <input
                type="text"
                name="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="inputState">Document Detail</label>
              <select id="inputState" className="form-control" name="class" value={documentdetail}
                onChange={(e) => setDocumentdetail(e.target.value)}  >
                <option selected>Select Detail</option>
                <option>Study Material </option>  <option>Assessment</option>  <option>Youtube Link</option>   <option>Project </option>
              </select>
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="inputPassword4">Uploaded By</label>
              <input type="text" name="writerName" className="form-control" value={writerName}
                onChange={(e) => setWriterName(e.target.value)}
                required />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="text">Document Format</label>

              <select id="inputState" className="form-control" name="docformat" value={docformat}
                onChange={(e) => setDocformat(e.target.value)}  >
                <option selected>Select Format</option>
                <option>PPT</option>  <option>PDF</option>  <option>WORD</option>   <option>URL </option> <option>YOUTUBE LINK </option>
              </select>
            </div>
          </div>
          <div className=" row">
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="date">Upload Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="uploaddate"
                name="uploadDate"
                value={uploadDate}
                onChange={(e) => setUploadDate(e.target.value)}
                required
              />
            </div>


            <div className="form-group col-sm-12 col-lg-3 col-md-6" >
              <label >Upload a Material</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                name="parentphoto"
              />
            </div>
          </div>
          <div className='row justify-content-end'>
            <div className='col-lg-2 col-md-2  col-sm-12 mt-2'>
              <button type="submit" className="btn btn-warning btn-md btn-block" onClick={addLibraryFunc}>Save</button>
            </div>
            <div className='col-lg-2 col-md-2  col-sm-12 mt-2'>
              <button type="submit" className="btn btn-secondary btn-md btn-block" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </form>

  )
}
export default Addbook;
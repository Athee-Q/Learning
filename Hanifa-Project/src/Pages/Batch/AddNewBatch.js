
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";


export const AddNewBatch = () => {

  const { state } = useLocation();
  const navigation = useNavigate();
  const [idState, setIdState] = useState(null);
  const [teacherName, setTeacherName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [skills, setSkills] = useState("");
  const [duration, setDuration] = useState("");
  const [batchTime, setBatchTime] = useState("");
  const [batchStatus, setBatchStatus] = useState("");
  const [joindate, setJoinDate] = useState("");
  const [batchName, setBatchName] = useState('');
  useEffect(() => {

    if (state) {
      setIdState(state.id);
    }
    if (idState) {
      const items = JSON.parse(localStorage.getItem("stuclassList"));
      if (items) {
        const filterItems = items?.find(item => {
          return item.id === idState;
        });
        if (filterItems) {
          setTeacherName(filterItems?.teacherName);
          setCourseName(filterItems?.courseName);
          setSkills(filterItems?.skills);
          setDuration(filterItems?.duration);
          setBatchTime(filterItems?.batchTime);
          setBatchStatus(filterItems?.batchStatus);
          setJoinDate(filterItems?.joindate);
          setBatchName(filterItems?.batchName);
        }
      }
    }
  }, [idState, state]);
  const addClassFunc = (e) => {
    e.preventDefault()
    if (
      teacherName.trim() === "" ||
      courseName.trim() === "" ||
      duration.trim() === "" ||
      skills.trim() === "" ||
      batchName.trim() === "" ||
      batchStatus.trim() === "" ||
      batchTime.trim() === "" ||
      joindate.trim() === ""
    ) {
      alert("Please fill in all required fields before saving.");
      return;
    }
    let obj = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      teacherName: teacherName,
      courseName: courseName,
      skills: skills,
      duration: duration,
      batchTime: batchTime,
      batchStatus: batchStatus,
      joindate: joindate,
      batchName: batchName
    };
    if (!idState) {
      //Save the data
      const getData = JSON.parse(localStorage.getItem("stuclassList"));
      if (getData) {
        let includeData = getData;
        includeData.unshift(obj);
        localStorage.setItem("stuclassList", JSON.stringify(includeData));
      } else {
        let includeData = [];
        includeData.push(obj);
        localStorage.setItem("stuclassList", JSON.stringify(includeData));
      }
      navigation("/AllBatchs");
    } else {
      //Update the data
      const getData = JSON.parse(localStorage.getItem("stuclassList"));
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
          localStorage.setItem("stuclassList", JSON.stringify(fetchData));
          navigation("/AllBatchs");
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
    setTeacherName('');
    setCourseName('');
    setSkills('');
    setDuration('');
    setBatchTime('');
    setBatchStatus('');
    setJoinDate('');
    setBatchName('');
  };
  const handleTeacherNameChange = (e) => {
    const inputValue = e.target.value;
    if (/^[A-Za-z]+$/.test(inputValue) || inputValue === '') {
      setTeacherName(inputValue);
    }

  };
  const handleCourseNameChange = (e) => {
    const inputValue = e.target.value;
    if (/^[A-Za-z]+$/.test(inputValue) || inputValue === '') {
      setCourseName(inputValue);
    }

  };


  return (

    <div>
      <form className='bg-white p-4 shadow'>
        <div className='row pl-2'>    <h3 className="p-2">Batch Information </h3>
        </div>
        <div><hr className="hr" /></div>
        <div className='row pl-4 '>
          <div className='col-12'>
            <div className=" row"
            >
              <div className="form-group col-sm-12  col-lg-3 col-md-6">
                <label className="">
                  Course Name *
                </label>
                <input
                  type="text"
                  name="courseName"
                  value={courseName}
                  onChange={handleCourseNameChange}
                  className="form-control"

                  required
                />
              </div>
              <div className="form-group col-sm-12  col-lg-3 col-md-6">
                <label For="inputState">Skills *</label>
                <select
                  id="inputState"
                  className="form-control"
                  name="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}

                  required
                >
                  <option value="">Please Select a Skill </option>
                  <option >. NET Core</option>
                  <option>C#</option>
                  <option >MVC</option>
                  <option >Angular</option>
                </select>
              </div>
              <div className="form-group col-sm-12  col-lg-3 col-md-6">
                <label className="">
                  Trainer Name *
                </label>
                <input
                  type="text"
                  name="teacherName"
                  value={teacherName}
                  onChange={handleTeacherNameChange}
                  className="form-control"

                  required
                />
              </div>


              <div className="form-group col-sm-12  col-lg-3 col-md-6">
                <label > Batch Type*</label>
                <select id="inputState" className="form-control" name="class" value={batchName}
                  onChange={(e) => setBatchName(e.target.value)}
                  required >
                  <option value="">Select Batch type</option>
                  <option>Weekdays</option>  <option>Weekend</option>  <option>Bootcamp</option>  <option>Crash Course</option>
                </select>
              </div>


            </div>
            <div className=" row">





              <div className="form-group col-sm-12  col-lg-3 col-md-6">
                <label For="text">Batch Duration* </label>
                <select id="inputState" className="form-control" name="duration" value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required >
                  <option selected>Please Select Duration </option>
                  <option>1 week</option>  <option>15 Days</option>  <option>1 month</option>  <option>2 months</option>
                  <option>3 month</option>  <option>4 months</option>  <option>5 months</option>
                </select>
              </div>
              <div className="form-group col-sm-12  col-lg-3 col-md-6">
                <label For="date">Start Date *</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="date"
                  name="date"
                  value={joindate}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);
                    const currentDate = new Date();

                    if (selectedDate <= currentDate) {
                      setJoinDate(e.target.value);
                    } else {
                      alert("Please select a date not greater than the current date.");
                      e.target.value = '';
                    }
                  }}

                  required
                />
              </div>

              <div className="form-group col-sm-12 col-lg-3 col-md-6">
                <label For="batchTime">Batch Time *</label>
                <select
                  className="form-control"
                  id="batchTime"
                  name="batchTime"
                  value={batchTime}
                  onChange={(e) => setBatchTime(e.target.value)}
                  required
                >
                  <option value="">Select Batch Time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group col-sm-12 col-lg-3 col-md-6">
                <label For="batchTime">Batch Status *</label>
                <select
                  className="form-control"
                  id="batchStatus"
                  name="batchStatus"
                  value={batchStatus}
                  onChange={(e) => setBatchStatus(e.target.value)}
                  required
                >
                  <option value="">Select Batch Status</option>
                  <option >Started</option>
                  <option >Completed</option>
                  <option >Certified</option>
                  {/* Add more options as needed */}
                </select>
              </div>


            </div>






            <div className='row justify-content-end'>
              <div className='col-lg-2 col-md-2  col-sm-12 mt-2'>
                <button type="submit" className="btn btn-warning btn-md btn-block" onClick={addClassFunc}>Save</button>
              </div>
              <div className='col-lg-2 col-md-2  col-sm-12 mt-2'>
                <button type="submit" className="btn btn-secondary btn-md btn-block" onClick={handleReset}>Reset</button>
              </div>
            </div>
          </div>
        </div>



      </form>


    </div>
  )
}
export default AddNewBatch;
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";


export const StudentAdmit = (id) => {
  const { state } = useLocation();
  const navigation = useNavigate();
  const [idState, setIdState] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentCourseName, setStudentCourseName] = useState("");
  const [batch, setbatch] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [admissionno, setAdmissionNo] = useState("");
  const [trainer, setTrainer] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [fatheroccupation, setFatheroccupation] = useState("");
  const [motheroccupation, setMotheroccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [parentphone, setParentphone] = useState("");
  const [motherphone, setMotherphone] = useState("");
  const [parentphoto, setParentphoto] = useState("");
  const [emailparent, setEmailParent] = useState("");
  const [emailmother, setEmailMother] = useState("");
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailParentError, setEmailParentError] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (state) {
      setIdState(state.id);
    }
    if (idState) {
      const items = JSON.parse(localStorage.getItem("studentList"));
      if (items) {
        const filterItems = items?.find(item => {
          return item.id === idState;
        });

        if (filterItems) {
          setFirstName(filterItems?.firstName);
          setLastName(filterItems?.lastName);
          setStudentCourseName(filterItems?.studentCourseName);
          setbatch(filterItems?.batch);
          setGender(filterItems?.gender);
          setBirthDate(filterItems?.birthdate);
          setTime(filterItems?.time);
          setAdmissionNo(filterItems?.admissionno);
          setTrainer(filterItems?.trainer);
          setEmail(filterItems?.email);
          setPhoto(filterItems?.photo);
          setFathername(filterItems?.fathername);
          setMothername(filterItems?.mothername);
          setFatheroccupation(filterItems?.fatheroccupation);
          setMotheroccupation(filterItems?.motheroccupation);
          setPhone(filterItems?.phone);
          setParentphone(filterItems?.parentphone);
          setMotherphone(filterItems?.motherphone);
          setParentphoto(filterItems?.parentphoto);
          setEmailParent(filterItems?.emailparent);
          setEmailMother(filterItems?.emailmother);
        }
      }
    }
  }, [idState, state]);
  
  const addStudentFunc = (event) => {
    event.preventDefault();
    if (!firstName ||!lastName ||!studentCourseName ||!batch ||!gender ||!birthdate ||!time ||!admissionno ||!email 
      ||!fathername ||!mothername ||!fatheroccupation ||!motheroccupation ||
      !phone ||!parentphone ||!motherphone ||
      !emailparent 
    ) {
      alert("Please fill in all required fields before saving.");
      return;
    }
    if (email || emailparent || emailmother) {
      let inputValue = email || emailparent || emailmother;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(inputValue)) {
        setEmailError('Invalid email format. Please enter a valid email address.');
        return;
      } else {
        setEmailError('');
      }
    }
    const getData = JSON.parse(localStorage.getItem("userDetailsList"));
    const fiterUserName = getData?.find((item) => {
      return item.userName === email ;
    });
    // if (fiterUserName) {
    //   alert("Don't use existing E-mail.");
    //   return;
    // }
    const userID = Date.now().toString(36) + Math.random().toString(36).substr(2);
    if (!fiterUserName) {
      let accountobj = {
        id: userID,
        firstName,
        lastName,
        phone,
        email,
        userName: email,
        password: phone,
        oldPassWord: phone,
        newPassWord: '',
        photo: !photo ? "img/undraw_profile.svg" : photo,
        role: 3

      };
      let includeData = getData;
      includeData.unshift(accountobj);
      localStorage.setItem("userDetailsList", JSON.stringify(includeData));
    }
    let obj = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      firstName: firstName,
      lastName: lastName,
      studentCourseName: studentCourseName,
      batch: batch,
      gender: gender,
      birthdate: birthdate,
      time: time,
      admissionno: admissionno,
      trainer: trainer,
      email: email,
      photo: photo,
      fathername: fathername,
      mothername: mothername,
      fatheroccupation: fatheroccupation,
      motheroccupation: motheroccupation,
      phone: phone,
      parentphone: parentphone,
      parentphoto: parentphoto,
      emailparent: emailparent,
      emailmother: emailmother,
      motherphone: motherphone,
      userID: userID
    };
    if (!idState) {
      //Save the data
      const getData = JSON.parse(localStorage.getItem("studentList"));
      const checkEmail = getData?.find((item) => {
        return item.email === email;
      });
      if (checkEmail) {
        alert("Don't use existing E-mail.");
        return;
      }
      if (getData) {
        let includeData = getData;
        includeData.unshift(obj);
        localStorage.setItem("studentList", JSON.stringify(includeData));
      } else {
        let includeData = [];
        includeData.push(obj);
        localStorage.setItem("studentList", JSON.stringify(includeData));
      }
      navigation("/AllStudents");
    } else {
      //Update the data
      const getData = JSON.parse(localStorage.getItem("studentList"));
      const checkEmail = getData?.find((item) => {
        return item.email === email;
      });
      if (checkEmail) {
        alert("Don't use existing E-mail.");
        return;
      }
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
          localStorage.setItem("studentList", JSON.stringify(fetchData));
          navigation("/AllStudents");
        }
      }
    }
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (
        selectedFile.type === 'image/jpeg' ||
        selectedFile.type === 'image/png'
      ) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhoto(e.target.result);
        };
        reader.readAsDataURL(selectedFile);
      } else {

        alert('Please select a valid JPEG or PNG image file.');
        event.target.value = null;
      }
    }
  };

  const handleFileUploadparent = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (
        selectedFile.type === 'image/jpeg' ||
        selectedFile.type === 'image/png'
      ) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setParentphoto(e.target.result);
        };
        reader.readAsDataURL(selectedFile);
      } else {

        alert('Please select a valid JPEG or PNG image file.');
        event.target.value = null;
      }
    }
  };
  const formRef = useRef(null);
  const handleReset = (event) => {
    event.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    setFirstName('');
    setLastName('');
    setStudentCourseName('');
    setbatch('');
    setGender('');
    setBirthDate('');
    setTime('');
    setAdmissionNo('');
    setTrainer('');
    setEmail('');
    setPhoto('');
    setFathername('');
    setMothername('');
    setFatheroccupation('');
    setMotheroccupation('');
    setPhone('');
    setParentphone('');
    setMotherphone('');
    setParentphoto('');
    setEmailParent('');
    setEmailMother('');
  };
  const handleFirstNameChange = (e) => {
    const inputValue = e.target.value;
    if (/^[A-Za-z]+$/.test(inputValue) || inputValue === '') {
      setFirstName(inputValue);
    }

  };
  const handleLastNameChange = (e) => {
    const inputValue = e.target.value;
    if (/^[A-Za-z]+$/.test(inputValue) || inputValue === '') {
      setLastName(inputValue);
    }

  };
  const calculateAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleBirthDateChange = (e) => {
    const inputValue = e.target.value;
    setBirthDate(inputValue);
    if (inputValue) {
      const age = calculateAge(inputValue);
      if (age < 15) {
        setAgeError('Age must be above 15 years');
      } else {
        setAgeError('');
      }
    }
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (inputValue) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(inputValue)) {
        setEmailError('Invalid email format. Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }
  };
  const handleEmailDad = (e) => {
    const inputValue = e.target.value;
    setEmailParent(inputValue);

    if (inputValue) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(inputValue)) {
        setEmailParentError('Invalid email format. Please enter a valid email address.');
      } else {
        setEmailParentError('');
      }
    }
  };
  const handleEmailMom = (e) => {
    const inputValue = e.target.value;
    setEmailMother(inputValue);
    if (inputValue) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(inputValue)) {
        setEmailParentError('Invalid email format. Please enter a valid email address.');
      } else {
        setEmailParentError('');
      }
    }
  };
  return (
    <form className='bg-white p-4 shadow' ref={formRef}>
      <div className='row pl-2'>
        <h5 className=" p-2" >Student Information</h5>
      </div>
      <div><hr className="hr" /></div>
      <div className='row pl-4'>
        <div className='col-12'>
          <div className=" row">
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label className="">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label >Last Name *</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label >Course *</label>
              <select
                id="inputState"
                className="form-control"
                name="course"
                defaultValue={studentCourseName}
                onChange={(e) => setStudentCourseName(e.target.value)}
                required
              >
                <option value="" selected disabled>Please Select Course</option>
                <option value="Full Stack Development" >Full Stack Development</option>
                <option value="Angular" >Angular</option>
                <option value="MVC" >MVC</option>
                <option value="Crash Course">Crash Course</option>
              </select>
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label>Batch Details *</label>
              <select
                id="inputState"
                className="form-control"
                name="batch"
                value={batch}
                onChange={(e) => setbatch(e.target.value)}
                required
              >
                <option value="" disabled>Please Select Batch</option>
                <option value="WeekDay" >WeekDay</option>
                <option value="WeedEnd" >WeedEnd</option>
                <option value="Crash Course" >Crash Course</option>
                <option value="Internship" >Internship</option>
              </select>
            </div>
          </div>
          <div className=" row">
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="inputState">Gender *</label>
              <select
                id="inputState"
                className="form-control"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="" disabled>Please Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label >Date Of Birth *</label>
              <input
                type="date"
                className="form-control"
                placeholder="birthdate"
                name="birthdate"
                value={birthdate}
                onChange={handleBirthDateChange}

                required
              />
              {ageError && <div style={{ color: 'red' }}>{ageError}</div>}
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label >Admission No*</label>
              <input
                type="text"
                className="form-control"
                name="admissionno"
                value={admissionno}
                onChange={(e) => setAdmissionNo(e.target.value)}
                maxLength={5}
                pattern="[0-9]{5}"
                title="Please enter a 5-digit Admission No"
                required
              />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="inputState"> Batch Time *</label>
              <select
                className="form-control"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="" disabled selected> Select a Time </option>
                <option value="10 am" >10 am </option>
                <option value="11 am " >11 am </option>
                <option value="1 pm" > 1 pm </option>
                <option value="2 pm" >2 pm </option>
                <option value="3 pm "  >3 pm </option>
                <option value="4 pm "  >4 pm </option>
              </select>
            </div>

          </div>
          <div className=" row">
            <div className="form-group col-lg-3 col-md-6 col-sm-12">
              <label >Assigned Trainers*</label>
              <input
                type="text"
                className="form-control"
                name="trainer"
                value={trainer}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^[^0-9]+$/.test(inputValue)) {
                    setTrainer(inputValue);
                  }
                }}
                required
              />
            </div>
            <div className="form-group col-lg-3 col-md-6 col-sm-12">
              <label >E-Mail *</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={email}
                onChange={handleEmailChange}
                aria-describedby="emailHelp"

                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                required
              />
              {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="inputPassword4">Prime Phone Number * </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                  setPhone(onlyNumbers);
                }}
                minLength={10}
                maxLength={10}
                required
              />
            </div>
            <div className="form-group col-lg-3 col-md-6 col-sm-12">
              <label>Upload Student Photo (jpg/png)</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                name="photo"
                onChange={handleFileUpload}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-2 pl-2'>
        <h5 className="p-2" >Parents Information</h5>
      </div>
      <div><hr className="hr" /></div>
      <div className='row pl-4'>
        <div className='col-12'>
          <div className=" row">
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label >Father Name * </label>
              <input
                type="text"
                className="form-control"
                name="fathername"
                value={fathername}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^[^0-9]+$/.test(inputValue)) {
                    setFathername(inputValue);
                  }
                }}
                required
              />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label>Mobile Number *</label>
              <input
                type="tel"
                className="form-control"
                name="parentphone"
                value={parentphone}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                  setParentphone(onlyNumbers);
                }}

                minLength={10}
                maxLength={10}
                required
              />
            </div>
            <div className="form-group col-sm-12 col-lg-3 col-md-6">
              <label>E-Mail</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="emailparent"
                value={emailparent}
                onChange={handleEmailDad}
                aria-describedby="emailHelp"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                title="Please enter a valid email address"
                required

              />
              {emailParentError && <div style={{ color: 'red' }}>{emailError}</div>}
            </div>

            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label> Occupation *</label>
              <input
                type="text"
                className="form-control"
                name="fatheroccupation"
                value={fatheroccupation}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^[^0-9]+$/.test(inputValue)) {
                    setFatheroccupation(inputValue);
                  }
                }}
                required

              />
            </div>

            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label >Mother Name *</label>
              <input
                type="text"
                className="form-control"
                name="<td>{result.fatheroccupation}</td>"
                value={mothername}
                onChange={(e) => {
                  const inputValue = e.target.value;

                  if (/^[^0-9]+$/.test(inputValue)) {
                    setMothername(inputValue);
                  }
                }}
                required

              />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label>Mobile Number *</label>
              <input
                type="tel"
                className="form-control"
                name="motherphone"
                value={motherphone}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                  setMotherphone(onlyNumbers);
                }}

                minLength={10}
                maxLength={10}
                required
              />
            </div>
            <div className="form-group col-sm-12 col-lg-3 col-md-6" >
              <label>E-Mail</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="emailmother"
                value={emailmother}
                onChange={handleEmailMom}
                aria-describedby="emailHelp"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                title="Please enter a valid email address"
                required
              />
            </div>

            <div className="form-group col-sm-12 col-lg-3 col-md-6">
              <label> Occupation *</label>
              <input
                type="text"
                className="form-control"
                name="motheroccupation"
                value={motheroccupation}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^[^0-9]+$/.test(inputValue)) 
                  {
                    setMotheroccupation(inputValue);
                  }
                }}
                required
              />
            </div>
          </div>
          <div className=" row">
            <div className="form-group col-sm-12 col-lg-3 col-md-6" >
              <label >Upload a Parent Photo (jpg/png)</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                name="parentphoto"
                onChange={handleFileUploadparent}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-end'>
        <div className='col-lg-2 col-md-2  col-sm-12 mt-2'>
          <button type="submit" className="btn btn-warning btn-md btn-block" onClick={addStudentFunc}>Save</button>
        </div>
        <div className='col-lg-2 col-md-2  col-sm-12 mt-2'>
          <button type="submit" className="btn btn-secondary btn-md btn-block" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </form>
  )
}
export default StudentAdmit;
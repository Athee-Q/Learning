import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export const AddTrainer = () => {
    const { state } = useLocation();
    const navigation = useNavigate();
    const [idState, setIdState] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [course, setcourse] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [photo, setPhoto] = useState("");
    const [joindate, setJoinDate] = useState("");
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        if (state) {
            setIdState(state.id);
        }
        if (idState) {
            const items = JSON.parse(localStorage.getItem("teacherList"));
            if (items) {
                const filterItems = items?.find(item => {
                    return item.id === idState;
                });
                if (filterItems) {
                    setFirstName(filterItems?.firstName);
                    setLastName(filterItems?.lastName);
                    setcourse(filterItems?.course);
                    setGender(filterItems?.gender);
                    setEmail(filterItems?.email);
                    setPhone(filterItems?.phone);
                    setJoinDate(filterItems?.joindate);
                    setPhoto(filterItems?.photo);

                }
            }
        }
    }, [idState, state]);
    const addTeacherFunc = (e) => {
        e.preventDefault();
        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            course.trim() === "" ||
            email.trim() === "" ||
            phone.trim() === ""
        ) {
            alert("Please fill in all required fields before saving.");
            return;
        }
        if (email) {
            let inputValue = email;
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
            return item.userName === email;
        });
        // if (fiterUserName) {
        //     alert("Don't use existing E-mail.");
        //     return;
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
                password:phone,
                oldPassWord: phone,
                newPassWord: '',
                photo: !photo ? "img/undraw_profile.svg" : photo,
                role: 2
            };
            let includeData = getData;
            includeData.unshift(accountobj);
            localStorage.setItem("userDetailsList", JSON.stringify(includeData));
        }
        let obj = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            firstName: firstName,
            lastName: lastName,
            course: course,
            gender: gender,
            email: email,
            phone: phone,
            joindate: joindate,
            photo: !photo ? "img/undraw_profile.svg" : photo,
            userID: userID
        };
        if (!idState) {
            //Save the data
            const getData = JSON.parse(localStorage.getItem("teacherList"));
            if (getData) {
                let includeData = getData;
                includeData.unshift(obj);
                localStorage.setItem("teacherList", JSON.stringify(includeData));
            } else {
                let includeData = [];
                includeData.push(obj);
                localStorage.setItem("teacherList", JSON.stringify(includeData));
            }
            navigation("/AllTrainers");
        } else {
            //Update the data
            const getData = JSON.parse(localStorage.getItem("teacherList"));
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
                    localStorage.setItem("teacherList", JSON.stringify(fetchData));
                    navigation("/AllTrainers");
                }
            }
        }
    };
    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setPhoto(e.target.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    const formRef = useRef(null);
    const handleReset = (e) => {
        e.preventDefault()
        if (formRef.current) {
            formRef.current.reset();
        }
        setFirstName('');
        setLastName('');
        setcourse('');
        setGender('');
        setEmail('');
        setPhone('');
        setJoinDate('');
        setPhoto('');

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
    return (
        <div className='bg-white p-4 shadow'>
            <div className='row pl-2'>
                <h3 className="p-2">Teacher Information </h3>
            </div>
            <div><hr className="hr" /></div>
            <div className='row pl-4 '>
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
                        <div className="form-group col-lg-3 col-md-6 col-sm-12">
                            <label >Official Mobile * </label>
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
                    </div>
                    <div className='row'>
                        <div className="form-group col-sm-12  col-lg-3 col-md-6">
                            <label>Course *</label>
                            <select
                                id="inputState"
                                className="form-control"
                                name="course"
                                value={course}
                                onChange={(e) => setcourse(e.target.value)}
                                required >
                                <option value="" disabled>Please Select Course</option>
                                <option value="Full Stack Development" >Full Stack Development</option>
                                <option value="Angular" >Angular</option>
                                <option value="MVC">MVC</option>
                                <option value="Crash Course">Crash Course</option>
                            </select>
                        </div>

                        <div className="form-group col-sm-12  col-lg-3 col-md-6 " >
                            <label  >Upload Photo (jpg/png)</label>
                            <input
                                type="file"
                                className="form-control-fileparent"
                                id="exampleFormControlFile1"
                                name="photo"
                                onChange={handleFileUpload}
                            />
                        </div>
                    </div>
                    <div className='row justify-content-end'>
                        <div className='col-lg-2 col-md-2  col-sm-12 mt-2'>
                            <button type="submit" className="btn btn-warning btn-md btn-block" onClick={addTeacherFunc}>Save</button>
                        </div>
                        <div className='col-lg-2 col-md-2  col-sm-12 mt-2'>
                            <button type="submit" className="btn btn-secondary btn-md btn-block" onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddTrainer;
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username && password) {
            let getData = JSON.parse(localStorage.getItem("userDetailsList"));
            if ((username === 'varshini' && password === 'Admin@1234') || (username === 'honey' && password === 'Admin@1234')) {
                setLoggedIn(true);
                const fiterUserName = getData?.find((item) => {
                    return item.userName === username;
                });

                let obj = {
                    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                    firstName: '',
                    lastName: '',
                    address: '',
                    phone: '',
                    email: '',
                    userName: username,
                    password: password,
                    oldPassWord: '',
                    newPassWord: '',
                    photo: '',
                    role: 1
                };
                if (!fiterUserName) {
                    let includeData = [];
                    includeData.push(obj);
                    localStorage.setItem("userDetailsList", JSON.stringify(includeData));
                }
            }
            getData = JSON.parse(localStorage.getItem("userDetailsList"));
            let checkDetail = [];
            checkDetail = getData?.filter(x => x.userName === username && x.password === password);
            if (checkDetail.length > 0) {
                const userd = checkDetail[0];
                localStorage.setItem("user", JSON.stringify({ userName: userd.userName, userPhoto: '' }));
                if (userd?.role === 1) {
                    localStorage.setItem("Role", 1);
                    localStorage.setItem("accountId", userd?.id);
                    window.location.reload();

                }
                if (userd?.role === 2) {
                    localStorage.setItem("Role", 2);
                    const teacherList = JSON.parse(localStorage.getItem("teacherList"));
                    const checkteacher = teacherList?.filter(x => x.userID === userd.id);
                    localStorage.setItem("teacherId", checkteacher[0].id);
                    window.location.reload();

                }
                if (userd?.role === 3) {
                    const studentList = JSON.parse(localStorage.getItem("studentList"));
                    const checkstudent = studentList?.filter(x => x.userID === userd.id);
                    localStorage.setItem("studentId", checkstudent[0].id);
                    localStorage.setItem("Role", 3);
                    window.location.reload();

                }
            }
            else {
                setLoggedIn(false);
                console.log("Login failed. Please check your credentials.");
            }
        }
    };
    return (
        <div className="centered-content bg-gray-500" >
            <div className="logindiv" >
                <div className="headingsContainer">
                    <h2>KITS Camps</h2>
                    <p>School Management System</p>
                </div>
                <div className="mainContainer">
                    <label >Your username</label>
                    <input
                        className='text'
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    <br />
                    <br />
                    <label >Your password</label>
                    <input
                        className='password'
                        type="password"
                        placeholder="Enter Password"
                        name="pswrd"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />

                    <div className="subcontainer">
                        <p className="forgotpwd"><a href="#">Forgot Password?</a></p>
                    </div>

                    <button className='buttonsubmit' type="submit" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
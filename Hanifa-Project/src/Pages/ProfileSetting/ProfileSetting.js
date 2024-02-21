import React, { useState, useRef, useEffect } from 'react';
const ProfileSetting = () => {
  const [idState, setIdState] = useState(null);
  const [accountSettingList, setAccountSettingList] = useState(null);
  const [accountSettingDetail, setAccountSettingDetail] = useState({});
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassWord, setOldPassWord] = useState("");
  const [newPassWord, setNewPassWord] = useState("");
  const [photo, setPhoto] = useState("");
  const [emailError, setEmailError] = useState('');
  useEffect(() => {
    let role = Number(localStorage.getItem("Role"));
    let id;
    if (role === 1) {
      id = localStorage.getItem("accountId");
    }
    if (role === 2) {
      id = localStorage.getItem("teacherId");
    }
    if (role === 3) {
      id = localStorage.getItem("studentId");
    }
    setIdState(id)
    const storedSubjectList = JSON.parse(localStorage.getItem('userDetailsList')) || [];
    setAccountSettingList(storedSubjectList);
    if (accountSettingList) {
      const filterItems = accountSettingList?.find(item => {
        return item.id === idState;
      });
      if (filterItems) {
        setAccountSettingDetail(filterItems);
        setFirstName(filterItems.firstName);
        setEmail(filterItems.email);
        setPhone(filterItems.phone);
        setPassword(filterItems.password);
        setUserName(filterItems.userName);
        setPhoto(filterItems?.photo);
      }
    }
  }, [idState]);


  const addSubjectFunc = (event) => {
    event.preventDefault();
    if (
      !firstName ||
      !email ||
      !userName ||
      !phone
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
    if (!oldPassWord && newPassWord) {
      alert("Old password is required");
      return;
    }
    if (oldPassWord && !newPassWord) {
      alert("New password is required");
      return;
    }
    if (oldPassWord && newPassWord) {
      if (newPassWord === password) {
        alert("Please don't use previous password as current password");
        return;
      }
      if (oldPassWord === password) {
        setPassword(newPassWord);
      }
    }
    let obj = {
      id: idState ?? Date.now().toString(36) + Math.random().toString(36).substr(2),
      firstName,
      phone,
      email,
      userName,
      password,
      oldPassWord,
      newPassWord,
      photo
    };
    if (!idState) {

      const getData = JSON.parse(localStorage.getItem("userDetailsList"));
      if (getData) {
        let includeData = getData;
        includeData.unshift(obj);
        localStorage.setItem("userDetailsList", JSON.stringify(includeData));
      } else {
        let includeData = [];
        includeData.push(obj);
        localStorage.setItem("userDetailsList", JSON.stringify(includeData));
      }
    } else {
      const getData = JSON.parse(localStorage.getItem("userDetailsList"));
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
          localStorage.setItem("userDetailsList", JSON.stringify(fetchData));
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
    setFirstName('');

    setPhone('');
    setPassword('');

    setPhoto('');
    setNewPassWord('');
    setOldPassWord('');

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
      }
      else {
        alert('Please select a valid JPEG or PNG image file.');
        setPhoto("img/undraw_profile.svg");
      }
    }
  };

  return (
    <div className='row'>
      <div className='col-lg-5 col-md-5 col-sm-12'>
        <div className='row justify-content-center'>
          <div className='col-12 bg-white p-4 shadow'>
            <div className='row'>
              <div className='col '>
                <h3 className="">Profile Setting</h3>
                <hr className="hr" />
              </div>
              <div></div>
            </div>
            <div className='row '>
              <div className='col'>
                <form >
                  <div className='row '>
                    <div className='col'>
                      <div className="form-row">
                        <div className="form-group col-12">
                          <label className="labeladmit" For="text">Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-control"
                            required />
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className="form-row">
                        <div className="form-group col-12">
                          <label className="labeladmit" For="text">Phone *</label>
                          <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row '>
                    <div className='col'>
                      <div className="form-row">
                        <div className="form-group col-12">
                          <label className="labeladmit" For="text">E-mail *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-describedby="emailHelp"
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                            readOnly
                          />
                          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className="form-row">
                        <div className="form-group col-12">
                          <label className="labeladmit" For="text">User Name </label>
                          <input
                            type="text"
                            name="oldPassWord"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row '>
                    <div className='col'>
                      <div className="form-row">
                        <div className="form-group col-12">
                          <label className="labeladmit" For="text">Old PassWord </label>
                          <input
                            type="password"
                            name="oldPassWord"
                            value={oldPassWord}
                            onChange={(e) => setOldPassWord(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className="form-row">
                        <div className="form-group col-12">
                          <label className="labeladmit" For="text">
                            New PassWord
                          </label>
                          <input
                            type="password"
                            name="newPassWord"
                            value={newPassWord}
                            onChange={(e) => setNewPassWord(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className="form-group col-lg-3 col-md-6 col-sm-12">
                      <label>Update Profile Picture (jpg/png)</label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        name="photo"
                        onChange={handleFileUpload}
                      />
                    </div>
                  </div>
                  <div className='row '>
                    <div className="form-group col-12">
                      <div className='row justify-content-center'>
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
      <div className='col-lg-7 col-md-7 col-sm-12'>
        <div className="bg-white p-4">
          <div className="row">
            <div className='col'>
              <h3 className="">Details</h3>
            </div>
          </div>
          <hr className="sidebar-divider my-0 " />
          <div className='row mt-4' >
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <img className=" h-50 w-50 m-md-5 mt-lg-4" src={accountSettingDetail.photo} alt={accountSettingDetail.firstName} />
            </div>
            <div className='col-lg-8 col-md-8 col-sm-12'>
              <div className="row">
                <div className="col-4">
                  <label className='label'>Name:</label>
                </div>
                <div className="col-8">
                  <p className=''>{accountSettingDetail.firstName} </p>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <label className='label'>Phone:</label>
                </div>
                <div className="col-8">
                  <p className=''>{accountSettingDetail.phone}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <label className='label'>E-mail:</label>
                </div>
                <div className="col-8">
                  <p className=''>{accountSettingDetail.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <label className='label'>User Name:</label>
                </div>
                <div className="col-8">
                  <p className=''>{accountSettingDetail.userName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileSetting;
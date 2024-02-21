import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
export const CrePayment = () => {
  const { state } = useLocation();
  const navigation = useNavigate();
  const [idState, setIdState] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [idno, setIdNo] = useState("");
  const [courseName, setCourseName] = useState("");
  const [batchName, setBatchName] = useState("");
  const [trainer, setTrainer] = useState("");
  const [payment, setPayment] = useState("");
  const [discountamt, setDiscountamt] = useState("");
  const [installment, setInstallment] = useState("");
  const [amtpending, setAmtpending] = useState("");
  const [totalFee, setTotalFee] = useState("");
  const [status, setStatus] = useState("");


  const [comment, setComment] = useState("");



  useEffect(() => {
    if (state) {
      setIdState(state.id);
    }
    if (idState) {

      const items = JSON.parse(localStorage.getItem("FeeList"));
      if (items) {
        const filterItems = items?.find(item => {
          return item.id === idState;
        });
        if (filterItems) {
          setFirstName(filterItems?.firstName);
          setCourseName(filterItems?.courseName);
          setBatchName(filterItems?.batchName);
          setTrainer(filterItems?.trainer);
          setPayment(filterItems?.payment);
          setDiscountamt(filterItems?.discountamt);
          setInstallment(filterItems?.installment);
          setAmtpending(filterItems?.amtpending);
          setTotalFee(filterItems?.totalFee);
          setIdNo(filterItems?.idno);
          setStatus(filterItems?.status);
          setComment(filterItems?.comment);
        }
      }
    }
  }, [idState, state]);
  const addFeeFunc = (e) => {
    e.preventDefault()
    let obj = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      firstName: firstName,
      courseName: courseName,
      batchName: batchName,
      trainer: trainer,
      totalFee: totalFee,
      discountamt: discountamt,
      installment: installment,
      amtpending: amtpending,
      comment: comment,
      idno: idno,
      payment: payment,
      status: status
    };
    if (!idState) {

      const getData = JSON.parse(localStorage.getItem("FeeList"));
      if (getData) {
        let includeData = getData;
        includeData.unshift(obj);
        localStorage.setItem("FeeList", JSON.stringify(includeData));
      } else {
        let includeData = [];
        includeData.push(obj);
        localStorage.setItem("FeeList", JSON.stringify(includeData));
      }
      navigation("/FeeCollection");
    } else {

      const getData = JSON.parse(localStorage.getItem("FeeList"));
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
          localStorage.setItem("FeeList", JSON.stringify(fetchData));
          navigation("/FeeCollection");
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
    setCourseName('');
    setBatchName('');
    setTrainer('');
    setPayment('');
    setDiscountamt('');
    setInstallment('');
    setAmtpending('');
    setTotalFee('');
    setIdNo('');
    setStatus('');
    setComment('');
  };
  const handleTotalFeeChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    const formattedValue = `₹${Number(inputValue).toLocaleString('en-IN')}`;

    setTotalFee(formattedValue);
  };
  const handleTotalDiscountamt = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    const formattedValue = `₹${Number(inputValue).toLocaleString('en-IN')}`;

    setDiscountamt(formattedValue);
  };
  const handleAmtpendingChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    const formattedValue = `₹${Number(inputValue).toLocaleString('en-IN')}`;

    setAmtpending(formattedValue);
  };
  return (
    <form className='bg-white p-4 shadow'>
      <div className='row pl-2'>  <h3 className="p-2">Payment Information </h3>
      </div>
      <div><hr className="hr" /></div>
      <div className='row pl-4 '>
        <div className='col-12'>
          <div className=" row">

            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="inputState">Registration No</label>
              <input
                type="text"
                className="form-control"
                name="idno"
                value={idno}
                onChange={(e) => setIdNo(e.target.value)}
                maxLength={5}
                pattern="[0-9]{5}"
                title="Please enter a 5-digit ID No"
                required
                inputMode="numeric"
              />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label className="">Student Name *</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label >Course Detail*</label>
              <select
                id="inputState"
                className="form-control"
                name="course"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              >
                <option value="" selected disabled>Please Select Course</option>
                <option >Full Stack Development</option>
                <option >Angular</option>
                <option >MVC</option>
                <option >Crash Course</option>
              </select>
            </div>
            <div className="form-group  col-sm-12  col-lg-3 col-md-6">
              <label > Batch Detail *</label>
              <select id="inputState" className="form-control" name="class" value={batchName}
                onChange={(e) => setBatchName(e.target.value)}
                required >
                <option selected>Please Select Batch *</option>
                <option>Offline</option>  <option>Online</option>  <option>Weekdays</option>  <option>Weekend</option>
              </select>
            </div>

            <div className="form-group col-lg-3 col-md-6 col-sm-12">
              <label > Trainer Name*</label>
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
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label className="labeladmit" For="text">Course Fees</label>
              <input
                type="text"
                className="form-control"
                name="totalFee"
                value={totalFee}
                onChange={handleTotalFeeChange} />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label className="labeladmit" For="text">Discount Amount</label>
              <input
                type="text"
                className="form-control"
                name="discountamt"
                value={discountamt}
                onChange={handleTotalDiscountamt} />
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label className="">Installement Detail*</label>
              <input
                type="text"
                name="installment"
                value={installment}
                onChange={(e) => setInstallment(e.target.value)}
                className="form-control"
                required
              />
            </div>

          </div>
          <div className='row'>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label className="labeladmit" For="text">Amount Pending</label>
              <input
                type="text"
                className="form-control"
                name="amtpending"
                value={amtpending}
                onChange={handleAmtpendingChange} />
            </div>

            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="inputState">Payment Status</label>
              <select
                id="inputState"
                className="form-control"
                name="class"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>Select Status</option>
                <option value="due">Due</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label For="inputState">Payment Mode</label>
              <select id="inputState" className="form-control" name="class" value={payment}
                onChange={(e) => setPayment(e.target.value)} >
                <option selected> Select a Method</option>
                <option>Credit Card</option>  <option>Debit Card</option>  <option>Digital Wallet</option>  <option>Bank Transfer</option>  <option>Cash</option>
                <option>Check</option>  <option>Money Order</option>
              </select>
            </div>
            <div className="form-group col-sm-12  col-lg-3 col-md-6">
              <label className="">Comment</label>
              <select id="inputState" className="form-control" name="comment" value={comment}
                onChange={(e) => setComment(e.target.value)} >
                <option selected> Select applicable</option>
                <option>Advance paid</option>  <option>1st Installment paid</option>  <option>2st Installment paid</option>
              </select>
            </div>

          </div>
          <div className='row justify-content-end'>
            <div className='col-lg-2 col-md-2  col-sm-12 mt-2'>
              <button type="submit" className="btn btn-warning btn-md btn-block" onClick={addFeeFunc}>Save</button>
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
export default CrePayment;
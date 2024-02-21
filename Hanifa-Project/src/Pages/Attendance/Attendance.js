import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
export const Attendance = () => {
    const { state } = useLocation();
    const navigation = useNavigate();
    const [idState, setIdState] = useState(null);
    const [attenClassName, setAttenClassName] = useState("");
    const [monthName, setMonthName] = useState("");
    const [session, setSession] = useState('');
    const [stuclassList, setStuclassList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const verticalLineStyle = {
        borderRight: '1px solid rgba(0, 0, 0, 0.5)',
    }
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

                    setAttenClassName(filterItems?.attenClassName);
                    setMonthName(filterItems?.monthName);
                    setSession(filterItems?.time);

                }
            }
        }
    }, [idState, state]);
    const addClassFunc = (e) => {
        e.preventDefault()
        if (
            attenClassName.trim() === "" ||
            monthName.trim() === "" ||
            session.trim() === ""
        ) {
            alert("Please fill in all required fields before searching.");
            return;
        }
        let obj = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            attenClassName: attenClassName,
            monthName: monthName,
            session: session
        };
        if (!idState) {

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
            navigation("/AllClass");
        } else {

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
                    navigation("/AllClass");
                }
            }
        }
    };

    
    useEffect(() => {
        const storedStuclassList = JSON.parse(localStorage.getItem('stuclassList')) || [];
        setStuclassList(storedStuclassList);
    }, []);

    const tableStyle = {
        marginTop: '-10px',
    };
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
    };
    return (
        <div>
            <div className=' col-12  bg-white p-4 shadow'  >
                <div className='row pl-2'>
                    <h3 className="p-2">Student Attendance</h3>
                </div>
                <div><hr className="hr" /></div>
                <div className='row pl-4 '>
                    <div className='col-12'>
                        <div className=" row">
                            <div className="form-group col-sm-12  col-lg-3 col-md-6">
                                <label For="inputState"> Select Class </label>
                                <select id="inputState" className="form-control" name="class" value={attenClassName}
                                    onChange={(e) => setAttenClassName(e.target.value)}
                                    required >
                                    <option selected>Please Select Class</option>
                                    <option>ForeNoon</option>  <option>Afternoon</option>  <option>Evening</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-12  col-lg-3 col-md-6">
                                <label For="inputState">Select Month </label>
                                <select id="inputState" className="form-control" name="class" value={monthName}
                                    onChange={(e) => setMonthName(e.target.value)}
                                    required>
                                    <option selected> Select a Month </option>
                                    <option>January</option>  <option>Febrary</option>  <option>March</option>  <option>April</option> <option>May</option>
                                    <option>June</option> <option>July</option> <option>August</option><option>September</option> <option>October</option> <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-12  col-lg-3 col-md-6">
                                <label For="inputState">Session Year</label>
                                <select
                                    className="form-control"
                                    name="session"
                                    value={session}
                                    onChange={(e) => setSession(e.target.value)}

                                    required
                                >
                                    <option value="2021-2022">2021-2022</option>
                                    <option value="2022-2023">2022-2023</option>
                                </select>
                            </div>
                            <div className='form-group col-lg-2 col-md-2  col-sm-12 mt-2'>
                                <button type="submit" className=" mt-4 form-control btn btn-warning btn-md btn-block" onClick={addClassFunc}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classname='Row'>
                <div className='bg-white p-4'>
                    <h3 className="p-2"> Attendence Sheet</h3>
                    <div className='mt-5 col-lg-12  col-md-12 col-sm-12 table-responsive'>
                        <table className="table table-sm table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" > Students </th>
                                    <th scope="col" style={verticalLineStyle}>1</th>
                                    <th scope="col" style={verticalLineStyle}>2</th>
                                    <th scope="col" style={verticalLineStyle}>3</th>
                                    <th scope="col" style={verticalLineStyle}>4</th>
                                    <th scope="col" style={verticalLineStyle}>5 </th>
                                    <th scope="col" style={verticalLineStyle}>6</th>
                                    <th scope="col" style={verticalLineStyle}>7</th>
                                    <th scope="col" style={verticalLineStyle}>8</th>
                                    <th scope="col" style={verticalLineStyle}>9</th>
                                    <th scope="col" style={verticalLineStyle}>10</th>
                                    <th scope="col" style={verticalLineStyle}>11</th>
                                    <th scope="col" style={verticalLineStyle}>12</th>
                                    <th scope="col" style={verticalLineStyle}>13</th>
                                    <th scope="col" style={verticalLineStyle}>14</th>
                                    <th scope="col" style={verticalLineStyle}>15</th>
                                    <th scope="col" style={verticalLineStyle}>16</th>
                                    <th scope="col" style={verticalLineStyle}>17</th>
                                    <th scope="col" style={verticalLineStyle}>18</th>
                                    <th scope="col" style={verticalLineStyle}>19</th>
                                    <th scope="col" style={verticalLineStyle}>20</th>
                                    <th scope="col" style={verticalLineStyle}>21</th>
                                    <th scope="col" style={verticalLineStyle}>22</th>
                                    <th scope="col" style={verticalLineStyle}>23</th>
                                    <th scope="col" style={verticalLineStyle}>24</th>
                                    <th scope="col" style={verticalLineStyle}>25</th>
                                    <th scope="col" style={verticalLineStyle}>26</th>
                                    <th scope="col" style={verticalLineStyle}>27</th>
                                    <th scope="col" style={verticalLineStyle}>28</th>
                                    <th scope="col" style={verticalLineStyle}>29</th>
                                    <th scope="col" style={verticalLineStyle}>30</th>
                                    <th scope="col">31</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResults.length > 0 ? (
                                    searchResults.map((result, index) => (
                                        <tr key={index}>
                                            <td>{result.idno}</td>
                                            <td>{result.teacherName}</td>
                                            <td>{result.gender}</td>
                                            <td>{result.subjectName}</td>
                                            <td>{result.teacherClassName}</td>
                                            <td>{result.joindate}</td>
                                            <td>{result.time}</td>
                                            <td>{result.phone}</td>
                                            <td>{result.email}</td>
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
                                    stuclassList.map((stuclass, index) => (
                                        <tr key={index}>
                                            <td><input className="form-check-input" type="checkbox" value="" /></td>
                                            <td>{stuclass.idno}</td>
                                            <td>{stuclass.teacherName} </td>
                                            <td>{stuclass.gender}</td>
                                            <td>{stuclass.subjectName}</td>
                                            <td>{stuclass.teacherClassName}</td>
                                            <td>{stuclass.joindate}</td>
                                            <td>{stuclass.time}</td>
                                            <td>{stuclass.phone}</td>
                                            <td>{stuclass.email}</td>

                                            <td className='actions' style={{ textAlign: 'center' }}>

                                                <span
                                                    className='action1 p-2'
                                                    style={{ color: 'green' }}
                                                    onClick={() => handleEdit(stuclass.id)}// 
                                                >
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </span>
                                                <span
                                                    className='action2 p-2'
                                                    style={{ color: 'red' }}
                                                    onClick={() => handleDelete(stuclass.id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>




                </div>

            </div>
        </div>
    )
}
export default Attendance;
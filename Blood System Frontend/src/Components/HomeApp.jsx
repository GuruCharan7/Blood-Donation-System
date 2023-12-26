import React, { useEffect, useState } from 'react';
import "../sample.css";
import { createSearchParams, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Service from '../Services/Service';

let Id = 0;
const HomeApp = () => {

  const [addDonor, setaddDonor] = useState(false);
  const [details, setDetails] = useState([]);
  const [isDelete, setisDelete] = useState(false);


  const needDelete = (id) => {
    Id = id;
    console.log(Id);
    setisDelete(true);
  };

  useEffect(() => {
    getDetails();
  }, []);

  const navigate = useNavigate();

  let handleEdit = (id) => {
    console.log(id);
    navigate({
      pathname: "/update",
      search: createSearchParams({
        id: id
      }).toString()
    })
  };

  let handleView = (id) => {
    console.log(id);
    navigate({
      pathname: "/view",
      search: createSearchParams({
        id: id
      }).toString()
    })
  };

  const getDetails = async () => {
    const res = await Service.readAll();
    setDetails(res.data);
  };

  const isaddDonor = () => {
    setaddDonor(true);
  };


  return (
    <div>
      <header>
        <div className='AppHeader'>
          <h2 className="AppHeader_text">LifeShare '23</h2>
        </div>

        <div className='AppHeader_2'>
          <a href="/signup" className="AppHeader_text">Log Out</a>
        </div>

      </header>

      <div>
        <a href="/create" className="add_button no_1">Add Donor</a>
      </div>

      <div className="table_div">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: '230px', color: 'white' }}>User Name</th>
              <th style={{ width: '230px', color: 'white' }}>Age</th>
              <th style={{ width: '230px', color: 'white' }}>Blood Group</th>
              <th style={{ width: '230px', color: 'white' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr />
            {
              details.map((current) => (

                <tr style={{bordercolor:"white"}} key={current.id}>
                  <td style={{color : 'white'}}> {current.username} </td>
                  <td style={{color : 'white'}}> {current.age}</td>
                  <td style={{color : 'white'}}> {current.blood_group}</td>
                  <td>
                    <button style={{ marginLeft: "10px",color:'grey' }} onClick={() => { handleView(current.id) }} className="btn btn-link"><VisibilityIcon /> </button>
                    <button onClick={() => { handleEdit(current.id) }} className="btn btn-success"> <EditIcon /> </button>
                    <button style={{ marginLeft: "10px" }} onClick={() => { needDelete(current.id) }} className="btn btn-danger"><RemoveCircleIcon /> </button>
                  </td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeApp;

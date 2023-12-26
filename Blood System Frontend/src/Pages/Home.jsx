import { Button } from '@mui/material'
import React, { useEffect,useState } from 'react'
import AppTool from '../Components/AppTool'
import Create from '../Components/Create';
import { createSearchParams, useNavigate } from 'react-router-dom';
import DeletePop from '../Components/DeletePop';
import Service from '../Services/Service';

let Id = 0;
export default function Home() {


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
        <>

            <div className='apptool'>
                <AppTool />
            </div>

            <div className='main-container'>

                <div className='row'>
                    <div className='col-md-4'>
                        <Button onClick={isaddDonor}
                            variant="contained" color="success">
                            ADD DONOR
                        </Button>
                    </div>
                    <div className='container'>

                        {/* <>
                        <ViewAllComponent 
                        details={details} 
                        getDetails = {getDetails}/>
                        </> */}

                        <>
                            <h2 className="text-center">Donor's List</h2>
                            <div className="row">

                            </div>
                            <br></br>
                            <div className="row">
                                <table className="table table-striped table-bordered">

                                    <thead>
                                        <tr>
                                            <th> User Name</th>
                                            <th> Age</th>
                                            <th> Blood Group</th>
                                            <th> Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            details.map((current) => (

                                                <tr key={current.id}>
                                                    <td> {current.username} </td>
                                                    <td> {current.age}</td>
                                                    <td> {current.blood_group}</td>
                                                    <td>
                                                        <button onClick={() => { handleEdit(current.id) }} className="btn btn-info">Update </button>
                                                        <button style={{ marginLeft: "10px" }} onClick={() => {needDelete(current.id)} } className="btn btn-danger">Delete </button>
                                                        <button style={{ marginLeft: "10px" }} onClick={() => { handleView(current.id) }} className="btn btn-info">View </button>
                                                    </td>
                                                </tr>
                                            )
                                            )
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </>

                    </div>
                </div>


            </div>

            <>
                {addDonor ? (
                    <Create
                        addDonor={addDonor}
                        setaddDonor={setaddDonor}
                        getDetails={getDetails}

                    />
                ) : (
                    <></>
                )}
            </>

            <>
                {isDelete ? (
                    <DeletePop
                        Id={Id}
                        isDelete={isDelete}
                        setisDelete={setisDelete}
                        getDetails={getDetails}
                    />
                ) : (
                    <></>
                )}
            </>


        </>
    )
}

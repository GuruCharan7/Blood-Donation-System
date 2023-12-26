import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Service from '../Services/Service';

export default function ViewByIdComponent() {

    const [donorId] = useSearchParams();
    console.log(donorId.get("id"));

    let navigate = useNavigate();

    const [details, setDetails] = useState({
        username: '',
        age: 0,
        disease: '',
        blood_group: ''
    });

    useEffect(() => {
        const getDetails = async () => {
            const res = await Service.read(donorId);
            setDetails(res.data);
        };
        getDetails();
    }, []);



    return (
        <div>
            <div id='view1'>
                <br></br>
                <div className="card col-md-6 offset-md-3" id='view2'>
                    <h3 className="text-left"> View Donor Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <div>
                                <label> ID </label>
                                <h4>{details.id}</h4>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div>
                                <label> User Name </label>
                                <h4>{details.username}</h4>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div>
                                <label> Age </label>
                                <h4>{details.age}</h4>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div>
                                <label> Blood Group </label>
                                <h4>{details.blood_group}</h4>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div>
                                <label> Disease </label>
                               <h4> {details.disease} </h4>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                        <button className="btn btn-danger" onClick={() => {navigate(`/`)}} style={{ marginLeft: "10px" }}>BACK</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

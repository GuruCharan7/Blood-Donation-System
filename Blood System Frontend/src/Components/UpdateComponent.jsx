import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Service from '../Services/Service';
import '../App.css'
import AppTool from './AppTool';
const UpdateComponent = () => {

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

    const onFormFieldChange = (event) => {
        // No need to return this function can be void
        setDetails({
            ...details,
            [event.target.name]: event.target.value
        })
    }

    let updateDonor = async (d) => {
        d.preventDefault();
        let donor = {
            username: details.username,
            age: details.age,
            disease: details.disease,
            blood_group: details.blood_group
        }
        let res = await Service.update(donorId, donor);
        console.log(res);
        navigate(`/home`);
    }

    return (
        <>
            <div>
                <AppTool />
                <br></br>
                <div className='update'>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Donor</h3>
                                <div className="card-body">

                                    <form>
                                        <div className="form-group" >
                                            <label> User Name: </label>
                                            <input placeholder="User Name" name="username" className="form-control" value={details.username} onChange={onFormFieldChange} />
                                        </div>
                                        <div className="form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" value={details.age} onChange={onFormFieldChange} />
                                        </div>
                                        <div className="form-group">
                                            <label> Disease: </label>
                                            <input placeholder="Disease" name="disease" className="form-control" value={details.disease} onChange={onFormFieldChange} />
                                        </div>
                                        <div className="form-group">
                                            <label> Blood Group: </label>
                                            <input placeholder="Blood Group" name="blood_group" className="form-control" value={details.blood_group} onChange={onFormFieldChange} />
                                        </div>

                                        <br />
                                        <button className="btn btn-success" onClick={updateDonor}>Save</button>
                                        <button className="btn btn-danger" onClick={() => { navigate(`/home`) }} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateComponent;
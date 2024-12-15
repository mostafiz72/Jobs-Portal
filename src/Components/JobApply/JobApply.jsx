import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import Swal from 'sweetalert2';

export default function JobApply() {
    const Navigate = useNavigate();
    const { _id } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(_id, user);
    
    

    const handleApply = (e)=>{
        e.preventDefault();
        const form = e.target;
        const facebook = form.name.value;
        const github = form.github.value;
        const linkedln = form.linkedln.value;
        const jobApplication = {
            job_id: _id,
            applicant_email: user.email,
            facebook,
            github,
            linkedln
        }
        
        
        //// send  the data in my database****************************************
        fetch('http://localhost:5000/apply/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire(
                    'Success!',
                    'Your application has been sent successfully.',
                   'success'
                )
                Navigate('/myApplication');
            }
        })
        .catch(error => console.error('Error:', error))
       
    }

    return (
        <>
            <div className="hero bg-base-200 min-h-screen flex flex-col items-center justify-center">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card w-6/12 bg-base-100 shadow-2xl">
                        <h2 className=' text-2xl mt-5 font-bold text-center'>Jobs Application</h2>
                        <form onSubmit={handleApply} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Facebook URL</span>
                                </label>
                                <input type="url" name='name' placeholder="facebook url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">GitHub URL</span>
                                </label>
                                <input type="url" name='github' placeholder="github url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Linkedln URL</span>
                                </label>
                                <input type="url" name='linkedln' placeholder="linkedln url" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Apply Job</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

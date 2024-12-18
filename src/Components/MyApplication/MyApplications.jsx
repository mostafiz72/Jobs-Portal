import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthProvider'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function MyApplications() {

    const Navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/apply?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

        axios.get(`http://localhost:5000/apply?email=${user.email}`, /// axios use korle amader duibar then korte hoy na and method headers asob kono kicu dite hoy nah
        {withCredentials: true})
        .then(res => setJobs(res.data)
        )
    }, [user.email])  // email jodi change hoy tahole useEffect abaar call hobe

    // delete application functionality starting
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/delete-application/${id}`, {
                        method: 'DELETE',
                    })

                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                setJobs(jobs.filter(j => j._id !== id))

                            }
                        })
                }

            })

    }

    //// add more compaly functionality starting 

    const handleAdd = () => {
        Navigate('/');
    }

    return (
        <>
            {
                !jobs.length ? <h2 className=' text-center text-3xl font-bold min-h-screen flex justify-center items-center'>You are Not applied any Jobs.</h2> :
                    <div className=' container mx-auto'>
                        {
                            jobs.map(job =>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <th>Name</th>
                                                <th>Job</th>
                                                <th>Favorite Color</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={job.company_logo}
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{job.title}</div>
                                                            <div className="text-sm opacity-50">{job.location}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {job.company}
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                                </td>
                                                <td>Purple</td>
                                                <th>
                                                    <button onClick={() => handleDelete(job._id)} className="btn btn-error font-semibold text-lg">Delete</button>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
                        <div className=' my-5 text-center'>
                            <button onClick={handleAdd} className="btn btn-primary ml-5 font-semibold text-lg">Add Apply</button>

                        </div>
                    </div>
            }
        </>
    )
}

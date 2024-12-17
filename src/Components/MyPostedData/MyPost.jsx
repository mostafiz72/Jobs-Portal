import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import { Link } from 'react-router-dom';

export default function MyPost() {
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
    return (
        <>
            <div className="overflow-x-auto container mx-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No: </th>
                            <th>Company Name</th>
                            <th>Job Title</th>
                            <th>Location</th>
                            <th>Total Bids: </th>
                            <th>View Applications: </th>
                        </tr>
                    </thead>
                    {
                        jobs.map((job, index) =>

                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{job.company}</td>
                                    <td>{job.title}</td>
                                    <td>{job.location}</td>
                                    <td>{job.applicationCount ? job.applicationCount : 0}</td>
                                    <td><Link to={`/viewApplications/${job._id}`} className=' btn btn-outline'>View Applications</Link></td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </>
    )
}

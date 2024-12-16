import React from 'react'
import { Link } from 'react-router-dom';

export default function HotJobsCard({ job }) {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company_logo, requirements, currency } = job;
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className=' flex gap-5'>
                    <figure>
                        <img
                            className=' w-20 h-20 object-cover'
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <p>{location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>{description}</p>
                    <div className=' flex gap-2 flex-wrap text-center my-5'>
                        {
                           requirements.map((requirement, index) =><p key={index} className=' rounded-full bg-gray-700 text-white p-1'>{requirement}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end items-center">
                        <p>Salary: {salaryRange.min}-{salaryRange.max} { salaryRange.currency}</p>
                        <Link to={`jobs/${_id}`} className="btn btn-primary">View Jobs</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

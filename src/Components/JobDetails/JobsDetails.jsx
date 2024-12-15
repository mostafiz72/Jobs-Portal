import React from 'react'
import { MdMoodBad } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

export default function JobsDetails() {
  const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company_logo, requirements, currency, responsibilities } = useLoaderData();
  return (
    <>
      <div>

        <div className="bg-gray-800 p-6 rounded-xl flex justify-center items-center container mx-auto">
          <div className="grid lg:grid-cols-2 gap-5 bg-gray-500 rounded-lg shadow-lg overflow-hidden">
            {/* <!-- Image Section --> */}
            <div className=" flex justify-center items-center">
              <img src={company_logo} alt="Meatball Stroganoff Rice Bowl" className=" w-40 h-40 object-cover" />
            </div>
            {/* <!-- Content Section --> */}
            <div className=" p-6 flex flex-col">
              {/* <!-- Title and Availability --> */}
              <div className="flex flex-col ">
                <h2 className="text-2xl font-bold text-gray-800 text-left">Name: {title}</h2>
                <h2 className="text-lg font-bold text-gray-800 text-left my-5">Category: {category}</h2>
              </div>
              <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                Description: {description}
              </p>
              {/* <!-- Price Section --> */}
              <h3 className=' text-xl font-bold mt-5'>Top Skills :-</h3>
              <ul className="pl-10">
                {
                  requirements.map((result, index) => <ul key={index}>
                    <li className=' list-disc font-semibold'>{result}</li>
                  </ul>)
                }
              </ul>
              <h3 className=' text-xl font-bold mt-5'>Jobs Features:-</h3>
              <ul className="pl-10">
                {
                  responsibilities.map((result, index) => <ul key={index}>
                    <li className=' list-disc font-semibold'>{result}</li>
                  </ul>)
                }
              </ul>
              {/* <!-- Pre-order Button //--> */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 text-left mt-3">Salary: ${salaryRange.min}-${salaryRange.max}</h2>
                <h2 className="text-lg font-bold text-gray-800 text-left my-2">Dedline: {applicationDeadline}</h2>
                <h2 className="text-lg font-bold text-gray-800 text-left">Locations: {location}</h2>
              </div>
              <div className="mt-4">
                <Link to="/" className="btn btn-accent text-slate-800 text-lg mr-3">View All Jobs</Link>
                <Link to={`/apply/${_id}`} className="btn btn-primary text-slate-800 text-lg">Apply {category}</Link>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext/AuthProvider';

export default function AddJob() {

    const { user } = useContext(AuthContext);

    const handleAddJob = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target); /// form theke dta pauyar jonno amra new FormData user korlam
        const initialData = Object.fromEntries(formData.entries());  //// amara  formData er ekhanbe object a convert korlam
        const { min, max, ...newJob } = initialData;   /// initialData theke amara min and max property alada korlam and baki gula amar newJob er mordhe reakhe dilam
        newJob.salaryRange = { min, max }  //// min, and max property er man k salaryRange er mordhe rekhe newJOb er mordhe add kora hoyse
        newJob.requirements = newJob.requirements.split('\n')  /// amra ekhane requirements ekta string k [split ----- (highlight korar jonno braket use korsi)] er mordhe \n joto gual jaigai pabo sei gual k amra ekek ta array te convent kortesi.
        newJob.responsibilities = newJob.responsibilities.split('\n') /// ekhane ekta bisoy kheal rakhte hobe jano [\] ta amon hoy.
        console.log(newJob);

        // send the data in the server 

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire(
                    'Post Success!',
                    'Post job successfully',
                   'success'
                )
            }
            
        })
        
    }

            return (
            <div className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded-md p-6 mt-10">
                <h2 className="text-xl font-bold mb-4">Job Form</h2>
                <form onSubmit={handleAddJob} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            className="w-full border rounded-md bg-transparent p-2"
                            placeholder="Enter job title"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="w-full border bg-transparent rounded-md p-2"
                            placeholder="Enter job location"
                            required
                        />
                    </div>

                    {/* Job Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Job Type</label>
                        <select 
                            defaultValue="Select Job Type"
                            name="jobType"
                            className="w-full bg-transparent border rounded-md p-2"
                            required
                        >
                            <option value="" disabled>Select job type</option>
                            <option value="Hybrid">full-time</option>
                            <option value="Onsite">Onsite</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <input
                            type="text"
                            name="category"
                            className="w-full bg-transparent border rounded-md p-2"
                            placeholder="Enter job category"
                            required
                        />
                    </div>

                    {/* Salary */}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Salary Min</label>
                            <input
                                type="number"
                                name="min"
                                className="w-full bg-transparent border rounded-md p-2"
                                placeholder="Minimum salary"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Salary Max</label>
                            <input
                                type="number"
                                name="max"
                                className="w-full bg-transparent border rounded-md p-2"
                                placeholder="Maximum salary"
                                required
                            />
                        </div>
                    </div>

                    {/* Application Deadline */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Application Deadline</label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            className="w-full bg-transparent border rounded-md p-2"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            className="w-full bg-transparent border rounded-md p-2"
                            placeholder="Enter job description"
                            rows="5"
                        ></textarea>
                    </div>

                    {/* Requirments */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Requirments</label>
                        <textarea
                            name="requirements"
                            className="w-full bg-transparent border rounded-md p-2"
                            placeholder="Enter job requirements"
                            rows="5"
                        ></textarea>
                    </div>

                    {/* responsibilities */}
                    <div>
                        <label className="block text-sm font-medium mb-1">responsibilities</label>
                        <textarea
                            name="responsibilities"
                            className="w-full bg-transparent border rounded-md p-2"
                            placeholder="Enter job responsibilities"
                            rows="5"
                        ></textarea>
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            className="w-full bg-transparent border rounded-md p-2"
                            placeholder="Enter company name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">HR Name</label>
                        <input
                            type="text"
                            name="hrName"
                            className="w-full bg-transparent border rounded-md p-2"
                            placeholder="Enter HR name"
                            required
                        />
                    </div>

                    {/* HR Details */}
                    <div>
                        <label className="block text-sm font-medium mb-1">HR Email</label>
                        <input
                            defaultValue={user?.email}
                            type="email"
                            name="hr_Email"
                            className="w-full bg-transparent border rounded-md p-2"
                            placeholder="Enter HR email"
                            required
                        />
                    </div>
                    {/* HR company logo */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Company URL</label>
                        <input
                            type="url"
                            name="company_logo"
                            className="w-full bg-transparent border rounded-md p-2"
                            placeholder="company logo url"
                            required
                        />
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 w-full text-white rounded-md py-2 px-4 hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            );
}


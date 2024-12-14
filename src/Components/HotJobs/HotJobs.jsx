import React, { useEffect, useState } from 'react'
import HotJobsCard from './HotJobsCard.jsx';
export default function HotJobs() {
 
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
       fetch('http://localhost:5000/jobs')
        .then(response => response.json())
        .then(data => setJobs(data)
        )
    }, [])

  return (
    <div className=' grid grid-cols-4 gap-5 container mx-auto'>
        {
            jobs.map(job => <HotJobsCard key={job._id} job={job} />
            )
        }
    </div>
  )
}

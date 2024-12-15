import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthProvider'

export default function MyApplications() {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/apply?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [user.email])  // email jodi change hoy tahole useEffect abaar call hobe
  return (
    <div>MyApplications</div>
  )
}

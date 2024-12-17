import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function ViewApplication() {
  const viewApplications = useLoaderData();

  const handleStatusUpdate = (e, id) => {  // amaa ekhane duita parameter nisi amra kare winer dilam tar to id numbner lagbe tai id number neuya hoyse

    /// send the data in the server ----------------
    const data = {
      status: e.target.value  // property name hobe status and value name hobe amar select er value theke ja pabo tai
    }
    fetch(`http://localhost:5000/apply/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount){
          Swal.fire({
            title: "Sucess!",
            text: "Your file has been success.",
            icon: "success"
          });
        }
      })
  }

  return (
    <>
      <div className="overflow-x-auto container mx-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No: </th>
              <th>Eamil</th>
              <th>Job Title</th>
              <th>Winers</th>
            </tr>
          </thead>
          {
            viewApplications.map((app, index) =>

              <tbody key={index}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>{app.applicant_email}</td>
                  <td>SortWare Enginner</td>
                  <td>
                    <select
                      onChange={(e) => handleStatusUpdate(e, app._id)}
                      className="select select-bordered select-xs w-full max-w-xs"
                      defaultValue={app.status || 'Change Status'}
                    >
                      <option disabled>Change Status</option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            )
          }
        </table>
      </div>
    </>
  )
}

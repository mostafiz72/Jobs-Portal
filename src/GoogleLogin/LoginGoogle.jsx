import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginGoogle() {
    const { SignInGoogle } = useContext(AuthContext);
    const Navigate = useNavigate();

    const handleGoogle = ()=>{
        SignInGoogle()
        .then(res =>{
            Navigate('/');
        })
        .catch(err => {
            toast.error("Something went wrong " + err.message)
        })
    }


  return (
    <>
        <ToastContainer position="top-center" />
      <div className="divider divider-default">OR</div>
      <button onClick={handleGoogle} className=' btn btn-warning'><FaGoogle /> Login With Google</button>
    </>
  )
}

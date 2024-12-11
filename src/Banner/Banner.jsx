import React from 'react'
import { color, motion } from "motion/react"

export default function Banner() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col gap-50 lg:flex-row-reverse">
                    <motion.img
                        animate={{ x: [-150, -120, -150] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src="https://img.freepik.com/free-photo/team-working-animation-project_23-2149269903.jpg?t=st=1733956828~exp=1733960428~hmac=0c3745afeddf727d26beac7b62d35a25197d0a78da3496afad10626fc5ca3990&w=740"
                        className="max-w-sm border-l-8 z-50 border-b-8 rounded-t-3xl rounded-br-3xl border-red-600 shadow-2xl" />
                    <motion.img
                        animate={{ y: [-180, -200, -180] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src="https://img.freepik.com/free-photo/front-view-group-young-freelancers-office-have-conversation-smiling_146671-13592.jpg?t=st=1733956668~exp=1733960268~hmac=4e90a99509b86209daedc9d34644611353e03aac2e8948f57c3cfe7bd0bcc8fa&w=740"
                        className="max-w-sm border-l-8 border-b-8 rounded-t-3xl rounded-br-3xl border-blue-700 shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Latest <motion.span animate={{
                            opacity: [.5, 1, .5],
                            color: ["#e74c3c", "#16a085", "#f39c12", "#5f27cd", "#f368e0"]
                        }}
                            transition={{ repeat: Infinity }} className=' text-blue-600'>Jobs</motion.span> For you!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className=' mb-5'>
                            <input
                            type="text"
                            placeholder="Search job category..."
                            className="input input-bordered input-info w-full max-w-xs" /><button className=' btn btn-primary ml-3'> Search</button> </div>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

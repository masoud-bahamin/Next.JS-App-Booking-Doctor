"use client"

import BaseUrl from '@/utils/baseUrl'
import Image from 'next/image'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Rating from './Rating'
import { CommentType } from '../../templates/Doctor/TabSection'


export default function Comment({ comments }: CommentType ) {

    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const sendComment = async () => {

        if (message.trim().length < 3) {
            Swal.fire({
                icon: "warning",
                text: "please set a valid message"
            })
            return false
        }
        setLoading(true)
        try {
            const res = await fetch(`${BaseUrl}comments/create`, {
                method: "POST",
                body: JSON.stringify({
                    message,
                    rateNumber: 4,
                    userId: "657213d3d1cc9214e41c235e",
                    username: "masoud"
                })
            })

            const data = await res.json()
            console.log(data);
            if (data.resulte) {
                Swal.fire({
                    icon: "success",
                    text: "your comment send successfully"
                })
                setMessage("")
            } else {
                Swal.fire({
                    icon: "error",
                    text: "There was a problem please try again"
                })
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                text: "There was a problem please try again"
            })
        }
        setLoading(false)

    }

    console.log(comments);
    

    return (
        <>
            <h3 className='text-xl mb-6 font-medium'>Comments and Reviews</h3>
            <div className='max-w-xl mx-auto'>

                <div>
                    {comments?.map(comment => (
                        <div key={comment.message + comment.username} className='flex gap-2 p-0 py-6 lg:p-8'>
                            <div className=' flex-shrink-0'>
                                <Image width={50} height={50} src={"/img/user.png"} className='' alt='avatar' />
                            </div>
                            <div>
                                <p className=' font-medium mb-1'>{comment.username}</p>
                                <p className='text-gray-400 text-xs mb-2'>28 12 2023</p>
                                <Rating rate={comment.rateNumber}/>
                                <p className='text-gray-500 text-sm mt-1'>{comment.message}</p>
                            </div>
                        </div>
                    ))}


                    <div className='p-0 py-6 lg:p-8'>
                        <textarea value={message} onChange={e => setMessage(e.target.value)}
                            className='border rounded-md w-full p-3 text-sm outline-none'
                            placeholder='write a comment...'
                            name="" id="" rows={4}></textarea>
                    </div>
                    <div className='text-right px-8'>
                        {loading ? (
                            <button className='btn' >loading...</button>
                        ) : (
                            <button className='btn' onClick={sendComment}>Send</button>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

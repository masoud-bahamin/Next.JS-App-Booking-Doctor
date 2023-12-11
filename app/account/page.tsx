"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb';
import BaseUrl from '@/utils/baseUrl';

export interface User {
    username: string,
    email: string,
    password: string,
    img: { filename: string }[],
    role : string , 
    location : string ,
    age : number ,
    bio : string ,
    name : string,
    phone : string
}


const HomePage: React.FC = () => {

    const [image, setImage] = useState<File | null>(null);
    const [uploadeImage, setUploadeImage] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<User>({} as User);
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState<string | null>(null)
    const router = useRouter()

    const getToken = (name: string) => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) return parts.pop()?.split(";").shift()
    }


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setImage(file || null);
    };

    const handleUpload = async () => {
        if (!image) {
            console.error('No image selected');
            return;
        }
        if (!token) {
            console.error('No token selected');
            return;
        }
        setLoading(true)
        const formData = new FormData();
        formData.append('image', image);
        formData.append('userId', token);

        try {
            console.log("submit shod :))");

            const response = await fetch(`${BaseUrl}images/upload`, {
                method: 'POST',
                body: formData,
            });
            console.log("wow response", response);

            const data = await response.json();
            console.log('Image uploaded successfully:', data);
            if (data.resulte) {
                Swal.fire({
                    icon: "success",
                    text: "Image uploaded successfully"
                })
                setImage(null)
                getUserInfo(token)
            } else {
                Swal.fire({
                    icon: "error",
                    text: "Image uploade error"
                })
            }

        } catch (error) {
            console.error('Error uploading image', error);
        }
        setLoading(false)
    };

    const getUserInfo = async (id: string) => {
        try {
            const res = await fetch(`${BaseUrl}users/getUser/${id}`)
            const data = await res.json()

            if (data.resulte) {
                setUserInfo(data.user)
            } else {

            }
        } catch (error) {
            console.log(error);

        }

    }


    useEffect(() => {
        if (image) {
            const upImage = URL.createObjectURL(image)
            setUploadeImage(upImage)
        }

    }, [image])

    useEffect(() => {
        const dataToken = getToken("bookingToken")
        if (dataToken) {
            setToken(dataToken)
            getUserInfo(dataToken)
        } else {
            router.push("/signup")
        }
    }, [])
    console.log(userInfo);

    return (
        <div className='bg-slate-100'>
            <Breadcrumb title='Account' route='Account'/>
            <div className='container mx-auto px-4 md:px-0 py-12 flex flex-wrap lg:flex-nowrap gap-8'>
                <div className='bg-white border w-full lg:w-1/4 h-fit'>
                    <div className='p-8'>
                        <div>
                            {loading ? (
                                <button className='bg-prim text-white rounded p-2 text-xs  ' disabled><span className='animate-pulse'>Loading...</span></button>
                            ) : (
                                <>
                                    {image ? (
                                        <button onClick={handleUpload} className='bg-prim text-white rounded p-2 text-xs hover:bg-blue-700'>Save Photo</button>
                                    ) : null}
                                </>)}
                        </div>
                        <div className='text-center relative'>
                            {uploadeImage ? (
                                <Image
                                    width={120}
                                    height={120}
                                    src={uploadeImage}
                                    alt=""
                                    className='w-32 h-32 mx-auto rounded-full'
                                />
                            ) : (
                                <>
                                    {userInfo.img?.length > 0 ? (
                                        <Image
                                            width={120}
                                            height={120}
                                            src={"/uploads/" + userInfo?.img[userInfo.img.length - 1]?.filename}
                                            alt=""
                                            className='w-32 h-32 mx-auto rounded-full'
                                        />
                                    ) : (
                                        <Image
                                            width={120}
                                            height={120}
                                            src={"/img/user.png"}
                                            alt=""
                                            className='w-32 mx-auto rounded-full'
                                        />
                                    )}
                                </>)}
                            <label htmlFor="avatarInput" className='text-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 inline border border-prim rounded-full p-1 -mt-8 -mr-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>
                            </label>
                            <input type="file" onChange={handleFileChange} id='avatarInput' className='sr-only' />
                        </div>
                    </div>
                    <p className='text-center mb-6'>{userInfo?.username || "username"}</p>
                    <ul>
                        <li className='p-3 border-b text-gray-500 cursor-pointer text-sm flex gap-3 items-center hover:text-prim transition-all duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>
                            <span>Dashboard</span>
                        </li>
                        <li className='p-3 border-b text-gray-500 cursor-pointer text-sm flex gap-3 items-center hover:text-prim transition-all duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            <span>Appointment List</span>
                        </li>
                        <li className='p-3 border-b text-gray-500 cursor-pointer text-sm flex gap-3 items-center hover:text-prim transition-all duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                            <span>Message</span>
                        </li>
                        <li className='p-3 border-b text-gray-500 cursor-pointer text-sm flex gap-3 items-center hover:text-prim transition-all duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Profile Setting</span>
                        </li>
                        <li className='p-3 border-b text-gray-500 cursor-pointer text-sm flex gap-3 items-center hover:text-prim transition-all duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            <span>Logout</span>
                        </li>

                    </ul>
                </div>
                <div className='bg-white w-full lg:w-3/4 p-8'>
                    <div className='flex justify-between'>
                        <h3 className='text-xl font-semibold mb-8'>Profile Setting</h3>
                        <h3 className='text-lg text-prim font-semibold mb-8'>{userInfo?.role}</h3>
                    </div>
                    <div className='flex gap-4'>
                        <div className='hidden md:block lg:min-w-[280px]'>
                            <p className='text-prim text-xs'>Personal Details</p>
                        </div>
                        <div className='px-0 lg:px-6 lg:border-l'>
                            <h3 className='text-lg font-semibold mb-8'>Your Details</h3>
                            <form action="" className='lg:min-w-[700px]'>
                                <input className='border outline-none w-full p-3 mb-3'
                                    placeholder={userInfo?.name || 'Name...'}
                                    type="text" />
                                <input className='border outline-none w-full p-3 mb-3'
                                    placeholder={userInfo?.email || 'Email...'}
                                    type="email" />
                                <input className='border outline-none w-full p-3 mb-3'
                                    placeholder={userInfo?.username || 'UserName...'}
                                    type="text" />
                                <input className='border outline-none w-full p-3 mb-3'
                                    placeholder={userInfo?.phone || 'Mobile Number...'}
                                    type="number" />
                                <textarea className='border outline-none w-full p-3 mb-3 h-32'
                                    placeholder={userInfo?.bio || 'Bio...'} />
                                <h3 className='text-lg font-semibold mt-8 mb-6'>Your Location</h3>
                                <select className='border outline-none w-full p-3 mb-3 text-gray-600'
                                    name="" id="">
                                    <option value="-1">Australia</option>
                                    <option value="-1">Germany</option>
                                </select>
                                <input className='border outline-none w-full p-3 mb-3'
                                    placeholder='Address...'
                                    type="text" />
                                <div className='text-right'>
                                    <button type="submit" className='btn'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;


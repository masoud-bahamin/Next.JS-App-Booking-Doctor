"use client"

// pages/index.tsx
import { useState } from 'react';
import Image from 'next/image';


const HomePage: React.FC = () => {

    const [image, setImage] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setImage(file || null);
    };

    const handleUpload = async () => {
        if (!image) {
            console.error('No image selected');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        // formData.append('doctorId', "656e3cc0d9cca355ae638960");
        formData.append('userId', "656df68551cb6e04af559733");

        try {
            console.log("submit shod :))");

            const response = await fetch('https://bahamin-booking.vercel.app/api/doctors/update/656e3cc0d9cca355ae638960', {
                method: 'POST',
                body: formData,
            });
            console.log("wow response", response);

            const data = await response.json();
            console.log('Image uploaded successfully:', data);

        } catch (error) {
            console.error('Error uploading image', error);
        }
    };

    return (
        <div className='bg-slate-100 py-12'>
            <div className='container mx-auto flex gap-8'>
                <div className='bg-white border p-8 w-1/4'>
                    <div>
                         <button onClick={handleUpload} className='bg-prim text-white rounded p-2 text-xs'>save</button>
                    </div>
                    <div className='mb-5 text-center relative'>
                        <Image 
                        width={200}
                        height={200}
                        src="/img/d1.jpg" 
                        alt="" 
                        className='w-32 mx-auto rounded-full' 
                        />
                        <label htmlFor="avatarInput" className='text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 inline border border-prim rounded-full p-1 -mt-8 -mr-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                            </svg>
                        </label>
                        <input type="file" onChange={handleFileChange} id='avatarInput' className='sr-only' />
                       
                    </div>
                    <p className='text-center mb-6'>username</p>
                    <ul>
                        <li className='py-2 border-b'>Dashboard</li>
                        <li className='py-2 border-b'>Dashboard</li>
                        <li className='py-2 border-b'>Dashboard</li>
                        <li className='py-2 border-b'>Dashboard</li>
                        <li className='py-2 border-b'>Dashboard</li>
                        <li className='py-2 border-b'>Dashboard</li>
                    </ul>
                </div>
                <div className='bg-white w-3/4 h-64'>

                </div>
            </div>






        </div>
    );
};

export default HomePage;


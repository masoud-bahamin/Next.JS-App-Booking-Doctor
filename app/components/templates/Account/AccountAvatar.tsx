"use client";


import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface AccountAvatarProps {
  userInfo: UserType;
}

export default function AccountAvatar({ userInfo }: AccountAvatarProps) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [uploadeImage, setUploadeImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file || null);
  };

  const handleUpload = async () => {
    if (!image) {
      console.error("No image selected");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("userId", userInfo._id);

    try {
      console.log("submit shod :))");

      const response = await fetch(`/api/images/upload`, {
        method: "POST",
        body: formData,
      });
      console.log("wow response", response);

      const data = await response.json();
      console.log("Image uploaded successfully:", data);
      if (data.resulte) {
        Swal.fire({
          icon: "success",
          text: "Image uploaded successfully",
        });
        setImage(null);
        // getUserInfo(token)
      } else {
        Swal.fire({
          icon: "error",
          text: "Image uploade error",
        });
      }
    } catch (error) {
      console.error("Error uploading image", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (image) {
      const upImage = URL.createObjectURL(image);
      setUploadeImage(upImage);
    }
  }, [image]);

  return (
    <div className="p-8">
      <div>
        {loading ? (
          <button className="bg-prim text-white rounded p-2 text-xs  " disabled>
            <span className="animate-pulse">Loading...</span>
          </button>
        ) : (
          <>
            {image ? (
              <button
                onClick={handleUpload}
                className="bg-prim text-white rounded p-2 text-xs hover:bg-blue-700"
              >
                Save Photo
              </button>
            ) : null}
          </>
        )}
      </div>
      <div className="text-center relative">
        {uploadeImage ? (
          <Image
            width={140}
            height={140}
            src={uploadeImage}
            alt=""
            className="w-32 h-32 mx-auto rounded-full"
          />
        ) : (
          <>
            {userInfo?.img?.length > 0 ? (
              <Image
                width={140}
                height={140}
                src={
                  "/uploads/" + userInfo?.img[userInfo.img.length - 1]?.filename
                }
                alt=""
                className="w-32 h-32 mx-auto rounded-full"
              />
            ) : (
              <Image
                width={140}
                height={140}
                src={"/img/user.png"}
                alt=""
                className="w-32 mx-auto rounded-full"
              />
            )}
          </>
        )}
        <label htmlFor="avatarInput" className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 inline border border-prim rounded-full p-1 -mt-8 -mr-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          id="avatarInput"
          className="sr-only"
        />
      </div>
    </div>
  );
}

"use client"

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";



function DeleteBtn({ url }: { url: string }) {

    const router = useRouter()

    const deleteHandler = async () => {
        const res = await fetch("/api/images/delete", {
            method: "DELETE",
            body: JSON.stringify({ url })
        })
        console.log(res);
        if (res.ok) {
            Swal.fire({
                icon: "success",
                text: "deleted successfully"
            })
            router.refresh()
        } else {
            Swal.fire({
                icon: "error",
                text: "deleted unsuccessfull"
            })
        }

    }

    return (
        <button onClick={deleteHandler}
            className="bg-rose-500 text-white p-2">DELETE</button>
    )
}

export default DeleteBtn
import { list } from "@vercel/blob"
import DeleteBtn from "./DeleteBtn"
import IsAdmin from "./IsAdmin"

async function AllImages() {

    const { blobs } = await list()
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-5">All images</h3>
            <IsAdmin />
            <div className="flex gap-5 flex-wrap">
                {blobs.map(i => (
                    <div key={i.url} className="p-4 w-48 border space-y-2 text-xs">
                        <img src={i.url} className="w-48" alt="" />
                        <p >{i.pathname}</p>
                        <p >{i.uploadedAt.toString().slice(0, 25)}</p>
                        <p>{i.size} KB</p>
                        <DeleteBtn url={i.url} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllImages
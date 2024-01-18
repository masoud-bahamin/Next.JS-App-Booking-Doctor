import { list } from "@vercel/blob"
import DeleteBtn from "./DeleteBtn"

async function AllImages() {

    const { blobs } = await list()
    return (
        <div className="flex gap-5 flex-wrap">
            {blobs.map(i => (
                <div key={i.url} className="p-5 border">
                    <img src={i.url} className="w-32 h-32" alt="" />
                    <p>{i.pathname}</p>
                    <p>{i.uploadedAt.toString().slice(0,25)}</p>
                    <p>{i.size}</p>
                    <DeleteBtn url={i.url}/>
                </div >
            ))}
        </div>
    )
}

export default AllImages
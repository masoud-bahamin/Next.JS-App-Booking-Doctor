import Breadcrumb from "@/app/components/modules/Breadcrumb/Breadcrumb";
import Rating from "@/app/components/modules/Comment/Rating";
import TabSection from "@/app/components/templates/Doctor/TabSection";
import { bookingModel } from "@/models/booking";
import imageModel from "@/models/image";
import userModel from "@/models/user";
import connectToDb from "@/utils/db";

export default async function page({ params }: { params: { id: string } }) {

  const { id } = params

  connectToDb();
  const user = await userModel
    .findOne({ _id: id })
    .populate("comments")
    .lean();

  const images = await imageModel.find({ userId: params.id });




  return (
    <div className="">
      <Breadcrumb title="Doctor" route="Doctor" />
      <div className="container mx-auto p-8 border rounded-md ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-between mb-10">
          <div className="flex gap-4 mx-auto md:mx-0">
            <div>
              <img
                width={200}
                height={200}
                alt=""
                src={`${images[images.length - 1]?.filename}`}
                className="rounded-md"
              />
            </div>
            <div>
              <p className="font-medium mb-2">{user?.username}</p>
              <p className="text-prim text-xs mb-2">Dentist</p>
              <Rating rate={4} />
            </div>
          </div>
          <div className="max-w-sm mx-auto md:ml-auto">
            <div className="text-slate-800 mb-2 flex items-center gap-2 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
              <span className="text-xs">3 Votes</span>
            </div>
            <div className="text-slate-800 mb-2 flex items-center gap-2 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <span className="text-xs">Mon, Wed, Thu, Fri, Sat</span>
            </div>
            <div className="text-slate-800 mb-2 flex items-center gap-2 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
              <span className="text-xs">6 Feedback</span>
            </div>
            <div className="text-slate-800 mb-3 flex items-center gap-2 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="text-xs">Astrailia</span>
            </div>
            <a
              href="#tab-section"
              className="btn-b inline-block text-center w-full mb-3 text-xs"
            >
              ADD FEEDBACK
            </a>
            <a
              className="btn inline-block text-center w-full mb-3 text-xs"
              href="#tab-section"
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
        <div id="tab-section">
          <TabSection id={id} user={JSON.parse(JSON.stringify(user))} />
        </div>
      </div>
    </div>
  );
}

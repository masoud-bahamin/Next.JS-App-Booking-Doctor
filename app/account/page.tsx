
import AccountForm from '../components/templates/Account/AccountForm';
import AllImages from '../components/templates/Account/AllImages';
import { cookies } from 'next/headers'
import { exportToken } from '@/utils/tokenGenerator';
import userModel from '@/models/user';
import { redirect } from 'next/navigation';
import connectToDb from '@/utils/db';


const HomePage = async () => {

    const cookieStore = cookies()
    const token = cookieStore.get('token')?.value

    if (!token) redirect("/signup")

    const { email } = exportToken(token) as { email: string }
    connectToDb()
    const user = await userModel.findOne({ email }, "-__v")

    return (
        <>
            <AccountForm />
            {user.role === "ADMIN" ? (
                <div className='p-8 my-12'>
                    <AllImages />
                </div>
            ) : null}

        </>
    );
};

export default HomePage;


import Image from 'next/image'
import LoginForm from '../components/templates/Login/LoginForm'
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'

export default function Signup() {

    return (
        <div className=''>
            <Breadcrumb title='Login' route='Login' />
            <div className='max-w-5xl mx-auto flex items-center gap-5'>
                <div>
                    <LoginForm />
                </div>
                <div>
                    <Image
                        width={600}
                        height={10}
                        src="/img/login-banner.png" alt="" />
                </div>
            </div>
        </div>
    )
}

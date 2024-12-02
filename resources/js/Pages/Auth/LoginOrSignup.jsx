import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { CountryCodeList } from '@/Components/countryCodeList';
import { useEffect } from 'react';

export default function LoginOrSignup({ status, canResetPassword, auth,isSignup}) {
    isSignup = usePage().props.isSignup?usePage().props.isSignup:isSignup;
    console.log(isSignup)
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        remember: false,
        password:"",
        email:"",
        resetPassword:"",
    });
    
    const handleChangeData = (e)=>{
        setData(e.target.id, e.currentTarget.value);
    }
    const submit = (e) => {
        e.preventDefault();
        const status = document.getElementById("status").value;
        if(status === "signup"){
            post(route('register'), {
                onFinish: () => reset('password'),
            });
        }else{
            post(route('account.check'), {
                onFinish: () => reset('password'),
            });
        }
        
    };

    return (
            <>
            <Head title="Log in" />
            <div className='modal js-modal'></div>
                <div className='login wrap js-loginOrsignup'>
                    <h1 className='main_title'> 
                        {isSignup?<>Sign up</>:<>Log in or sign up</>}
                    </h1>
                    <section className='section'>
                        <h2 className='section_title'>Welcome to Kurjya</h2>
                        <h2 className='section_title'>{isSignup?<>Let's create your account</>:<></>}</h2>
                    </section>
                    <form onSubmit={submit} className='login-form'>
                        <div className='input-area'>
                            <label htmlFor="username" value="username" className='input-area_label' >
                            Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={data.username}
                                className='input-area_box'
                                onChange={handleChangeData}
                                placeholder=''
                                required
                            />
                        </div>
                        <Register isSignup={isSignup} data={data} onChange={handleChangeData}/>
                        <div className='btn-area'>
                            <button className="btn-area_btn" id="status" disabled={processing} value={isSignup?"signup":"login"}>
                                {isSignup?<>Register</>:<>Continue</>}
                            </button>
                        </div>
                    </form>
                </div>
            
            </>
    
    );
}

const Register= ({isSignup,data, onChange}) => {
        if(isSignup){
            return(
                <>
                    <div className='input-area'>
                        <label htmlFor="email" value="email" className='input-area_label' >
                        Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className='input-area_box'
                            onChange={onChange}
                            placeholder=''
                            required
                        />
                    </div>
                    <div className='input-area'>
                        <label htmlFor="password" value="password" className='input-area_label' >
                        Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className='input-area_box'
                            onChange={onChange}
                        />
                    </div>
                    <div className='input-area'>
                        <label htmlFor="repassword" value="repassword" className='input-area_label' >
                        Re-type password
                        </label>

                        <input
                            id="resetPassword"
                            type="Password"
                            name="repassword"
                            value={data.resetPassword}
                            className='input-area_box'
                            autoComplete="repassword"
                            onChange={onChange}
                            placeholder=''
                        />
                    </div>

                </>
                )
        }
    }

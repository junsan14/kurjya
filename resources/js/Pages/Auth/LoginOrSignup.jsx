import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { CountryCodeList } from '@/Components/countryCodeList';
import { useEffect } from 'react';

export default function LoginOrSignup({ status, canResetPassword, auth }) {
    const isSignUp = usePage().props.isSignUp;
    const { data, setData, post, processing, errors, reset } = useForm({
        country_code: '+250',
        mobile: '',
        remember: false,
        password:"",
        resetPassword:"",
        url:"",
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
                        {isSignUp?<>Sign up</>:<>Log in or sign up</>}
                    </h1>
                    <section className='section'>
                        <h2 className='section_title'>Welcome to Kurjya</h2>
                        <h2 className='section_title'>{isSignUp?<>We cannot find your account</>:<></>}</h2>
                    </section>
                    <form onSubmit={submit} className='login-form'>
                        <div className='input-area'>
                            <label htmlFor="tel" value="tel" className='input-area_label' >
                            Country Code
                            </label>
                            <select 
                                className='input-area_select'
                                onChange={handleChangeData}
                                id="country_code"
                            >
                                {CountryCodeList.map((ele,i)=>{
                                    if(ele.name === "Rwanda"){
                                        return(<option selected key={i} value={ele.dial_code}>{ele.name}({ele.dial_code})</option>)
                                    }else{
                                        return(<option key={i} value={ele.dial_code}>{ele.name}({ele.dial_code})</option>)

                                    }
                                })}
                            </select>
                        </div>
                        <div className='input-area'>
                            <label htmlFor="tel" value="tel" className='input-area_label' >
                            Phone Number
                            </label>

                            <input
                                id="mobile"
                                type="tel"
                                name="mobile"
                                value={data.mobile}
                                className='input-area_box'
                                autoComplete="tel"
                                onChange={handleChangeData}
                                placeholder=''
                            />
                        </div>
                        <Register isSignUp={isSignUp} data={data} onChange={handleChangeData}/>
                        <div className='btn-area'>
                            <button className="btn-area_btn" id="status" disabled={processing} value={isSignUp?"signup":"login"}>
                                {isSignUp?<>Register</>:<>Continue</>}
                            </button>
                        </div>
                    </form>
                </div>
            
            </>
    
    );
}

const Register= ({isSignUp,data, onChange}) => {
        if(isSignUp){
            return(
                <>
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

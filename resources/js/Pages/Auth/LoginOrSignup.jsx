import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function LoginOrSignup({ status, canResetPassword, auth }) {
    console.log(usePage().props)
    
    const { data, setData, post, processing, errors, reset } = useForm({
        country_code: 'Rwanda(+250)',
        mobile: '',
        remember: false,
        url:"",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
            <>
            <Head title="Log in" />
            <div className='modal js-modal'></div>
                <div className='login wrap js-loginOrsignup'>
                    <h1 className='main_title'> Log in or sign up</h1>
                    <section className='section'>
                        <h2 className='section_title'>Welcome to Kurjya</h2>
                    </section>
                    <form onSubmit={submit} className='login-form'>
                        <div className='input-area'>
                            <label htmlFor="tel" value="tel" className='input-area_label' >
                            Country Code
                            </label>

                            <input
                                id="country_code"
                                type="text"
                                name="country_code"
                                value={data.country_code}
                                className='input-area_box'
                                autoComplete="tel"
                                onChange={(e) => setData('country_code', e.target.value)}
                                placeholder=''
                            />
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
                                onChange={(e) => setData('mobile', e.target.value)}
                                placeholder=''
                            />
                        </div>
                        <div className='btn-area'>
                            <button className="btn-area_btn" disabled={processing}>Continue</button>
                        </div>
                    </form>
                </div>
            
            </>
    
    );
}

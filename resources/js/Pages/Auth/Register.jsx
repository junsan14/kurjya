import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm,usePage } from '@inertiajs/react';


export default function Register({auth}) {
    const inputData = usePage().props;
    console.log(inputData.mobile)
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        country_code: inputData.country_code,
        mobile:inputData.mobile,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout auth={auth}>
            <Head title="Register" />

            <main className='main signup'>
                <h1 className='main_title'> Sign up</h1>
                <section className='section'>
                    <h2 className='section_title'>Welcome to Kurjya</h2>
                </section>
                <form onSubmit={submit} className='login-form'>
                    <div className='input-area'>
                        <label htmlFor="tel" value="tel" className='input-area_label' >
                        Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={data.username}
                            className='input-area_box'
                            autoComplete="tel"
                            onChange={(e) => setData('username', e.target.value)}
                            placeholder=''
                        />
                    </div>
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
                    <div className='input-area'>
                        <label htmlFor="tel" value="tel" className='input-area_label' >
                       password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className='input-area_box'
                            autoComplete="password"
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder=''
                        />
                    </div>
                    <div className='btn-area'>
                        <button className="btn-area_btn" disabled={processing}>Sign up</button>
                    </div>
                </form>
            </main>

        </GuestLayout>
    );
}

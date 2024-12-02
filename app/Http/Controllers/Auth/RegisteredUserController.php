<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;
use Carbon\Carbon;

use Illuminate\Support\Str;
use App\Notifications\SendSms;
use App\Notifications\SuccessfulRegistration;



class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {

        return Inertia::render('Auth/Register', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        /*
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        */

/*
        $request->validate([
            'username' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
*/
        //dd($request);
        /*
        $user = User::create([
            'username' => Str::uuid(),
            'country_code' => $request->country_code,
            'mobile' => $request->mobile,
            'password' => Hash::make($request->password),
            'mobile_verification_tokens'=>Str::uuid(),
        ]);

        event(new Registered($user));

        Auth::login($user);
        */
            //$tel = preg_replace('/^0/',"a", $request->tel);
        $AuthCode = random_int(100000, 999999);
        
        $user = User::create([
            'username' => Str::uuid(),
            'country_code' => $request->country_code,
            'mobile' => $request->mobile,
            'password' => Hash::make($request->password),
            'mobile_verification_tokens'=>$AuthCode,
            'mobile_verification_code'=>random_int(100000, 999999),
            'mobile_verification_code_expires_at'=>Carbon::now()->addMinutes(10),
            'is_verified'=>false
        ]);
        event(new Registered($user));
        

        //$user->notify(new SuccessfulRegistration($user->name));
        //return 'Send SMS via Vonage success!';
        $user->notify(new SendSms($AuthCode));
        return redirect(route('home', absolute: false));
    }
}

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;

class AuthenticatedSessionController extends Controller
{



     public function check(Request $request)
    {
        $user = User::where(['country_code'=> $request->country_code,'mobile'=> $request->mobile])->first();
        //dd($user);
        if($user){
            return Inertia::render('Auth/Login', [
                'mobile' => $request->mobile,
                'country_code' => $request->country_code,
            ]);
        }else{
           // return redirect()->back()->with("a","a");
       return Redirect::back()->with("a","a");;

            //return redirect();
            //return Redirect::to('/blog/admin');
            /*
            return Inertia::render('Auth/Register', [
                'mobile' => $request->mobile,
                'country_code' => $request->country_code,
            ]);
            */
        }
    }

    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/LoginOrSignup', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

   
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}

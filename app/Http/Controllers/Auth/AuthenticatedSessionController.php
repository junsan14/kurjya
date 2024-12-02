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
        $user = User::where(['username'=> $request->username])->first();
        //dd($request);
        if($user){
            $auth = Auth::login($user);
            return Inertia::render('home',['auth'=>$auth]);
        }else{
            return Inertia::render('home', [
                'isSignUp' => true
            ]);
            
        }
    }

    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/AccountCheck', [
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

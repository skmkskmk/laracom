<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function index()
    {
        if(Auth::check())
        {
            return redirect('admin/dashboard');
        }
        return view('admin/login');
    }

    public function login(Request $request)
    {
        if(Auth::check())
        {
            return redirect('admin/dashboard');
        }
        $data=$request->except('_token');
        if (Auth::attempt($data)) {
            return redirect('admin/dashboard');
        }
    }
}

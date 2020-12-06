<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


// Route::group([ 'prefix' => 'admin'], function () {

//     Route::get('/', 'DashboardController')->name('backend.dashboard');

//     // ...
// });


Route::prefix('/admin')->group(function () {
    Route::get('/login', [LoginController::class,'index']);
    Route::get('/dashboard', [AdminController::class,'dashboard'])->middleware('auth');
    Route::resource('/tag', TagController::class)->middleware('auth');
    Route::resource('/category', CategoryController::class)->middleware('auth');
    Route::post('/login', [LoginController::class,'login']);
});

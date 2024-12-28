<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\LoginController;

Route::get('login', [LoginController::class, 'create'])
    ->name('login')
    ->middleware('guest');

Route::post('login', [LoginController::class, 'store'])
    ->name('login.store')
    ->middleware('guest');

Route::delete('logout', [LoginController::class, 'destroy'])
    ->name('logout');

// Dashboard
Route::get('/', [PostController::class, 'index'])->name('dashboard')->middleware('auth');

// Route::get('/', [PostController::class, 'index']);
Route::resource('posts', PostController::class)->except(['index'])->middleware('auth');
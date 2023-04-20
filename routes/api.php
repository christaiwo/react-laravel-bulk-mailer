<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::apiResource('/user', \App\Http\Controllers\Api\UserController::class);
    Route::apiResource('/mail', \App\Http\Controllers\Api\MailController::class);
    Route::delete('/email/{email}', [\App\Http\Controllers\Api\MailController::class, 'destroyEmail']);
    Route::post('logout', [\App\Http\Controllers\Api\AuthController::class, 'logout']);
});


Route::post('/register', [\App\Http\Controllers\Api\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\Api\AuthController::class, 'login']);
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Mail;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();
        $mails = Mail::all()->count();
        $sent_mails = Mail::where('status', 1)->get()->count();
        $pending_mails = Mail::where('status', 0)->get()->count();
        return response(compact('user','mails', 'sent_mails', 'pending_mails'));
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        if(isset($data['password']) && $data['password'] != ''){
            $data['password'] = bcrypt($data['password']);
        }
        $user->update($data);

        return response(compact('user'), 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}

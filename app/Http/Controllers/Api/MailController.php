<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMailRequest;
use App\Http\Requests\UpdateMailRequest;
use App\Models\Email;
use App\Models\Mail;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mails = Mail::all();

        return response(compact('mails'), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMailRequest $request)
    {
        $data = Mail::create([
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        if($data){
            $emails = explode(',', $request->email);
            $count = 0;
            foreach ($emails as $email) {
                $data->emails()->create([
                    'email' => $email,
                ]);
                $count++;
            }

            $data->update([
                'total' => $count,
            ]);
        }

        return response('', 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mail $mail)
    {
        $emails = $mail->emails;
        return response(compact('mail', 'emails'), 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMailRequest $request, Mail $mail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mail $mail)
    {
        $mail->delete();
        return response('', 204);
    }

    public function destroyEmail(Email $email)
    {
        $email->delete();
        return response('', 204);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMailRequest;
use App\Http\Requests\UpdateMailRequest;
use App\Models\Mail;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMailRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Mail $mail)
    {
        //
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
        //
    }
}

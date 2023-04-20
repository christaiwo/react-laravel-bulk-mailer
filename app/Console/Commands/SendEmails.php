<?php

namespace App\Console\Commands;

use App\Mail\Mail;
use App\Models\Email;
use App\Models\Mail as DBMail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail as SendMail;

class SendEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send email';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $mail = DBMail::where('status', 0)->limit(10)->first();
        foreach ($mail->emails as $email) {
            if($email->status == 0){
                SendMail::to($email)->send(new Mail($mail) );
                $fetchMail = Email::where('id', $email->id);
                $fetchMail->update([
                    'status' => 1,
                ]);

                if(($mail->sent + 1) >= $mail->total){
                    $mail->update([
                        'sent' => $mail->sent + 1,
                        'status' => 1,
                    ]);
                }else{
                    $mail->update([
                        'sent' => $mail->sent + 1,
                    ]);
                }

                sleep(5);
            }
        }
    }
}

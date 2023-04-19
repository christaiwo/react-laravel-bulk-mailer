<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject',
        'message',
        'total',
        'sent',
        'status',
    ];


    public function emails()
    {
        return $this->hasMany(Email::class);
    }
}

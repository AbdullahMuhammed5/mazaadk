<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TicketComment extends Model
{

    protected $fillable = ['ticket_id','user_id','content','attachments'];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

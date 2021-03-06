<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends \TCG\Voyager\Models\Post
{
    public function author() : BelongsTo
    {
        return $this->belongsTo(User::class,'author_id','id');
    }
}

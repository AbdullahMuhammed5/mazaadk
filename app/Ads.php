<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ads extends Model
{


    public function product()
    {
        return $this->belongsTo(Product::class)->withCount('bids');
    }
}

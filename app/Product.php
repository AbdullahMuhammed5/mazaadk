<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;
use App\User;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{
    protected $fillable = ['user_id', 'category_id', 'name', 'description', 'images', 'price', 'min_increment', 'status', 'features', 'close_time', 'created_at','lat','lng'];


    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }


    public function category(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function isFavorit()
    {
        return $this->belongsToMany(Favorit::class,'id','product_id')
            ->where('user_id',Auth::id())
            ;
    }

    public function bids()
    {
        return $this->hasMany(Bid::class);
    }

    public function lastBid()
    {
        return $this->hasOne(Bid::class)->latest()->first();
    }
}

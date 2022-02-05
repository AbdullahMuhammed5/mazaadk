<?php

namespace App\GraphQL\Queries;

class Favorit
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        return \App\Favorit::where('user_id',auth()->id())->get();
    }
}

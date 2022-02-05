<?php

namespace App\GraphQL\Queries;

class Ads
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        return \App\Ads::inRandomOrder()->first();
    }
}

<?php

namespace App\GraphQL\Mutations;

class Favorit
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function add($_, array $args)
    {

        $favorit = \App\Favorit::updateOrCreate([
            'user_id' => auth()->id(),
            'product_id' => $args['product_id']
        ]);

        return true;
    }

    public function delete($_, array $args)
    {
        $favorit = \App\Favorit::where([
            'user_id' => auth()->id(),
            'product_id' => $args['product_id']
        ])->delete();
        return true;
    }
}

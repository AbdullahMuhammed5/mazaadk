<?php

namespace App\GraphQL\Mutations;

use App\Events\BidIncrease;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class Bid
{
    /**
     * Return a value for the field.
     *
     * @param  null  $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param  mixed[]  $args The arguments that were passed into the field.
     * @param  \Nuwave\Lighthouse\Support\Contracts\GraphQLContext  $context Arbitrary data that is shared between all fields of a single query.
     * @param  \GraphQL\Type\Definition\ResolveInfo  $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @return mixed
     */
    public function increase($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $increase = $args['increase'];
        $product = \App\Product::where('id' , $args['product_id'])->first();
        if($product)
        {
            $newPrice = $product->price + $increase;
            \App\Bid::create([
                'product_id' => $product->id,
                'user_id' => auth()->id(),
                'increase' => $increase,
                'price' => $newPrice,
            ]);
            $product->update([
               'price' => $newPrice,
            ]);
            event(new BidIncrease($product));
            return true;
        }
        return false;

    }
}

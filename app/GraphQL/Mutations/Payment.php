<?php

namespace App\GraphQL\Mutations;

use App\Helpers\TapPayment;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class Payment
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
    public function pay($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        if(!auth()->user()->verified) {
            return false;
        }
        $product = \App\Product::where('id',$args['product_id'])->first();
        if(!$product)
        {
            return false;
        }

        $amount = $product->price;
        $payment = TapPayment::charge([
            'amount' => $amount,
            'currency' => 'USD',
            'description' => setting('site.description'),
            'username' => auth()->user()->name,
            'email' => auth()->user()->email,
            'apiKey' => setting('site.tapApiKey'),
            'redirect' => '/payment/check',
            'country_code' => auth()->user()->country_code,
            'phone' => auth()->user()->phone,
        ]);
        \App\Payment::create([
            'user_id' => auth()->id(),
            'payment_id' => $payment->id,
            'type' => 'product',
            'product_id' => $product->id,
            'status' => 'pending',
        ]);

        return $payment->transaction->url;
    }

    public function check($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $check = TapPayment::check(setting('site.tapApiKey'), $args['payment_id']);
        \App\Payment::where('payment_id',$args['payment_id'])->update(['status' => $check->status]);
        return $check->status;
    }
}

<?php

namespace App\GraphQL\Mutations;

use App\Helpers\Sms;
use App\SmsVerification;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class SmsVerify
{
    /**
     * Return a value for the field.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param mixed[] $args The arguments that were passed into the field.
     * @param \Nuwave\Lighthouse\Support\Contracts\GraphQLContext $context Arbitrary data that is shared between all fields of a single query.
     * @param \GraphQL\Type\Definition\ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @return mixed
     * @throws \Exception
     */
    public function send($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        if(empty(auth()->user()->phone) && empty(auth()->user()->country_code))
        {
            return false;
        }
        $code = random_int(1000, 9999);
        $sms = SmsVerification::create([
            'user_id' => auth()->id(),
            'code' => $code,
            'status' => 'pending'
        ]);
        Sms::send("your verification code is : $code",'+' . auth()->user()->country_code . auth()->user()->phone);
        return [
            'id' => $sms->id,
            'status' => $sms->status
        ];
    }

    public function verify($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $code = $args['code'];
        $userCode = auth()->user()->smsVerificationCode();
        if($code === $userCode->code)
        {
            $userCode->update([
                'status' => 'success'
            ]);
            auth()->user()->update([
                "phone_verified_at" => now()
            ]);

            return auth()->user();
        }
    }
}

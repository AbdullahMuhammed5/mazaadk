<?php

namespace App\GraphQL\Mutations;

use App\EmailVerification;
use App\Mail\EmailVerification as EmailVerifyTemplate;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Mail;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use Illuminate\Support\Str;

class EmailVerify
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
        $token = Str::random(40);
        $code = random_int(100000, 999999);
        $email = EmailVerification::create([
            'user_id' => auth()->id(),
            'token' => $token,
            'code' => $code,
            'status' => 'pending'
        ]);
        Mail::to(auth()->user())->send(new EmailVerifyTemplate([
            'code' => $code,
            'token' => $token
        ]));
        return [
            'id' => $email->id,
            'status' => $email->status
        ];
    }

    public function verify($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $code = $args['code'];
        $userCode = auth()->user()->EmailVerificationCode();
        if($code === $userCode->code)
        {
            $userCode->update([
                'status' => 'success'
            ]);
            auth()->user()->update([
                "email_verified_at" => now()
            ]);

            return auth()->user();
        }
    }
}

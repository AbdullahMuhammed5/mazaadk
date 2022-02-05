<?php

namespace App\GraphQL\Mutations;

use App\User;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Storage;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class Account
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
    public function update($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $data = [
            'name' => $args['name'],
            'username' => $args['username'],
            'phone' => $args['phone'],
            'country_code' => $args['country_code'],
            'email' => $args['email'],
        ];

        if($data['phone'] != auth()->user()->phone)
        {
            $data['phone_verified_at'] = null;
        }
        User::where('id', auth()->id())->update($data);

        return auth()->user();
    }

    public function avatar($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {

        $avatar = Storage::disk('public')->put('/users',$args['avatar']);
        $data = [
          "avatar" => $avatar
        ];
        User::where('id', auth()->id())->update($data);

        return auth()->user();
    }

    public function password($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $user = User::where('id',auth()->id())->first();
        if(password_verify($args['current_password'],$user->password))
        {
            $user->update([
               'password' => bcrypt($args['password'])
            ]);
            return $user;
        }
    }

}

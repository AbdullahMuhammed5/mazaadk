<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;


class SocialController extends Controller
{
    // Права доступа
    protected $scopes = [
        'google' => ['email'],
        'facebook' => ['email'],
        'instagram' => [],
        'reddit' => []
    ];

    /**
     * Дает ссылку для редиректа на соц сеть
     * @param $provider
     * @return
     */
    public function redirectToProvider($provider)
    {
        return response()->json([
           'url' => Socialite::driver($provider)->stateless()->redirect()->getTargetUrl()
        ]);
    }

    public function handleProviderCallback($provider)
    {
        $user = Socialite::driver($provider)->stateless()->user();
        $exist = User::where('email',$user->email)->first();
        if(!$exist)
        {
            $newUser = User::create([
               'name' => $user->name,
               'email' => $user->email,
               'avatar' => $user->avatar,
               'provider' => $provider,
               'email_verified_at' => date('Y-m-d g:i:s'),
               'password' => '',
            ]);

            $auth = Auth::login($newUser);
        }else {
            $auth = Auth::login($exist);
        }
        $token = auth()->user()->createToken('hello')->accessToken;
        return redirect('/social/google?token='.$token);
    }




}

<?php


namespace App\Helpers;
use Twilio\Rest\Client;


class Sms
{

    public static function send($message, $recipients)
    {
        $account_sid = "AC2105dfebeed0a67c26b488f28e70f10f";
        $auth_token = "c088a91b293196ec42b3595fb547f01a";

        $client = new Client($account_sid, $auth_token);
        $client->messages->create($recipients,
            [
                'from' => '+14793343282',
                'body' => $message
            ] );
    }
}

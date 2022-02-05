<?php


namespace App\Helpers;


class TapPayment
{

    public static function charge($payment)
    {


        $curl = curl_init();
        $data = [
            "amount" => $payment['amount'],
            "currency" => $payment['currency'] ? $payment['currency'] : 'USD',
            "live_mode" => setting('site.tapMode') ? true : false,
            "threeDSecure" => false,
            "save_card" => true,
            "description" => $payment['description'],
            "customer" => [
                "first_name" => $payment['username'],

                "email" => $payment['email'],
                "phone" => [
                    "country_code" => $payment['country_code'] ?? '900',
                    "number" => $payment['phone'] ?? '500000000'
                ]
            ],
            "source" => [
                "id" => "src_all"
            ],
            "post" => [
                "url" => route('payment.check')
            ],
            "redirect" => [
                "url" => $payment['redirect']
            ],
        ];
        $data = json_encode($data);
        // sk_test_XKokBfNWv6FIYuTMg5sLPjhJ
        $apiKey = $payment['apiKey'];
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.tap.company/v2/charges",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $data,
            CURLOPT_HTTPHEADER => array(
                "authorization: Bearer $apiKey",
                "content-type: application/json"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            return $err;
        } else {
            $response = json_decode($response);
            return $response;
        }
    }

    public static function check($apiKey,$id)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.tap.company/v2/charges/$id",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_POSTFIELDS => "{}",
            CURLOPT_HTTPHEADER => array(
                "authorization: Bearer $apiKey"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            return false;
        } else {
            $response = json_decode($response);
            return $response;
        }
    }

}

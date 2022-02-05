<?php

namespace App\Http\Controllers;

use App\Helpers\TapPayment;
use App\Payment;
use App\User;
use Illuminate\Http\Request;

class PaymentController extends Controller
{

    public function store(Request $request)
    {

        $amount = setting('site.subscription');
        $payment = TapPayment::charge([
            'amount' => $amount,
            'currency' => 'USD',
            'description' => setting('site.description'),
            'username' => auth()->user()->name,
            'email' => auth()->user()->email,
            'apiKey' => setting('site.tap_api'),
            'redirect' => route('payment.check'),
            'country_code' => auth()->user()->country_code,
            'phone' => auth()->user()->phone,
        ]);
        Payment::create([
            'user_id' => auth()->id(),
            'payment_id' => $payment->id,
            'type' => $request->input('type'),
            'status' => 'pending',
        ]);

        return redirect($payment->transaction->url);
    }

    public function check(Request $request)
    {
        $pay = Payment::where('payment_id',$request->input('tap_id'))->first();
        $payment = TapPayment::check(setting('site.tapApiKey')
            ,$request->input('tap_id'));

        $pay->update([
            'status' => $payment->response->message,
        ]);
        if($payment->response->message == 'Captured')
        {
            User::where('id',$pay->user_id)->update([
                'verified' => 1,
            ]);
        }
        return redirect('/');
    }

}

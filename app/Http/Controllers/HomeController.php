<?php

namespace App\Http\Controllers;

use App\Events\BidIncrease;
use App\Helpers\Sms;
use App\Helpers\TapPayment;
use App\Mail\EmailVerification;
use App\Mail\EmailVerification as EmailVerifyTemplate;
use App\Payment;
use App\SmsVerification;
use App\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Category;
use Illuminate\Validation\Rule;
use App\Rules\ValidateExceptMe;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function index()
    {
        Mail::to('sed75dik@gmail.com')->send(new EmailVerifyTemplate([
            'code' => 152165,
        ]));
    }
}

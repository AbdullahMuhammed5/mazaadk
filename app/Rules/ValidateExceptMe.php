<?php

namespace App\Rules;

use App\User;
use Illuminate\Contracts\Validation\Rule as RuleCLass;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ValidateExceptMe implements RuleCLass
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $user = User::where($attribute,$value)->where('id','!=',Auth::id())->first();
        if(empty($user))
        {
            return true;
        }

        return false;

    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'mememe.unique';
    }
}

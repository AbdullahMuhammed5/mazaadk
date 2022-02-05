<?php


namespace App\GraphQL\Directives;
use Illuminate\Validation\Rule;
use Nuwave\Lighthouse\Schema\Directives\ValidationDirective;

class UpdateUserValidationDirective extends ValidationDirective
{

    public function rules(): array
    {
        return [
            'name' => 'required',
            'username' => ['sometimes', Rule::unique('users', 'username')->ignore($this->args['id'])],
            'email' => ['sometimes', 'email', Rule::unique('users', 'email')->ignore($this->args['id'])],
            'country_code' => ['sometimes', Rule::unique('users', 'email')->ignore($this->args['id'])],
            'phone' => ['sometimes', Rule::unique('users', 'phone')->ignore($this->args['id'])],
        ];
    }

}

<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateAvatar(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'avatar' => 'required|image'
        ]);
        if($validation->fails())
        {
            return response()->json([
                'status' => 'error',
                'messages' => $validation->messages()
            ]);
        }else{
            $avatar = Storage::disk('public')->put('/users',$request->file('avatar'));
            $data = [
                "avatar" => $avatar
            ];
            User::where('id', auth()->id())->update($data);

            return response()->json([
               'status' => 'success',
               'data' =>  auth()->user()
            ]);
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePassword(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'current_password' => 'required|string',
            'password' => 'required|string',
        ]);
        if($validation->fails())
        {
            return response()->json([
                'status' => 'error',
                'messages' => $validation->messages()
            ]);
        }else{
            $user = User::where('id',auth()->id())->first();
            if(password_verify($request->input('current_password'),$user->password))
            {
                $user->update([
                    'password' => bcrypt($request->input('password'))
                ]);

                return response()->json([
                    'status' => 'success',
                    'data' => $user
                ]);
            }
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

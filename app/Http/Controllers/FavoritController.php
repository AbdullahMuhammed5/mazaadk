<?php

namespace App\Http\Controllers;

use App\Category;
use App\Favorit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FavoritController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'product_id' => 'required'
        ]);
        if($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'messages' => $validator->messages()
            ]);
        }

        $favorit = \App\Favorit::create([
            'user_id' => auth()->id(),
            'product_id' => $request->input('product_id')
        ]);
        return response()->json([
            'status' => 'success',
            'data' => $favorit
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'product_id' => 'required'
        ]);
        if($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'messages' => $validator->messages()
            ]);
        }

        \App\Favorit::where([
            'user_id' => auth()->id(),
            'product_id' => $request->input('product_id')
        ])->delete();
        return response()->json([
            'status' => 'success',
            'data' => 'Deleted with success'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function get()
    {

       $favorits = Favorit::where('user_id',auth()->id())->with('product')->get();
       return response()->json([
           'status' => 'success',
           'data' => $favorits
       ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Favorit  $favorit
     * @return \Illuminate\Http\Response
     */
    public function show(Favorit $favorit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Favorit  $favorit
     * @return \Illuminate\Http\Response
     */
    public function edit(Favorit $favorit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Favorit  $favorit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Favorit $favorit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Favorit  $favorit
     * @return \Illuminate\Http\Response
     */
    public function destroy(Favorit $favorit)
    {
        //
    }
}

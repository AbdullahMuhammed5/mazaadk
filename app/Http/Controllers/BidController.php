<?php

namespace App\Http\Controllers;

use App\Events\BidIncrease;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BidController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function increase(Request $request)
    {
        $validator = Validator::make($request->all(),[
           'increase' => 'required',
            'product_id' => 'required'
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status' => 'error',
                'messages' => $validator->messages()
            ]);
        }
        $args = $request->all();
        $increase = $args['increase'];
        $product = \App\Product::where('id' , $args['product_id'])->first();
        if($product)
        {
            $newPrice = $product->price + $increase;
            \App\Bid::create([
                'product_id' => $product->id,
                'user_id' => auth()->id(),
                'increase' => $increase,
                'price' => $newPrice,
            ]);
            $product->update([
                'price' => $newPrice,
            ]);
            event(new BidIncrease($product));
            return response()->json([
                'status' => 'success',
                'messages' => ['bid added with success']
            ]);
        }
        return response()->json([
            'status' => 'error',
            'messages' => ['product not found']
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function get()
    {
        return response()->json([
            'status' => 'success',
            'messages' => auth()->user()->bids()->groupBy('product_id')
        ]);
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

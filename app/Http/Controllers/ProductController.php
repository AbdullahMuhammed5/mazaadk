<?php

namespace App\Http\Controllers;

use App\Product;
use App\Product as ProductModel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    protected $args;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function all()
    {
        return response()->json([
            'status' => 'success',
            'data' => Product::withCount('bids')->with('isFavorit')->get()
        ]);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function category(Request $request): \Illuminate\Http\JsonResponse
    {
        $validation = Validator::make($request->all(),[
            'category_id' => 'required'
        ]);

        if($validation->fails()){
            return response()->json([
                'status' => 'error',
                'messages' => $validation->messages()
            ]);
        }
        $products = Product::where('category_id',$request->input('category_id'))->with('isFavorit')->withCount('bids')->get();
        if($products)
        {
            return response()->json([
                'status' => 'success',
                'data' => $products
            ]);
        }
        return response()->json([
            'status' => 'error',
            'messages' => ['products not found']
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */


    public function get(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'product-id' => 'required'
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status' => 'error',
                'messages' => $validator->messages()
            ]);
        }

        $product = Product::where('id',$request->input('product-id'))->with('isFavorit')->first();
        if($product)
        {
            return response()->json([
               'status' => 'success',
               'data' => $product
            ]);
        }

        return response()->json([
            'status' => 'error',
            'messages' => ['product not found']
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'query' => 'required',
        ]);

        if($validation->fails())
        {
            return response()->json([
                'status' => 'error',
                'messages' => $validation->messages()
            ]);
        }

        $query_search = $request->input('query');
        $this->args = $request->input('query');
        $query = \App\Product::where('status','approved');
        $query->whereHas('user', function ($query) {
            $search = $this->args;
            $query->where('name','like', "%{$search}%");
        });
        $query = $query->orWhere('name', 'like', "%{$query_search}%");
        return $query->with('isFavorit')->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function my()
    {
        return response()->json([
            'status' => 'success',
            'data' => auth()->user()->products
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function closed()
    {

        return response()->json([
            'status' => 'success',
            'data' => Product::withCount('bids')->with('isFavorit')->whereDate('close_time','<',Carbon::now())->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function coming()
    {

        return response()->json([
            'status' => 'success',
            'data' => Product::withCount('bids')->with('isFavorit')->orderBy('created_at','DESC')->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(Request $request)
    {

        $validation = Validator::make($request->all(),[
            'user_id' => 'required',
            'category_id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'images' => 'required',
            'price' => 'required',
            'lat' => 'required',
            'lng' => 'required',
            'min_increment' => 'required',
            'status' => 'required',
            'features' => 'required',
            'close_time' => 'required'
        ]);


        if($validation->fails())
        {
            return response()->json([
                'status' => 'error',
                'messages' => $validation->messages()
            ]);
        }

        $args = $request->all();
        $images = [];
        if ($args['images']) {
            $imgs = json_encode($args['images']);
            foreach ($imgs as $image) {
                $img = Storage::disk('public')->put('/products', $image);
                $images[] = $img;
            }
        }
        $product = ProductModel::create([
            'user_id' => auth()->id(),
            'category_id' => $args['category_id'],
            'name' => $args['name'],
            'description' => $args['description'],
            'images' => json_encode($images),
            'price' => $args['price'],
            'lat' => $args['lat'],
            'lng' => $args['lng'],
            'min_increment' => $args['min_increment'],
            'status' => $args['status'],
            'features' => $args['features'],
            'close_time' => $args['close_time']
        ]);

        return response()->json([
            'status' => 'success',
            'messages' => $product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'product_id' => 'required',
        ]);


        if($validation->fails())
        {
            return response()->json([
                'status' => 'error',
                'messages' => $validation->messages()
            ]);
        }

        $args = $request->all();

        $id = $args['product_id'];
        $product = ProductModel::where(['id' => $id,'user_id' => auth()->id()])->first();

        if($product)
        {
            $images = json_decode($product->images);
            foreach($images as $image)
            {
                Storage::disk('public')->delete($image);
            }
            $product->delete();
            return response()->json([
                'status' => 'success',
                'messages' => 'deleted with success'
            ]);
        }
        return response()->json([
            'status' => 'error',
            'messages' => 'product not found'
        ]);
    }
}

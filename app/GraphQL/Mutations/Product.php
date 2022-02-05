<?php

namespace App\GraphQL\Mutations;

use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Storage;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use App\Product as ProductModel;

class Product
{
    /**
     * Return a value for the field.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param mixed[] $args The arguments that were passed into the field.
     * @param GraphQLContext $context Arbitrary data that is shared between all fields of a single query.
     * @param ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @return mixed
     */
    public function new($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $images = [];
        if ($args['images']) {
            foreach ($args['images'] as $image) {
                $img = Storage::disk('public')->put('/products', $image);
                $images[] = $img;
            }
        }
        $product = ProductModel::create([
            'user_id' => auth()->id(),
            'category_id' => $args['category'],
            'name' => $args['name'],
            'description' => $args['description'],
            'images' => json_encode($images),
            'price' => $args['price'],
            'min_increment' => $args['min_increment'],
            'status' => $args['status'],
            'features' => $args['features'],
            'close_time' => $args['close_time']
        ]);

        return $product;
    }

    public function delete($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $id = $args['id'];
        $product = ProductModel::where(['id' => $id,'user_id' => auth()->id()])->first();

        if($product)
        {
            $images = json_decode($product->images);
            foreach($images as $image)
            {
                Storage::disk('public')->delete($image);
            }
            $product->delete();
            return true;
        }
        return false;
    }

    public function deleteImage($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $id = $args['id'];
        $product = ProductModel::where(['id' => $id,'user_id' => auth()->id()])->first();

        if($product)
        {
            $image = $args['image'];
            $images = json_decode($product->images);
            Storage::disk('public')->delete($image);
            $images = array_diff($images,[$image]);
            $product->update([
                'images' => json_encode($images),
            ]);
            return true;
        }
        return false;
    }

    public function update($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $id = $args['id'];
        $product = ProductModel::where(['id' => $id,'user_id' => auth()->id()])->first();

        if($product)
        {
            $images = json_decode($product->images);
            if ($args['images']) {
                foreach ($args['images'] as $image) {
                    $img = Storage::disk('public')->put('/products', $image);
                    $images[] = $img;
                }
            }
            $product->update([
                'name' => $args['name'],
                'description' => $args['description'],
                'images' => json_encode($images),
                'price' => $args['price'],
                'min_increment' => $args['min_increment'],
                'status' => $args['status'],
                'features' => $args['features'],
                'close_time' => $args['close_time']
            ]);
            return true;

        }

        return false;
    }
}

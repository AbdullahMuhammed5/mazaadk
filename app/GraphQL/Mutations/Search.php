<?php

namespace App\GraphQL\Mutations;

use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class Search
{
    protected $args;
    /**
     * @param $rootValue
     * @param array<string, mixed> $args
     * @param GraphQLContext $context
     * @param ResolveInfo $resolveInfo
     * @return mixed
     */
    public function search($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $query_search = $args['query'];
        $this->args = $args;
        $query = \App\Product::where('status','approved');
        $query->whereHas('user', function ($query) {
            $search = $this->args['query'];
            $query->where('name','like', "%{$search}%");
        });
        $query = $query->orWhere('name', 'like', "%{$query_search}%");
        return $query->get();
    }
}

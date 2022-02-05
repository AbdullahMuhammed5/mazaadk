<?php

namespace App\GraphQL\Mutations;

use App\TicketComment;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Storage;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class Ticket
{
    /**
     * Return a value for the field.
     *
     * @param  null  $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param  mixed[]  $args The arguments that were passed into the field.
     * @param  \Nuwave\Lighthouse\Support\Contracts\GraphQLContext  $context Arbitrary data that is shared between all fields of a single query.
     * @param  \GraphQL\Type\Definition\ResolveInfo  $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @return mixed
     */
    public function new($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $user_id = auth()->id();
        $images = [];
        if($args['attachments'])
        {
            foreach ($args['attachments'] as $image) {
                $img = Storage::disk('public')->put('/tickets', $image);
                $images[] = $img;
            }
        }
        return \App\Ticket::create([
            'user_id' => $user_id,
            'subject' => $args['subject'],
            'priority' => $args['priority'],
            'message' => $args['message'],
            'attachments' => json_encode($images),
            'status' => 'pending',
        ]);
    }

    public function comment($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        $ticket_id = $args['ticket_id'];
        $images = [];
        if($args['attachments'])
        {
            foreach ($args['attachments'] as $image) {
                $img = Storage::disk('public')->put('/tickets', $image);
                $images[] = $img;
            }
        }
        return TicketComment::create([
            'user_id' => auth()->id(),
            'ticket_id' => $ticket_id,
            'content' => $args['comment'],
            'attachments' => json_encode($images),
        ]);


    }
}

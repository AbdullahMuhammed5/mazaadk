<?php

namespace App\Http\Controllers;

use App\Ticket;
use App\TicketComment;
use Illuminate\Http\Request;

class TicketController extends Controller
{

    public function send(Request $request)
    {
        $data = $request->validate([
            'message' => 'required|string',
            'ticket_id' => 'required'
        ]);
        $ticket = Ticket::where('id',$data['ticket_id'])->first();
        if($ticket)
        {
            $comment = TicketComment::create([
                'ticket_id' => $ticket->id,
                'content' => $data['message'],
                'user_id' => auth()->id()
            ]);
            event(new \App\Events\Ticket($ticket,$comment));
            return back()->with(['success' => 'your message was submited']);
        }
    }

}

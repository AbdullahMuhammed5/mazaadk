@extends('voyager::master')

@section('page_title', __('voyager::generic.view').' '.$dataType->getTranslatedAttribute('display_name_singular'))

<style>

    .chat {
        background: #f9f9f9;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #434651;
    }
    .chat .chat-header {
        padding: 20px;
        border-bottom: 2px solid white;
    }
    .chat .chat-header img {
        float: left;
    }
    .chat .chat-header .chat-about {
        float: left;
        padding-left: 10px;
        margin-top: 6px;
    }
    .chat .chat-header .chat-with {
        font-weight: bold;
        font-size: 16px;
    }
    .chat .chat-header .chat-num-messages {
        color: #92959E;
    }
    .chat .chat-header .fa-star {
        float: right;
        color: #D8DADF;
        font-size: 20px;
        margin-top: 12px;
    }
    .chat .chat-history {
        padding: 30px 30px 20px;
        border-bottom: 2px solid white;
        overflow-y: scroll;
        height: 400px;
    }
    .chat .chat-history .message-data {
        margin-bottom: 15px;
    }
    .chat .chat-history .message-data-time {
        color: #a8aab1;
        padding-left: 6px;
    }
    .chat .chat-history .message {
        color: black;
        padding: 18px 20px;
        line-height: 26px;
        font-size: 16px;
        border-radius: 7px;
        margin-bottom: 30px;
        width: 90%;
        position: relative;
    }
    .chat .chat-history .message:after {
        bottom: 100%;
        left: 7%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-bottom-color: #eeeeee;
        border-width: 10px;
        margin-left: -10px;
    }
    .chat .chat-history .my-message
    {
        background: #eeeeee;
    }
    .chat .chat-history .other-message {
        color: white;
        background: #43a1f8;
    }
    .chat .chat-history .other-message:after {
        border-bottom-color: #43a1f8;
        left: 93%;
    }
    .chat .chat-message {
        padding: 10px;
    }
    .chat .chat-message textarea {
        width: 100%;
        border: none;
        padding: 10px 20px;
        font: 14px/22px "Lato", Arial, sans-serif;
        margin-bottom: 10px;
        border-radius: 5px;
        resize: none;
    }
    .chat .chat-message .fa-file-o, .chat .chat-message .fa-file-image-o {
        font-size: 16px;
        color: gray;
        cursor: pointer;
    }
    .chat .chat-message button {
        float: right;
        color: #94C2ED;
        font-size: 16px;
        text-transform: uppercase;
        border: none;
        cursor: pointer;
        font-weight: bold;
        background: #F2F5F8;
    }
    .chat .chat-message button:hover {
        color: #75b1e8;
    }

    .online, .offline, .me {
        margin-right: 3px;
        font-size: 10px;
    }

    .online {
        color: #86BB71;
    }

    .offline {
        color: #E38968;
    }

    .me {
        color: #94C2ED;
    }

    .align-left {
        text-align: left;
    }

    .align-right {
        text-align: right;
    }

    .float-right {
        float: right;
    }

    .clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
    }
    .chat .chat-history li {
        list-style: none;
    }
</style>
@php
    $ticket = \App\Ticket::where('id',$dataTypeContent->getKey())->first()
@endphp
@section('content')
    <div class="container fluid clearfix">
        <div class="chat">
            <div class="chat-header clearfix">
                @if(filter_var($ticket->user->avatar, FILTER_VALIDATE_URL))
                    <img src="{{ $ticket->user->avatar }}" width="50px" alt="avatar" />
                @else
                    <img src="{{ asset('/storage/' . $ticket->user->avatar) }}" width="50px" alt="avatar" />
                @endif

                <div class="chat-about">
                    <div class="chat-with">{{ $ticket->user->name }} | {{ $ticket->subject }}</div>
                    <div class="chat-num-messages">{{ $ticket->comments()->count() }} messages</div>
                </div>
                <i class="fa fa-star"></i>
            </div> <!-- end chat-header -->

            <div class="chat-history">
                <ul id="chat-history">
                    @foreach($ticket->comments as $comment)
                        <div>
                            @if($comment->user->id === auth()->id())
                                <li class="clearfix">
                                    <div class="message-data align-right">
                                        <span class="message-data-name"><i class="fa fa-circle online"></i> {{ $comment->user->name }}</span>
                                        <span class="message-data-time">{{ \Carbon\Carbon::make($comment->created_at)->dayName }}</span>
                                    </div>
                                    <div class="message other-message float-right">
                                        {{ $comment->content }}
                                    </div>
                                </li>
                            @else
                                <li>
                                    <div class="message-data">
                                        <span class="message-data-name"><i class="fa fa-circle online"></i> {{ $comment->user->name }}</span>
                                        <span class="message-data-time">{{ \Carbon\Carbon::make($comment->created_at)->dayName }}</span>
                                    </div>
                                    <div class="message my-message">
                                        {{ $comment->content }}
                                    </div>
                                </li>
                            @endif
                        </div>
                    @endforeach
                </ul>

            </div> <!-- end chat-history -->

            <div class="chat-message clearfix">
                <form method="post" action="{{ route('ticket.send') }}">
                    @csrf
                    <input type="hidden" name="ticket_id" value="{{ $ticket->id }}"/>
                    <textarea name="message" id="message-to-send" class="form-control" style="background: #eee" placeholder ="Type your message" rows="3"></textarea>
                    <button class="btn btn-success">Send</button>
                </form>
            </div> <!-- end chat-message -->

        </div> <!-- end chat -->

    </div> <!-- end container -->
@stop

@section('javascript')
    @if ($isModelTranslatable)
        <script>
            $(document).ready(function () {
                $('.side-body').multilingual();
            });
        </script>
    @endif
    <script>
        var deleteFormAction;
        $('.delete').on('click', function (e) {
            var form = $('#delete_form')[0];

            if (!deleteFormAction) {
                // Save form action initial value
                deleteFormAction = form.action;
            }

            form.action = deleteFormAction.match(/\/[0-9]+$/)
                ? deleteFormAction.replace(/([0-9]+$)/, $(this).data('id'))
                : deleteFormAction + '/' + $(this).data('id');

            $('#delete_modal').modal('show');
        });

    </script>
    <script src="https://js.pusher.com/3.1/pusher.min.js"></script>
    <script>
        //instantiate a Pusher object with our Credential's key
        var pusher = new Pusher('b993d3ddaa663ba23963', {
            cluster: 'eu',
            encrypted: true
        });

        //Subscribe to the channel we specified in our Laravel Event
        var channel = pusher.subscribe('ticket.{{ $ticket->id }}');

        //Bind a function to a Event (the full Laravel class)
        channel.bind('App\\Events\\Ticket', addMessage);

        function addMessage(data) {
            console.log(data)
            let user_id = data.comment.user_id;
            if(user_id === {{ auth()->id() }})
            {
                console.log('ana')
                let commentItem = $("<li class=\"clearfix\">\n" +
                    "                <div class=\"message-data align-right\">\n" +
                    "                <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> {{ auth()->user()->name }}</span>\n" +
                    "                   <span class=\"message-data-time\"></span>\n" +
                    "                </div>\n" +
                    "                <div class=\"message other-message float-right\">\n"
                    + data.comment.content + "\n" +
                    "                </div>\n" +
                    "                </li>")
                $('#chat-history').append(commentItem)
            }else {
                console.log('howa')
               let commentItem = $("<li>\n" +
                   "                <div class=\"message-data\">\n" +
                   "                <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> {{ $ticket->user->name }}</span>\n" +
                   "            <span class=\"message-data-time\"></span>\n" +
                   "                </div>\n" +
                   "                <div class=\"message my-message\">\n" +
                   data.comment.content +"\n" +
                   "                </div>\n" +
                   "                </li>")
                $('#chat-history').append(commentItem)
            }

        }
    </script>
@stop

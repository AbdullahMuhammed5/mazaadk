<?php


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    Route::post('/ticketComment/add','TicketController@send')->middleware('admin.user')->name('ticket.send');
});

Route::get('/seddik', 'HomeController@index');

Route::get('{path}', function () {
    return file_get_contents(public_path('index.html'));
})->where('path', '(.*)');



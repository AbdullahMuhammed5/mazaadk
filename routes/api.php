<?php


Route::post('oauth/{provider}', 'Auth\SocialController@redirectToProvider');
Route::get('callback/{provider}/oauth/user', 'Auth\SocialController@handleProviderCallback');
Route::get('payment/callback/check', 'PaymentController@check')->name('payment.check');

Route::group(['middleware' => 'auth:api'], function() {

    Route::get('user', function() {
        return response()->json(['user' => auth()->user()]);
    });

    Route::post('/account/avatar','AccountController@updateAvatar');
    Route::post('/account/password','AccountController@updatePassword');
    #product
    Route::get('/myProducts','ProductController@my');
    Route::post('/product/add','ProductController@add');
    Route::post('/product/delete','ProductController@delete');

    # notification
    Route::get('/notifications','NotificationController@all');
    # favorit
    Route::get('/favorits','FavoritController@get');
    Route::post('/favorit/add','FavoritController@add');
    Route::post('/favorit/delete','FavoritController@delete');
    #bid
    Route::get('/bids','BidController@get');
    Route::post('/bid/increase','BidController@increase');
});

Route::get('/categories','CategoryController@all');
Route::get('/category','CategoryController@get');
Route::get('/page','PageController@get');
Route::get('/products','ProductController@all');
Route::get('/ads','AdsController@all');
Route::get('/products/closed','ProductController@closed');
Route::get('/products/coming','ProductController@coming');

Route::get('/category/products','ProductController@category');

Route::get('/search','ProductController@search');
Route::get('/product','ProductController@get');




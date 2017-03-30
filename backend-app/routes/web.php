<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', 'Pages\TopController@getIndex');

Route::get('post/{id}', 'Post\PostController@getPost')->where('id', '[0-9]+');
Route::get('posts', 'Post\PostController@getPosts');

Route::group(['middleware' => 'guest:admins'], function () {
    Route::get('admin/login', 'Auth\Admin\LoginController@showLoginForm');
    Route::post('admin/login', 'Auth\Admin\LoginController@login');
});

Route::post('admin/logout', 'Auth\Admin\LoginController@logout');

// TODO: Remove later!
// Route::group(['middleware' => 'auth:admins', 'prefix' => '/admin/dashboard'], function () {
//     Route::any('{any?}', 'Admin\DashBoardController@getIndex');
// });
<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login', [UserController::class, 'login']);

Route::group(['middleware' => 'api'], function () {
    Route::post('/logout', [UserController::class, 'logout']);
    Route::post('/refresh', [UserController::class, 'refresh']);
    Route::get('/me', [UserController::class, 'me']);
});


Route::group(['middleware' => ['api']], function () {

    Route::resource('/brand', BrandController::class);
    Route::resource('/category', CategoryController::class);
    Route::resource('/unit', UnitController::class);
    Route::resource('/supplier', SupplierController::class);
    Route::resource('/customer', CustomerController::class);
    Route::resource('/product', ProductController::class);
    Route::resource('/purchase', PurchaseController::class);
    Route::resource('/count', HomeController::class);
    Route::resource('/sale', SaleController::class);

    Route::post('/supplier-pay/{id}', [PurchaseController::class, 'supplierPay']);
});

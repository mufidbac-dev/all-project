<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->middleware('auth:sanctum')->group(function (): void {
    Route::get('/stores', fn () => response()->json(['data' => []]));
    Route::get('/products', fn () => response()->json(['data' => []]));
    Route::post('/sales', fn () => response()->json(['message' => 'Sale endpoint pending implementation'], 501));
    Route::get('/sales/{saleId}', fn (string $saleId) => response()->json(['message' => 'Sale endpoint pending implementation'], 501));
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

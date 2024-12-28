<?php

use App\Providers\AppServiceProvider;
use Illuminate\Foundation\Application;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {

        $middleware->redirectGuestsTo(fn() => route('login'));
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
        $middleware->redirectUsersTo(AppServiceProvider::HOME);
        $middleware->throttleApi();
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function (Exception $e) {
            $code = $e?->getCode();
            if ($code) {
                return Inertia('Error', ['status' => $code, 'message' => $e->getMessage()]);
            }
        });
    })->create();

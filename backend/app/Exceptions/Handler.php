<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Illuminate\Auth\AuthenticationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->renderable(function (TokenInvalidException $exception, $request) {
            return response()->json(['message' => 'Invalid Token'], 401);
        });

        $this->renderable(function (TokenExpiredException $exception, $request) {
            return response()->json(['message' => 'Token Expired'], 401);
        });

        $this->renderable(function (AuthenticationException $exception, $request) {
            return response()->json(['message' => 'Unauthorized'], 401);
        });
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Throwable $e)
    {
        // Handle JWT Token Errors
        if ($e instanceof TokenInvalidException) {
            return response()->json(['message' => 'Invalid Token'], 401);
        }

        if ($e instanceof TokenExpiredException) {
            return response()->json(['message' => 'Token Expired'], 401);
        }

        // Handle Authentication Errors
        if ($e instanceof AuthenticationException) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Handle Other Exceptions (Optional Debugging)
        if (config('app.debug')) {
            return parent::render($request, $e);
        }

        // Generic Response for Unexpected Errors
        return response()->json(['message' => 'Something went wrong. Please try again later.'], 500);
    }
}

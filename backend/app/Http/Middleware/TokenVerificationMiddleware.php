<?php

namespace App\Http\Middleware;

use App\Helper\JWTToken;
use App\Models\User;
use App\Traits\ApiResponseTrait;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class TokenVerificationMiddleware
{

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $access_token = $request->header('Authorization');
        if (!$access_token) {
            return errorResponse("Unauthorized Request", [], 401);
        }

        $token = explode(' ', $access_token)[1];

        $result = JWTToken::VerifyToken($token);
        if ($result == "unauthorised") {
            return errorResponse("Unauthorized Request", [], 401);
        } else {
            $user = User::find($result->userId);
            if ($user) {
                Auth::setUser($user);
            } else {
                return errorResponse("User not found", [], 404);
            }


            return $next($request);
        }
    }
}
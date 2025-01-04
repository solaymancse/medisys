<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct(protected ProductService $ProductService) {}

    public function index()
    {
        return $this->ProductService->getAll();
    }

    public function store(Request $request)
    {
        return $this->ProductService->create($request->all());
    }

    public function show($id)
    {
        return $this->ProductService->findById($id);
    }

    public function update(Request $request, $id)
    {
        return $this->ProductService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->ProductService->delete($id);
    }
}

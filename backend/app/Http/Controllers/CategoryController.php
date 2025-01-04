<?php

namespace App\Http\Controllers;

use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __construct(protected CategoryService $categoryService) {}

    public function index()
    {
        return $this->categoryService->getAll();
    }

    public function store(Request $request)
    {
        return $this->categoryService->create($request->all());
    }

    public function show($id)
    {
        return $this->categoryService->findById($id);
    }

    public function update(Request $request, $id)
    {
        return $this->categoryService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->categoryService->delete($id);
    }
}

<?php

namespace App\Http\Controllers;

use App\Services\BrandService;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function __construct(protected BrandService $brandService) {}

    public function index()
    {
        return $this->brandService->getAll();
    }

    public function store(Request $request)
    {
        return $this->brandService->create($request->all());
    }

    public function show($id)
    {
        return $this->brandService->findById($id);
    }

    public function update(Request $request, $id)
    {
        return $this->brandService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->brandService->delete($id);
    }
}

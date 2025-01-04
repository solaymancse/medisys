<?php

namespace App\Http\Controllers;

use App\Services\SupplierService;
use App\Services\UnitService;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function __construct(protected SupplierService $supplierService) {}

    public function index()
    {
        return $this->supplierService->getAll();
    }

    public function store(Request $request)
    {
        return $this->supplierService->create($request->all());
    }

    public function show($id)
    {
        return $this->supplierService->findById($id);
    }

    public function update(Request $request, $id)
    {
        return $this->supplierService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->supplierService->delete($id);
    }
}

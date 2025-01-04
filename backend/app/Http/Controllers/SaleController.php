<?php

namespace App\Http\Controllers;

use App\Services\SaleService;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function __construct(protected SaleService $saleService) {}

    public function index()
    {
        return $this->saleService->getAll();
    }

    public function store(Request $request)
    {
        return $this->saleService->create($request->all());
    }

    public function show($id)
    {
        return $this->saleService->findById($id);
    }

    public function update(Request $request, $id)
    {
        return $this->saleService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->saleService->delete($id);
    }
}

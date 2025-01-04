<?php

namespace App\Http\Controllers;

use App\Services\PurchaseService;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    public function __construct(protected PurchaseService $purchaseService) {}

    public function index()
    {
        return $this->purchaseService->getAll();
    }

    public function store(Request $request)
    {
        return $this->purchaseService->create($request->all());
    }

    public function show($id)
    {
        return $this->purchaseService->findById($id);
    }

    public function update(Request $request, $id)
    {
        return $this->purchaseService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->purchaseService->delete($id);
    }

    public function supplierPay(Request $request, $id)
    {
        return $this->purchaseService->supplierPay($id, $request->all());
    }
}

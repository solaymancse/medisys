<?php

namespace App\Http\Controllers;

use App\Services\CustomerService;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function __construct(protected CustomerService $customerService) {}

    public function index()
    {
        return $this->customerService->getAll();
    }

    public function store(Request $request)
    {
        return $this->customerService->create($request->all());
    }

    public function show($id)
    {
        return $this->customerService->findById($id);
    }

    public function update(Request $request, $id)
    {
        return $this->customerService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->customerService->delete($id);
    }
}

<?php

namespace App\Http\Controllers;

use App\Services\UnitService;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    public function __construct(protected UnitService $unitService) {}

    public function index()
    {
        return $this->unitService->getAll();
    }

    public function store(Request $request)
    {
        return $this->unitService->create($request->all());
    }

    public function show($id)
    {
        return $this->unitService->findById($id);
    }

    public function update(Request $request, $id)
    {
        return $this->unitService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->unitService->delete($id);
    }
}

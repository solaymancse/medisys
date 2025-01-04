<?php


namespace App\Repository;

use App\Models\Supplier;

class SupplierRepository
{

    protected $model;

    public function __construct(Supplier $supplier)
    {
        $this->model = $supplier;
    }

    public function getAll()
    {
        return $this->model->latest()->get();
    }

    public function findById($id)
    {
        return $this->model->findOrFail($id);
    }

    public function create(array $data)
    {
        $data = $this->model->create($data);
        return successResponse($data, 'supplier created successfully', 201);
    }

    public function update($id, array $data)
    {
        $supplier = $this->findById($id);
        $supplier->update($data);
        return successResponse($supplier, 'supplier updated successfully', 200);
    }

    public function delete($id)
    {
        $supplier = $this->findById($id);
        return $supplier->delete();
    }
}

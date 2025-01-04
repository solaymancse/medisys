<?php


namespace App\Repository;

use App\Models\Brand;

class BrandRepository
{

    protected $model;

    public function __construct(Brand $brand)
    {
        $this->model = $brand;
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
        return successResponse($data, 'Brand created successfully', 201);
    }

    public function update($id, array $data)
    {
        $brand = $this->findById($id);
        $brand->update($data);
        return successResponse($brand, 'Brand updated successfully', 200);
    }

    public function delete($id)
    {
        $brand = $this->findById($id);
        return $brand->delete();
    }
}

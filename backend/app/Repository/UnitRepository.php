<?php


namespace App\Repository;

use App\Models\Unit;

class UnitRepository
{

    protected $model;

    public function __construct(Unit $unit)
    {
        $this->model = $unit;
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
        return successResponse($data, 'Unit created successfully', 201);
    }

    public function update($id, array $data)
    {
        $Unit = $this->findById($id);
        $Unit->update($data);
        return successResponse($Unit, 'Unit updated successfully', 200);
    }

    public function delete($id)
    {
        $Unit = $this->findById($id);
        return $Unit->delete();
    }
}

<?php


namespace App\Repository;

use App\Models\Customer;

class CustomerRepository
{

    protected $model;

    public function __construct(Customer $supplier)
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
        return successResponse($data, 'customer created successfully', 201);
    }

    public function update($id, array $data)
    {
        $customer = $this->findById($id);
        $customer->update($data);
        return successResponse($customer, 'customer updated successfully', 200);
    }

    public function delete($id)
    {
        $customer = $this->findById($id);
        return $customer->delete();
    }
}

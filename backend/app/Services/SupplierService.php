<?php


namespace App\Services;

use App\Repository\SupplierRepository;


class SupplierService
{
    public function __construct(protected SupplierRepository $supplierRepository) {}

    public function getAll()
    {
        return $this->supplierRepository->getAll();
    }

    public function findById($id)
    {
        return $this->supplierRepository->findById($id);
    }

    public function create(array $data)
    {
        return $this->supplierRepository->create($data);
    }

    public function update($id, array $data)
    {
        return $this->supplierRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->supplierRepository->delete($id);
    }
}

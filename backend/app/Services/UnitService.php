<?php


namespace App\Services;

use App\Repository\UnitRepository;

class UnitService
{
    public function __construct(protected UnitRepository $unitRepository) {}

    public function getAll()
    {
        return $this->unitRepository->getAll();
    }

    public function findById($id)
    {
        return $this->unitRepository->findById($id);
    }

    public function create(array $data)
    {
        return $this->unitRepository->create($data);
    }

    public function update($id, array $data)
    {
        return $this->unitRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->unitRepository->delete($id);
    }
}

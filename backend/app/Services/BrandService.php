<?php


namespace App\Services;

use App\Repository\BrandRepository;

class BrandService
{
    public function __construct(protected BrandRepository $brandRepository) {}

    public function getAll()
    {
        return $this->brandRepository->getAll();
    }

    public function findById($id)
    {
        return $this->brandRepository->findById($id);
    }

    public function create(array $data)
    {
        return $this->brandRepository->create($data);
    }

    public function update($id, array $data)
    {
        return $this->brandRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->brandRepository->delete($id);
    }
}

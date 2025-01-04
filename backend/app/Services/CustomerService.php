<?php


namespace App\Services;

use App\Repository\CustomerRepository;

class CustomerService
{
    public function __construct(protected CustomerRepository $customerRepository) {}

    public function getAll()
    {
        return $this->customerRepository->getAll();
    }

    public function findById($id)
    {
        return $this->customerRepository->findById($id);
    }

    public function create(array $data)
    {
        $data['due_amount'] = 0;
        return $this->customerRepository->create($data);
    }

    public function update($id, array $data)
    {
        return $this->customerRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->customerRepository->delete($id);
    }
}

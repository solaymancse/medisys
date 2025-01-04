<?php


namespace App\Services;

use App\Repository\PurchaseRepository;



class PurchaseService
{
    public function __construct(protected PurchaseRepository $purchaseRepository) {}

    public function getAll()
    {
        return $this->purchaseRepository->getAll();
    }

    public function findById($id)
    {
        return $this->purchaseRepository->findById($id);
    }

    public function create(array $data)
    {
        return $this->purchaseRepository->create($data);
    }

    public function update($id, array $data)
    {
        return $this->purchaseRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->purchaseRepository->delete($id);
    }
    public function supplierPay($id, $data)
    {
        $amount = $data['amount'];
        return $this->purchaseRepository->supplierPay($id, $amount);
    }
}

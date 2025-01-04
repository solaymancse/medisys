<?php


namespace App\Services;

use App\Repository\CustomerRepository;
use App\Repository\SaleRepository;
use App\Repository\SupplierRepository;
use App\Repository\UnitRepository;

class SaleService
{
    public function __construct(protected SaleRepository $saleRepository, protected UnitRepository $unitRepository, protected CustomerRepository $customerRepository) {}

    public function getAll()
    {
        return $this->saleRepository->getAll();
    }

    public function findById($id)
    {
        return $this->saleRepository->findById($id);
    }

    public function create(array $data)
    {
        foreach ($data["items"] as $item) {

            if (isset($item["unit_id"])) {
                $unit = $this->unitRepository->findById($item['unit_id']);
                $multiple_unit = $unit['multiple_unit'];
            } else {
                $multiple_unit = 1;
            }

            $total_pcs = $multiple_unit * $item["qty"];

            $this->saleRepository->createSaleProduct($item, $total_pcs);
        }

        $productIds = array_map(function ($item) {
            return $item['product_id'];
        }, $data['items']);

        if (isset($data['customer_id'])) {
            $customer = $this->customerRepository->findById($data['customer_id']);
            $this->customerRepository->update($customer->id, ['due_amount' =>  $data['due']]);
        }

        $saleData = [
            'product_id' => json_encode($productIds), // Store as JSON
            'customer_id' => $data['customer_id'] ?? null, // Add a customer ID if available
            'discount' => $data['discount']['value'] ?? 0,
            'sub_total' => array_sum(array_column($data['items'], 'subtotal')) - $data['discount']['value'] ?? 0, // Calculate subtotal
            'paid' => $data['paid'] ?? 0,
            'due' => $data['due'] ?? 0,
            'total' => $data['total'] ?? 0,
        ];

        return $this->saleRepository->create($saleData);
    }

    public function update($id, array $data)
    {
        return $this->saleRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->saleRepository->delete($id);
    }
}

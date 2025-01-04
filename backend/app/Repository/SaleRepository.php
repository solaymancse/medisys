<?php


namespace App\Repository;

use App\Models\Sale;
use App\Models\SaleProduct;
use App\Models\Supplier;

class SaleRepository
{

    protected $saleProduct;
    protected $sale;

    public function __construct(protected UnitRepository $unitRepository, protected ProductRepository $productRepository, SaleProduct $saleProduct, Sale $sale)
    {
        $this->saleProduct = $saleProduct;
        $this->sale = $sale;
    }

    public function getAll()
    {
        // return $this->model->latest()->get();
    }

    public function findById($id)
    {
        // return $this->model->findOrFail($id);
    }

    public function create($saleData)
    {
        info($saleData);
        $data = $this->sale->create($saleData);
        return successResponse($data, 'Sale successfully', 201);
    }
    public function createSaleProduct($data, $total_pcs)
    {
        $data["total_pcs"] = $total_pcs;
        $data["sub_total"] = $data["subtotal"];
        $this->saleProduct->create($data);

        $this->productRepository->updateProductStock($data["product_id"], $total_pcs);

        return true;
    }

    public function update($id, array $data)
    {
        // $supplier = $this->findById($id);
        // $supplier->update($data);
        // return successResponse($supplier, 'supplier updated successfully', 200);
    }

    public function delete($id)
    {
        // $supplier = $this->findById($id);
        // return $supplier->delete();
    }
}

<?php


namespace App\Repository;

use App\Models\PurchaseProduct;
use App\Models\Supplier;

class PurchaseRepository
{

    protected $model;

    public function __construct(PurchaseProduct $purchaseProduct, protected ProductRepository $productRepository, protected UnitRepository $unitRepository)
    {
        $this->model = $purchaseProduct;
    }

    public function getAll()
    {
        return $this->model->with('supplier', 'product', 'unit')->latest()->get();
    }

    public function findById($id)
    {
        return $this->model->findOrFail($id);
    }

    public function create($data)
    {
        if ($data["paid"] === 0) {
            $data['status'] = 'unpaid';
        } else if ($data["total"] > $data["paid"]) {
            $data['status'] = 'partial paid';
        } else {
            $data['status'] = 'paid';
        }

        $data = $this->model->create($data);
        $unit =  $this->unitRepository->findById($data['unit_id']);

        $qty = $unit["multiple_unit"] * $data["quantity"];
        $this->productRepository->updateProductStockAfterPurchase($data["product_id"], $qty);
        return successResponse($data, 'Purchase created successfully', 201);
    }

    public function update($id, array $data)
    {
        $purchase = $this->findById($id);
        $purchase->update($data);
        return successResponse($purchase, 'Purchase updated successfully', 200);
    }

    public function delete($id)
    {
        $purchase = $this->findById($id);
        return $purchase->delete();
    }

    public function supplierPay($id, $amount)
    {
        // Find the purchase by ID
        $purchase = $this->findById($id);

        // Ensure $amount is a positive number
        if ($amount <= 0) {
            return errorResponse('Invalid amount provided', 400);
        }


        // Update the paid amount
        $purchase->paid += $amount;

        // Calculate the due amount
        $purchase->due = $purchase->total - $purchase->paid;

        // Update the status based on the payment
        if ($purchase->paid >= $purchase->total) {
            $purchase->due = 0;
            $purchase->status = 'paid';
        } elseif ($purchase->paid > 0) {
            $purchase->status = 'partial paid';
        } else {
            $purchase->status = 'unpaid';
        }

        // Save the purchase
        $purchase->save();

        return successResponse(null, 'Payment recorded successfully', 200);
    }
}

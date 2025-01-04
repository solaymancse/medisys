<?php


namespace App\Repository;

use App\Models\Product;
use App\Models\Supplier;

class ProductRepository
{

    protected $model;

    public function __construct(Product $product)
    {
        $this->model = $product;
    }

    public function getAll()
    {
        return $this->model->with('category', 'brand', 'unit', 'user')->latest()->get();
    }

    public function findById($id)
    {
        return $this->model->findOrFail($id);
    }

    public function create(array $data)
    {
        $data['product_added_by'] = 1;
        $data = $this->model->create($data);
        return successResponse($data, 'product created successfully', 201);
    }

    public function update($id, array $data)
    {
        $product = $this->findById($id);
        $product->update($data);
        return successResponse($product, 'product updated successfully', 200);
    }
    public function updateProductStock($id, $qty)
    {
        $product = $this->findById($id);

        $product->stock -= $qty;
        $product->save();
        return successResponse($product, 'product updated successfully', 200);
    }

    public function delete($id)
    {
        $supplier = $this->findById($id);
        return $supplier->delete();
    }

    public function updateProductStockAfterPurchase($id, $qty)
    {
        $product = $this->findById($id);

        $product->stock += $qty;
        $product->save();
        return successResponse($product, 'product updated successfully', 200);
    }
}

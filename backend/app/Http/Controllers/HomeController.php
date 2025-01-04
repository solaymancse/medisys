<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Sale;
use App\Models\Supplier;
use App\Services\ProductService;
use Illuminate\Http\Request;

class HomeController extends Controller
{


    public function index()
    {
        $productTotal = Product::count();
        $totalSupplier = Supplier::count();
        $totalSale = Sale::sum('total');
        $totalStock = Product::sum('stock');
        $totalCustomer = Customer::count();
        $totalDue = Customer::sum('due_amount');
        $outStock = Product::where('stock', '<=', 50)->count();

        return successResponse([
            'total_product' => $productTotal,
            'total_supplier' => $totalSupplier,
            'total_sale' => $totalSale,
            'total_stock' => $totalStock,
            'total_customer' => $totalCustomer,
            'customer_due' => $totalDue,
            'out_stock' => $outStock
        ]);
    }
}

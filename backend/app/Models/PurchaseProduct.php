<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'quantity',
        'unit_id',
        'supplier_id',
        'discount_type',
        'discount_price',
        'sub_total',
        'total',
        'unit_cost_price',
        'lot_number',
        'expire_date',
        'purchased_by',
        'paid',
        'due',
        'note',
        'status',
    ];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id', 'id');
    }
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }
}

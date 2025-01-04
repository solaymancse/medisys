<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name',
        'unit_id',
        'brand_id',
        'category_id',
        'sub_category_id',
        'stock',
        'purchase_price',
        'selling_price',
        'alert_qty',
        'description',
        'product_added_by',
        'expiry_date',
        'status'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }
    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'product_added_by');
    }
}

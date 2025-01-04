<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleProduct extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'qty',
        'unit_id',
        'total_pcs',
        'sub_total',
    ];
}

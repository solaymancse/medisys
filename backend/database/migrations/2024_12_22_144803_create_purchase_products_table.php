<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('purchase_products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->integer('quantity');
            $table->unsignedBigInteger('unit_id');
            $table->unsignedBigInteger('supplier_id');
            $table->string('discount_type')->nullable(); // e.g., percentage or fixed
            $table->decimal('discount_price', 10, 2)->default(0);
            $table->decimal('sub_total', 10, 2);
            $table->decimal('total', 10, 2);
            $table->decimal('unit_cost_price', 10, 2);
            $table->string('lot_number')->nullable();
            $table->date('expire_date')->nullable();
            $table->unsignedBigInteger('purchased_by'); // Refers to user or employee
            $table->decimal('paid', 10, 2)->default(0);
            $table->decimal('due', 10, 2)->default(0);
            $table->text('note')->nullable();
            $table->text('status')->nullable();
            $table->timestamps();

            // Add foreign keys
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('unit_id')->references('id')->on('units')->onDelete('cascade');
            $table->foreign('supplier_id')->references('id')->on('suppliers')->onDelete('cascade');
            $table->foreign('purchased_by')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_products');
    }
};

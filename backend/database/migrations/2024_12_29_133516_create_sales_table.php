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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->json('product_id');
            $table->unsignedBigInteger('customer_id')->nullable(); // Foreign key for the customer
            $table->decimal('discount', 8, 2)->default(0); // Discount on the sale
            $table->decimal('sub_total', 10, 2); // Sub-total before applying discounts
            $table->decimal('due', 10, 2)->default(0); // Amount due
            $table->decimal('paid', 10, 2)->default(0); // Amount due
            $table->decimal('total', 10, 2); // Total after discount and payments
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};

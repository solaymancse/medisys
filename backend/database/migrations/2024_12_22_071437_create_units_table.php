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
        Schema::create('units', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Unit name
            $table->string('short_name')->nullable(); // Short name of the unit, optional
            $table->string('decimal')->nullable(); // Decimal precision, default is 0
            $table->string('multiple_unit')->nullable(); // Flag for multiple units, default is false
            $table->string('base_unit')->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('units');
    }
};

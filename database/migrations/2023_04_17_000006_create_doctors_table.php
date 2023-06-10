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
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('adresse');
            $table->string('telephone');
            $table->string('email');
            $table->string('password');
            $table->unsignedBigInteger('ville_id');
            $table->unsignedBigInteger('specialite_id');
            $table->timestamps();
          
            $table->foreign('ville_id')->references('id')->on('cities')->onDelete('cascade');
            $table->foreign('specialite_id')->references('id')->on('specialities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};

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
        Schema::create('tarocchi', function (Blueprint $table) {
            $table->id();
            $table->string('titolo', 200)->unique();
            $table->string('numero', 255)->unique();
            $table->string('image', 255)->nullable();
            $table->string('interpretazione')->nullable();
            $table->text('descrTalentoGiorno')->nullable();
            $table->text('descrTalentoMese')->nullable();
            $table->text('descrSoulTask')->nullable();
            $table->text('descrDebitoKarmico')->nullable();
            $table->text('descrArcana')->nullable();
            $table->text('descrDebitoKarmicoTerzi')->nullable();
            $table->text('descrAmore')->nullable();
            $table->text('descrSoldi')->nullable();
            $table->text('descrMezzo')->nullable();
            $table->text('descrSoulTaskTerzi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tarocchi');
    }
};

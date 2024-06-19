<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarocchi extends Model
{
    use HasFactory;
    protected $table = 'tarocchi';
    protected $fillable = ['titolo','numero', 'image', 'interpretazione', 'descrTalentoGiorno', 'descrTalentoMese','descrSoulTask','descrDebitoKarmico','descrArcana','descrDebitoKarmicoTerzi','descrAmore','descrSoldi','descrMezzo','descrSoulTaskTerzi'];
}

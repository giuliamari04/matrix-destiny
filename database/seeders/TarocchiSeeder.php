<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tarocchi;

class TarocchiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tarocchi = file_get_contents(__DIR__ . '/data/tarocchi.json');
        $tarocchi = json_decode($tarocchi, true);

        foreach ($tarocchi as $carta) {
            $newcarta = new Tarocchi();
            $newcarta->titolo = $carta['titolo'];
            $newcarta->numero = $carta['numero'];
            $newcarta->image = $carta['image'];
            $newcarta->interpretazione = $carta['interpretazione'];
            $newcarta->descrTalentoGiorno = $carta['decsrTalentoGiorno'];
            $newcarta->descrTalentoMese = $carta['descrTalentoMese'];
            $newcarta->descrSoultask = $carta['descrSoulTask'];
            $newcarta->descrDebitoKarmico = $carta['descrDebitoKarmico'];
            $newcarta->descrArcana = $carta['descrArcana'];
            $newcarta->descrDebitoKarmicoTerzi = $carta['descrDebitoKarmicoTerzi'];
            $newcarta->descrAmore = $carta['descrAmore'];
            $newcarta->descrSoldi = $carta['descrSoldi'];
            $newcarta->descrMezzo = $carta['descrMezzo'];
            $newcarta->descrSoulTaskTerzi = $carta['descrSoulTaskTerzi'];

            $newcarta->save();
        }
    }
}

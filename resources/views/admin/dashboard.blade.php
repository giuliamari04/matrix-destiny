@extends('layouts.admin')

@section('content')

<section>
    <div>
        <form action="" id="dateForm">
        <label for="date" class=" form-label ">inserisci data di nascita</label>
        <input type="date" class=" form-control w-25" name="date" id="date">

        <button type="submit" class="btn btn-primary ">Invia</button>
    </form>
    </div>
    <div class="d-flex justify-content-center  align-content-center">
        <div class="base-matrice">
            <img src="{{ Vite::asset('/public/images/1689418337732.jpeg') }}" alt="matrice">
            <div class="arcana">
                7
            </div>
            <div class="talento-giorno" id="talentoGiorno">
            </div>
            <div class="talento-mese" id="talentoMese">
            </div>
            <div class="debito-karmico" id="debitoKarmico">
            </div>
            <div class="soul-task" id="soulTask">
            </div>
        </div>
    </div>

</section>
@endsection

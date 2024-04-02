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

            {{-- arcani cerchi grandi | main --}}
            <div class="arcana main" id="arcana">
            </div>
            <div class="talento-giorno main" id="talentoGiorno">
            </div>
            <div class="talento-mese main" id="talentoMese">
            </div>
            <div class="debito-karmico main" id="debitoKarmico">
            </div>
            <div class="soul-task main" id="soulTask">
            </div>
            <div class="female-line-top main" id="femaleLineTop">
            </div>
            <div class="male-line-top main" id="maleLineTop"></div>
            <div class="female-line-bot main" id="femaleLineBot">
            </div>
            <div class="male-line-bot main" id="maleLineBot"></div>

            {{-- arcani cerchi medi | secondary --}}

            <div class="secondary arcana-secondary" id="arcanaSecondary"></div>
            <div class="secondary talento-giorno-secondary" id="talentoGiornoSecondary"></div>
            <div class="secondary talento-mese-secondary" id="talentoMeseSecondary"></div>
            <div class="secondary debito-karmico-secondary" id="debitoKarmicoSecondary"></div>
            <div class="secondary soul-task-secondary" id="soulTaskSecondary"></div>
            <div class="secondary female-line-top-secondary" id="femaleLineTopSecondary"></div>
            <div class="secondary male-line-top-secondary" id="maleLineTopSecondary"></div>
            <div class="secondary female-line-bot-secondary" id="femaleLineBotSecondary"></div>
            <div class="secondary male-line-bot-secondary" id="maleLineBotSecondary"></div>

             {{-- arcani cerchi piccoli | terzi --}}

             <div class="terzi arcana-terzi" id="arcanaterzi"></div>
             <div class="terzi talento-giorno-terzi" id="talentoGiornoterzi"></div>
             <div class="terzi talento-mese-terzi" id="talentoMeseterzi"></div>
             <div class="terzi debito-karmico-terzi" id="debitoKarmicoterzi"></div>
             <div class="terzi soul-task-terzi" id="soulTaskterzi"></div>
             <div class="terzi female-line-top-terzi" id="femaleLineTopterzi"></div>
             <div class="terzi male-line-top-terzi" id="maleLineTopterzi"></div>
             <div class="terzi female-line-bot-terzi" id="femaleLineBotterzi"></div>
             <div class="terzi male-line-bot-terzi" id="maleLineBotterzi"></div>

             <div class="terzi amore" id="amore"></div>
             <div class="terzi mezzo"id="mezzo"></div>
             <div class="terzi soldi"id="soldi"></div>

             <div class="terzi green1" id="green1"></div>
             <div class="terzi green2" id="green2"></div>

        </div>
    </div>

</section>
@endsection

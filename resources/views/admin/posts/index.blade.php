@extends('layouts.admin')

        @section('content')

        <aside class="bg-black">aside</aside>
        <section class="bg-matrice">
            <div class=" d-flex justify-content-center align-content-center align-items-center text-center pt-5">
                <h1 class="display-3">Scopri la tua matrice del destino</h1>
            </div>
            <div class=" d-flex justify-content-center align-content-center align-items-center text-center py-5">
                <form action="" id="dateForm">
                <label for="date" class=" form-label display-6 ">inserisci data di nascita</label>
                <div class="d-flex justify-content-center ">
                     <input type="date" class=" form-control w-50" name="date" id="date">

                <button type="submit" class="btn btn-primary mx-2 ">Invia</button>
                </div>

            </form>
            </div>

            <div class="d-flex justify-content-center  align-content-center">
                <div class="base-matrice">
                    <div class="female">female generation line</div>
                    <div class="male">male generation line</div>
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

                     {{-- amore mezzo soldi --}}
                     <div class="terzi amore" id="amore"></div>
                     <div class="terzi mezzo"id="mezzo"></div>
                     <div class="terzi soldi"id="soldi"></div>

                     {{-- green --}}
                     <div class="terzi green1" id="green1"></div>
                     <div class="terzi green2" id="green2"></div>

                     {{-- previsioni future --}}
                     <div class="prima-sezione" id="primaSezione">
                     </div>
                     <div class="sezione2" id="Sezione2">
                    </div>
                    <div class="sezione3" id="Sezione3">
                    </div>
                    <div class="sezione4" id="Sezione4">
                    </div>
                    <div class="sezione5" id="Sezione5">
                    </div>
                    <div class="sezione6" id="Sezione6">
                    </div>
                    <div class="sezione7" id="Sezione7">
                    </div>
                    <div class="sezione8" id="Sezione8">
                    </div>


                </div>
            </div>

            {{-- analisi --}}
            <div class="container d-none" id="analisi">
                <div class="d-flex px-5">
                    <h3>Analisi Matrice:</h3>
                </div>
                <h4>Analisi del Giorno</h4>
                @foreach ($tarocchi as $carta )
                     <div class="row">
                    <div class="col">
                        <h5 id="descrtitoloGiorno" >

                            @if ($carta->numero === $talentoGiorno)
                            {{$carta->titolo}}
                            @endif
                        </h5>
                        {{-- <img src="" alt=""> --}}
                    </div>
                    <div class="col">
                        <p id="testoGiorno"></p>
                    </div>
                </div>
                @endforeach

            </div>
        </section>
        @endsection



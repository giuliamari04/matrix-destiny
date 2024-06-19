@extends('layouts.admin')

@section('content')

<section class="pianeti">
    <div class="video-container">
        <video autoplay muted loop class="video-background">
            <source src="{{Vite::asset('/public/images/12722063-hd_1280_720_24fps.mp4')}}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="text-overlay">
            <div class="d-flex align-items-center pt-5 px-5 ">
                <h1 class=" display-1 text-light">Fatti una domada e <br> scopri chi sei</h1>
            </div>
        </div>
    </div>



</section>
@endsection

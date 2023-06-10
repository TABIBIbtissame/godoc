<?php



use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CityController;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\InsuranceController;
use App\Http\Controllers\SpecialityController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AvailabilityController;
use App\Http\Controllers\CertificationController;



/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::middleware('auth:sanctum')->group(function () {
});


   // Route for 'doctors' table
    Route::get('/doctors', 'DoctorController@index');
    Route::get('/doctors/{id}', 'DoctorController@show');
    Route::post('/doctors', 'DoctorController@store');
    Route::put('/doctors/{id}', 'DoctorController@update');
    Route::delete('/doctors/{id}', 'DoctorController@destroy');
   

    // Route for 'patients' table
    Route::get('/patients', 'PatientController@index');
    Route::get('/patients/{id}', 'PatientController@show' );
    Route::post('/patients', 'PatientController@store');
    Route::put('/patients/{id}', 'PatientController@update');
    Route::delete('/patients/{id}', 'PatientController@destroy');
   

    // Route for 'appointments' table
    Route::get('/appointments', 'AppointmentController@index');
    Route::get('/appointments/{id}', 'AppointmentController@show');
    Route::post('/appointments', 'AppointmentController@store');
    Route::put('/appointments/{id}', 'AppointmentController@update');
    Route::delete('/appointments/{id}', 'AppointmentController@destroy');

    // Route for 'cities' table
    Route::get('/cities', 'CityController@index');
    Route::get('/cities/{id}', 'CityController@show');
    Route::post('/cities', 'CityController@store');
    Route::put('/cities/{id}', 'CityController@update');
    Route::delete('/cities/{id}', 'CityController@destroy');
    Route::get('/cities/{nom}', 'CityController@search');


    // Route for 'specialities' table
    Route::get('/specialities', 'SpecialityController@index');
    Route::get('/specialities/{id}', 'SpecialityController@show');
    Route::post('/specialities', 'SpecialityController@store');
    Route::put('/specialities/{id}', 'SpecialityController@update');
    Route::delete('/specialities/{id}', 'SpecialityController@destroy');


    // Route for 'schedules' table
    Route::get('/schedules', 'ScheduleController@index');
    Route::get('/schedules/{id}', 'ScheduleController@show');
    Route::post('/schedules', 'ScheduleController@store');
    Route::put('/schedules/{id}', 'ScheduleController@update');
    Route::delete('/schedules/{id}', 'ScheduleController@destroy');

    // Route for 'insurances' table
    Route::get('/insurances', 'InsuranceController@index');
    Route::get('/insurances/{id}', 'InsuranceController@show');
    Route::post('/insurances', 'InsuranceController@store');
    Route::put('/insurances/{id}', 'InsuranceController@update');
    Route::delete('/insurances/{id}', 'InsuranceController@destroy');

    // Route for 'availabilities' table
    Route::get('/availabilities', 'AvailabilityController@index');
    Route::get('/availabilities/{id}', 'AvailabilityController@show');
    Route::post('/availabilities', 'AvailabilityController@store');
    Route::put('/availabilities/{id}', 'AvailabilityController@update');
    Route::delete('/availabilities/{id}', 'AvailabilityController@destroy');

    // Route for 'certifications' table
    Route::get('/certifications', 'CertificationController@index');
    Route::get('/certifications/{id}', 'CertificationController@show');
    Route::post('/certifications', 'CertificationController@store');
    Route::put('/certifications/{id}', 'CertificationController@update');
    Route::delete('/certifications/{id}', 'CertificationController@destroy');

    // Route for 'views' table
    Route::get('/views', 'ViewController@index');
    Route::get('/views/{id}', 'ViewController@show');
    Route::post('/views', 'ViewController@store');
    Route::put('/views/{id}', 'ViewController@update');
    Route::delete('/views/{id}', 'ViewController@destroy');


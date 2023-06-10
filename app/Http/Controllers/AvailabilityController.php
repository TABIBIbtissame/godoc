<?php

namespace App\Http\Controllers;

use App\Models\Availability;
use Illuminate\Http\Request;

class AvailabilityController extends Controller
{
   //get all availabilities
    public function index()
    {
        $availabilities = Availability::all();
    }


    //create an availability
    public function store(Request $request)
    {
      $request->validate([
        'date' => 'required|date',
        'heuredebut' => 'required|time',
        'heurefin' => 'required|time',
        'dureeconsultation' => 'required|integer',
        'horrairerdvdisponible' => 'required|datetime',
        'doctor_id' => 'required|exists:doctors,id', 
      ]);

      $availability = new Availability;
      $doctor->date = $request->input('date');
      $doctor->heuredebut = $request->input('heuredebut');
      $doctor->heurefin = $request->input('heurefin');
      $doctor->dureeconsultation = $request->input('dureeconsultation');
      $doctor-> horrairerdvdisponible= $request->input('horrairerdvdisponible');
      $doctor->doctor_id = $request->input('doctor_id');
      $availability->save();
      return($availability);
    }
   
    //get availability by ID 
    public function show($id)
    {
        return Availability::find($id);
    }


   //Update availability
    public function update(Request $request, $id)
    {
        
      $request->validate([
        'date' => 'required|date',
        'heuredebut' => 'required|time',
        'heurefin' => 'required|time',
        'dureeconsultation' => 'required|integer',
        'horrairerdvdisponible' => 'required|datetime',
        'doctor_id' => 'required|exists:doctors,id', 
      ]);
      $availability = Availability::find($id);
      $doctor->date = $request->input('date');
      $doctor->heuredebut = $request->input('heuredebut');
      $doctor->heurefin = $request->input('heurefin');
      $doctor->dureeconsultation = $request->input('dureeconsultation');
      $doctor-> horrairerdvdisponible= $request->input('horrairerdvdisponible');
      $doctor->doctor_id = $request->input('doctor_id');
      $availability->save();
      return($availability);
    }

    //delete avialability 
    public function destroy($id)
    {
        $availability = Availability::find($id);
        return Availabilty::delete($id);
    }
}

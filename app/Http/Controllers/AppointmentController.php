<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    //get all appointments
    public function index()
    {
        $appointments = Appointment::all();
    }

    //create an appointment
    public function store(Request $request)
    {
        $request->validate([
            'etatderdv' => 'required|string',
            'typederdv' => 'required|string',
            'doctor_id' => 'required|exists:doctors,id',
            'patient_id' => 'required|exists:patients,id',
            'disponibilite_id' => 'required|exists:availabilities,id',
            'date' => 'required|date',
            'heure' => 'required|string'
        ]);
        $appointment= new Appointment;
        $appointment->etatderdv = $request->input('etatderdv');
        $appointment->typederdv = $request->input('typederdv');
        $appointment->doctor_id = $request->input('doctor_id');
        $appointment->patient_id = $request->input('patient_id');
        $appointment->disponibilite_id = $request->input('disponibilite_id');
        $appointment->date = $request->input('date');
        $appointment->heure = $request->input('heure');
        $appointment->save();
        return ($appointment);
    }
    //get an appointment by ID
    public function show($id)
    {
        return Appointment::find($id);
    }


    //update appointment
    public function update(Request $request, $id)
    {
        $request->validate([
            'etatderdv' => 'required|string',
            'typederdv' => 'required|string',
            'doctor_id' => 'required|exists:doctors,id',
            'patient_id' => 'required|exists:patients,id',
            'disponibilite_id' => 'required|exists:availabilities,id',
            'date' => 'required|date',
            'heure' => 'required|string'
        ]);

        $appointment=Appointment::find($id);
        $appointment->etatderdv = $request->input('etatderdv');
        $appointment->typederdv = $request->input('typederdv');
        $appointment->doctor_id = $request->input('doctor_id');
        $appointment->patient_id = $request->input('patient_id');
        $appointment->disponibilite_id = $request->input('disponibilite_id');
        $appointment->date = $request->input('date');
        $appointment->heure = $request->input('heure');
        $appointment->save();
        return ($appointment);
    }
    //delete an appointment
    public function destroy($id)
    {
        $appointment = Appointment::find($id);
        return Appointment::delete($id);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\City;
use App\Models\Speciality;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;


class DoctorController extends Controller
{
     //get all doctors
    public function index(Request $request)
    {
        $doctors = Doctor::with(["speciality", "city"])
        ->where("ville_id", $request->get("city"))
        ->where("specialite_id", $request->get("speciality"))
        ->get();
        return $doctors;
    }

    //create a doctor
    public function store(Request $request)
    {
            $request->validate([
            'nom' => 'required|string',
            'adresse' => 'required|string',
            'telephone' => 'required|string',
            'email' => 'required|email|unique:doctors',
            'password' => 'required|string|min:8',
            'specialite_id' => 'required|exists:specialities,id', 
            'ville_id' => 'required|exists:cities,id', 
            
        ]);

        $doctor = new Doctor;
        $doctor->nom = $request->input('nom');
        $doctor->adresse = $request->input('adresse');
        $doctor->telephone = $request->input('telephone');
        $doctor->email = $request->input('email');
        $doctor->password = Hash::make($request->input('password'));
        $doctor->specialite_id = $request->input('specialite_id');
        $doctor->ville_id = $request->input('ville_id');
        $doctor->save();
    
    }

     //get a doctor by ID
    public function show($id)
    {
        return Doctor::find($id);
    }

    //update a doctor
    public function update(Request $request, $id)
    {
        $request->validate([
            'nom' => 'required|string',
            'adresse' => 'required|string',
            'telephone' => 'required|string',
            'email' => 'required|email|unique:doctors,email'.$id,
            'password' => 'required|string|min:6',
            'specialite_id' => 'required|exists:specialities,id', 
            'ville_id' => 'required|exists:cities,id', 
        ]);
        $doctor = Doctor::find($id);
        $doctor->nom = $request->input('nom');
        $doctor->adresse = $request->input('adresse');
        $doctor->telephone = $request->input('telephone');
        $doctor->email = $request->input('email');
        $doctor->password = Hash::make($request->input('password'));
        $doctor->specialite_id = $request->input('specialite_id');
        $doctor->ville_id = $request->input('ville_id');
        $doctor->save();
        return($doctor);
    }

     //delete a doctor
    public function destroy($id)
    {
        $doctor = Doctor::find($id);
        return Doctor::delete($id);
    }
    //search a doctor
    public function search($nom){
        return Doctor::where('nom','like','%'.'$nom'.'%')->get();
    }
} 


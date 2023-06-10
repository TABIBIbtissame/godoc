<?php

namespace App\Http\Controllers;

use App\Models\Speciality;
use Illuminate\Http\Request;

class SpecialityController extends Controller
{
    //get all specialities

    public function index()
    {
        $specialities = Speciality::all();
        return($specialities);
      
    }

  
    //create a speciality
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'description' => 'required|string',
        ]);
    
        $speciality = new Speciality;
        $speciality->nom = $request->input('nom');
        $speciality->description = $request->input('description');
        $speciality->save();
        return ($speciality);
    }
    

   //get a speciality by id
    public function show($id)
    {
        return Speciality::find($id);
    }

    //update a speciality
    public function update(Request $request)
    {
        $request->validate([
            'nom' => 'required|string',
            'description' => 'required|string',
        ]);
      
        $speciality=Speciality::find($id);
        $speciality->description = $request->input('description');
        $speciality->nom = $request->input('nom');
        $speciality->save();
        return($speciality);
    }

   //delete a speciality
    public function destroy($id)
    {
        $speciality= Speciality::find($id);
        return Speciality::delete($id);    
    }


    //search a speciality 
    public function search($nom){
        return Speciality::where('nom','like','%'.'$nom'.'%')->get();
    }
}

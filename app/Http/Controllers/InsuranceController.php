<?php

namespace App\Http\Controllers;

use App\Models\Insurance;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InsuranceController extends Controller
{
    //get all insurances
    public function index()
    {
        $insurance= Insurance::all();
        return($insurance);
    }



    //create insurance
    public function store(Request $request)
    {
        $request->validate([
            'nom_acompagnie'=>'required|string',
            'adresse'=>'required|string',
            'telephone'=>'required|string',

        ]);
        $insurance =new Insurance;
        $insurance->nom_acompagnie = $request->input('nom_acompagnie');
        $insurance->adresse = $request->input('adresse');
        $insurance->telephone = $request->input('telephone');
        $insurance->save();
        return($insurance);


    }
    //get insurance by ID
    public function show($id)
    {
        return Insurance::find($id);
    }
    
    //update a insurance
    public function update(Request $request, Insurance $insurance , $id)
    {
       
        $request->validate([
            'nom_acompagnie'=>'required|string',
            'adresse'=>'required|string',
            'telephone'=>'required|string',

        ]);
        $insurance =Insurance::find($id);
        $insurance->nom_acompagnie = $request->input('nom_acompagnie');
        $insurance->adresse = $request->input('adresse');
        $insurance->telephone = $request->input('telephone');
        $insurance->save();
        return($insurance);
    }

   //Delete an insurance
    public function destroy(Insurance $insurance , $id)
    {
        $insurance = Insurance::find($id);
        return Insurance::delete($id);
    }
}

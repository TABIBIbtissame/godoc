<?php

namespace App\Http\Controllers;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
 //get all cities
    public function index()
    {
        $cities = City::all();
        return($cities);
    }

    //create a city
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
        ]);      
        $city = new City;
        $city->nom = $request->input('nom');
        $city->save();
        return($city);
    }
    

    //get a city by ID
    public function show($id)
    {
        return City::find($id);
    }
    
    //update a city
    public function update(Request $request, $id)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
        ]);      
        $city = City::find($id);
        $city->nom = $request->input('nom');
        $city->save();
        return($city);
    }
    //delete a city
    public function destroy($id)
{
    $city = City::find($id);
    return City::destroy($id);
}
//search a city
public function search($nom){
return City::where('nom','like','%'.'$nom'.'%')->get();
}

}

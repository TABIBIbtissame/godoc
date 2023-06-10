<?php

namespace App\Http\Controllers;

use App\Models\Certification;
use Illuminate\Http\Request;

class CertificationController extends Controller
{
    public function index()
    {
        $certifications = Certification::all();

        return response()->json([
            'certifications' => $certifications
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'doctor_id' => 'required|exists:doctors,id',
            'nom' => 'required|string',
            'dateobtention' => 'required|date'
        ]);

        $certification = Certification::create($validatedData);

        return response()->json([
            'message' => 'Certification created successfully',
            'certification' => $certification
        ]);
    }

    public function show($id)
    {
        $certification = Certification::find($id);

        if (!$certification) {
            return response()->json([
                'message' => 'Certification not found'
            ], 404);
        }

        return response()->json([
            'certification' => $certification
        ]);
    }

    // Update a certification by ID
    public function update(Request $request, $id)
    {
    $certification = Certification::find($id);

    if (!$certification) {
        return response()->json(['error' => 'Certification not found'], 404);
    }

    $validator = Validator::make($request->all(), [
        'doctor_id' => 'exists:doctors,id',
        'nom' => 'unique:certifications,nom,' . $certification->id ,
        'dateobtention' => 'unique:certifications,dateobtension,',
        
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    $certification->update($request->all());
    return response()->json(['data' => $certification], 200);
}

//delete a certification
    public function destroy($id)
{
    $certification = Certification::find($id);
    return Certification::delete($id);
}   
}

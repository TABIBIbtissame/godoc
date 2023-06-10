<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\PatientController;


class PatientController extends Controller
{
    // get all patients
    public function index()
    {
        $patients = Patient::all();
        return( $patients);
    }

  // create a patient
  public function store(Request $request)
  {

     $request->validate([
        'nom' => 'required|string',
        'telephone'=> 'required|string',
        'email' => 'required|email|unique:patients',
        'password' => 'required|string|min:8',
        'genre' => 'required|in:male,female',
        'datedenaissance' => 'required|date',
       
    ]);
        $patient = new Patient();
        $patient->nom = $request->input('nom');
        $patient->email = $request->input('email');
        $patient->telephone = $request->input('telephone');
        $patient->password = Hash::make($request->input('password'));
        $patient->genre = $request->input('genre');
        $patient->datedenaissance = $request->input('datedenaissance');
        $patient->save();
    
    }
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            $user = Auth::user();

            return response()->json($user);
        }

        return response()->json([
            'errors' => [
                'email' => 'The provided credentials do not match our records.',
                ]
        ], 422);

        /*$credentials = $request->only('email', 'password');

        $patient = Patient::where('email', $credentials['email'])->first();

        if (!$patient) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        if (Hash::check($credentials['password'], $patient->password)) {
            $token = $patient->createToken('PatientToken')->plainTextToken;            
            return response()->json(['token' => $token], 200);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);*/
    }

    // get a patient by ID
    public function show(Patient $patient ,$id)
    {
       return Patient::find($id);
    }

   

   //Update Patient
    public function update(Request $request, $id)
    {
        $request->validate([
            'nom' => 'required|string',
            'email' => 'required|email|unique:patients,email',
            'password' => 'required|string|min:6',
            'genre' => 'required|in:male,female',
            'datedenaissance' => 'required|date',
            'assurance_id' => 'required|exists:insurances,id',
        ]);
        $patient=Patient::find($id);
        $patient->nom = $request->input('nom');
        $patient->email = $request->input('email');

        $patient->password = Hash::make($request->input('password'));
        $patient->genre = $request->input('genre');
        $patient->datedenaissance = $request->input('datedenaissance');
        $patient->assurance_id = $request->input('assurance_id');
        $patient->save();
        return($patient);
    }

   // Delete a patient
   public function destroy($id)
   {
       $patient = Patient::find($id);
       return Patient::delete($id);
   }
}

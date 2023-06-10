<?php

namespace App\Http\Controllers;

use App\Models\View;
use Illuminate\Http\Request;

class ViewController extends Controller
{
    //get all views
    public function index()
    {
        $views = View::all();
    }

    //create a view
    public function store(Request $request)
    {
        $request->validate([
            'commentaire' => 'required|string',
            'note' => 'required|integer',
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id', 
            'appointment_id' => 'required|exists:appointments,id', 
        ]);
        $view = new View ;
        $view->commantaire=$request->input('commentaire');
        $view->note=$request->input('note');
        $view->patient_id=$request->input('patient_id');
        $view->doctor_id=$request->input('doctor_id');
        $view->appointment_id=$request->input('appointment_id');
        $view->save();
        return ($view);
    }

    //get a view by ID 
    public function show(View $view , $id)
    {
        return View::find($id);
    }

    //update a view
    public function update(Request $request, View $view , $id)
    {
        $request->validate([
            'commentaire' => 'required|string',
            'note' => 'required|integer',
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id', 
            'appointment_id' => 'required|exists:appointments,id', 
        ]);
        $view = View::find($id) ;
        $view->commantaire=$request->input('commentaire');
        $view->note=$request->input('note');
        $view->patient_id=$request->input('patient_id');
        $view->doctor_id=$request->input('doctor_id');
        $view->appointment_id=$request->input('appointment_id');
        $view->save();
        return ($view);
    }

    //delete a view
    public function destroy(View $view, $id)
    {
        $view = View::find($id);
        return View::delete($id);
    }
}

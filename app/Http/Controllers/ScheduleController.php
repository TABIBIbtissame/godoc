<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
   //get all schedules
    public function index()
    {
        $schedules = Schedule::all();
    }

    //create a schedule
    public function store(Request $request)
    {
        $request->validate([
            'jour' => 'required|date',
            'heureouverture' => 'required|time',
            'heurefermeture' => 'required|time',
            'doctor_id' => 'required|exists:doctors,id', 
        ]);

        $schedule=new Schedule;
        $schedule->jour =$request->input('jour');
        $schedule->heureouverture =$request->input('heureouverture');
        $schedule->heurefermeture =$request->input('heurefermeture');
        $schedule->doctor_id =$request->input('doctor_id');
        $schedule->save();
        return ($schedule);
    }

    //get a schedules by ID
    public function show(Schedule $schedule,$id)
    {
        return Schedule::find($schedule);
    }


    public function update(Request $request, Schedule $schedule)
    {
        $request->validate([
            'jour' => 'required|date',
            'heureouverture' => 'required|time',
            'heurefermeture' => 'required|time',
            'doctor_id' => 'required|exists:doctors,id', 
        ]);

        $schedule=Schedule::find($id);
        $schedule->jour =$request->input('jour');
        $schedule->heureouverture =$request->input('heureouverture');
        $schedule->heurefermeture =$request->input('heurefermeture');
        $schedule->doctor_id =$request->input('doctor_id');
        $schedule->save();
        return ($schedule);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Schedule $schedule,$id)
    {
        $schedule = Schedule::find($id);
        return Schedule::delete($id);
    }
}

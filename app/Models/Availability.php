<?php

namespace App\Models;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Availability extends Model
{
    use HasFactory;

    protected $fillable = [
        'date', 'heuredebut', 'heurefin','dureeconsultation','horrairerdvdisponible', 'doctor_id'
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}

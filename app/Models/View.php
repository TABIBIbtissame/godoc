<?php

namespace App\Models;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class View extends Model
{
    use HasFactory;

    protected $fillable = [
        'commentaire','note', 'doctor_id', 'patient_id', 'appointment_id'
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}

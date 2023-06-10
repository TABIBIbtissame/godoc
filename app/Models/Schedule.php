<?php

namespace App\Models;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'jour', 'heureouverture','heurefermeture', 'doctor_id', 'patient_id'
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}

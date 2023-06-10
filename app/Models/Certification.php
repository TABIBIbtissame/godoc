<?php

namespace App\Models;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Certification extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom', 'anneeobtention', 'doctor_id'
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}

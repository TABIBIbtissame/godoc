<?php

namespace App\Models;

use App\Models\Insurance;
use App\Models\Appointment;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Patient extends Model
{
    use HasFactory;
    use HasApiTokens;

    protected $fillable = [
        'nom', 'email', 'telephone','genre' ,'datedenaissance'
    ];

    public function insurance()
    {
        return $this->belongsTo(Insurance::class);
    }
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}

<?php

namespace App\Models;

use App\Models\City;
use App\Models\User;
use App\Models\View;
use App\Models\Schedule;
use App\Models\Speciality;
use App\Models\Appointment;
use App\Models\Availability;
use App\Models\Certification;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom', 'adresse', 'telephone', 'email', 'ville_id', 'specialite_id'
    ];

    public function city()
    {
        return $this->belongsTo(City::class,"ville_id");
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function availabilities()
    {
        return $this->hasMany(Availability::class);
    }

    public function speciality()
    {
        return $this->belongsTo(Speciality::class,"specialite_id");
    }

    public function certifications()
    {
        return $this->hasMany(Certification::class);
    }

    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }

    public function views()
    {
        return $this->hasMany(View::class);
    }
        public function user()
    {
        return $this->hasOne(User::class);
    }

}

<?php

namespace App\Models;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Speciality extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom', 'description'
    ];

    public function doctors()
    {
        return $this->belongsToMany(Doctor::class);
    }
}

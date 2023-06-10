<?php

namespace App\Models;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Insurance extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom_acompagnie', 'adresse','telephone'
    ];
}



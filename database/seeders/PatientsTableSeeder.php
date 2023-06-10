<?php

namespace Database\Seeders;

use App\Models\Patient;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PatientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $patientData = [    
        [        'nom' => 'John Doe','genre' => 'M','datedenaissance' => '1990-01-01','email' => 'john.doe@example.com','telephone' => '1234567890','password' => bcrypt('secret'),'assurance_id' => 1,],
    [        'nom' => 'Jane Sya','genre' => 'F','datedenaissance' => '1995-05-05','email' => 'jane.doe@example.com','telephone' => '0987654321','password' => bcrypt('password'),'assurance_id' => 2,],
    [        'nom' => 'Bob Smith','genre' => 'male','datedenaissance' => '1978-11-25','email' => 'bob.smith@example.com','telephone' => '555-9876','password' => bcrypt('password'),'assurance_id' => 3,],
];

foreach ($patientData as $data) {
    $patient = new Patient();
    $patient->nom = $data['nom'];
    $patient->genre = $data['genre'];
    $patient->datedenaissance = $data['datedenaissance'];
    $patient->email = $data['email'];
    $patient->telephone = $data['telephone'];
    $patient->password = $data['password'];
    $patient->assurance_id = $data['assurance_id'];
    $patient->save();
}


    }
}

<?php

namespace Database\Seeders;

use App\Models\Insurance;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class InsurancesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $insuranceData = [

        ['nom_acompagnie' => 'ABC Insurance',
        'adresse' => '123 Main St',
        'telephone' => '555-1234',],

        ['nom_acompagnie' => 'XYZ Insurance',
        'adresse' => '456 Elm St',
        'telephone' => '555-5678',],
];

foreach ($insuranceData as $data) {
    $insurance = new Insurance();
    $insurance->nom_acompagnie = $data['nom_acompagnie'];
    $insurance->adresse = $data['adresse'];
    $insurance->telephone = $data['telephone'];
    $insurance->save();
}


}
}

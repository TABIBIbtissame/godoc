<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cityNames = [
            'New York',
            'Los Angeles',
            'Chicago',
            'Houston',
        ];
        foreach ($cityNames as $cityName) {
            $city = new City();
            $city->nom = $cityName;
            $city->save();
        }
        

    }
}

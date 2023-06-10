<?php

namespace Database\Seeders;

use App\Models\Speciality;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SpecialitesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $specialiteData = [[        
            'nom' => 'Cardiology',        'description' => 'Specializes in the diagnosis and treatment of heart diseases.',    ],
    [        'nom' => 'Dermatology',        'description' => 'Specializes in the diagnosis and treatment of skin disorders.',    ],
    [        'nom' => 'Endocrinology',        'description' => 'Specializes in the diagnosis and treatment of hormonal disorders.',    ],
    [        'nom' => 'Gastroenterology',        'description' => 'Specializes in the diagnosis and treatment of digestive system disorders.',    ],
    
];


foreach ($specialiteData as $data) {
    $specialite = new Speciality();
    $specialite->nom = $data['nom'];
    $specialite->description = $data['description'];
    $specialite->save();
}

        
        
    }
}

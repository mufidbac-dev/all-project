<?php

namespace Modules\Personal\Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProjectControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_returns_success()
    {
        $this->seed();
        $user = User::factory()->create();
        $user->assignRole('owner');

        $response = $this->actingAs($user)->getJson('/api/v1/projects');

        $response->assertStatus(200);
    }
}


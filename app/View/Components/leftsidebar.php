<?php

namespace App\View\Components;

use Illuminate\Support\Facades\Auth;
use Illuminate\View\Component;

class leftsidebar extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */

     public $user;
    public function __construct()
    {
        $this->user=Auth::user();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.leftsidebar');
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
class Categoryrequest extends FormRequest
{
    public function authorize()
    {
        if(Auth::check())
        {
            return true;
        }
        return redirect('/admin/login');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if($this->tag)
        {
            return [
                'name'=>'required|unique:tags,name,'.$this->tag['id'],
                'slug'=>'required|unique:tags,slug,'.$this->tag['id'],
                'status'=>'required'
            ];
        }
        else
        {
            return [
                'name'=>'required|unique:tags',
                'slug'=>'required|unique:tags',
                'status'=>'required'
            ];
        }
        
    }

        protected function prepareForValidation()
        {
            if($this->status=='')
            {
                $this->merge([
                    'status'=>false
                ]);
            }
            if($this->slug)
            {
            $this->merge([
                'slug' => Str::slug($this->slug)
            ]);
            }
        }

        public function messages()
        {
        return [
        'required' => ':attribute is required',
        'unique' => ':attribute already exists',
        ];
        }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tagrequest;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tag=Tag::all();
        return view('admin.tag.index',compact('tag'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.tag.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Tagrequest $request)
    {
        $validated=$request->validated();
        $tag=new Tag();
        $tag->name=$validated['name'];
        $tag->slug=$validated['slug'];
        $tag->status=$validated['status'];
        $tag->save();
        Session::flash("msg","Tag Added Successfully");
        return redirect(route('tag.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function edit(Tag $tag)
    {
        return view('admin.tag.edit',compact('tag'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function update(Tagrequest $request, Tag $tag)
    {
        $validated=$request->validated();
        $tag->name=$validated['name'];
        $tag->slug=$validated['slug'];
        $tag->status=$validated['status'];
        $tag->save();
        Session::flash("msg","Tag Updated Successfully");
        return redirect(route('tag.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
        Session::flash("msg","Tag Deleted Successfully");
        return redirect(route('tag.index'));
    }
}

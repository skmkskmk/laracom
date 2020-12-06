<x-header/>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Edit Tag</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Edit Tag</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-primary">
              <div class="card-header">
                 <h3 class="card-title">Edit Tag</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
            <form role="form" method="post" action="{{ route('tag.update',$tag->id)}}">
              @csrf
              @method('PUT')
                 <div class="card-body">

                  @if ($errors->any())
                  <div class="alert alert-danger alert-dismissible fade show" role="alert"> 
                  @foreach($errors->all() as $message) 
                  <div>{{ $message }}</div>
                  @endforeach
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  @endif

                    <div class="form-group">
                       <label for="name">Name</label>
                    <input type="text" class="form-control" value="{{ $tag->name}}" name="name" required id="name" placeholder="Enter Name ">
                    </div>
                    <div class="form-group">
                       <label for="slug">Slug</label>
                       <input type="text" class="form-control" value="{{ $tag->slug}}" name="slug" required id="slug" placeholder="Enter Slug">
                    </div>
                    
                    <div class="form-check">
                       <input type="checkbox" @if($tag->status==1) checked @endif name="status" value="1" class="form-check-input" id="status">
                       <label class="form-check-label" for="status">Status</label>
                    </div>
                 </div>
                 <!-- /.card-body -->
                 <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Submit</button>
                 </div>
              </form>
           </div>

            
          </div>
          
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
<x-footer/>
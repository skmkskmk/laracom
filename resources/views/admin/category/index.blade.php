<x-header/>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark"> Categories</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active"> Categories</li>
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
                 <h3 class="card-title"> Categories</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
            
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

                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Slug</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        @foreach($category as $t)
                    <tr>
                    <td>{{ $t->id }}</td>
                      <td>
                          {{ $t->name }}
                      </td>
                    <td>{{ $t->slug }}</td>
                    <td> {{ $t->status ? 'Active' : 'Inactive' }}</td>
                      <td>
                      <a href="{{ route('category.edit',$t->id) }}" class="btn btn-primary"><i class="fa fa-pencil"></i></a>
                      <form method="post" action="{{ route('category.destroy',$t->id)}}" onsubmit="return confirm('Are You Sure Want To Delete?')">
                              @csrf
                              @method('DELETE')
                                <button class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                          </form>
                      </td>
                    </tr>
                   @endforeach
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                    </tfoot>
                  </table>
                 </div>
                 <!-- /.card-body -->
                 <div class="card-footer">
                   
                 </div>
              
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
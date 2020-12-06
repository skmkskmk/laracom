
  <!-- Control Sidebar -->
  <?php if (isset($component)) { $__componentOriginal9e9ff1edb6cadf3738748f6d0fa2001ea6df1d22 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Rightsidebar::class, []); ?>
<?php $component->withName('rightsidebar'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withAttributes([]); ?>
<?php if (isset($__componentOriginal9e9ff1edb6cadf3738748f6d0fa2001ea6df1d22)): ?>
<?php $component = $__componentOriginal9e9ff1edb6cadf3738748f6d0fa2001ea6df1d22; ?>
<?php unset($__componentOriginal9e9ff1edb6cadf3738748f6d0fa2001ea6df1d22); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?> 
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
</body>
</html>
<?php /**PATH D:\laraprac\impdateblog\resources\views/components/footer.blade.php ENDPATH**/ ?>
//Toggle menu
$(document).ready(() => {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $('#dropdown').select2();
    $('#datepicker').datepicker({
        startDate: '-3d'
    });
});

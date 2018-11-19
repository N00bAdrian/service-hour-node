//Toggle menu
$(document).ready(() => {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $('#dropdown').select2();
    $('#datepicker').datepicker({
        "setDate": "now"
    });
    function today(){
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth()+1;
        var curr_year = d.getFullYear();
        document.write(curr_month+"/"+curr_date+"/"+curr_year);
    }
});

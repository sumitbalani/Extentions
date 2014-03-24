$(function () {
    //var term = $('#t').val();
   // document.getElementById("iframe_id").contentDocument.getElementById("destination_id").innerHTML = term;
    
    function getUrl()
    {
      var term = $('#t').val();
    document.getElementById("iframe_id").setAttribute("src","http://dictionary.reference.com/browse/" + term);
    }  

});

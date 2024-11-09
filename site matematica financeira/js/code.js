$('document').ready(function(){

  $('#txt_ajd').hide();
  $('#titulo1').hide();
  $('#titulo2').hide();
  $('#titulo3').hide();
  $('#voltar').hide();
  $('#calculadoras').hide();
  $('#cal1').hide();
  $('#cal2').hide();
  $('#cal3').hide();
  $('#cal4').hide();
  $('#cal5').hide();
  $('#cal6').hide();


$('#ajd').click(function(){

    $('#titulo').hide();
    $('#cal').hide();
    $('#crd').hide();
    $('#ajd').hide();
    $('#tudao').show();
    $('#voltar').show();
    $('#titulo1').show();
    $('#txt_ajd').show();
})
$('#crd').click(function(){

    $('#voltar').show();
    $('#titulo2').show();
    $('#titulo').hide();
    $('#cal').hide();
    $('#ajd').hide();
    $('#crd').hide();
    $('#tudao').show();

})
$('#cal').click(function(){

    $('#calculadoras').show();
    $('#cal1').show();
    $('#cal2').show();
    $('#cal3').show();
    $('#cal4').show();
    $('#cal5').show();
    $('#cal6').show();
    $('#tudao').hide();
    $('#titulo3').show();
    $('#titulo').hide();
    $('#ajd').hide();
    $('#crd').hide();
    $('#cal').hide();
    $('#voltar').show();
})

$('#voltar').click(function(){

    $('#calculadoras').hide();
    $('#cal1').hide();
    $('#cal2').hide();
    $('#cal3').hide();
    $('#cal4').hide();
    $('#cal5').hide();
    $('#cal6').hide();
    $('#txt_ajd').hide();
    $('#titulo1').hide();
    $('#titulo2').hide();
    $('#titulo3').hide();
    $('#voltar').hide();
    $('#tudao').show();
    $('#titulo').show();
    $('#cal').show();
    $('#crd').show();
    $('#ajd').show();
})


});
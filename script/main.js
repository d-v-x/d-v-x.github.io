$(document).ready(function(){
    $('#selected').html($('#li1').html());
});

function dropDownActive(){
    $('.selection').addClass('active');
}

function dropDownDeactive(){
    $('.selection').removeClass('active');
}

function selectedTopic(id){
    $('#selected').html($('#'+id).html());
}
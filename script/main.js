$(document).ready(function(){
    $('#selected').html($('#li1').html());
    unsetBreadcrumb('Home');
});

function dropDownActive(){
    $('.selection').addClass('active');
}

function dropDownDeactive(){
    $('.selection').removeClass('active');
}

function selectedTopic(id){
    $('#selected').html($('#'+id).text());
}

function setBreadcrumb(text){
    $('#breadcrumb').text(text);
    $('#dd-container').show();
    $('.arrow').show();
    loadDropdown();
}

function unsetBreadcrumb(text){
    $('#breadcrumb').text(text);
    $('#dd-container').hide();
    $('.arrow').hide();
}

function loadDropdown(){
    var items = `
                    <li id="li1" onclick="selectedTopic('li1')">topic for Photography 1</li>
                    <li id="li2" onclick="selectedTopic('li2')">topic for Photography 2</li>
                    <li id="li3" onclick="selectedTopic('li3')">topic for Photography 3</li>
                    <li id="li4" onclick="selectedTopic('li4')">topic for Photography 4</li>
                    <li id="li5" onclick="selectedTopic('li5')">topic for Photography 5</li>
    `
    
    
    $('#selectionItem').html(items);
    selectedTopic('li1');
}
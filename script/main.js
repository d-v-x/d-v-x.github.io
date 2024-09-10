//temp for bella
window.location.href = "/bella/loan.html";

$(document).ready(function () {
    $('#selected').html($('#li1').html());
    unsetBreadcrumb('Home');
});

function dropDownActive(sts) {
    if(sts)
        $('.selection').addClass('active');
    else
        $('.selection').removeClass('active');
}

function selectedTopic(id) {
    $('#selected').html($('#' + id).text());
}

function setBreadcrumb(id) {
    var req = getRequest('/data/dropdown-items.json');
    var items = '';
    req = req.filter(x => x.id == id);

    req[0].content.forEach(element => {
        items += '<li id="' + req[0].id + element.id + '" onclick=selectedTopic("' + req[0].id + element.id + '")>' + element.name + '</li>'
    });

    $('#selectionItem').html(items);
    selectedTopic(req[0].id + req[0].content[0].id);
    $('#breadcrumb').text(req[0].name);
    $('#dd-container').show();
    $('.arrow').show();
}

function unsetBreadcrumb(text) {
    $('#breadcrumb').text(text);
    $('#dd-container').hide();
    $('.arrow').hide();
}

function getRequest(url) {
    var response_body;

    $.ajax({
        url: url,
        async: false,
        type: "GET",
        success: function (data, status) {
            response_body = data;
        }
    });

    return response_body;
}

function carouselActive(id){
    document.getElementById(id).scrollIntoView({behavior: "smooth", inline: "center"});
    $('.active-photo').removeClass('active-photo');
    $('#' + id).addClass('active-photo');

}
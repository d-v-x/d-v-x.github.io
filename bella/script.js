function getRequest(){
    
    $.ajax({
        url: "/bella/data.json",
        async: false,
        type: "GET",
        success: function (data, status) {
            var paid = 0.00;
            var remain = 0.00;
            var total = 4369.00;

            if(data.length == 0)
                document.getElementById('data').innerHTML = "<b style='position:absolute;transform:translateX(-50%);left:50%'>NO PAYMENT DATA</b>"            
            else
                document.getElementById('data').innerHTML = `
            <b style='position:absolute;transform:translateX(-50%);left:50%;top:0px'>PAYMENT HISTORY</b> 
                <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Remark</th>
                </tr>  `


            data.forEach(el => {
                document.getElementById('data').innerHTML += 
                `
                <tr>
                    <td>${el.No}</td>
                    <td>${el.Date}</td>
                    <td>${el.Amount}</td>
                    <td>${el.Remark}</td>
                </tr>

                `
                paid = paid + parseFloat(el.Amount.replace("RM ",""));                
            });

            remain = total - paid;
            document.querySelector(".bar-paid").style.width = (paid/total*100).toString() + "%";
            document.querySelector(".bar-remain").style.width = (remain/total*100).toString() + "%";
            document.querySelector(".remaining").innerText = `REMAINING: RM ${remain.toFixed(2)}` ;
            document.querySelector(".paid").innerText = `PAID: RM ${paid.toFixed(2)}` ;


        }
    });
}

$( document ).ready(function() {
    getRequest();
});


//sample data
// {
//     "No":"1",
//     "Date":"20/09/2024",
//     "Amount":"RM 100.55",
//     "Remark":"Paid"
// }
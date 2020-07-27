document.addEventListener('turbolinks:load', function(){
    document.getElementById('exchange_form').addEventListener('ajax:success', function(event){
        let [result] = event.detail
        document.getElementById('result').value = result.value
    })

    document.getElementById('btnInverterUp').addEventListener('click', function(){
        firstsel = document.getElementById('source_currency').value
        secondsel = document.getElementById('target_currency').value
        
        document.getElementById('source_currency').value = secondsel
        document.getElementById('target_currency').value = firstsel
    })

    $("#amount").keyup(function(){
        let source_currency = $('#source_currency').val()
        let target_currency = $('#target_currency').val()
        let amount = this.value
        
        let url = 'http://localhost:3000/convert'
        
        $.ajax({
            method: "GET",
            url: url,
            data: {
                source_currency: source_currency,
                target_currency : target_currency,
                amount: amount
            },
            success: function(data) {
                $('#result').val(JSON.stringify(data.value))
            }
        })
    })
})
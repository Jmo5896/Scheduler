$(document).ready(()=> {
    console.log('jquery is loaded');
    let local_keys = Object.keys(localStorage);
    const now = parseInt(moment().format('H'));
    $('#date').text(moment().format('MM/DD/YYYY'))
    for (let i = 9; i <= 17; i++){
        $(".container").append(`
        <div class="row" id = "${i}">
            <div class="col-2">${i}:00</div>
            <input id = "${i}hr" class="col-8" type="text">
            <div class="col-2">
                <button type="button" value = "#${i}hr" class="save btn btn-primary">save</button>
            </div>
        </div>
        <br>
        `);
        if (i > now) {
            $(`#${i}`).removeClass().addClass('row bg-success');
        } else if (i === now) {
            $(`#${i}`).removeClass().addClass('row bg-danger');
        } else {
            $(`#${i}`).removeClass().addClass('row bg-secondary');
        }
    }
    local_keys.forEach(key => $(key).val(localStorage.getItem(key)));

    $('.container').on('click', '.save',function(e){
        const save = $(this).val();
        const userInput = $(save).val();
        localStorage.setItem(save, userInput);
    });


});
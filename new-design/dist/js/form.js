export function jqAjax() {
    $(document).ready(function () {

        $("form").submit(function (event) {
            alert('ajax');
            event.preventDefault();

            $.ajax({
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                data: new FormData(this),
                dataType: false,
                cache: false,
                processData: false,
                success: function (response) {
                    alert('Load was performed');
                }
            });


        });

    })
}
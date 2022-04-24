
// append, each, on, val, empty, html, addClass, 
// FilreReader, attr, width, height, readAsDataURL
// this, test


$(function () {
    $('div h1').each(function () {
        alert($(this).append(' pop'))
    })
})



























// Declare url globaly for this to work
var url = "{{ url('/category/subcategory/ajax') }}/";

var surl = "{{ url('/category/sub-subcategory/ajax') }}/";


$(document).ready(function () {
    $('select[name="category_id"]').on('change', function () {
        var category_id = $(this).val();
        if (category_id) {
            $.ajax({
                url: url + category_id,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    $('select[name="subsubcategory_id"]').html('');
                    var d = $('select[name="subcategory_id"]').empty();
                    $.each(data, function (key, value) {
                        $('select[name="subcategory_id"]').append('<option value="' + value.id + ' ">' +
                            value.subcategory_name_en + '</option>');
                    });
                },
            });
        } else {
            alert('danger');
        }
    });



    $('select[name="subcategory_id"]').on('change', function () {
        var subcategory_id = $(this).val();
        if (subcategory_id) {
            $.ajax({
                url: surl + subcategory_id,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    var d = $('select[name="subsubcategory_id"]').empty();
                    $.each(data, function (key, value) {
                        console.log(value);
                        $('select[name="subsubcategory_id"]').append('<option value="' + value.id + ' ">' +
                            value.subsubcategory_name_en + '</option>');
                    });
                },
            });
        } else {
            alert('danger');
        }
    });
});


$(document).ready(function () {
    $('#multiImg').on('change', function () { //on file input change
        if (window.File && window.FileReader && window.FileList && window.Blob) //check File API supported browser
        {
            var data = $(this)[0].files; //this file data

            $.each(data, function (index, file) { //loop though each file
                if (/(\.|\/)(gif|jpe?g|png)$/i.test(file.type)) { //check supported file type
                    var fRead = new FileReader(); //new filereader
                    fRead.onload = (function (file) { //trigger function on successful read
                        return function (e) {
                            var img = $('<img/>').addClass('thumb').attr('src', e.target.result).width(80)
                                .height(80); //create image element 
                            $('#preview_img').append(img); //append image to output element
                        };
                    })(file);
                    fRead.readAsDataURL(file); //URL representing the file's data.
                }
            });

        } else {
            alert("Your browser doesn't support File API!"); //if File API is absent
        }
    });
});





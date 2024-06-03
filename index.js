$(document).ready(function() {
    // Open Contact Form Modal
    $('#contact-button').on('click', function() {
        $('#contactModal').modal('show');
    });

    // Change Project Image on Click
    $('#project-list .list-group-item').on('click', function() {
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });

    // Submit Contact Form
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        $.ajax({
            url: 'https://getform.io/f/{your-getform-endpoint}', // Replace with your Getform endpoint
            method: 'POST',
            data: formData,
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactModal').modal('hide');
            },
            error: function(error) {
                alert('Error submitting form. Please try again.');
            }
        });
    });
});

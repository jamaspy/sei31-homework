$(document).ready(function () {

    $("form").on("submit", function (event) {
        event.preventDefault();
        let bookTitle = $("#bookTitleInput").val();
        const url = `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`

        $.ajax(url).done(function (data) {
            const cover = data.items[0].volumeInfo.imageLinks.smallThumbnail
            $("#cover").attr("src", cover)
        });
    });
});
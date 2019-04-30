let page = 1

const showImages = function (results) {
    const generateURL = function (p) {
        return [
            "http://farm",
            p.farm,
            ".static.flickr.com/",
            p.server,
            "/",
            p.id,
            "_",
            p.secret,
            "_n.jpg" //change q to something else for different sizes 
        ].join('');
    }
    const carousel = [];
    results.photos.photo.forEach(function (photo) {
        
        const thumbnailURL = generateURL(photo)
        carousel.push(thumbnailURL);
        const $img = $("<img>", {src: thumbnailURL});
        $img.appendTo("#images");
        $('#img-1').css("background-image", "url('" + carousel[10] + "')")
        $('#img-2').css("background-image", "url('" + carousel[11] + "')")
        $('#img-3').css("background-image", "url('" + carousel[12] + "')")
    }); 
       
};



const searchFlickr = function (terms) {
    const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";
    $.getJSON(flickrURL, {
        page: page,
        method: "flickr.photos.search",
        api_key: "2f5ac274ecfac5a455f38745704ad084",
        text: terms,
        format: "json"
    }).done(showImages).done(function (data) {
        console.log(data)}).done(console.log(page));
        
};

$(document).ready(function () {
    $("#search").on("submit", function (event) {
        event.preventDefault();
        const query = $("#query").val();
        $("#images").empty()
        searchFlickr(query)
    });
    
   
    $(window).on("scroll", function () {
        const scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());
        if (scrollBottom <= 10) {
            const query = $("#query").val();
            searchFlickr(query)
            page += 1;          
        }
    });
});
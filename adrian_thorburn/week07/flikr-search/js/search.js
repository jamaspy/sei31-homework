const showImages = function(results) {
  // create another helper to give you the link to the flickr item.
  const generateImgPage = function (p) {
      return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_o.jpg' // resize image, q=thumbnail, m=medium, o=original
      ].join('');
  }
  // Nested AKA Helper function that returns a thumbnail URL for a given photo object
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // resize image, q=thumbnail, m=medium, o=original
    ].join('');
  }

  results.photos.photo.forEach(function (photo){
    // create a URL for the photo
    const thumbnailURL = generateURL(photo);
    // create an image to display that photo URL
    const $img = $('<img>', {src: thumbnailURL});
    //console.log($img);
    //shove that image into the page
    $('#images').append($img)
  });
};

let currentPage = 1;
let lastPage = false;

const searchFlickr = function (terms) { //the ajax request
  console.log(`Searching flickr for ${terms}`);
  //checks for last lage
  if (lastPage === false ) {
    //set the URL
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'
    //make the request
    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', //not a secret key
      text: terms,
      format: 'json',
      page: currentPage++
    }).done(showImages).done(function (data){
      if (data.photos.page >= data.photos.pages) {
        lastPage = true;
        console.log(lastPage);
      } else {
        console.log( "current page " + data.photos.page );
        console.log( "max page " + data.photos.pages );
        console.log(data);

      }
    });
  } else {
    console.log("last page reached");
  }
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); //stay on the same page
    currentPage = 1 //resets to page 1
    lastPage = false;

    //find the search Terms
    const query = $('#query').val();
    $('#images').empty();
    searchFlickr(query);
  });

  $(window).on('scroll', _.throttle(function() { //throttle using lodash
    const scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    if (scrollBottom <= 500) {
      const query = $('#query').val();
      searchFlickr(query);
    }
  }, 500));

  // reset to top of page:
  // When the user clicks on the button, scroll to the top of the document
  $('#topButton').on('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
});

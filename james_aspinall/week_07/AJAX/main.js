const fetchFact = () => {
    const xhr = new XMLHttpRequest();
    let bookTitle = document.getElementById("bookTitleInput").value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`
    xhr.open("GET", url)

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        const data = JSON.parse(xhr.responseText);
        document.getElementById("bookCoverImg").src = data.items[0].volumeInfo.imageLinks.smallThumbnail
        document.getElementById("bookTitleText").innerHTML = data.items[0].volumeInfo.title
    }
    xhr.send();



};

document.getElementById("bookSubmitButton").addEventListener("click", fetchFact)
//element
const input = document.querySelector('.searchbar__input')
const searchButton=document.querySelector('.search-btn')
const albumTemplate=document.querySelector('.albums')
const albumsContainer=document.querySelector('.albums-container')
const infoContainer = document.querySelector('.info')
const loader = document.querySelector(".loader");


//fetch
function searchArtist(ARTIST_NAME) {
    infoContainer.innerHTML=``
    loader.style.display = "inline"
    fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            loader.style.display = "none"
            data.results.forEach((album) => { render(album) })
            infoContainer.innerHTML=`${data.results.length} results for "${ARTIST_NAME}"`
        })
}


//event
input.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        if (input.value === '') {
          alert(`Please enter artist's name`);
        } else {
            clear()
            searchArtist(input.value);
        }
      }
})

searchButton.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please fill out this field')
    } else {
        clear()
        searchArtist(input.value)
    }
})

//helper
function showSpinner() {
    spinner.class = "show";
    setTimeout(() => {
      spinner.class = spinner.class.replace("show", "");
    }, 5000);
}

function clear() {
    albumsContainer.innerHTML=''
}


//render
function render(album) {
    const templateclone = albumTemplate.content.cloneNode(true)
    const albumImg = templateclone.querySelector('.album-img')
    albumImg.src = album.artworkUrl100
    const albumName = templateclone.querySelector('.album-name')
    albumName.innerText = album.collectionName
    albumsContainer.appendChild(templateclone)
}
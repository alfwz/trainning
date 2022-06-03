//element
const input = document.querySelector('.searchbar-input')
const searchButton=document.querySelector('.search-btn')
const albumTemplate=document.querySelector('.albums')
const albumsContainer=document.querySelector('.albums-container')
const infoContainer = document.querySelector('.info')
const loader = document.getElementById('loader');
const showMore=document.querySelector('.show-more')


//data
let albums = []
let start = 0
let end = 0

//fetch
function searchArtist(ARTIST_NAME) {
    infoContainer.innerHTML = ``
    loader.style.visibility = 'visible'
    infoContainer.append(loader)
    fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`)
        .then(res => res.json())
        .then(data => {
            albums = data.results
            console.log(albums)
            start = 0
            end = 20
            showMoreAlbums(start, end, albums)
            start = 10

            showMore.addEventListener('click', () => {
                start += 10
                end += 10
                if (end < albums.length) {
                    showMoreAlbums(start, end, albums)
                } else if(start<albums.length && end > albums.length) {
                    showMoreAlbums(start, albums.length, albums)
                } 
                console.log(start, end)
                console.log(albums.length)  
            })
            loader.style.visibility = 'hidden';

            
            //albums.forEach((album) => { render(album) })
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
function clear() {
    albumsContainer.innerHTML=''
}

function showMoreAlbums(start, end, albums) {
    
    for (let i = start; i < end; i++){
        render(albums[i])
    }
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
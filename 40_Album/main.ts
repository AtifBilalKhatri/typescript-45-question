function make_album(artist:string, tittle:string, track?:number){
    const album: {artist:string, tittle:string, track?:number}={
        artist: artist,
        tittle: tittle

    }
    if(track !== undefined){
        album.track =track;
    }
    return album;

} 
const album1 = make_album('artist 1 ', 'album tittle 1');
console.log(album1);
const album2 = make_album('artist 2 ', 'album tittle 2');
console.log(album2)
const album3 = make_album('artist 3 ', 'album tittle 3',6);
console.log(album3)
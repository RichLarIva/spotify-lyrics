import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import CurrentTrack from './CurrentTrack';
import Lyrics from './Lyrics';
import './App.css';



function App() {
  const [song, setSong] = useState("");
  const [preview, setPreview] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [albumCover, setAlbumCover] = useState("");
  const [lyricsURL, setLyricsURL] = useState("");
  const url = "https://api.spotify.com/v1/me/player/currently-playing";
  useEffect(()=> {
    setTimeout(() => {

    
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer BQC2E_XMEsqtnYt4qatWLMb-e3QbHFAar8CYn-nkhVc6dIxFdjBG7IaOFisR8nxQk--N79OEK0M2Qp_XdghjB4dpxwhHESQBznALya60KVeXSkhCS-gwvTUudrFnnklAKl-RmlmrCDJooxlktL3FzWtzrfJpQODchqWbJZtD0OV-A0prka6D"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setSong(data.item.name.toString());
      setPreview(data.item.preview_url.toString()); 
      setArtist(data.item.artists[0].name.toString());
      setAlbum(data.item.album.name.toString());
      setAlbumCover(data.item.album.images[0].url.toString());
    })
    fetch(`http://api.chartlyrics.com/apiv1.asmx/SearchLyric?artist=${artist.replace(" ", "%20")}&song=${song.toString().replace(" ", "%20")}`)
      .then((res) => res.text())
      .then((d) => {
        var xml = new XMLParser().parseFromString(d);
        setLyricsURL(xml.getElementsByTagName('SongUrl')[0].value)
      })


    }, 1000)
  })

  return (
    <div className="App">
      <CurrentTrack song={song} artist={artist} album={album} preview={preview} albumCover={albumCover}/>
      <Lyrics lyrics={lyricsURL}/>
    </div>
  );
}

export default App;

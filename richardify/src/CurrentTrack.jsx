import React from 'react';

function CurrentTrack({artist, album, song, preview, albumCover}){
    return(
        <div className='track'>
            <img src={albumCover} alt="Album cover"/>
            <div>
                <h3>{artist}•{song}</h3>
                <p>{album}</p>
                <audio name="media" controls autoPlay>
                    <source src={preview} type="audio/mpeg"/>
                </audio> 
            </div>
        </div>
    )
}

export default CurrentTrack;
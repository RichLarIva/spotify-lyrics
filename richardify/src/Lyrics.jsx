import React from "react";

function Lyrics({lyrics}){
    return(
        <div className="lyrics">
            <iframe src={lyrics} title="Lyrics"></iframe>
        </div>
    )
}

export default Lyrics;
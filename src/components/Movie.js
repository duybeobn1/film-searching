import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.bing.com/images/search?view=detailV2&ccid=LrknQQrT&id=119359A0A38A5AF7B78AC1FC8EED47EE1DEE00C4&thid=OIP.LrknQQrTDlIVAVjZg-VnzAHaEK&mediaurl=https%3a%2f%2ffilmedit.tv%2fwp-content%2fuploads%2f2014%2f06%2ffilm.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2eb927410ad30e52150158d983e567cc%3frik%3dxADuHe5H7Y78wQ%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=film+images&simid=608005071394375043&FORM=IRPRST&ck=4B1645C307808A2A080B44F432359477&selectedIndex=55&ajaxhist=0&ajaxserp=0";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};


export default Movie;
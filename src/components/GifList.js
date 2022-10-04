import React from "react";

function GifList({ gifs }) {
	return (
		<ul className="gif-container">
			{gifs.map((gif) => {
				return (
					<li className="gif-li" key={gif.url}>
						<img className="gif-img" src={gif.url} alt="gif" />
					</li>
				);
			})}
		</ul>
	);
}

export default GifList;

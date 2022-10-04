import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
	const APIKEY = "Q90frtUQ7iEcUfxCJ5c0AToHtUYffhU0";
	const [gifs, setGifs] = useState([]);
	const [search, setSearch] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${APIKEY}&rating=g`
		)
			.then((res) => res.json())
			.then(({ data }) => {
				console.log(data);
				const gifSlice = data
					.slice(0, 3)
					.map((giffy) => ({ url: giffy.images.original.url }));
				setGifs(gifSlice);
			});
	}, [search]);

	return (
		<div>
			<GifList gifs={gifs} />
			<GifSearch setSearch={setSearch} />
		</div>
	);
}

export default GifListContainer;

import React from "react";

function GifSearch({ setSearch, search }) {
	function handleChange(e) {
		setSearch(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div className="main-search-input fl-wrap" onChange={handleChange}>
			<div className="main-search-input-item">
				<p>Enter a Search Term</p>
				<input type="text" value={search} placeholder="Search Gif..." />
			</div>

			<button onSubmit={handleSubmit} className="main-search-button">
				Search
			</button>
		</div>
	);
}

export default GifSearch;

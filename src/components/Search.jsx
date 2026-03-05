const Search = (props) => {
  const searchEmoji = (value) => {
    props.setSearch(value);

    const filtered = props.data.filter((item) => {
      return item.keywords.includes(value);
    });

    const results = filtered.map((item, index) => {
      return props.createLine(item, index);
    });

    props.setResults(results);
  };

  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="what emoji are you looking for ?"
      value={props.search}
      onChange={(event) => {
        searchEmoji(event.target.value);
      }}
    />
  );
};

export default Search;

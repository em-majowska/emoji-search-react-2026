const Search = (props) => {
  const searchEmoji = (value) => {
    props.setSearch(value);
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

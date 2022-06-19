import React from "react";

function SearchField(props) {
  const { onSearch } = props;

  return (
    <div className="row">
      <input
        type="text"
        className="form-control w-100"
        placeholder="Search ..."
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchField;

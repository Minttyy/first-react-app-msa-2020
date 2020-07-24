import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./SearchBar.css";
import { IUserInput } from "../../Common/Interfaces";

interface ISearchBarProps {
  SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {
  const [SearchQuery, setSearchQuery] = useState<string | null>("");
  const handleSearchQuery = (s: string | null) => {
    setSearchQuery(s);
  };
  const [HasFocus, setFocus] = useState<boolean>(false);

  const handleSubmit = () => {
    if (
      SearchQuery?.length !== 0 &&
      SearchQuery !== null &&
      SearchQuery !== ""
    ) {
      let UserInput: IUserInput = {
        SearchQuery: SearchQuery,
      };
      props.SetUserInput(UserInput);
    } else {
      setFocus(true);
    }
  };

  return (
    <div className="SearchBarContainer">
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={6} sm={3}>
          <TextField
            required
            className="search-bar"
            id="search-box"
            label="Type a Keyword"
            variant="outlined"
            error={HasFocus && SearchQuery === ""}
            onClick={() => setFocus(true)}
            value={SearchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            className="search-bar"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchBar;

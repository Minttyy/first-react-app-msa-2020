import React, { useState, useEffect } from "react";
import "./QuotesGrid.css";
import QuoteCard from "../QuoteCardComponent/QuoteCard";
import Grid from "@material-ui/core/Grid";

interface IState {
  author: string | null;
  text: string | null;
}
interface IQuoteGridProps {
  SearchQuery: string | null;
}

function QuotesGrid(props: IQuoteGridProps) {
  const [filteredData, setFilteredData] = useState<IState[]>([
    { text: null, author: null },
  ]);

  let filtered;

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((response) => {
        filtered = response.filter((r: any) => r.author !== null);
        filtered = filtered.filter(
          (e: any) =>
            e.text.includes(props.SearchQuery) ||
            e.author.includes(props.SearchQuery)
        );

        setFilteredData(filtered);
      });
  });
  let i = 0;
  var Cards: JSX.Element[] = [];
  filteredData.forEach((e: IState, i: number) => {
    if (!e || !e.author || !e.text) {
      return;
    }
    Cards.push(
      <Grid
        key={"card_" + i}
        item
        sm={6}
        md={4}
        lg={3}
        className="QuoteGridCard"
      >
        <QuoteCard Texts={e.text} Authors={e.author} />
      </Grid>
    );
    i++;
  });

  return (
    <div>
      <Grid container spacing={3} className="QuoteGridContainer">
        {Cards}
      </Grid>
    </div>
  );
}

export default QuotesGrid;

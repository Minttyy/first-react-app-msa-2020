import React from "react";
import "./QuoteCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface IQuoteCardProps {
  Texts: string | undefined;
  Authors: string | undefined;
}

function QuoteCard(props: IQuoteCardProps) {
  return (
    <Card className="main-content" variant="outlined">
      <CardContent>
        <Typography className="text" color="textSecondary">
          {props.Texts}
        </Typography>
        <Typography className="author" color="textSecondary" align="center">
          {props.Authors}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default QuoteCard;

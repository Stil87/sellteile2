import { Part } from "../utils/types";


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageGridList from "./ImageGridList";



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PartCard({ part }: { part: Part }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {part.title}
          <br />
          {part.id}
        </Typography>
        <Typography variant="h5" component="h2">
         {part.model}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         {part.price}
        </Typography>
        <Typography variant="body2" component="p">
          {part.description}
        </Typography>
        <ImageGridList part={part} />
      </CardContent>
      <CardActions>
        <Button size="small">DETAILS</Button>
      </CardActions>
    </Card>
  );
}
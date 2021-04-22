import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Part } from '../utils/types';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);


export default function ImageGridList({ part }: { part: Part }) {
  const classes = useStyles();
  console.log(part.localPictures, 'localpic')
  const combinedPictures=[...part.pictures,...part.localPictures ]
  
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {combinedPictures? combinedPictures.map((image) => (
          <GridListTile key={image.uId}>
            <img src={image.url} alt={part.title} />
            <GridListTileBar
              title={part.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${part.title}`}>
                  <div className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        )) : null}
      </GridList>
    </div>
  );
}
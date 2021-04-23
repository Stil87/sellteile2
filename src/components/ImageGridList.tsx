import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Part } from '../utils/types';
import DeleteIcon from '@material-ui/icons/Delete';


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


export default function ImageGridList({ part, showPictureDelete, deletePicture }: { part: Part, showPictureDelete?: boolean, deletePicture:Function }) {
  const classes = useStyles();
  const combinedPictures = [...part.pictures, ...part.localPictures]
console.log(showPictureDelete)
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {combinedPictures ? combinedPictures.map((image, index) => (
          <GridListTile key={image.uId}>
            <img src={image.url} alt={part.title} />
            {showPictureDelete
              ? < GridListTileBar
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={

                  <IconButton onClick={()=>deletePicture(image.uId)} aria-label={`star ${index}`}>
                    <DeleteIcon color='primary' />
                  </IconButton>
                }
              /> : null}
          </GridListTile>
        )) : null}
      </GridList>
    </div>
  );
}
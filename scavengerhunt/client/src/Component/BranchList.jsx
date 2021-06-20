import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function VirtualizedList({
    branches =[]
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
          <List>
          {branches.map(elem => <ListItem >
            <ListItemText primary={`Branch - ${elem.name}`} />
            </ListItem>
            )}
          </List>
      

    </div>
  );
}

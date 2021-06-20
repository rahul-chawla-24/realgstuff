import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 300,
  },
});

export default function BranchCard({
    branch
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardHeader title={"Branch"}/>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {branch?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {branch?.institute_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {branch?.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {branch?.city}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {branch?.contact_numbers?.map(elem => `${elem} `)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
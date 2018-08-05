import React from 'react';

import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { Card, Icon, Grid, Image, GridColumn } from 'semantic-ui-react';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
};

const KartuSingular = props => {
  console.log(props.data.posts);
  const { classes } = props;
  return (
    <div>
      {props.data.posts.map(datum => {
        return (
          <Grid>
          <Grid.Column width={6}>
            <Image src={datum.seo.image} />
          </Grid.Column>
          <Grid.Column width={10}>
            <p style={{fontWeight: 'bold', fontSize:'15px'}}>{datum.seo.title}</p>
            <p style={{textAlign: 'left'}}>{datum.seo.description}</p>
            <p>{datum.author.display_name}</p>
          </Grid.Column>
        </Grid>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(KartuSingular);

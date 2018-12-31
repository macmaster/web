/**
 * Card for a video selection
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: { },
  content: { },
});

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography variant='h6'>
            Video Card
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(VideoCard);

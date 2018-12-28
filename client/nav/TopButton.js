/**
 * Absolute Floating Action Button
 * Returns the focus to the top
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';

const AbsoluteFab =
  withStyles(theme => ({
    root: {
      position: 'fixed',
      bottom: 4 * theme.spacing.unit,
      right: 4 * theme.spacing.unit,
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
  }))(Fab);

function TopButton(props) {
  const { classes, variant = 'home' } = props;

  let icon = ({
    up: <ArrowUpIcon />,
    home: <HomeIcon />,
  })[variant];

  return (
    <AbsoluteFab component='a' href='#'
      color='secondary'>
      {icon}
    </AbsoluteFab>
  );
}

export default TopButton;

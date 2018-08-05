import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0px'
  }
};

class Bottom extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}>
        <BottomNavigationAction component={Link} to="/" label="Home" icon={<RestoreIcon />} />
        <BottomNavigationAction component={Link} to="/SubBerita" label="SubBerita" icon={<FavoriteIcon />} />
        <BottomNavigationAction component={Link} to="/Teknologi" label="Teknologi" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

// Bottom.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Bottom);

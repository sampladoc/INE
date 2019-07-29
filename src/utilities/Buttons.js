import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    width: 30,
    height: 30,
    justifyContent: 'center',
    float: 'left',
  },
  iconSize: {
    fontSize: 20,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
    justifyContent: 'center',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});


function IconLabelButtons(props) {
    const { classes, buttonType, onClick, disabled=false, buttonText } = props;
    return (
      <div style={{justifyContent: 'center'}}>
            {
                {
                    'add': <Fab disabled={disabled} color="primary" aria-label="Add" className={classes.fab} onClick={onClick}><AddIcon className={classes.iconSize}/></Fab>,
                    'edit': <Fab disabled={disabled} color="secondary" aria-label="Edit" className={classes.fab} onClick={onClick}><EditIcon className={classes.iconSize}/></Fab>,
                    'delete': <Fab disabled={disabled} aria-label="Delete" className={classes.fab} onClick={onClick}>< DeleteIcon className={classes.iconSize}/></Fab>,
                }[buttonType]
            }  
      </div>
    );
}

IconLabelButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    buttonType: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    disabled: PropTypes.bool,
};
  
export default withStyles(styles)(IconLabelButtons);
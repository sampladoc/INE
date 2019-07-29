import React from 'react';
import  {makeStyles}  from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconLabelButtons from '../utilities/Buttons.js';
import { columns, states } from "../utilities/Utils";
let {AgeFromDateString} = require('age-calculator');

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex', 
    },
    formControl: {
        margin: theme.spacing(3),
    },
    formControl2: {
        margin: theme.spacing(0),
        minWidth: 240,
    },
    group: {
        margin: theme.spacing(1, 0),
    },
    gender: {
        marginTop: '10px',
    },
    margins: {
        marginTop: '15px',
    },
}));

export default function FormDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let [initData, setData] = React.useState(props.data);
    let [errors, setErrors] = React.useState(props.data);

    function handleClickOpen() {
        let tempData = JSON.parse(JSON.stringify(props.data));
        let tempData2 = {};
        
        Object.entries(tempData).forEach(([key, value]) => {
            if(value){
                tempData2[key] = false
            }
        });

        setErrors(tempData2)
        if(props.type !== "delete"){
            setOpen(true);
            setData(props.data)
        }else{
            props.update(props.index)
        }
        
    }

    function handleClose() {
        setOpen(false);
        setData(props.data)
    }

    function handleSave() {
        let eCount = 0
        let tempData = JSON.parse(JSON.stringify(initData));
        let tempData2 = {};
        
        Object.entries(tempData).forEach(([key, value]) => {
            if(value){
                tempData2[key] = false
            }else{
                tempData2[key] = true
                eCount++
            }
        });
        setErrors(tempData2)
        if(eCount === 0){
            props.update(tempData,props.index)
            setOpen(false);
        }
        
    }

    function handleEdit(e) {
        const targets = e.target.name
        const target = e.target.id || e.target.name
        const value = e.target.value
        let tempData = JSON.parse(JSON.stringify(initData));
        tempData[target] = value
        setData(tempData)
    }

    function calculateAge(e){
        let age = new AgeFromDateString(e.target.value).age;
        let tempData = JSON.parse(JSON.stringify(initData));
        tempData["dob"] = e.target.value
        tempData["age"] = age
        setData(tempData)

    }
    const fields = columns();
    return (
        <div>
            <IconLabelButtons
                buttonType={props.type}
                onClick={handleClickOpen}
                disabled={false}
                buttonText={""}
            ></IconLabelButtons>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Cambia el texto que desee editar.
                    </DialogContentText>
                    
                    {props.type === "edit" && open && fields.map(field => (
                        field.Header && field.accessor !== 'sex' && field.accessor !== 'state' ? (
                            <TextField
                                key={field.Header}
                                autoFocus
                                margin="dense"
                                id={field.accessor}
                                label={field.Header}
                                type={field.accessor === 'dob' ? 'date' : 'text'}
                                value={initData[field.accessor]}
                                onChange={field.accessor === 'dob' ? calculateAge : handleEdit}
                                fullWidth
                                disabled={field.accessor === 'age'}
                                className={classes.margins}
                                required
                                error={errors[field.accessor]}
                            />
                        ) : field.Header && field.accessor === 'sex' ? (
                                <div className={classes.gender} key={field.Header}>
                                    <FormLabel component="legend">{field.Header}</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        name={field.accessor}
                                        id={field.accessor}
                                        className={classes.group}
                                        value={initData[field.accessor]}
                                        onChange={handleEdit}
                                        error={errors[field.accessor]}
                                    >
                                        <FormControlLabel value="F" control={<Radio />} label="F" />
                                        <FormControlLabel value="M" control={<Radio />} label="M" />
                                    </RadioGroup>
                                </div>
                        ) : field.Header && field.accessor === 'state' && (
                            <FormControl className={classes.formControl2} key={field.Header}>
                                <InputLabel htmlFor={field.accessor}>{field.Header}</InputLabel>
                                    <Select
                                        value={initData[field.accessor]}
                                        onChange={handleEdit}
                                        id={field.accessor}
                                        name={field.accessor}
                                        error={errors[field.accessor]}
                                    >
                                        {states().map(state => (
                                            <MenuItem value={state}>{state}</MenuItem>
                                        ))}
                                    </Select>
                            </FormControl>
                        )
                    ))}

                    {props.type === "add" && open && fields.map(field => (
                        field.Header && field.accessor !== 'sex' && field.accessor !== 'state' ? (
                            <TextField
                                key={field.Header}
                                autoFocus
                                margin="dense"
                                id={field.accessor}
                                label={field.Header}
                                type={field.accessor === 'dob' ? 'date' : 'text'}
                                value={initData[field.accessor] || ''}
                                onChange={field.accessor === 'dob' ? calculateAge : handleEdit}
                                fullWidth
                                disabled={field.accessor === 'age'}
                                className={classes.margins}
                                required
                                error={errors[field.accessor]}
                            />
                        ) : field.Header && field.accessor === 'sex' ? (
                                <div className={classes.gender} key={field.Header}>
                                    <FormLabel component="legend">{field.Header}</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        name={field.accessor}
                                        id={field.accessor}
                                        className={classes.group}
                                        value={initData[field.accessor] || ''}
                                        onChange={handleEdit}
                                        error={errors[field.accessor]}
                                    >
                                        <FormControlLabel value="F" control={<Radio />} label="F" />
                                        <FormControlLabel value="M" control={<Radio />} label="M" />
                                    </RadioGroup>
                                </div>
                        ) : field.Header && field.accessor === 'state' && (
                            <FormControl className={classes.formControl2} key={field.Header}>
                                <InputLabel htmlFor={field.accessor}>{field.Header}</InputLabel>
                                    <Select
                                        value={initData[field.accessor] || ''}
                                        onChange={handleEdit}
                                        id={field.accessor}
                                        name={field.accessor}
                                        error={errors[field.accessor]}
                                    >
                                        {states().map(state => (
                                            <MenuItem value={state}>{state}</MenuItem>
                                        ))}
                                    </Select>
                            </FormControl>
                        )
                    ))}
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
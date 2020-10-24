import React from 'react';
import { useContext, useEffect } from 'react';
import HomeContext from '../../../Context/Home/HomeContext';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';
import '../../../App.css';

const useStyles = makeStyles(() => ({
    root: {
        borderRadius: 15,
        width: '100%',
        color: 'white',
        background: 'white',
        height: '150px'
    },labels:{
        color:indigo[500],
    }
}));


const Filter = () => {

    const homeContext = useContext(HomeContext);
    const { setProductFilter, ColumProducto ,selectFilter,setSelectFilter,setAllFilter} = homeContext;
    const classes = useStyles();
    useEffect(() => {

    }, [])
    
    return (
        <div className="card">
                <div className="card-body labelsFilter">
                    <div className="container-fluid row labelsFilter">
                       <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12 mt-4">
                    <TextField
                        label="Buscar"
                        id="margin-none"
                        helperText="Ingrese su Nombre"
                        className="labelsFilter"
                        onChange={setProductFilter}
                    />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12 mt-5">
                    <Select
                        value={selectFilter}
                        onChange={setSelectFilter}
                        className="labelsFilter"
                    >
                        {ColumProducto.map((name) => (
                            <MenuItem key={name.key} value={name.text} color={indigo[500]}>
                                {name.text}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12 mt-5">
                <Button variant="contained" color="primary" onClick={() =>setAllFilter()}>
                                Limpiar Filtro
                    </Button>
                </div>
                    </div>
                </div>
            </div>
    );
}

export default Filter;


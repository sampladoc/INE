import React from "react";
import FormDialog from '../components/formDialog';

//Preloaded Data
export function newPerson() {
    return [{
        firstName: 'Angela',
        lastName1: 'Solis',
        lastName2: 'Rodriguez',
        sex: 'F',
        state: 'JALISCO',
        city: 'Guadalajara',
        dob: '1981-11-01',
        age: '37',
    },
    {
        firstName: 'Angel',
        lastName1: 'Martinez',
        lastName2: 'Patlan',
        sex: 'M',
        state: 'JALISCO',
        city: 'Guadalajara',
        dob: '1989-09-11',
        age: '30',
    }];
};

//Format for adding a new person
export function blankPerson() {
    return {
        firstName: '',
        lastName1: '',
        lastName2: '',
        sex: 'M',
        state: '',
        city: '',
        dob: '',
        age: '',
    };
};

//Column settings for react table
export function columns(updateFunction, deleteFunction) {
    //Callback functions to send data back to main page tu update the state
    function updateData(d,i){
        updateFunction(d,i)
    }
    function deleteData(d){
        deleteFunction(d)
    }
    return [
        {
            Header: "Nombre",
            accessor: "firstName"
        },
        {
            Header: "Apellido Paterno",
            accessor: "lastName1"
        },
        {
            Header: "Apellido Materno",
            accessor: "lastName2"
        },
        {
            Header: "Sexo",
            accessor: "sex"
        },

        {
            Header: "Estado de nacimiento",
            accessor: "state"
        },
        {
            Header: "Ciudad",
            accessor: "city"
        },
        {
            Header: "Fecha de nacimiento",
            accessor: "dob"
        },
        {
            Header: "Edad",
            accessor: "age"
        },
        {
            Header: null,
            Cell: row => (
                <div>
                {/*Delete and Edit functionality passed through same component*/}
                    <FormDialog
                      key={"edit"}
                      data={row.original}
                      type={"edit"}
                      index={row.index}
                      update={updateData}
                    ></FormDialog>
                    <FormDialog
                      key={"delete"}
                      data={row}
                      type={"delete"}
                      index={row.index}
                      update={deleteData}
                    ></FormDialog>
                </div>
            )
        }
    ]
}

export function states() {
    
    return [
        'AGUASCALIENTES',
        'BAJA CALIFORNIA NORTE',
        'BAJA CALIFORNIA SUR',
        'COAHUILA',
        'CHIHUAHUA',
        'COLIMA',
        'CAMPECHE',
        'CHIAPAS',
        'DISTRITO FEDERAL',
        'DURANGO',
        'GUERRERO',
        'GUANAJUATO',
        'HIDALGO',
        'JALISCO',
        'MICHOACAN',
        'MORELOS',
        'MEXICO',
        'NAYARIT',
        'NUEVO LEON',
        'OAXACA',
        'PUEBLA',
        'QUERETARO',
        'QUINTANA ROO',
        'SINALOA',
        'SAN LUIS POTOSI',
        'SONORA',
        'TAMAULIPAS',
        'TABASCO',
        'TLAXCALA',
        'VERACRUZ',
        'YUCATAN',
        'ZACATECAS',
    ]
}

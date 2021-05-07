import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const styles={

  styles:{
    color:'white'
  },
  container:{
    display:'flex',
    padding:'0 3rem'
  },
  cssoptions:{
    backgroundColor:'#181818',
    border:'0 solid #181818' ,
    color:'white',

  }
}

export default function InputSelect(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const { selectOptions } = props;

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div style={styles.container}>

    <FormControl className={classes.formControl} style={{color:'white'}}>
      <InputLabel htmlFor="age-native-helper" style={{color:'white'}}>Tipo de lugar</InputLabel>
      <NativeSelect
        style={{color:'white'}}
        value={state.age}
        onChange={handleChange}
        inputProps={{
          name: "age",
          id: "age-native-helper",
        }}
      >
        {selectOptions.map((myOption) => {
          return (
            <option key={myOption.id} value={myOption.name}>
              {myOption.name}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText style={{color:'white'}}>Seleccione un tipo</FormHelperText>
    </FormControl>
    </div>

  );
}

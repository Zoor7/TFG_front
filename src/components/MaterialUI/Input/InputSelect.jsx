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
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-native-helper">Tipo de lugar</InputLabel>
      <NativeSelect
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
      <FormHelperText>Seleccione un tipo</FormHelperText>
    </FormControl>
  );
}

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { navigate, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: theme.palette.text.primary,
    cursor: 'pointer',
  },
  
}));

export default function AppBar2({change, check}) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "transparent" }}>
        <Toolbar style={{ border: "0.5px solid rgba(0, 0, 0, 0.12)" }}>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            style={{ fontFamily: "Lato, sans-serif" }}
            onClick={()=>{
              navigate('/search');
            }}

          >
            Git-Stalker
          </Typography>
          <div>
            <FormControlLabel
              value="start"
              control={<Switch 
                  color="primary"
                  onChange={change}
                  checked ={check}
                />}
              label=""
              labelPlacement="start"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

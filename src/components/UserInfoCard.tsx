import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 400,
    margin: '2px',
    marginTop: '0px',
    marginLeft: '50px',
    transition: 'transform 0.3s, filter 0.3s',
        '&:hover': {
          transform: 'scale(1.005)', 
          filter: 'drop-shadow(0 0 2px #fff)', 
        },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function UserInfoCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  // getting user data from local storage 
  const userDataString = localStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;
  if(userData.location == null){
    userData.location == "Earth";
  }


  return (
    <Box display="flex" justifyContent="start">
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {userData.login}
          </Typography>
          <Typography variant="h5" component="h2">
            {userData.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {userData.location}
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Followers: {userData.followers}
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Following: {userData.following}
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Public Repositories {userData.public_repos}
          </Typography>
          <br></br>
          <Typography variant="body2" component="p">
          {userData.bio}
          </Typography>
        </CardContent>
        
      </Card>
    </Box>
  );
}

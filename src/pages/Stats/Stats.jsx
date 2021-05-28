import React, { useContext, useEffect } from "react";
import UserContext from "../../context/userContext/userContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import avatarPlaceholder from "../../assets/images/avatarPlaceholder.webp";

import "./stats.scss";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
});

const Stats = () => {
  const { userState } = useContext(UserContext);
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      if (!userState.username) {
        history.replace("/");
      }
    }, 200);
  }, [userState, history]);

  return (
    <div className="main-stats container">

      <div className="flex-container-stats">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={`Avatar ${userState.username}`}
              height="160"
              image={userState.avatar || avatarPlaceholder}
              title={`Avatar ${userState.username}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {userState.username}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b> Likes:</b> {userState.likes.length}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b> Email:</b> {userState.email}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b> Lugares:</b> {userState.places.length}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b> Comentarios:</b> {userState.comments.length}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography
              className="stats-info"
              variant="body2"
              color="textPrimary"
              component="h5"
            >
              <b>Estadísticas</b>
            </Typography>
          </CardActions>
        </Card>
      </div>

    </div>
  );
};

export default Stats;

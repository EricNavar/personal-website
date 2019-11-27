import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    card: {
        height: 500,
        width: 580,
    },
    media: {
        height: 140,
        width: 180,
    }
}));

export default function FrontPage(props) {
    return (
        <div>
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                        className="media"
                        image={require ("./images/ProfilePic.jpg")}
                        title="Eric Navar"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Eric Navar
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Computer Science Major at UF
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
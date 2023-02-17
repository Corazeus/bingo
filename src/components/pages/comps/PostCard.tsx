import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface CardDetails{
    post:string;
    user:string;
    date:string;
    id: string;
    replies:string;
}

export default function iCard(props:CardDetails) {
  return (
    <Card sx={{ borderRadius:'10%', maxWidth: 345, textAlign: 'left', marginBottom:'1rem', marginRight: '1rem',marginTop: '8px', width: 300, height: 'fit-content', boxShadow:'invert'}}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left', fontSize: 'x-small', marginTop: '3px'}}>
         Post ID: {props.id}
        </Typography> 
        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left', fontSize: 'x-small', marginTop: '3px'}}>
         Posted by: {props.user}
        </Typography> 
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
          {props.post}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>
         {props.replies}
        </Typography> 
        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left', fontSize: 'x-small', marginTop: '3px'}}>
         Date posted: {props.date}
        </Typography> 

        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', fontSize: 'x-small', marginTop: '3px', justifyContent:'center', paddingTop:'2rem'}}>
          <a href='/replypost'><Button sx={{height:'30px', width:'200px', fontSize:'small', alignItems:'center'}}> Reply to post </Button></a>
        </Typography> 
      </CardContent>

    </Card>
  );
}

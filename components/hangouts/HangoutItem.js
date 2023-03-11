import {useRouter} from "next/router";
import Card from '../ui/Card';
import classes from './HangoutItem.module.css';

function HangoutItem(props) {
  const router = useRouter();
  const handleClick=()=>{
    //console.log(`item id is ${props.id}`);
    router.push(`/${props.id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleClick}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default HangoutItem;

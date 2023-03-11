import HangoutItem from './HangoutItem';
import classes from './HangoutList.module.css';

function HangoutList(props) {
  
  return (
    <ul className={classes.list}>
      {props.hangouts.map((e) => (
        <HangoutItem
          key={e._id}
          id={e._id}
          image={e.image}
          title={e.title}
          address={e.address}
        />
      ))}
    </ul>
  );
}

export default HangoutList;

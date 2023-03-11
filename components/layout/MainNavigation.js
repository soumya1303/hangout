import classes from './MainNavigation.module.css';
import Link from "next/link";

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Hangouts</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Hangouts</Link>
          </li>
          <li>
            <Link href='/newhangout'>Add New Hangout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

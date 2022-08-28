import Image from 'next/image';
import classes from './authForm.module.css';

function AuthForm({ handleLogin }) {
  return (
    <section className={classes.container}>
      <div className={classes.spider}>
        <Image
          src="/pictures/spider.png"
          alt="Marvel"
          width={200}
          height={300}
        />
      </div>
      <div className={classes.auth}>
        <div>
          <h1>I am an User!</h1>
          <h4>Press Login to start an amazing experience!</h4>
          <button className={classes.btn} onClick={() => handleLogin()}>
            Login
          </button>
        </div>
      </div>
      <div className={classes.iron}>
        <Image
          src="/pictures/ironMan.png"
          alt="Marvel"
          width={200}
          height={280}
        />
      </div>
    </section>
  );
}

export default AuthForm;

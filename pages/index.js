import heroApi from '../api/heroApi';
import AllHeros from '../components/heroList/AllHeros';
import classes from '../styles/home.module.css';

function Home({ heros }) {
  return (
    <main className={classes.main}>
      <AllHeros heros={heros} />;
    </main>
  );
}

export const getStaticProps = async (ctx) => {
  const resp = await heroApi.get('/characters?limit=50');
  const data = resp.data['data']['results'];
  return {
    props: {
      heros: data,
    },
  };
};

export default Home;

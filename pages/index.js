import heroApi from '../api/heroApi';
import AllHeros from '../components/heroList/AllHeros';

function Home({ heros }) {
  return <AllHeros heros={heros} />;
}

export const getStaticProps = async (ctx) => {
  const resp = await heroApi.get('/characters?limit=10');
  const data = resp.data['data']['results'];
  return {
    props: {
      heros: data,
    },
  };
};

export default Home;

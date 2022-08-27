import heroApi from '../api/heroApi';
import AllHeros from '../components/heroList/AllHeros';

function Home({ heros }) {
  return (
    <main>
      <AllHeros heros={heros} />;
    </main>
  );
}

export const getStaticProps = async (ctx) => {
  const resp = await heroApi.get('/characters?limit=100');
  const data = resp.data['data']['results'];
  return {
    props: {
      heros: data,
    },
  };
};

export default Home;

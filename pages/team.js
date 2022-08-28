import heroApi from '../api/heroApi';
import Team from '../components/team/Team';

const team = ({ heros }) => {
  return (
    <div>
      <Team herosStatic={heros} />
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const resp = await heroApi.get('/characters?limit=100');
  const data = resp.data['data']['results'];
  return {
    props: {
      heros: data,
    },
  };
};

export default team;

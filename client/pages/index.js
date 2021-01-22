import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    //server request
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: {
          Host: 'ticketing.dev',
        },
      }
    );
    return data;
  } else {
    //browser request
    const { data } = await axios.get('/api/users/currentuser');
    return data;
  }
};

export default LandingPage;

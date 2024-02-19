import { Typography, Container } from '@mui/material';
import axios from 'axios';
import ImageCard from '../components/cards/ImageCard';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: '98.5%', // Adjust the maximum width as needed
  margin: '50x',
  padding: '10px',
  backgroundColor: '#b3b3b3', // Add a light background color
  borderRadius: '8px', // Add rounded corners for a softer look
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
};

const headerStyle = {
  color: '#333', // Dark text color
};

const subHeaderStyle = {
  color: '#555', // Slightly lighter text color
};

const Index = ({ images }) => {
  return (
    <>
      <Container style={containerStyle}>
        <Typography variant="h3" gutterBottom style={headerStyle}>
          TaskPhin
        </Typography>
        <Typography variant="h6" paragraph style={subHeaderStyle}>
          Task Management Made Easier For Hiring
        </Typography>
        <Typography paragraph style={{ color: '#777' }}>
          Say goodbye to lost assessments and hello to a faster evaluation process.
        </Typography>
      </Container>

      <div className="jumbotron text-center color-grey">
        <h1>Global Candidates</h1>
        <hr style={{ borderBottom: '5px solid silver', width: '100px' }} />
      </div>
      <div className="container-fluid">
        <div className="row pt-10">
          {images?.map((image) => (
            <div key={image._id} className="col-md-2">
              <ImageCard key={image._id} image={image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:3000/api/images');
  return {
    props: {
      images: data,
    },
  };
}

export default Index;

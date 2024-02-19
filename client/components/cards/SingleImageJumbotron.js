import { Chip, Button, CircularProgress, Typography } from "@mui/material";
import Gravatar from 'react-gravatar';

const SingleImageJumbotron = ({ image, user, loading, handleFreeEnrollment, enrolled }) => {
  const renderImage = () => {
    if (image.image) {
      return (
        <img
          src={image.image.Location}
          alt={image.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover", borderRadius: "8px" }}
        />
      );
    } else {
      // Display Gravatar default avatar when no image is available
      return (
        <Gravatar
         
        />
      );
    }
  };

  return (
    <div style={{ textAlign: "center", background: "#add8e6", color: "primary", padding: "30px" ,margin:"100px"}}>
      <div className="row">
        <div className="col-md-8 p-4">
          <Typography variant="h1" className="font-weight-bold" style={{ color: "pink" }}>
            {image.name}
          </Typography>
          <Typography variant="h4" style={{ color: "primary" }}>
            <p>{image.description}</p>
          </Typography>
          <br />
          <div className="chips-container">
            {image.category && (
              <Chip
                label={image.category}
                style={{
                  backgroundColor: "#03a9f4",
                  color: "#fff",
                  marginRight: "4px",
                }}
                className="mr-10"
              />
            )}
            
            {image.currentStatus && (
              <Chip
                label={image.currentStatus}
                style={{
                  backgroundColor: "#ff0000",
                  color: "#fff",
                  marginRight: "4px",
                }}
                className="mr-10"
              />
            )}
            {image.phone && (
              <Chip
                label={image.phone}
                style={{
                  backgroundColor: "green",
                  color: "#fff",
                  marginRight: "4px",
                }}
                className="mr-10"
              />
            )}
            {image.email && (
              <Chip
                label={image.email}
                style={{
                  backgroundColor: "violet",
                  color: "white",
                  marginRight: "4px",
                }}
                className="mr-10"
              />
            )}
          </div>
        </div>
        <div className="col-md-4 p-4">
          {renderImage()}
          <hr />
          {loading ? (
            <div className="d-flex justify-content-center">
              <CircularProgress color="secondary" />
            </div>
          ) : (
            <Button
              className="mb-3 mt-3 cool-button"
              variant="contained"
              color="secondary"
              fullWidth
              disabled={loading}
              onClick={handleFreeEnrollment}
            >
              <Typography variant="button" style={{ color: "white" }}>
                {user ? enrolled.status ? "Saved" : "Save" : "Login to save"}
              </Typography>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleImageJumbotron;

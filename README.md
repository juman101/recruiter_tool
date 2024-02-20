# Recruitment Tool

Recruitment Assistance is an all-purpose recruitment solution designed to streamline the hiring process for both job seekers and recruiters.
It offers a comprehensive platform for managing candidates, evaluating their skills, and tracking their progress through different stages of recruitment.


## Features

- **Global Candidate Showcase**: Job seekers can create profiles to showcase their skills and qualifications, increasing their visibility to recruiters from various organizations worldwide. Candidates can put up their profiles without logging in.

- **Dedicated Register and Login Panel for Recruiters**: Recruiters have a dedicated register and login panel to access the platform, allowing for secure management of candidate applications.

- **Searchable Global Candidate Showcase**: The global candidate showcase displays all verified candidates available for hiring. It features a search box that returns candidates matching the search text most appropriately. Recruiters can save candidates for further tracking and updating.

- **Candidate Information Management**: Recruiters can update each candidate's information, including application status, directly from the platform. 

- **Recruiter Dashboard**: Each recruiter has a dedicated dashboard where saved candidates are presented, allowing them to track candidates and manage their applications efficiently.

- **Candidate Management Dashboard**: Recruiters have access to a candidate management dashboard, where they can view and manage candidates' applications they've created.

- **Candidate Lifecycle Management**: The tool facilitates managing candidates through different stages of recruitment, including:
  - Listed
  - Contacted
  - Interview Scheduled
  - Offer Extended
  - Hired
  - Rejected

- **Candidate Information**: Each candidate's profile includes the following details:
  - Candidate name
  - Contact information (email, phone)
  - Skills/Qualifications
  - Current status
  - Additional Attribute: Expected Salary (numeric value)

## Installation
I have deployed the backend on render so for running the Website on localhost only frontend installation is needed
### Install Dependencies
- cd client
- npm install
### Start the Program
- npm run dev

### Install Dependencies
- cd recruitment-assistance/client
- npm install
- cd ../server
- npm install
  
### Create .env File in server
PORT, JWT_SECRET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_API_VERSION, EMAIL_FROM, DB_CONNECTION_URL

### Start the Program
#### Running Client Side
- cd ../client
- npm run dev

#### Running Server Side
- cd ../server
- npm start

### Database Setup
You can use a PostgreSQL database provided by render.com. Set up your database and replace the DB_CONNECTION_URL in the .env file with your database connection URL.


## Technologies
### Frontend
- Next.js
- React
### Backend
- Node.js
- Express.js
### Database
- PostgresSQL - render.com
- AWS-S3

## Future Scope
- auto score calculation from uploaded by parsing pdf
- generating score for specific job using open ai
- improving the dashboard and introducing more analytical features 

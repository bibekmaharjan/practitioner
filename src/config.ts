import Config from './domain/misc/Config';

const config: Config = {
  endpoints: {
    practitioners: 'http://localhost:8080/practitioners',
    editPractitioners: 'http://localhost:8080/practitioners/{id}',
    deletePractitioners: 'http://localhost:8080/practitioners/{id}',
    practitionerDetails: 'http://localhost:8080/practitioners/{id}',
  },
};

export default config;

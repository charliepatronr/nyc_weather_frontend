import React from "react";
import {
  Container,
  Grid,
  Icon,
  Header,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";

// About page for more information on the apps architecture
const About = () => (
  <div>
    <Container text style={{ marginTop: "7em" }}>
      <Header as="h1">CNYCN Weather Architecture</Header>
      <h3>Backend</h3>
      <p>
        For the backend this application uses Ruby on Rails and a PostgreSQL
        database. This application has a schema which includes one model
        "Cities". This allows us to persist the current cities we want to
        display the weather for on the deployed front end. This design decision
        allows for scalability of the application, and opens up the possibility
        to add new features, such as adding new cities. The Open Weather Maps
        API is called via the backend, making this more secure and storing its
        respective key in a better way. A seperate Model called WeatherAPI was
        created to encapsulate the task of calling the OpenWeatherAPI and to
        create new request instances.
      </p>
      <h3>Frontend</h3>
      <p>
        The frontend was built with React. Using functional components and
        hooks, makes the code more readable and maintanable. To display the
        current weather for the 5 different cities I employed the Google Maps
        API. This gives the end user a more visual representation of each city
        and the differences in weather. The application also allows the user to
        view the weather for any coordinates in the world. The user simply has to 
        double click on the desired place on the map. Then a blue marker will pop 
        up in this location. After this the user clicks on the marker and the 
        weather will be displayed. The Semantic UI framework was used to
        assist in styling.
      </p>
      <h3>Deployement</h3>
      <p>
        Heroku was used for the deployement of this Full Stack application. Each
        repository nyc-weather-backend and nyc-weather-frontend was deployed
        seperately. Github was used for to allow for every push on the "master"
        branch for each respective repository to be deployed.
      </p>
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "6em 0em", height: "20em" }}
    >
      <Container>
        <Grid divided inverted stackable centered>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Contact" />
              <List link inverted>
                <List.Item as="a">+1 (718) 753-4386</List.Item>
                <List.Item as="a">patronr.jc@gmail.com</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Full Stack Development</List.Item>
                <List.Item as="a">Quality Assurance</List.Item>
                <List.Item as="a">Agile Development</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h4" inverted>
                Social Media
              </Header>
              <Menu.Item
                href="https://www.linkedin.com/in/juan-carlos-patron/"
                position="right"
                target="_blank"
              >
                <Icon name="linkedin" inverted size="large" />
              </Menu.Item>
              <Menu.Item
                href="https://github.com/charliepatronr"
                position="right"
                target="_blank"
              >
                <Icon name="github" inverted size="large" />
              </Menu.Item>
              <Menu.Item
                href="https://jcpatronr.com"
                position="right"
                target="_blank"
              >
                <Icon name="desktop" inverted size="large" />
              </Menu.Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default About;

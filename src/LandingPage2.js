import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Map from './Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import {
  faLinkedin,
} from '@fortawesome/free-solid-svg-icons';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */

 //Heading 
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Center for NYC Neighborhoods'
      inverted
      style={{
        fontSize: mobile ? '1em' : '3em',
        fontWeight: 'normal',
        marginBottom: '1em',
        marginTop: mobile ? '1.5em' : '1.5em',
      }}
    />

  <Grid column ={12} container stackable verticalAlign='middle' horizontalAlign= 'middle'>
        <Grid.Row>
          <Grid.Column >
            <p style={{ fontSize: '1emm' }}>
              The CNYCN Weather application displays the weather in five different cities utilizing the Open Weather Map API, 
              which allows us to view the current weather for each city along with a 7 day forecast.
            </p>
            <p style={{ fontSize: '1emm' }}>
              To utilize the application scroll down to the Google Map, and click on one of the markers in the cities to view 
              the weather. To get more information on the weather click on <strong>Forecast</strong>. 
              
            </p>
            <p>For more details on the application's architecture click on <strong>About</strong> in the nav bar.</p>

{/* 

            <p style={{ fontSize: '1emm' }}>
              The application's architecture includes a Ruby on Rails API backend with a PostgreSQL db which allows us to store
              the cities we want to display and add new cities with usage. 
              On the frontend the application uses React using functional components and hooks for scalability.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
              <p style={{ fontSize: '1emm' }}>
                Lastly this application uses the Google Maps API to render the current cities we want to display the 
                weather for more easily for the end user.
            </p>
            <p style={{ fontSize: '1emm' }}>
                I would like to thank Karen, Cristian and Christopher for the interview process and hopefully you find 
                the application built useful. 
            </p> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    {/* <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    /> */}
    {/* <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button> */}
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

 //Desktop Nav bar and container
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      //NAV BAR
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 500, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active position='left'>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>About</Menu.Item>
                <Menu.Item as='a'>Linkedin</Menu.Item>
                <Menu.Item as='a'>Portfolio</Menu.Item>
                <Menu.Item as='a'>Github</Menu.Item>
                
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

//Mobile nav bar and container
class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
                <Menu.Item as='a'>Linkedin</Menu.Item>
                <Menu.Item as='a'>Portfolio</Menu.Item>
                <Menu.Item as='a'>Github</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Linkedin
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Portfolio
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const LandingPage2 = (props) => (
  <ResponsiveContainer>
    {/* padding: '8em 0em' */}
    <Segment inverted style={{ height: '101.5vh'}} vertical>
      <Map cities={props.cities} history={props.history}/>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }} >
      <Container>
        <Grid divided inverted stackable centered>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Contact' />
              <List link inverted>
                <List.Item as='a'>+1 (718) 753-4386</List.Item>
                <List.Item as='a'>patronr.jc@gmail.com</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Full Stack Development</List.Item>
                <List.Item as='a'>Quality Assurance</List.Item>
                <List.Item as='a'>Agile Development</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h4' inverted>
                Social Media
              </Header>
              <Menu.Item
                href="https://www.linkedin.com/in/juan-carlos-patron/"
                position="right"
                target="_blank"
                >
                <Icon name="linkedin" inverted color='white' size="large" />
              </Menu.Item>
              <Menu.Item
                href="https://github.com/charliepatronr"
                position="right"
                target="_blank"
                >
                <Icon name="github" inverted color='white' size="large" />
              </Menu.Item>
              <Menu.Item
                href="https://jcpatronr.com"
                position="right"
                target="_blank"
                >
                <Icon name="desktop" inverted color='white' size="large" />
              </Menu.Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default LandingPage2
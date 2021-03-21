import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Map from './Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './About'

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

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

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
          </Grid.Column>
        </Grid.Row>
      </Grid>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

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
            style={{ minHeight: this.props.size, padding: '1em 0em' }}
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
                <Menu.Item as='a' 
                active={!this.props.about} 
                position='left'
                onClick ={() => {this.props.showHome()}}
                >
                  Home
                </Menu.Item>
                <Menu.Item as='a'
                active={this.props.about} 
                onClick= {() =>this.props.showAbout() }
                >
                  About
                  </Menu.Item>
                <Menu.Item 
                  href="https://www.linkedin.com/in/juan-carlos-patron/"
                  target="_blank">
                    Linkedin
                  </Menu.Item>
                <Menu.Item as='a'
                  href="https://jcpatronr.com"
                  target="_blank">
                  Portfolio
                  </Menu.Item>
                <Menu.Item as='a'
                  href="https://github.com/charliepatronr"
                  target="_blank">
                    Github
                  </Menu.Item>
                
              </Container>
            </Menu>
            {this.props.about ? null : <HomepageHeading/>}
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

  handleToggle = () => this.setState({ sidebarOpened: true})

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
            <Menu.Item as='a' active
            onClick= {() => {
              this.props.showHome()
              this.handleSidebarHide()
            }}
            >Home
            </Menu.Item>
            <Menu.Item 
              as='a'
              inverted
              onClick= {() =>{
                this.handleSidebarHide()
                this.props.showAbout()
              }}>
              About
            </Menu.Item>
            <Menu.Item as='a'
              href="https://www.linkedin.com/in/juan-carlos-patron/"
              onClick={()=> this.handleSidebarHide()}
              target="_blank">
              Linkedin
            </Menu.Item>
            <Menu.Item as='a'
              href="https://jcpatronr.com"
              onClick={()=> this.handleSidebarHide()}
              target="_blank">
              Portfolio
              </Menu.Item>
            <Menu.Item as='a'
              href="https://github.com/charliepatronr"
              onClick={()=> this.handleSidebarHide()}
              target="_blank">
              Github
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: this.state.size, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right' >
                    <Button as='a' 
                      inverted
                      onClick= {() =>this.props.showAbout()}>
                      About
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}
                      position='left'
                      onClick ={() => {this.props.showHome()}}
                      target="_blank">
                      Home
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              {this.props.about ? null : <HomepageHeading/>}            
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

const ResponsiveContainer = ({ children, about, showAbout, size, showHome, sizeMobile }) => (

  <MediaContextProvider>
    {/* ****************************************************************************** */}
    <DesktopContainer 
      about={about} 
      showAbout={showAbout} 
      showHome = {showHome}
      size={size}> 
      {children}
    </DesktopContainer>
    <MobileContainer 
      about={about} 
      showAbout={showAbout} 
      showHome = {showHome}
      size={sizeMobile}
    > {children}</MobileContainer>
    {/* ***************************************************************************** */}
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

class LandingPage2 extends Component {
  constructor() {
    super()
    this.state = {
      about: false, 
      size: 500,
      sizeMobile: 350
    }
  }
  showAbout = () => this.setState({about: true , size:15})
  showHome = () => this.setState({about: false , size:500})

  render() {
    

    return (
      <ResponsiveContainer 
      about={this.state.about} 
      showAbout ={this.showAbout} 
      size={this.state.size}
      showHome ={this.showHome}
      >

      { !this.state.about ? (
      <div>
          <Segment inverted  vertical>
            <Map cities={this.props.cities} history={this.props.history}/>
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
      </div> ) : <About/> 
      }
    
      </ResponsiveContainer>

    )
  };
}


export default LandingPage2
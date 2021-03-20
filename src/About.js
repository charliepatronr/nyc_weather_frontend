import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Icon,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>CNYCN Weather Architecture</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse nec purus odio. Phasellus congue sollicitudin sapien eu accumsan. 
        Suspendisse potenti. Integer hendrerit, nibh ut posuere suscipit, justo mauris facilisis nibh, 
        in bibendum dui dolor et velit. Integer nec dui vestibulum, lobortis massa in, consectetur lectus. 
        Curabitur nisl leo, bibendum a suscipit id, aliquet at ex. Morbi eu imperdiet nulla. Fusce laoreet 
        dolor vel turpis mollis semper. Curabitur mattis porta libero, et bibendum orci maximus vel. Etiam sollicitudin, 
        orci non elementum rutrum, ligula libero elementum mauris, eu rhoncus ligula dui vitae nunc. Vestibulum lobortis 
        feugiat consectetur. Donec mollis nulla tortor, in facilisis libero condimentum nec. Ut lectus neque, faucibus in 
        molestie in, luctus at felis. 
        Proin quis nisi ac nisl congue fermentum
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse nec purus odio. Phasellus congue sollicitudin sapien eu accumsan. 
        Suspendisse potenti. Integer hendrerit, nibh ut posuere suscipit, justo mauris facilisis nibh, 
        in bibendum dui dolor et velit. Integer nec dui vestibulum, lobortis massa in, consectetur lectus. 
        Curabitur nisl leo, bibendum a suscipit id, aliquet at ex. Morbi eu imperdiet nulla. Fusce laoreet 
        dolor vel turpis mollis semper. Curabitur mattis porta libero, et bibendum orci maximus vel. Etiam sollicitudin, 
        orci non elementum rutrum, ligula libero elementum mauris, eu rhoncus ligula dui vitae nunc. Vestibulum lobortis 
        feugiat consectetur. Donec mollis nulla tortor, in facilisis libero condimentum nec. Ut lectus neque, faucibus in 
        molestie in, luctus at felis. 
        Proin quis nisi ac nisl congue fermentum
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse nec purus odio. Phasellus congue sollicitudin sapien eu accumsan. 
        Suspendisse potenti. Integer hendrerit, nibh ut posuere suscipit, justo mauris facilisis nibh, 
        in bibendum dui dolor et velit. Integer nec dui vestibulum, lobortis massa in, consectetur lectus. 
        Curabitur nisl leo, bibendum a suscipit id, aliquet at ex. Morbi eu imperdiet nulla. Fusce laoreet 
        dolor vel turpis mollis semper. Curabitur mattis porta libero, et bibendum orci maximus vel. Etiam sollicitudin, 
        orci non elementum rutrum, ligula libero elementum mauris, eu rhoncus ligula dui vitae nunc. Vestibulum lobortis 
        feugiat consectetur. Donec mollis nulla tortor, in facilisis libero condimentum nec. Ut lectus neque, faucibus in 
        molestie in, luctus at felis. 
        Proin quis nisi ac nisl congue fermentum
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse nec purus odio. Phasellus congue sollicitudin sapien eu accumsan. 
        Suspendisse potenti. Integer hendrerit, nibh ut posuere suscipit, justo mauris facilisis nibh, 
        in bibendum dui dolor et velit. Integer nec dui vestibulum, lobortis massa in, consectetur lectus. 
        Curabitur nisl leo, bibendum a suscipit id, aliquet at ex. Morbi eu imperdiet nulla. Fusce laoreet 
        dolor vel turpis mollis semper. Curabitur mattis porta libero, et bibendum orci maximus vel. Etiam sollicitudin, 
        orci non elementum rutrum, ligula libero elementum mauris, eu rhoncus ligula dui vitae nunc. Vestibulum lobortis 
        feugiat consectetur. Donec mollis nulla tortor, in facilisis libero condimentum nec. Ut lectus neque, faucibus in 
        molestie in, luctus at felis. 
        Proin quis nisi ac nisl congue fermentum
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse nec purus odio. Phasellus congue sollicitudin sapien eu accumsan. 
        Suspendisse potenti. Integer hendrerit, nibh ut posuere suscipit, justo mauris facilisis nibh, 
        in bibendum dui dolor et velit. Integer nec dui vestibulum, lobortis massa in, consectetur lectus. 
        Curabitur nisl leo, bibendum a suscipit id, aliquet at ex. Morbi eu imperdiet nulla. Fusce laoreet 
        dolor vel turpis mollis semper. Curabitur mattis porta libero, et bibendum orci maximus vel. Etiam sollicitudin, 
        orci non elementum rutrum, ligula libero elementum mauris, eu rhoncus ligula dui vitae nunc. Vestibulum lobortis 
        feugiat consectetur. Donec mollis nulla tortor, in facilisis libero condimentum nec. Ut lectus neque, faucibus in 
        molestie in, luctus at felis. 
        Proin quis nisi ac nisl congue fermentum
      </p>

    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '6em 0em', height: '20em' }}>
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
  </div>
)

export default FixedMenuLayout
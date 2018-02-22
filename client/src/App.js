import React, { Component } from 'react'
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <body>
        <Grid>
          <Row>
            <Col xs={12}>
              <PageHeader>
                Hello world!
              </PageHeader>
            </Col>
          </Row>
        </Grid>
      </body>
    )
  }
}


export default App

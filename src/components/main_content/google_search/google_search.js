import React from 'react';
import { FormControl, FormGroup, Button, InputGroup } from 'react-bootstrap';

import './google_search.scss';

export default class GoogleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    window.open(`https://www.google.com/search?q=${encodeURI(this.state.searchValue)}`, '_self');
  }
  handleChange(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="search-container">
        <div className="logo">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="Google logo"
          />
        </div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                value={this.state.searchValue}
                placeholder="Search Google..."
                onChange={this.handleChange}
              />
              <InputGroup.Button>
                <Button type="submit">
                  Submit
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    );
  }
}

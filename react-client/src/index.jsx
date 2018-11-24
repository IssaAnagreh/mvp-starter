import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        console.log('/: success api GET hit', data)
        this.setState({
          items : data
        })
      },
      error: (err) => {
        console.log('componentDidMount error', err);
      }
    });
  }

  add(newURL) {
    $.ajax({
      type: 'POST',
      url: '/items',
      data: {url: newURL},
      success: (data) => {
        console.log('/items: success api POST hit')
      },
      error: (err) => {
        console.log('data from Post error: ', newURL)
        console.log('add error', err);
      }
    });
  }

  render () {
      return (<div>
        <h1>Gallery</h1>
        <List items={this.state.items} add={this.add.bind(this)}/>
      </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
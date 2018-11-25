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

  remove(oldURL) {
    $.ajax({
      url: '/items',
      type: 'DELETE',
      data: {url: oldURL},
      success: (data) => {
        console.log('/items: success api DELETE hit')
      },
      error: (err) => {
        console.log('data from DELETE error: ', oldURL)
        console.log('add error', err);
      }
    });
  }

  render () {
      return (<div>
        <h1>Gallery</h1>
        <input id='username' placeholder="Insert username" />
        <button> send </button>
        <List items={this.state.items} add={this.add.bind(this)} remove={this.remove.bind(this)} />
      </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
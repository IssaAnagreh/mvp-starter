import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newURL: '',
      number: 0
    }
  }

  onChange (e) {
    if (!e.target.value.includes(' ')) {
      this.setState({
        newURL: e.target.value
      })
    } else {
      console.log('spaces found in url')
      this.setState({
        newURL: 'https://avatars0.githubusercontent.com/u/36266902?v=4'
      })
    }
  }

  goToAdd() {
    console.log("got the URL from the List.jsx, thank you",this.state.newURL)
    this.props.add(this.state.newURL)
    $('#url').val('');
    window.location.reload();
  }

  toNext () {
    var current = this.state.number
    if (this.state.number < this.props.items.length - 1) {
      this.setState ({
        number: current+1
      })
    } else {
      console.log('the end of images')
    }
  }

  toPrev () {
    var current = this.state.number
    if (this.state.number > 0) {
      this.setState ({
        number: current-1
      })
    } else {
      console.log('the start of images')
    }
  }

  goToRemove () {
    this.props.remove(this.props.items[this.state.number].url)
    window.location.reload();
  }

  render () {
      if (this.props.items.length > 0) {
      return (<div>
           <br /> 
           <div id='bar'>
           <input id="url" placeholder="Insert image URL" onChange={this.onChange.bind(this)}></input> <br />
           <button id="submit" onClick={this.goToAdd.bind(this)}> submit </button>
           </div>

           <p>There are { this.props.items.length } images. </p>

           <button id="delete" onClick={this.goToRemove.bind(this)}>
            delete
           </button>
           <dev>
           <ListItem imgs={this.props.items} img={this.props.items[this.state.number]} />
           <br />

           <button id="prev" onClick={this.toPrev.bind(this)}>
            &#8592;
           </button>

           <button id="next" onClick={this.toNext.bind(this)}>
            &#8594;
           </button>
           </dev>
         </div>)
    } else {
      return (<div> estanna shway ya zamm </div>)
    }
  }
}

export default List;
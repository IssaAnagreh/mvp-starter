import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return <div id='img' >
  	  <img id='pic' src={this.props.img.url} /> <br />
    </div>
  }
}

export default ListItem;

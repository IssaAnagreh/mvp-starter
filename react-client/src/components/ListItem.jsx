import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return <div style={{width: '75%'}}>
  	  <img style={{height: '300px'}} src={this.props.img.url} /> <br />
    </div>
  }
}

export default ListItem;

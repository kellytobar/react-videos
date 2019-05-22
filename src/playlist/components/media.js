import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';
var path = require('path');

class Media extends PureComponent{
    state = {
        author: 'Kelly'
    }
//     constructor(props) {
//     super(props)
//     this.state = {
//     author: props.author
//   }
    // this.handleClick = this.handleClick.bind(this); //enlazo el elemento con la clase
   //}
    
    handleClick = (event) => {   // los array function heredan los contextos de su padre
        //console.log(event);
        console.log(this.props.title)
        //console.log(this.props.image)
        //  this.setState({
        //   author: 'Kelly Tatiana Tobar',
        //  })
        this.props.openModal(this.props);
    }
    render() {
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                        src={this.props.cover}
                        alt="img"
                        width={240}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        );
    } 
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
  }

export default Media;
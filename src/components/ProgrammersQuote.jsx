import React from 'react';
import './programmersquote.css';

export default class ProgrammersQuote extends React.Component {
    render(){
        return (
            <div className="quote">
                {this.props.quote}
            </div>
        );
    }
};
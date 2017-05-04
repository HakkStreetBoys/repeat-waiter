import React, { Component } from 'react';
import axios from 'axios';
import firebase from "./firebase";
class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status : this.props.status_item,
    }
  }

  render() {
    var clicked = this.state && this.state.clicked;
    const status = ["new-order", "in-prosess", "complete"];
    const text = ["Ný Pöntun", "Í Vinnslu", "Afgreitt"]
    const clickedInfo = (clicked ? 'clicked' : undefined);
    const cName = clickedInfo + ' ' + status[this.state.status];
    return <div className={'button ' + cName}
      onClick={this.onClick.bind(this)}>{text[this.state.status]}</div>

  }

  onClick() {
    let temp = this.state.status;

    if(temp < 2) {
      temp = temp %2+1;
    }
    for(let hmmmm in this.props.key3 ) {
      firebase.database().ref("users/"+ this.props.key2+"/confirmed_order/"+this.props.key1+'/'+ hmmmm).update({
        status_item: temp,
      });
    }
    // let finalKey = this.props.key3.toString();

    firebase.database().ref("users/"+ this.props.key2+"/"+this.props.key1+'/'+ this.props.key3[0]).on("value", snapshot => {
      console.log("snapshot ",snapshot.val())

    });
    console.log('key2 ',this.props.key2);
    console.log('key ',this.props.key1);
    console.log('finalKey ',this.props.key3[0]);
    // this.props.onButtonClick(temp);
    this.setState({ status : temp });
    this.props.getStatus(temp);
  }



};

export default Button;

import React, { Component } from 'react'
import moment from 'moment';
import partyPopper from '../assets/party-popper.jpg'
export default class Ageteller extends Component {
    constructor(props){
        super(props);
        this.state={
            years1: '',
            months1:'',
            days1: '',
        }
        this.years='';
        this.months='';
        this.days='';
    }
dateDiff(date) {
    var birthDate = moment(date,'YYYY-MM-DD');
    var today = moment();
    this.years = today.diff(birthDate, 'year');
    birthDate.add(this.years, 'years');
    this.months = today.diff(birthDate, 'months');
    birthDate.add(this.months, 'months');
    this.days = today.diff(birthDate, 'days');
    return "You are "+this.years+" years, " +this.months+ " months and "+this.days+" old!!";
}
lengthCheck=()=>{
    var birthday= this.props.birthday;
    var splitBirthday = birthday.split("-");
    splitBirthday[0]= parseInt(splitBirthday[0]).toString();
    if(splitBirthday[0].length>=4 && splitBirthday.length>=3){
         return this.dateDiff(birthday)
    }
}
    render() {
        return (    
            <div>
                <div className="age-text">{this.lengthCheck()}</div>
                <img src={partyPopper} alt="party-popper" className="party-popper"/>
            </div>
        )
    }
}

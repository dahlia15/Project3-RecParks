import React, { Component } from 'react';
import style from "./index.css";
import parksData from '../../data/Parks.json';
import { addReview as reviewAPI , user as userAPI} from '../../utils/API';
import { Container, Row, Col } from "react-bootstrap";
import Profile from '../../components/Profile';
import key from "./review_key.png";

import LeafletMap from "../../components/LeafletMap";


class Main extends Component {

  firstPark = parksData[Math.floor(Math.random() * Math.floor(1982))]
  secondPark = parksData[Math.floor(Math.random() * Math.floor(1982))]
  thirdPark = parksData[Math.floor(Math.random() * Math.floor(1982))]

  constructor(props) {
    super(props);
//State variables
    this.state = {
      parkNameOne: [],
      parkNameTwo: [],
      parkNameThree: [],
      overallRatingOne: [],
      overallRatingTwo: [],
      overallRatingThree: [],
      accessibilityRatingOne: [],
      accessibilityRatingTwo: [],
      accessibilityRatingThree: [],
      cleanlinessRatingOne: [],
      cleanlinessRatingTwo: [],
      cleanlinessRatingThree: [],
      activitiesRatingOne: [],
      activitiesRatingTwo: [],
      activitiesRatingThree: [],
      reviewtextOne: [],
      reviewtextTwo: [],
      reviewtextThree: []
    };
  };

componentDidMount() {
  let threeParksData = this;

//Pull the three most recent park reviews
  reviewAPI.lastThreeParks()
   .then((result)=> {
    console.log(result);
        this.setState({ 
          parkIDOne: result.data[0].park_id,
          parkIDTwo: result.data[1].park_id,
          parkIDThree: result.data[2].park_id,
          overallRatingOne: result.data[0].overall_rating,
          overallRatingTwo: result.data[1].overall_rating,
          overallRatingThree: result.data[2].overall_rating,
          accessibilityRatingOne: result.data[0].accessibility_rating,
          accessibilityRatingTwo: result.data[1].accessibility_rating,
          accessibilityRatingThree: result.data[2].accessibility_rating,
          cleanlinessRatingOne: result.data[0].cleanliness_rating,
          cleanlinessRatingTwo: result.data[1].cleanliness_rating,
          cleanlinessRatingThree: result.data[2].cleanliness_rating,
          activitiesRatingOne: result.data[0].activities_rating,
          activitiesRatingTwo: result.data[1].activities_rating,
          activitiesRatingThree: result.data[2].activities_rating,
          reviewTextOne: result.data[0].review_text,
          reviewTextTwo: result.data[1].review_text,
          reviewTextThree: result.data[2].review_text,
          createdAtOne: result.data[0].createdAt,
          createdAtTwo: result.data[1].createdAt,
          createdAtThree: result.data[2].createdAt,
//Matching the park_ids
          parkNameOne: parksData[(result.data[0].park_id)-1].park_name,
          parkNameTwo: parksData[(result.data[1].park_id)-1].park_name,
          parkNameThree: parksData[(result.data[2].park_id)-1].park_name
        })
      })
       .catch(err => {console.log(err)});
};


render(){
  return (
    <div>
      <Container>
        <Row>
          {!this.props.user
          ? null
          : <Profile user={this.props.user}/>
          }
        </Row>
        <Row>
          <Col>
              <LeafletMap></LeafletMap>
          </Col>
        </Row>
        <Row style={{overflow: 'scroll'}}>
        <h1 style={{textAlign: 'center'}}>Recent Reviews</h1>
          <Col xs={4} md={4} style={{justifyContent: 'space-around'}}>
            <div className='panel panel-default'>
            <table className='table table-responsive table-bordered'>
              <tbody>
                <tr> <td colSpan={4}>{this.state.parkNameOne} </td></tr>
                <tr>
                  <td style={{backgroundColor: '#7bba4b', textAlign: 'center'}}> {this.state.overallRatingOne}</td>
                  <td style={{backgroundColor: '#999c9d', textAlign: 'center'}}>{this.state.accessibilityRatingOne}</td>
                  <td style={{textAlign: 'center'}}> {this.state.cleanlinessRatingOne}</td>
                  <td style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>{this.state.activitiesRatingOne}</td>
                </tr>
                <tr> <td colSpan={4}>{this.state.reviewTextOne} </td></tr>
                <tr> <td colSpan={4}>{this.state.createdAtOne} </td></tr>
              </tbody>
            </table>
            </div>
            </Col>
            <Col xs={4} md={4}  style={{justifyContent: 'space-around'}}>
            <div className='panel panel-default'>
            <table className='table table-responsive table-bordered'>
              <tbody>
                <tr> <td colSpan={4}>{this.state.parkNameTwo} </td></tr>
                <tr>
                  <td style={{backgroundColor: '#7bba4b', textAlign: 'center'}}> {this.state.overallRatingTwo}</td>
                  <td style={{backgroundColor: '#999c9d', textAlign: 'center'}}>{this.state.accessibilityRatingTwo}</td>
                  <td style={{textAlign: 'center'}}> {this.state.cleanlinessRatingTwo}</td>
                  <td style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>{this.state.activitiesRatingTwo}</td>
                </tr>
                <tr> <td colSpan={4}>{this.state.reviewTextTwo} </td></tr>
                <tr> <td colSpan={4}>{this.state.createdAtTwo} </td></tr>
              </tbody>
            </table>
            </div>
            </Col>
            <Col xs={4} md={4} style={{justifyContent: 'space-around'}}>
            <div className='panel panel-default'>
            <table className='table table-responsive table-bordered'>
              <tbody>
                <tr> <td colSpan={4}>{this.state.parkNameThree} </td></tr>
                <tr>
                  <td style={{backgroundColor: '#7bba4b', textAlign: 'center'}}> {this.state.overallRatingThree}</td>
                  <td style={{backgroundColor: '#999c9d', textAlign: 'center'}}>{this.state.accessibilityRatingThree}</td>
                  <td style={{textAlign: 'center'}}> {this.state.cleanlinessRatingThree}</td>
                  <td style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>{this.state.activitiesRatingThree}</td>
                </tr>
                <tr> <td colSpan={4}>{this.state.reviewTextThree} </td></tr>
                <tr> <td colSpan={4}>{this.state.createdAtThree} </td></tr>
              </tbody>
            </table>
            </div>
            </Col>
        </Row>
        <Row style={{overflow: 'scroll', textAlign: 'center'}}>
        <h1 style={{textAlign: 'center'}}>Trending Parks!</h1>
        <Col xs={12} sm={12}>
          <div style={{display: 'inline'}}>
            <ul style={{listStyleType:"none"}}>
            <a href={this.firstPark.website}><li>{this.firstPark.park_name}</li></a>
              <li> {this.firstPark.park_location} </li>
              <li> Borough: {this.firstPark.park_borough} </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={12}>
          <div style={{display: 'inline'}}>
            <ul style={{listStyleType:"none"}}>
            <a href={this.secondPark.website}><li>{this.secondPark.park_name}</li></a>
              <li> {this.secondPark.park_location} </li>
              <li> Borough: {this.secondPark.park_borough} </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={12} >
          <div style={{display: 'inline'}}>
            <ul style={{listStyleType:"none"}}>
            <a href={this.thirdPark.website}><li>{this.thirdPark.park_name}</li></a>
              <li> {this.thirdPark.park_location} </li>
              <li> Borough: {this.thirdPark.park_borough} </li>
            </ul>
          </div>
        </Col>
        </Row>
    </Container>
  </div>
  );
}
}

export default Main;


import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import {lightBlue600} from 'material-ui/styles/colors';

import data from '../requests/places';
import Title from '../components/Title';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';

export default class Home extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            places: data.places
        }

        this.hidePlace = this.hidePlace.bind(this);
    }

    places(){
        return this.state.places.map((place, index)=>{
          return(
            <PlaceCard onRemove={this.hidePlace} place={place} index={index}/>
          );
        })
      }

      hidePlace(place){
          this.setState({
              places: this.state.places.filter(el => el != place)
          })
      }

    render(){
        return(
            <section>
            <div className="Header-background">
                <div style={{"width":"80%","margin":"0 auto"}}>
                <div className="Header-main">
                    <Title></Title>
                    <RaisedButton label="Crear cuenta" primary={true}/>
                    <img className="Header-ilustration" src={process.env.PUBLIC_URL + './images/bg-geo.png'} />
                </div>

                <div>
                    <Benefits></Benefits>
                </div>

                </div>
            </div>

                <div style={{'backgroundColor': lightBlue600, 'padding':'50px'}}>
                    <h3 style={{'fontSize':'3em' , 'color':'white', 'textAlign':'center'}}>Sitios populares</h3>
                    <TransitionGroup className="row">
                    {this.places()}
                    </TransitionGroup>
                </div>
            </section>
        );
    }
}
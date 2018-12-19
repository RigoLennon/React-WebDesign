import React from 'react';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import {redA400,lightBlueA400,amberA400} from 'material-ui/styles/colors';

export default class Benefits extends React.Component{
    render(){
        return(
            <ul>
                    <Card className="Header-benefit">
                        <CardText>
                        <div className="row">
                            <div className="Header-benefit-image" style={{'backgroundColor': redA400}}>
                            <img src={process.env.PUBLIC_URL + './images/hearth.png'} />
                            </div>
                            <div className="Header-benefit-content">
                            <h3>Califica con emociones</h3>
                            <p>Califica con experiencias no con numeros</p>
                            </div>
                        </div>
                        </CardText>
                    </Card>

                    <Card className="Header-benefit">
                        <CardText>
                        <div className="row">
                            <div className="Header-benefit-image" style={{'backgroundColor': lightBlueA400}}>
                            <img src={process.env.PUBLIC_URL + './images/no-internet.png'} /></div>
                            <div className="Header-benefit-content">
                            <h3>¿Sin internet? ¡Sin problema!</h3>
                            <p>Diseñado para funcionar sin internet o conexiones lentas</p>
                            </div>
                        </div>
                        </CardText>
                    </Card>

                    <Card className="Header-benefit">
                        <CardText>
                        <div className="row">
                            <div className="Header-benefit-image" style={{'backgroundColor': amberA400}}>
                            <img src={process.env.PUBLIC_URL + './images/star.png'} /></div>
                            <div className="Header-benefit-content">
                            <h3>Califica con emociones</h3>
                            <p>Califica con experiencias no con numeros</p>
                            </div>
                        </div>
                        </CardText>
                    </Card>
                    </ul>
        );
    }
}
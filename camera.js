import React, { Component } from 'react';
import Webcam from 'react-webcam';
import axios from "axios";

class Cam extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : "",
            data : [],
            load : false,
            file : null,
            photo : "",
        }
    }


    setRef = webcam => {
        this.webcam = webcam;
    };

    files = (e) => {
        this.setState({file:e.target.files[0]});
        const token = localStorage.getItem('Token');
        axios.get('https://api.snapchat.wac.epitech.eu/all', {
            headers: {
                token : token,
            }
        })
            .then( response => {
                console.log(response.data.data);
                this.state.data = response.data.data;
                this.setState({load : true});


            })
            .catch(function (error) {
                console.log(error);
            })
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();

        this.refs.photo.setAttribute('href', imageSrc);
        this.refs.photo.setAttribute('download','image.jpg');
        const token = localStorage.getItem('Token');
        axios.get('https://api.snapchat.wac.epitech.eu/all', {
            headers: {
                token : token,
            }
        })
            .then( response => {
                console.log(response.data.data);
                this.state.data = response.data.data;
                this.setState({load : true});

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    send = () => {
        console.log("envoyer ! LOOOL");
    }

    render() {
        const {data} = this.state;

        return(

            <div className="App-header">
                <div className="Cam"> <Webcam
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                />
                </div>
                <div className="buttons">
                    <a href='' ref='photo'><button className="btn btn-danger" onClick={this.capture}>
                        Prendre une photo</button></a>
                    <input className="btn btn-danger" onChange={this.files} type="file"/>
                </div>
                <div className="container list-group">
                <ul>
                    {data.map((data)=>
                        <li key={data.email}>{data.email} <br/> <button className="btn btn-danger" onClick={this.send}>
                            Envoyer</button></li>)}
                </ul>
            </div>
            </div>
        )
    }
}

export default Cam;
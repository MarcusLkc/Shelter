import React from 'react';
import '../css/style.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            LatLng: {
                lat: 49.2827,
                lng: -123.1207
            },
            zoom: {
                zoom: 11
            },
            activeMarker: {},
            selectedPlace: {},
            showingInfoWindow: false,
        }
      }
   
    componentDidMount() {
        this.geoLocate()  
    }
     
    
    geoLocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                        LatLng: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        zoom: {
                            zoom: 13
                        }
                    });
            })
        } else {
            this.setState({
                    LatLng: {
                        lat: 49.8527,
                        lng: -123.1207
                    },
                    zoom: {
                        zoom: 11
                    }
                });
        }
    }
    
    
      onMarkerClick = (props, marker) =>
        this.setState({
          activeMarker: marker,
          selectedPlace: props,
          showingInfoWindow: true
        });
    
      onInfoWindowClose = () =>
        this.setState({
          activeMarker: null,
          showingInfoWindow: false
        });
    
      onMapClicked = () => {
        if (this.state.showingInfoWindow)
          this.setState({
            activeMarker: null,
            showingInfoWindow: false
          });
      };
          
  render() {
    const style = {
        width: '100%',
        height: '89vh'
      }
    return (
        <div className="Map" >

            <Map style={style}
                google={this.props.google} 
                zoom={this.state.zoom.zoom}
                initialCenter={{
                    lat: 40.730610,
                    lng: -73.935242
                  }}
                center={{
                    lat: this.state.LatLng.lat,
                    lng: this.state.LatLng.lng
                }}
                  clickableIcons={true}>
                
                <Marker
                    title={'Click for info'}
                    name={
                        <div>
                            <strong>PS 249</strong><br/>
				            18 Marlborough Road<br/>
                            Brooklyn, NY 11226<br/>
				            <a href="https://goo.gl/HZJvdy">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.649708582993064,
						lng:-73.96648921670807
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>PS 102</strong><br/>
				            1827 Archer Street<br/> 
                            Bronx, NY 10460<br/>
				            <a href="https://goo.gl/maps/UbZhVzEpU8o" target="_blank" rel="noopener noreferrer">>Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.838205858215275,
						lng:-73.86622748089125
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>Clara Barton HS</strong><br/>
				            901 Classon Avenue<br/> 
                            Brooklyn, NY 11225<br/>
				            <a href="https://goo.gl/maps/AMnzU3g3RiJ2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.6688589933076,
						lng:-73.96139358097575
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>George Washington Educational Campus</strong><br/>
				            549 Audobon Avenue<br/> 
                            New York, NY 10040<br/>
				            <a href="https://goo.gl/maps/47ZsJ1MPkYr" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.85559869189675,
						lng:-73.92619138163855
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>Brooklyn Tech HS</strong><br/>
				            29 Ft Greene Place<br/> 
                            Brooklyn, NY 11217<br/>
				            <a href="https://goo.gl/maps/di9jJTEVp9R2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.688955817188834,
						lng:-73.97644081210666
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>MS - HS 141</strong><br/>
				            660 W 237 Street<br/> 
                            Bronx, NY 10463<br/>
				            <a href="https://goo.gl/maps/mw9FtdvWKvD2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.88805858303743,
						lng:-73.91417582805788
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>PS 327</strong><br/>
				            111 Bristol Street<br/> 
                            Brooklyn, NY 11212<br/>
				            <a href="https://goo.gl/maps/kWauGM4Cr962" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.66795481413876,
						lng:-73.9117213739499
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 118</strong><br/>
				            154 W 93 Street<br/> 
                            New York, NY 10025<br/>
				            <a href="https://goo.gl/maps/yxTpNjURQxw" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.791461599835635,
						lng:-73.97097165235431
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 24</strong><br/>
				            427 38 Street<br/> 
                            Brooklyn, NY 11232<br/>
				            <a href="https://goo.gl/maps/a5t3xceTcJN2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.65280553248585,
						lng:-74.00453928492661
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>John Jay Educational Campus</strong><br/>
				            237 7th Avenue<br/> 
                            Brooklyn, NY 11215<br/>
				            <a href="https://goo.gl/maps/w3V481XYR252" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.66930777410636,
						lng:-73.97869546474965
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 201</strong><br/>
				            730 Bryant Avenue<br/> 
                            Bronx, NY 10474<br/>
				            <a href="https://goo.gl/maps/n4R6A7uuG7p" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.81586895931827,
						lng:-73.8853081324496
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>IS 90</strong><br/>
				            21 Jumel Place<br/> 
                            New York, NY 10023<br/>
				            <a href="https://goo.gl/maps/VpjCGpAAfND2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.83935802569437,
						lng:-73.9357073749906
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>PS 211</strong><br/>
				            1919 Prospect Avenue<br/> 
                            Bronx, NY 10457<br/>
				            <a href="https://goo.gl/maps/gym5EDjWU4t" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.84375984151174,
						lng:-73.89046989887038
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 383</strong><br/>
				            1300 Greene Avenue<br/> 
                            Brooklyn, NY 11237<br/>
				            <a href="https://goo.gl/maps/SY83bHYLWQy" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.697693632530274,
						lng:-73.91928775501131
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>PS 125</strong><br/>
				            425 W 123 Street<br/> 
                            New York, NY 10027<br/>
				            <a href="https://goo.gl/maps/2VDPYfhdsB72" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.81078944886271,
						lng:-73.95609685370634
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>Martin Luther King Jr. HS</strong><br/>
				            122 Amsterdam Avenue<br/> 
                            New York, NY 10023<br/>
				            <a href="https://goo.gl/maps/E8QK2uPJeZL2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.774899959763246,
						lng:-73.98563038662456
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>Midtown East Campus (PS 59)</strong><br/>
				            233 E 56 Street<br/> 
                            New York, NY 10022<br/>
				            <a href="https://goo.gl/maps/fKerQsMQX4P2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.75929963022644,
						lng:-73.9663563303682
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 131</strong><br/>
				            100 Hester Street<br/> 
                            New York, NY 10002<br/>
				            <a href="https://goo.gl/maps/HW1naAZJxi52" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.71623837083559,
						lng:-73.99360201070182
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 92</strong><br/>
				            222 W 134 Street<br/> 
                            New York, NY 10030<br/>
				            <a href="https://goo.gl/maps/kvKeFUqTjbm" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.8147115976589,
						lng:-73.94581431348983
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>PS - IS 210</strong><br/>
                            501-503 W 152 Street<br/> 
                            New York, NY 10031<br/>
				            <a href="https://goo.gl/maps/D8gY65GAYC62" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.82999707805981,
						lng:-73.9446461562353
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 20</strong><br/>
                            142-30 Barclay Avenue<br/> 
                            Flushing, NY 11355<br/>
				            <a href="https://goo.gl/maps/PS3dxoezb4P2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.758453450203675,
						lng:-73.82402972837741
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                
                <Marker
                    name={
                        <div>
                            <strong>PS 58</strong><br/>
                            72-24 Grand Avenue<br/> 
                            Maspeth, NY 11378<br/>
				            <a href="https://goo.gl/maps/X89oSN1xZ9Q2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.728696727390556,
						lng:-73.89006273089697
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 74</strong><br/>
                            61-15 Oceania Street<br/> 
                            Bayside, NY 11362<br/>
				            <a href="https://goo.gl/maps/NVLjqEZZ7nr" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.745078241808976,
						lng:-73.76682865353507
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>Frank Sinatra HS</strong><br/>
                            35-12 35th Avenue<br/> 
                            Long Island City, NY 11101<br/>
                            <a href="https://goo.gl/maps/GkMnr8ym8cz" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.854433752750495,
						lng:-73.89722928081869
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 391</strong><br/>
                            2225 Webster Avenue<br/> 
                            Bronx, NY 10457<br/>
                            <a href="https://goo.gl/maps/xsqhF5tYjbJ2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.854433752750495,
						lng:-73.89722928081869
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 132</strong><br/>
                            1245 Washington Avenue<br/> 
                            Brooklyn, NY 10456<br/>
                            <a href="https://goo.gl/maps/PJWkg7PGbLk" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.831893585490285,
						lng:-73.90699064822998
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 7</strong><br/>
                            858 Jamaica Avenue<br/> 
                            Brooklyn, NY 11208<br/>
                            <a href="https://goo.gl/maps/GXijQhZzHpQ2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.68917494755177,
						lng:-73.8731565648259
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>Adams Street Educational Campus</strong><br/>
                            283 Adams Street<br/> 
                            Brooklyn, NY 11201<br/>
                            <a href="https://goo.gl/maps/qhnhDNZftir" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.69463226130131,
						lng:-73.98834759450574
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 391</strong><br/>
                            790 East New York Avenue<br/> 
                            Brooklyn, NY 11203<br/>
                            <a href="https://goo.gl/maps/TzFhdLUcrKw" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.66206795359305,
						lng:-73.93644096788611
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 324</strong><br/>
                            800 Gates Avenu<br/> 
                            Brooklyn, NY 11221<br/>
                            <a href="https://goo.gl/maps/MPuft5xNwZJ2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.68793814772119,
						lng:-73.93237354807005
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 55</strong><br/>
                            2021 Bergen Street<br/> 
                            Brooklyn, NY 11233<br/>
                            <a href="https://goo.gl/maps/eEHvyTV3r482" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.67449093632245,
						lng:-73.9132600390299
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 227</strong><br/>
                            6500 16 Avenue<br/> 
                            Brooklyn, NY 11204<br/>
                            <a href="https://goo.gl/maps/kJD9qbNW85z" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.62178403159182,
						lng:-73.99578336323263
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 226</strong><br/>
                            6006 23 Avenue<br/> 
                            Brooklyn, NY 11204<br/>
                            <a href="https://goo.gl/maps/FYgguQwUxQC2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.615246661358086,
						lng:-73.97720245197735
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 2</strong><br/>
                            655 Parkside Avenue<br/> 
                            Brooklyn, NY 11226<br/>
                            <a href="https://goo.gl/maps/zBPyekdppyx" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.65641422300907,
						lng:-73.95147508866324
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 207</strong><br/>
                            40-20 100 Street<br/> 
                            Corona, NY 11368<br/>
                            <a href="https://goo.gl/maps/WNY26d8KfPU2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.74931524379376,
						lng:-73.86582315889937
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>Jerome Parker Campus</strong><br/>
                            100 Essex Drive<br/> 
                            Staten Island, NY 10314<br/>
                            <a href="https://goo.gl/maps/3GP8YmL37C82" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.581388990509105,
						lng:-74.15897931892695
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS - HS 362</strong><br/>
                            921 E 228 Street<br/> 
                            Bronx, NY 10466<br/>
                            <a href="https://goo.gl/maps/SGHqKnfriCu" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.888220095065755,
						lng:-73.85266908917056
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                <Marker
                    name={
                        <div>
                            <strong>PS - IS 30</strong><br/>
                            7002 4 Avenue<br/> 
                            Brooklyn, NY 11209<br/>
                            <a href="https://goo.gl/maps/sCg9gAryvLt" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.63345140169942,
						lng:-74.02453258829522
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>Clinton School</strong><br/>
                            10 E 15 Street<br/> 
                            New York, NY 10003<br/>
                            <a href="https://goo.gl/maps/BBkFQB1Nsn92" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.736110371584786,
						lng:-73.99235077956067
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                <Marker
                    name={
                        <div>
                            <strong>Petrides Complex</strong><br/>
                            715 Ocean Terrace<br/> 
                            Staten Island, NY 10301<br/>
                            <a href="https://goo.gl/maps/CJtbJ57ppyr" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.60899601014512,
						lng:-74.10434506993518
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 306</strong><br/>
                            40 West Tremont Avenue<br/> 
                            Bronx, NY 10453<br/>
                            <a href="https://goo.gl/maps/s1cMExx9Rpy" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.85138734697534,
						lng:-73.91076904016273
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 51</strong><br/>
                            20 Houston Street<br/> 
                            Staten Island, NY 10302<br/>
                            <a href="https://goo.gl/maps/rjGEzwYR4d52" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.623017156185085,
						lng:-74.1448917169114
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS - IS 218</strong><br/>
                            1220 Gerard Avenue<br/> 
                            Bronx, NY 10452<br/>
                            <a href="https://goo.gl/maps/h5Von9uqJAA2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.83549265459259,
						lng:-73.919664554437
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>>Hillcrest HS</strong><br/>
                            160-05 Highland Avenue<br/> 
                            Jamaica, NY 11432<br/>
                            <a href="https://goo.gl/maps/SKNd2aH4RmE2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.70965641897956,
						lng:-73.80266512114586
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>Aviation HS</strong><br/>
                            45-30 36 Street<br/> 
                            Long Island City, NY 11101<br/>
                            <a href="https://goo.gl/maps/L8Fq9EY9fGo" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                        }
                    position={{
                        lat:40.74349499260163,
						lng:-73.92945375815141
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>Grover Cleveland HS</strong><br/>
                            21-27 Himrod Street<br/> 
                            Ridgewood, NY 11385<br/>
                            <a href="https://goo.gl/maps/YnJDCg14nnA2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.71126606472361,
						lng:-73.90963486079305
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>Forest Hills HS</strong><br/>
                            67-01 110 Street<br/> 
                            Forest Hills, NY 11375<br/>
                            <a href="https://goo.gl/maps/fad6dPCjKqs" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.72978179399705,
						lng:-73.84476052923438
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>HS of Law, Government and Justice</strong><br/>
                            244 E 163 Street<br/> 
                            Bronx, NY 10451<br/>
                            <a href="https://goo.gl/maps/KkeXwjmwptJ2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.82747699295518,
						lng:-73.91902100546525
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>Townsend Harris HS</strong><br/>
                            149-11 Melbourne Avenue<br/> 
                            Flushing, NY 11367<br/>
                            <a href="https://goo.gl/maps/k9LvNbV26oE2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.73497558794615,
						lng:-73.821357047386
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS - IS 268</strong><br/>
                            92-07 175 Street<br/> 
                            Jamaica, NY 11433<br/>
                            <a href="https://goo.gl/maps/fKF7VUe6PwB2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.7076654262842,
						lng:-73.78520179472864
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 145</strong><br/>
                            33-34 80 StreeT<br/> 
                            Jackson Heights, NY 11372<br/>
                            <a href="https://goo.gl/maps/zMsWzwPqLUs" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.754262411740015,
						lng:-73.88742394122187
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>IS 25</strong><br/>
                            34-65 192 Street<br/> 
                            Flushing, NY 11355<br/>
                            <a href="https://goo.gl/maps/5P2rEPAejGT2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.764987261857435,
						lng:-73.78970200437473
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>HS of Teaching, Lib Arts and Sci</strong><br/>
                            74-20 Commonwealth Blvd<br/> 
                            Bellerose, NY 11426<br/>
                            <a href="https://goo.gl/maps/bhEaposadMD2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.699182428130115,
						lng:-73.9041547375515
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 239</strong><br/>
                            17-15 Weirfield Street<br/> Ridgewood, NY 11385<br/>
                            <a href="https://goo.gl/maps/XbfHhmB51iE2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.679760456715826,
						lng:-73.82133980529291
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>PS 100</strong><br/>
                            111-11 118 Street<br/> South Ozone Park, NY 11420<br/>
                            <a href="https://goo.gl/maps/7rwU1xXNYLL2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.679760456715826,
						lng:-73.82133980529291
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>>>Walton HS</strong><br/>
                            2780 Reservoir Avenue<br/> Bronx, NY 10468<br/>
                            <a href="https://goo.gl/maps/fnhYgiAaUSE2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.86993370687484,
						lng:-73.89704424213798
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>>IS 158</strong><br/>
                            800 Home Street<br/> Bronx, NY 10456<br/>
                            <a href="https://goo.gl/maps/qftPFFNwxGR2" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.82733480011778,
						lng:-73.90087575096457
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                <Marker
                    name={
                        <div>
                            <strong>>PS 56</strong><br/>
                            250 Kramer Avenue<br/> Staten Island, NY 10309<br/>
                            <a href="https://goo.gl/maps/ydfT3phcxB8" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.54198980345471,
						lng:-74.21396005256327
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
        
                <Marker
                    name={
                        <div>
                            <strong>Ralph McKee HS</strong><br/>
                            290 St Marks Place<br/> Staten Island, NY 10301<br/>
                            <a href="https://goo.gl/maps/Jb47LTEtCMs" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>}
                    position={{
                        lat:40.64282884762186,
                        lng:-74.07901917090253
                    }} 
                        onClick={this.onMarkerClick}/>
                    
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
                <Marker
                    
                    name = {
                        <div>
                            <strong>PS 56</strong><br/>
                            250 Kramer Avenue<br/> Staten Island, NY 10309<br/>
                            <a href="https://goo.gl/maps/ydfT3phcxB82" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                    }
                    position={{
                        lat:40.54198980345471,
                        lng:-74.21396005256327
                    }} 
                        onClick={this.onMarkerClick}/>
                    <InfoWindow 
                        onOpen={this.windowHasOpened}
                        onClose={this.onInfoWindowClose}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>
            </Map>
        </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCE2cEIub5O3yH4b1S2e9zOFj3d6BspM7A')
})(MapContainer)
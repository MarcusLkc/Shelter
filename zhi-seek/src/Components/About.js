import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="gallery">
                <div className="thumbnail">
                    <h1 className="stats">50</h1>
                    <h4>SHELTERS</h4>
                    <p>he number of shelters that we are in contact with</p>
                </div>
                <div className="thumbnail">
                    <h1 className="stats">2300</h1>
                    <h4>CAPACITY</h4>
                    <p>The capacity number</p>
                </div>
                <div className="thumbnail">
                    <h1 className="stats">75%</h1>
                    <h4>PEOPLE HELPED</h4>
                    <p>One line description</p>
                </div>
                    <div className="thumbnail">
                    <h1 className="stats">20</h1>
                    <h4>DISASTERS</h4>
                    <p>That we avoided according to our services</p>
                </div>
                <div>
                    <footer>
                        <article className="footer_column">
                        <h3>ABOUT</h3>
                        <img src={require('../images/image1.jpg')} alt="" width="400" height="200" className="cards"/>
                        <p>We are a search engine that allows you to find the nearest shelters based on your location, the most important thing is that we update the shelter at REAL TIME. </p>
                        </article>
                        <article className="footer_column">
                        <h3>CONTACT</h3>
                        <img src={require('../images/image1.jpg')} alt="" width="400" height="200" className="cards"/>

                        </article>
                    </footer>
                </div>
            </div>
            
        )
    }
}

export default About;
import React, { Component } from 'react';
import BackButton from 'components/BackButton';

class About extends Component{
  render(){
    let outerDiv = {
      maxWidth: '1024px',
      margin: 'auto',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '5%',
      backgroundColor: 'white',
      borderRadius: 30,
    }; //style for the outside div of main component

    let filterTopStyle = {
      padding: '3% 4%',
      display: 'grid',
      gridTemplateColumns: '40px 10fr'
    };

    let TitleStyle = {
      textAlign: 'center',
      fontSize: '14pt',
      flex: '0 0 100%',
    };

    let divStyle = {
      height: '100%',
      minHeight: '50vh',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      padding: '7% 2%',
      boxSizing: 'border-box',
      textAlign: 'center'
    };  //style for the inside div of main component

    let earthly = {
      padding: '1% 25%',
    }
    let member = {
      flex: '0 0 16%',
      minWidth: '150px',
      padding: '0 1%',
      margin: '50px 1%',
      color: 'white'
    };
    let fernanda = {
      backgroundColor: '#4AB85C'
    }
    let mana = {
      backgroundColor: '#F05027'
    }
    let tomo = {
      backgroundColor: '#19A9E1'
    }
    let jenn = {
      backgroundColor: '#00B8A6'
    }
    let marlowe = {
       backgroundColor: '#152D53'
    }

    let memberImage = {
      marginTop: '-50px',
      borderRadius: '50%'
    }

    let desc = {
      textAlign: 'left'
    }

    return(
      <div className="about" key="about" style = {outerDiv}>
          <div className="aboutTitle" style={filterTopStyle}>
            <BackButton component={'category'} className='button-shadow' />
            <h1 style = {TitleStyle}>About</h1>
          </div>
          <div className="aboutEarthly" style = {earthly}>
            <p>
              Earthly is a world ranking app that makes it easy for children to get interested in and to learn about the world.
              We are a team of two designers and three developers studying Web and Mobile Design and Development at Langara College. We wanted to make an web app that makes a learning experience exciting, fun and engaging.</p><p>
              We interviewed school teachers and ran a usability test with kids to learn about how we should realize the visual representation of data so that it is appealing and easy to understand for kids. </p><p>
              We met almost everyday, designed a wireframe, designed a mockup and developed the app in agile development method using performance-optimized React framework.</p><p>
              If you have any feedback, please feel free to let us know!
            </p>
          </div>
          <div className="meetMember" style={divStyle}>
            <div style={Object.assign({}, member, fernanda)}>
              <img style = {memberImage} img src={require(`images/fernanda.jpg`)} alt="FernandaPic"/>
              <h3>Fernanda</h3>
              <h4>Dev Lead</h4>
              <p style={desc}>Fernanda has a background in Marketing and Advertising at Mackenzie University in São Paulo, Brazil.  She also holds a certificate in Internet and Web Technology, and CSPO.  Fernanda is Earthly’s lead Developer.  Her hobbies are figure skating, biking, and watching TV series with her cat, Garfield.
              </p>
            </div>
            <div style={Object.assign({}, member, mana)}>
              <img style = {memberImage} img src={require(`images/most_dogs.png`) } alt="manaPic"/>
              <h3>Mana</h3>
              <h4>Dev & QA</h4>
              <p style={desc}>Mana is Earthly’s Quality Assurance expert, and she also played a key role in development.  Mana has a background in British and American studies.  In her spare time, she enjoys cooking Japanese food, playing the piano, shopping, and playing with dogs.
              </p>
            </div>
            <div style={Object.assign({}, member, tomo)}>
              <img style = {memberImage} img src={require(`images/tomo.jpg`) } alt="tomokoPic"/>
              <h3>Tomoko</h3>
              <h4>Dev & PM</h4>
              <p style={desc}>Tomoko has 5 years experience as a program manager at Microsoft, 6 years of experience as a university instructor in addition to 15-year background as an English to Japanese translator and interpreter. She is Earthly’s Developer and Project Manager. During her free time, she enjoys star gazing, board-gaming, and geocaching with her two sons.
              </p>
            </div>
            <div style={Object.assign({}, member, jenn)}>
              <img style = {memberImage} img src={require(`images/jenn.jpg`)}  alt="jennPic" />
              <h3>Jenn</h3>
              <h4>UX Lead</h4>
              <p style={desc}>Jenn is Earthly’s User Experience lead.  She holds a Bachelor of Media Information and Technoculture from the University of Western Ontario in London, Canada.  She also worked as a tree planter for 5 years in the Canadian provinces of Ontario, Saskatchewan, and Alberta.  Jenn loves the outdoors; in her free time she enjoys camping, cycling, downhill skiing, and hiking.
              </p>
            </div>
            <div style={Object.assign({}, member, marlowe)}>
              <img style = {memberImage} img src={require(`images/marlowe.jpg`)}  alt="marlowePic"/>
              <h3>Marlowe</h3>
              <h4>UI Lead</h4>
              <p style={desc}>Marlowe is Earthly’s User Interface Designer.  She has a background in English Literature, and a Bachelor of Arts from the University of British Columbia.  She has worked as a lifeguard and swim instructor for 10 years, and enjoys discovering new ways to facilitate children’s learning.  In her free time, Marlowe enjoys swimming, hiking, crossword puzzles, and playing computer games.
              </p>
            </div>
          </div>
      </div>
    )
  }
}

export default About;
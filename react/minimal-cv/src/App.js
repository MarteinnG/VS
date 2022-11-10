import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return (
    <div>
      <div  style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>
          <p className='header-name' style={{fontSize: '45px', fontWeight: 'bold', marginLeft: '20px', marginTop: '25px', marginBottom: '2px'}}>{props.name}</p>
          <p className='header-text' style={{marginLeft: '20px', marginTop: '0px', fontSize: '16px'}}>{props.text}</p>
        </div>
        <div>
          <img alt='Matti' src={require('./Matti.jpg')} className='header-photo' style={{marginRight: '20px', marginTop: '20px', marginBottom: '0px', width: '100px', borderRadius: 400/ 2}}></img>
        </div>
      </div>
      <p style={{height: '2px', backgroundColor: 'royalblue', marginTop: '10px'}}></p>
    </div>
  )
}

const Body = (props) => {
  return (
    <div>
      <p className='body-job'>{props.jobs.name}</p>
      <p className='body-period'>{props.period.date}</p>
      <p className='body-description'>{props.description.info}</p>
    </div>
  )
}

const myObject = {
  name: 'Marteinn Guðjónsson',
  text: 'Soon to be an Aviation Programmer',
  jobs: [
    {
      name: 'DG Specialist & Flight Inspector',
    }, 
    {
      name: 'Ground Operations Manager',
    },
    {
      name: 'Supervisor Flight Operations',
    },
  ],
  period: [
    {
      date: 'November 2021 - Present',
    },
    {
      date: 'August 2015 - October 2021',
    },
    {
      date: 'June 2009 - July 2015',
    },
  ],
  description: [
    {
      info: 'Working at Icelandic Transport Authority as a Dangerous Goods Specialist and Flight Operations Inspector.  Performing regular DG and Dispatch audits on Icelandic registered airlines as well as participating in several European and international DG liason groups',
    },
    {
      info: 'Nominated Person Ground Operations at Bluebird Nordic. Responsible for dispatch and all ground operation activities, contracts and handling agents on behalf of the Airline',
    },
    {
      info: 'Supervisor Flight Operations and Dispatch at Bluebird Nordic. Responsible for the daily operation of the Flight Operations unit, systems used for dispatch and Weight and Balance.',
    },
  ],
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header name={myObject.name} text={myObject.text}/>
        <div>
          <p className="App-jobsStyle">{myObject.jobs[0].name}</p>
          <p className="App-periodStyle">{myObject.period[0].date}</p>
          <p className='App-descriptionStyle'>{myObject.description[0].info}</p>
        </div>
        <div>
          <p className="App-jobsStyle">{myObject.jobs[1].name}</p>
          <p className="App-periodStyle">{myObject.period[1].date}</p>
          <p className='App-descriptionStyle'>{myObject.description[1].info}</p>
        </div>
        <div>
          <p className="App-jobsStyle">{myObject.jobs[2].name}</p>
          <p className="App-periodStyle">{myObject.period[2].date}</p>
          <p className='App-descriptionStyle'>{myObject.description[2].info}</p>
        </div>
      </header>
    </div>
  );
}

export default App;

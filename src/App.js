import React  from 'react';
import './App.css';
import Tab from './components/Tab';
import Content from './components/Content';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isActive: 0,
    }

  }

  handlerClick(id) {
    this.setState({
      isActive: id
    });
  }

  componentDidMount() {
    fetch('https://val10010.github.io/tabs-react/data.json')
    .then((response) => response.json())
    .then(data => this.setState({data}));
  }


  render() {

    return (
        <div className="container">
          <Tab onClick={this.handlerClick.bind(this)}>
            {(childProps) => (
                <Tab.Tabs  {...childProps}  state={this.state}/>
            )}
          </Tab>
          <Content state={this.state} />
       </div>
    );
  }
}

export default App;

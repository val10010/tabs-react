import React from 'react';

const Content = (props) => {
  const {data, isActive} = props.state;

  return (
    <div className="Content">
        {data.map(tab => {
          if(tab.id === isActive) { 
            return tab.content;
          }
          return null;
        })}
    </div>
  );
}

export default Content;
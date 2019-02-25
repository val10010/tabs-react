import React from 'react';


const Tab = ({children, onClick}) => {

  const content = children({
    onClick: onClick,
  });

  return ( 
    <> 
      {content}
    </>
  );
}

 Tab.Tabs = ({onClick, state}) => {

  return (
    <div className="Tab">
      {state.data.map(tab =>(
        <div className={state.isActive === tab.id 
        ? "Tabs active" 
        : "Tabs"} key={tab.id} onClick={() => onClick(tab.id)}>
          {tab.title}
        </div>
      ))}
    </div>
  )
}

export default Tab;
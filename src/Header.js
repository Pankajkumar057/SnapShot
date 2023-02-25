import React from 'react';
import { Link } from 'react-router-dom';
import MyComponent from './MyComponent';

const Header = () => {
  const [input, setInput] = React.useState('')
  const [data,setData] = React.useState('')

function handleSearch(){
  setData(input)
}
  return (
    <div>
      <h1 className='header'>SnapShot</h1>
      <div className='search' >
        <input onChange={(e)=>{setInput(e.target.value)}} className='search-input' type="text" placeholder="Search..." />
        <button onClick={handleSearch} className='search-button' >Search</button>
      </div>
      <div className='quick'>
        <Link to='/Mountain' ><button>Mountains</button></Link>
        <Link to='/Beaches'><button>Beaches</button></Link>
        <Link to='/Birds' ><button>Birds</button></Link>
        <Link to='/Food'><button>Food</button></Link>
      </div>
      <h3 className='search-heading'>{data} Pictures</h3>
      <MyComponent pro = {data}/>
    </div>
  );
};

export default Header;
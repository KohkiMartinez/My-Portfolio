// readAll.jsx
import Data from '../../jsonFiles/blogData.json';

import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ReadAll = () => {
    const [allItems, setAllItems] = React.useState([]);

    const [iphoneCases, setIphoneCases] = React.useState([]);

    const [isElementVisible, setIsElementVisible] = React.useState(false);

    const handleClick = () => {
        setIsElementVisible(!isElementVisible);
    };

    const [searchTermiPhone14, setSearchTermiPhone14] = React.useState('');
    const [searchTermiPhone14Pro, setSearchTermiPhone14Pro] = React.useState('');
    const [searchTermiPhone14ProMax, setSearchTermiPhone14ProMax] = React.useState('');

    const handleSearchiPhone14 = (event) => {
      setSearchTermiPhone14(event.target.checked ? 'iPhone14n': '');
    };
    const handleSearchiPhone14Pro = (event) => {
      setSearchTermiPhone14Pro(event.target.checked ? 'iPhone14p': '');
    };
    const handleSearchiPhone14ProMax = (event) => {
      setSearchTermiPhone14ProMax(event.target.checked ? 'iPhone14m': '');
    };

    // Read All data from blogData.json
    React.useEffect(() => {
      const fetchData = async() => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const dummyData = Data;
        setAllItems(dummyData); 
      };
      fetchData();
    }, []);

    React.useEffect(() => {
      const filteredItems = allItems.length > 0 ? allItems.filter((item) =>
      item.model.includes(searchTermiPhone14)
      && item.model.includes(searchTermiPhone14Pro)
      && item.model.includes(searchTermiPhone14ProMax)) : [];

      setIphoneCases(filteredItems);

    }, [allItems, searchTermiPhone14, searchTermiPhone14Pro, searchTermiPhone14ProMax]);

    return (
        <main>
          <Header />

          <button className='chooseButton' onClick={handleClick}>Choose your iPhone</button>
            {isElementVisible &&
              <div>
                <InputWithLabeliPhone14
                  id='searchiPhone14'
                  label='iPhone 14'
                  name='iPhone14n'
                  onInputChange={handleSearchiPhone14}
                />
                <InputWithLabeliPhone14Pro
                  id='searchiPhone14Pro'
                  label='iPhone 14 Pro'
                  name='iPhone14p'
                  onInputChange={handleSearchiPhone14Pro}
                />
                <InputWithLabeliPhone14ProMax
                  id='searchiPhone14ProMax'
                  label='iPhone 14 Pro Max'
                  name='iPhone14m'
                  onInputChange={handleSearchiPhone14ProMax}
                />
                <br/>
                <a onClick={handleClick}>✖</a>
              </div>
            }
          <List list={iphoneCases} />
          <Footer />
        </main>
    )
}

const InputWithLabeliPhone14 = ({ id, label, onInputChange }) => (
    <div>
      <input
        id={id}
        type='checkbox'
        onChange={onInputChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
  InputWithLabeliPhone14.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  };
  
  const InputWithLabeliPhone14Pro = ({ id, label, onInputChange }) => (
    <div>
      <input
        id={id}
        type='checkbox'
        onChange={onInputChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
  InputWithLabeliPhone14Pro.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  };
  
  const InputWithLabeliPhone14ProMax = ({ id, label, onInputChange }) => (
    <div>
      <input
        id={id}
        type='checkbox'
        onChange={onInputChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
  InputWithLabeliPhone14ProMax.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  };
  
  const List = ({ list }) => (
    <div className='allItemContainer'>
      {list.map((item) => (
        <Link to={`/item/${item.id}&${item.imageId}`} key={item.id}>
          <div className='eachItemContainer'>
            {item.title}
            <img src={item.thunbnailImageUrl} width={300}/>
          </div>
        </Link>
        // <Item key={item.objectID} item={item} />
      ))}
    </div>
  );
  List.propTypes = {
    list: PropTypes.array.isRequired,
  };

export default ReadAll

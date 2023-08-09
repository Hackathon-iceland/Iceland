import React, { useState } from 'react';
import { annualProduce } from '../../data';
import './producetracker.css';
import defaultPic from '../../assets/defaultImg.png';

import Card from '../Card/Card';

const ProduceTracker = () => {
  const [produceList, setProduceList] = useState([]);
  const [activeMonth, setActiveMonth] = useState(null);

  const handleClick = (month) => {
    setActiveMonth(month);
    setProduceList(annualProduce[month]);
    console.log('produce list', produceList, activeMonth);
  };

  return (
    <section>
      <div className="container">
        <div className="banner"></div>
        <h1>Seasonal Produce Finder</h1>
        <h3>Please select a month</h3>

        <div className="buttonContainer">
          <button
            className="january"
            onClick={() => handleClick(0)}

            style={{ background: activeMonth === 0 ? 'lightblue' : 'white' }}

          >
            January
          </button>
          <button
            className="february"
            onClick={() => handleClick(1)}

            style={{ background: activeMonth === 1 ? 'lightblue' : 'white' }}

          >
            February
          </button>
          <button
            className="march"
            onClick={() => handleClick(2)}

            style={{ background: activeMonth === 2 ? 'lightblue' : 'white' }}

          >
            March
          </button>
          <button
            className="april"
            onClick={() => handleClick(3)}

            style={{ background: activeMonth === 3 ? 'lightblue' : 'white' }}

          >
            April
          </button>
          <button
            className="may"
            onClick={() => handleClick(4)}

            style={{ background: activeMonth === 4 ? 'lightblue' : 'white' }}

          >
            May
          </button>
          <button
            className="june"
            onClick={() => handleClick(5)}

            style={{ background: activeMonth === 5 ? 'lightblue' : 'white' }}

          >
            June
          </button>

          <button
            className="july"
            onClick={() => handleClick(6)}

            style={{ background: activeMonth === 6 ? 'lightblue' : 'white' }}

          >
            July
          </button>
          <button
            className="august"
            onClick={() => handleClick(7)}

            style={{ background: activeMonth === 7 ? 'lightblue' : 'white' }}

          >
            August
          </button>
          <button
            className="september"
            onClick={() => handleClick(8)}

            style={{ background: activeMonth === 8 ? 'lightblue' : 'white' }}

          >
            September
          </button>
          <button
            className="october"
            onClick={() => handleClick(9)}

            style={{ background: activeMonth === 9 ? 'lightblue' : 'white' }}

          >
            October
          </button>
          <button
            className="november"
            onClick={() => handleClick(10)}

            style={{ background: activeMonth === 10 ? 'lightblue' : 'white' }}

          >
            November
          </button>
          <button
            className="december"
            onClick={() => handleClick(11)}

            style={{ background: activeMonth === 11 ? 'lightblue' : 'white' }}

          >
            December
          </button>
        </div>

      </div>
      <hr />
      <div className="produce-list">
        {produceList.length > 0 ? (
          produceList.map((produce) => {
            return (
              <Card
                key={produce.name}
                name={produce.name}
                image={produce.image}
                description={produce.description}
              />
            );
          })
        ) : (
          <div className="defaultImg">
            <h3>Please Select a month</h3>
            <img src={defaultPic} alt="defaultPic" />
          </div>
        )}
      </div>

    </section>
  );
};

export default ProduceTracker;

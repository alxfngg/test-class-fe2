/* eslint-disable react/prop-types */
import React from 'react';
<<<<<<< HEAD:components/courses/Offered.jsx
=======
import styles from '../styles/ExploreHome.module.css';
>>>>>>> 41bb550 (connect fe to be):components/Offered.jsx
import OfferedTile from './OfferedTile';
import styles from '../../styles/ExploreHome.module.css';

function loadOfferings(values) {
  return values.map((value) => (
    <OfferedTile
      key={`${value.term}${value.professors}`}
      term={value.term}
      professors={value.professors}
      period={value.period}
    />
  ));
}

function Offered(props) {
  const { course } = props;
  return (
    <div className={[styles.horizscroll]}>
      {course.offerings ? loadOfferings(course.offerings) : ''}
    </div>
  );
}

export default Offered;

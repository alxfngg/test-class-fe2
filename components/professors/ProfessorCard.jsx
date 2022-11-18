import React from 'react';
import {
  H1, B1, TextLabel,
} from '../ui/typography';
// eslint-disable-import/no-unresolved
import styles from '../../styles/components/ProfessorCard.module.css';

function ProfessorCard(props) {
  const { name, departments } = props;
  return (

    <div className={styles.container}>
      <img className={styles.pic} src="https://faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/profile_square.jpg?itok=lVqJtQt6" alt="Tim" />
      <div className={styles.wordSection}>
        <TextLabel color="var(--darkest-grey)">Professor</TextLabel>
        <H1 style={{ margin: '0px' }}>{name}</H1>
        <B1>{departments ? `Departments: ${departments.join('/')}` : ''}</B1>
      </div>
    </div>
  );
}

export default ProfessorCard;

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import getColor from '../data/colorscheme';
import stylesCI from '../styles/CourseInfo.module.css';
import {
  TextLabel,
} from './ui/typography';

function OfferedTile(props) {
  const { term, professors } = props;
  return (
    <div className={stylesCI.tile} style={{ background: getColor('term', term) }}>
      <TextLabel>{term}</TextLabel>
      <TextLabel>{professors}</TextLabel>
    </div>
  );
}

export default OfferedTile;

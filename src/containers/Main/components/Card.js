import React from 'react';
import { Card as CardUI } from '../../../components';
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style';

export function Card({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}
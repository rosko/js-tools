import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '../src/Logo';

storiesOf('Logo', module).
  add('default', () => <Logo/>);

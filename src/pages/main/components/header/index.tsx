import React from 'react';
import { Row, Button } from 'react-bootstrap';

import cls from './header.module.scss';

export type HeaderProps = {
  onClick?: (e: any) => void;
};

const Header = (props: HeaderProps) => {
  return (
    <Row className={cls.headerWrapper}>
      <header className='App-header'>
        <p>This is git history explorer!</p>
      </header>
      <Button variant='primary' onClick={props.onClick}>
        Primary
      </Button>
    </Row>
  );
};

export default Header;

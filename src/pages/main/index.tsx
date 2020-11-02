import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { GitAuthor, GitCommit, GitCommitter } from './type';
import { Container, Row, Spinner, Table } from 'react-bootstrap';

import cls from './main.module.scss';

export type MainPageProps = {};

const Main = (props: MainPageProps) => {
  const [gitHistory, setGitHistory] = useState<GitCommit | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setLoading(true);
    Axios.get(
      'https://api.github.com/repos/jacobsmoli/Git-History-Explorer/commits'
    )
      .then((res) => {
        // setLoading(false);
        console.log('~~~~~~~` res', res);
      })
      .catch((err) => {
        // setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={cls.loadingContainer}>
        <Spinner animation='border' variant='primary' />
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <header className='App-header'>
          <p>This is git history explorer!</p>
        </header>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Main;

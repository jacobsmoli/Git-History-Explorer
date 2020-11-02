import React from 'react';
import { Container, Row, Spinner, Table, Alert } from 'react-bootstrap';

import { GitAuthor, GitCommit, GitCommitter } from './../../type';

import cls from './history-table.module.scss';

export type HistoryTableProps = {
  data?: GitCommit[];
};

const columns = ['email', 'name', 'date'];

const HistoryTable = (props: HistoryTableProps) => {
  const { data: tableData } = props;
  if (!tableData || tableData.length == 0) {
    return (
      <Row className={cls.notFoundWrapper}>
        <Alert variant='danger'>Could not found history</Alert>
      </Row>
    );
  }

  return (
    <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {columns.map((column) => (
              <th>column</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map(({ commit = {} }) => {
              const committer: any = commit.committer || {};
              return (
                <>
                  {columns.map((column) => (
                    <td>{committer[column] || 'Undefined'}</td>
                  ))}
                </>
              );
            })}
        </tbody>
      </Table>
    </Row>
  );
};

export default HistoryTable;

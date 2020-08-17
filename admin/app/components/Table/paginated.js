import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ViewButton from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({
  columns,
  rows,
  viewClick,
  deleteClick,
  editClick,
}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align && column.align}
                  style={{ minWidth: column.minWidth || 170 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row._id || i}
                >
                  {columns.map(column => {
                    const value = row[column.id];
                    
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id == 'action' ? (
                          <>
                            {' '}
                            {column.view && (
                              <IconButton onClick={e => viewClick(row)}>
                                <ViewButton color="primary" />
                              </IconButton>
                            )}
                            {column.edit && (
                              <IconButton onClick={e => editClick(row)}>
                                <EditIcon color="primary" />
                              </IconButton>
                            )}
                            {column.delete && (
                              <IconButton onClick={e => deleteClick(row)}>
                                <DeleteIcon color="secondary" />
                              </IconButton>
                            )}
                          </>
                        ) : column.format && typeof value === 'number' ? (
                          column.format ? (
                            column.format(value)
                          ) : (
                            value
                          )
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

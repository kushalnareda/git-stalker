import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
    id: 'name' | 'description' | 'language' | 'forks' | 'watchers';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'name', label: 'Full Name', minWidth: 120},
    { id: 'description', label: 'Description', minWidth: 170 },
    { id: 'language', label: 'Language', minWidth: 50 },
    { id: 'forks', label: 'Forks', minWidth: 50, align: 'right' },
    { id: 'watchers', label: 'Watchers', minWidth: 50, align: 'right' },
];

interface Data {
    name: string;
    language: string;
    description: string | null;
    forks: number;
    watchers: number;
}

function createData(name: string, language: string, description: string | null, forks: number, watchers: number): Data {
    return { name, language, description, forks, watchers };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '110%',
        marginTop: 70,
        transition: 'transform 0.3s, filter 0.3s',
        '&:hover': {
            transform: 'scale(1.005)', 
            filter: '', 
        },
    },
    container: {
        maxHeight: 500,
        borderRadius: 10,
        overflow: 'auto', 
        '&::-webkit-scrollbar': {
            width: '0.0em',
        },
    },
    tableRow: {
        '&:hover': {
            transform: 'scale(1.005)', 
            filter: 'drop-shadow(0 0 2px #fff)', 
          },
    },
}));


export default function RepoList() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState<Data[]>([]);

    useEffect(() => {
        const repoDataStr = localStorage.getItem('repoData');
        if (repoDataStr) {
        const repoData: any[] = JSON.parse(repoDataStr);
        const repoRows = repoData.map(repo => createData(
            repo.name,
            repo.language,
            repo.description,
            repo.forks,
            repo.watchers
        ));
        setRows(repoRows);
        }
    }, []);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}  >
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                            const value = row[column.id];
                            return (
                            <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                            );
                        })}
                        </TableRow>
                    );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
    }

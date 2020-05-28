import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import EditIcon from "@material-ui/icons/Edit";
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';
import CustomDataTableHead from './CustomDataTableHead'
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";
const useStyles = makeStyles(styles);

export default function CustomDataTable(props) {
    const { uniqueId, tableDataMapping, tableData, withActionView, withActionEdit, withActionDelete, handleViewCategoryEvent, handleEditCategoryEvent, hasCheckBox, tableHeaderColor } = props;
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const hasAction = withActionView || withActionEdit || withActionDelete || false

    const eventHandler = (object, action) => {
        if(action === 'VIEW'){
            handleViewCategoryEvent(object[uniqueId])
        }else {
            handleEditCategoryEvent(object[uniqueId])
        }
    };

    const getRowData = (object , key )=>{
    let arr = key.split('.');
    if(arr.length===1) return object[key];
    let ctr=1;
    let param=object;
    let retval={};
    arr.forEach( data  =>{
      param=param[data];
      retval = Object.assign({},{value:param});
    }
    );
     console.log("EXIT PARAM :" +retval);
     return retval.value;
  }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = tableData.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <div className={classes.tableResponsive}>
            <Paper className={classes.paper}>
                <div>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <CustomDataTableHead
                            tableHeaderColor={tableHeaderColor}
                            tableHeadData={tableDataMapping}
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={tableData.length}
                            hasCheckBox={hasCheckBox}
                        />
                        <TableBody>
                            {stableSort(tableData, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            {
                                                hasCheckBox && <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        inputProps={{'aria-labelledby': labelId}}
                                                    />
                                                </TableCell>
                                            }
                                            {
                                                tableDataMapping.map((value, key) => {
                                                    if(value.id === 'action') return;
                                                    return (
                                                        <TableCell className={classes.tableCell} key={key} >
                                                            
                                                            {getRowData(row,value.id)}
                                                        </TableCell>
                                                    );
                                                })
                                            }
                                            { hasAction && <TableCell className={classes.tableCell} key={'action'} align={'center'}>
                                                { withActionView &&
                                                <IconButton className={classes.button} aria-label="View" onClick={() => { eventHandler(row, 'VIEW') }}>
                                                    <InfoIcon />
                                                </IconButton>
                                                }
                                                { withActionEdit &&
                                                <IconButton className={classes.button} aria-label="Edit" onClick={() => { eventHandler(row, 'EDIT') }}>
                                                    <EditIcon />
                                                </IconButton>
                                                }
                                                { withActionDelete &&
                                                <IconButton className={classes.button} aria-label="Edit" component='a' href={'#'}>
                                                    <EditIcon />
                                                </IconButton>
                                                }
                                            </TableCell>
                                            }
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={tableData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}

CustomDataTable.propTypes = {
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.any),
    tableDataMapping: PropTypes.arrayOf(PropTypes.any),
    withActionEdit: PropTypes.bool,
    withActionView: PropTypes.bool,
    withActionDelete: PropTypes.bool,
    uniqueId: PropTypes.any,
    hasCheckBox: PropTypes.bool
};
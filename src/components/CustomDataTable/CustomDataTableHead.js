import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";
const useStyles = makeStyles(styles);

export default function CustomDataTableHead(props) {
    const { tableHeadData, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, hasCheckBox, tableHeaderColor } = props;
    const classes = useStyles();
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
                {
                    hasCheckBox && <TableCell padding="checkbox">
                        {
                            hasCheckBox && <Checkbox
                                indeterminate={numSelected > 0 && numSelected < rowCount}
                                checked={rowCount > 0 && numSelected === rowCount}
                                onChange={onSelectAllClick}
                                inputProps={{'aria-label': 'select all desserts'}}
                            />
                        }
                    </TableCell>
                }
                {
                    tableHeadData.map((prop, key) => {
                        console.log(prop)
                        return (
                            <TableCell
                                className={classes.tableCell + " " + classes.tableHeadCell}
                                key={prop.id}
                                align={prop.numeric ? 'right' : 'left'}
                                padding={prop.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === prop.id ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === prop.id}
                                    direction={orderBy === prop.id ? order : 'asc'}
                                    onClick={createSortHandler(prop.id)}
                                >
                                    {prop.label}
                                    {orderBy === prop.id ? (
                                        <span className={classes.visuallyHidden}> {order === 'desc' ? 'sorted descending' : 'sorted ascending'} </span>
                                    ) : null}
                                </TableSortLabel>
                            </TableCell>
                        );
                    })
                }
            </TableRow>
        </TableHead>
    );
}

CustomDataTableHead.propTypes = {
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHeadData: PropTypes.arrayOf(PropTypes.any),
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    hasCheckBox: PropTypes.bool
};
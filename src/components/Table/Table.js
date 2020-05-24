import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
// core components
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";
const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { uniqueId, tableHead, tableDataMapping, tableData, tableHeaderColor,  withActionView, withActionEdit, withActionDelete, handleViewCategoryEvent, handleEditCategoryEvent } = props;
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

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}

            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {
            tableData && tableDataMapping && tableData.length > 0 && tableDataMapping.length > 0 && tableData.map((obj, index) => {
              return (
                  <TableRow key={index}>
                    {tableDataMapping.map((property, key) => {
                      return (
                          <TableCell className={classes.tableCell} key={key} >
                            {getRowData(obj,property)}
                          </TableCell>
                      );
                    })}
                    { hasAction && <TableCell className={classes.tableCell} key={'action'} align={'center'}>
                      { withActionView &&
                      <IconButton className={classes.button} aria-label="View" onClick={() => { eventHandler(obj, 'VIEW') }}>
                        <InfoIcon />
                      </IconButton>
                      }
                      { withActionEdit &&
                      <IconButton className={classes.button} aria-label="Edit" onClick={() => { eventHandler(obj, 'EDIT') }}>
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
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
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
  handleAddCategoryEvent: PropTypes.func,
  uniqueId: PropTypes.any
};

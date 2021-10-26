import React from "react";
import { Dialog, DialogTitle, DialogContent, makeStyles } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";

// const useStyles = makeStyles(theme => ({
//     dialogWrapper : {
//         padding : theme.spacing(2),
//         position : 'absolute',
//         top: theme.spacing(5)
//     }
// }))

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  //   const classes = useStyles();

  //date picker
  const [value, setValue] = React.useState(null);

    //alert
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);


    const handleClick = () => {
      setOpen(true);
    };
    const handleClick2 = () => {
        setOpen2(true);
      };
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setOpen(false);
    };
    const handleClose2 = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setOpen2(false);
      };
  
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    //alert close

  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Button
            variant="text"
            color="error"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Close
            <ClearIcon />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent>
        <div>
          <div>
            <h3>Book</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ marginRight: "2rem" }}>
                {/* <h4>From</h4> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="From Date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div>
                {/* <h4>To</h4> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="To Date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Total Price: 4500$</h4>
              <Button
                variant="contained"
                color="success"
                style={{
                  width: "9rem",
                  height: "3rem",
                  backgroundColor: "#ffc800",
                }}
                onClick={handleClick}
              >
                BOOK
              </Button>
            </div>
          </div>
          <hr />
          <div>
            <h3>Return</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Used Mileage : 3000 km</h4>
              <Button
                variant="contained"
                color="success"
                style={{
                  width: "9rem",
                  height: "3rem",
                  backgroundColor: "#3bb5f2",
                }}
                onClick={handleClick2}
              >
                RETURN
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }} style={{backgroundColor: "#ffc800"}}>
          Booking Successful. Enjoy! :D
        </Alert>
      </Snackbar>
      <Snackbar
        open={open2}
        autoHideDuration={3000}
        onClose={handleClose2}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose2} severity="error" sx={{ width: "100%" }} style={{backgroundColor: "#3bb5f2"}}>
          Return Successful. Enjoy! :D
        </Alert>
      </Snackbar>
    </Dialog>
    
  );
}

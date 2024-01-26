import React, { useRef, useState } from "react";
import {
  Alert,
  AlertColor,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ContactUsStyles from "./ContactUs.styles";
import InputMask from "react-input-mask";
import {
  RobotoMediumFont,
  getRelativeFontSize,
  regularFont,
} from "../../styles/styles";
import { getFormattedNumbers, isTruthy } from "../helpers/methods";
import { ContactFields } from "../models/interface";
import aboutIcon from "../../assets/images/home/aboutIcon.webp";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const timeData = [
  { time: "09:00 am" },
  { time: "10:00 am" },
  { time: "11:00 am" },
  { time: "12:00 am" },
  { time: "01:00 am" },
  { time: "02:00 am" },
  { time: "03:00 am" },
  { time: "04:00 am" },
  { time: "05:00 am" },
];

const ContactUsForm = () => {
  const classes = ContactUsStyles;
  const [formFields, setFormFields] = useState<ContactFields>({
    time: {
      value: "",
      error: "",
    },
    firstname: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    phone: {
      value: "",
      error: "",
    },
    date: {
      value: new Date().toISOString(),
      error: "",
    },
    description: {
      value: "",
      error: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleMaskInputChange = (event: React.ChangeEvent<any>) => {
    const response = getFormattedNumbers(event.target.value);
    setFormFields({
      ...formFields,
      [event.target.name]: {
        ...formFields[event.target.name],
        value: response.number,
        error: "",
      },
    });
  };

  const validateData = () => {
    let errors = formFields;
    let isValid = true;
    const firstname = formFields.firstname.value;
    const email = formFields.email.value;
    const phone = formFields.phone.value;
    const time = formFields.time.value;
    if (!email && !firstname! && !phone && !time) {
      errors.firstname.error = "Please enter first name.";
      errors.email.error = "Please enter email.";
      errors.phone.error = "Please enter phone number.";
      errors.time.error = "Please select time.";
      isValid = false;
    } else if (!firstname) {
      errors.firstname.error = "Please enter first name.";
      isValid = false;
    } else if (!email) {
      errors.email.error = "Please enter email.";
      isValid = false;
    } else if (!time) {
      errors.time.error = "Please select time.";
      isValid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      errors.email.error = "Please enter valid email.";
      isValid = false;
    } else if (phone.length !== 10) {
      errors.phone.error = "Please enter valid phone number.";
      isValid = false;
    }
    setFormFields({ ...errors });
    return isValid;
  };

  const handleOnChangeInputField = (event: React.ChangeEvent<any>) => {
    setFormFields({
      ...formFields,
      [event.target.name]: {
        ...formFields[event.target.name],
        value: event.target.value,
        error: "",
      },
    });
  };

  const handleDateChange = (newValue: any) => {
    const formattedDate = dayjs(newValue).format("YYYY-MM-DD"); // Format the date
    setFormFields({
      ...formFields,
      date: {
        value: newValue, // Assign the formatted date
        error: "",
      },
    });
  };

  const submitData = async () => {
    try {
      setIsLoading(true);
      if (validateData()) {
        const body: any = {
          time: formFields.time.value,
          name: formFields.firstname.value,
          email: formFields.email.value,
          description: formFields.description.value,
          recipient_phone_number: formFields.phone.value,
          date: dayjs(formFields.date.value).format("YYYY-MM-DD"),
        };
        const message = `
        Appointment Details:
        name: ${body.name}
        Date: ${body.date}
        Time: ${body.time}
        phoneNumber: ${body.recipient_phone_number}
        Email: ${body.email}
        description: ${body.description}
        `;
        const whatsappLink = `https://wa.me/918439110001?text=${encodeURIComponent(
          message
        )}`;

        // Open WhatsApp link in a new tab
        window.open(whatsappLink, "_blank");
        // window.location.href = `https://wa.me/918439110001?text=${encodeURIComponent(
        //   message
        // )}`;
        // const requestOptions = {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(body),
        // };

        // await fetch(urls.contactApiCallEndpoint, requestOptions);
        setOpen(true);
        setIsSuccess(true);
        setFormFields({
          time: {
            value: "",
            error: "",
          },
          firstname: {
            value: "",
            error: "",
          },
          email: {
            value: "",
            error: "",
          },
          phone: {
            value: "",
            error: "",
          },
          description: {
            value: "",
            error: "",
          },
          date: {
            value: new Date().toISOString(),
            error: "",
          },
        });
      }
    } catch (errorMessage: any) {
      setOpen(true);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTimeChange = (event: SelectChangeEvent<any>) => {
    setFormFields({
      ...formFields,
      time: {
        ...formFields[event.target.name],
        value: event.target.value,
        error: "",
      },
    });
  };

  const form = () => {
    return (
      <>
        <FormGroup>
          <FormControl>
            <Grid container spacing={1} sx={classes.formMainContent}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={classes.formElementGrid}
              >
                <TextField
                  required
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  variant="outlined"
                  value={formFields.firstname.value}
                  onChange={handleOnChangeInputField}
                  sx={classes.textfieldStyles}
                  error={isTruthy(formFields.firstname.error)}
                  helperText={formFields.firstname.error}
                  disabled={isLoading}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={classes.formElementGrid}
              >
                <TextField
                  required
                  id="email"
                  name="email"
                  aria-placeholder="Email"
                  type="email"
                  variant="outlined"
                  value={formFields.email.value}
                  placeholder="Email"
                  onChange={handleOnChangeInputField}
                  sx={classes.textfieldStyles}
                  error={isTruthy(formFields.email.error)}
                  helperText={formFields.email.error}
                  disabled={isLoading}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                mb={2}
                sx={classes.formElementGrid}
              >
                <InputMask
                  required
                  mask="(999) 999-9999"
                  placeholder="(999) 999-9999"
                  value={formFields.phone.value}
                  onChange={handleMaskInputChange}
                  name="phone"
                  style={{
                    ...RobotoMediumFont,
                    fontSize: getRelativeFontSize(2),
                    padding: "16px",
                    borderWidth: "1px",
                    borderColor: !isTruthy(formFields.phone.error)
                      ? "rgba(60, 60, 67, 0.60)"
                      : "#d32f2f",
                    borderLeftColor: "#c4c4c4 !important",
                    borderTopColor: "#c4c4c4 !important",
                    borderRightColor: "#c4c4c4 !important",
                    borderBottomColor: "#c4c4c4 !important",
                    borderTopStyle: "double",
                    borderLeftStyle: "double",
                    borderRadius: "10px",
                  }}
                  disabled={isLoading}
                />
                {isTruthy(formFields.phone.error) && (
                  <FormHelperText sx={{ color: "#d32f2f" }}>
                    {formFields.phone.error}
                  </FormHelperText>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                mb={1}
                sx={classes.formElementGrid}
              >
                <>
                  <Select
                    id="consultanat-name"
                    name="name"
                    value={formFields.time.value}
                    onChange={handleTimeChange}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    sx={classes.selectMenu}
                    style={{
                      color: formFields.time.value === "" ? "#BDBDBD" : "",
                    }}
                    renderValue={
                      formFields.time.value !== ""
                        ? undefined
                        : () => "Select Time"
                    }
                    displayEmpty
                    error={
                      !isTruthy(formFields.time.value) &&
                      formFields.time.error !== ""
                    }
                  >
                    {timeData.map((data: any, index: number) => (
                      <MenuItem
                        sx={classes.optionStyle}
                        value={data.time}
                        key={index}
                      >
                        {data.time}
                      </MenuItem>
                    ))}
                  </Select>
                  {!isTruthy(formFields.time.value) &&
                    formFields.time.error && (
                      <FormHelperText error>
                        {formFields.time.error}
                      </FormHelperText>
                    )}
                </>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={classes.formElementGrid}
              >
                <TextField
                  required
                  id="description"
                  name="description"
                  placeholder="Briefly describe the service you are seeking."
                  variant="outlined"
                  value={formFields.description.value}
                  onChange={handleOnChangeInputField}
                  sx={classes.textfieldStyles}
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Button
                  id="contact-us-btn"
                  variant="contained"
                  sx={classes.submitButton}
                  onClick={() => submitData()}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <CircularProgress size={20} sx={{ color: "black" }} />
                    </Box>
                  ) : (
                    "Book Appointment"
                  )}
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </FormGroup>
      </>
    );
  };

  const makeAppointment = () => {
    return (
      <>
        <Stack direction="column" alignItems="center" mb={5}>
          <Typography gutterBottom sx={classes.aboutText}>
            Make an Appointment
          </Typography>
          <img
            src={aboutIcon}
            width="240px"
            height="15px"
            style={{ marginBottom: "60px" }}
            alt="Appointment"
          />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  borderRadius: "9px",
                  border: "1px solid #9D9D9D",
                  background: "#FFF",
                  padding: 0.5,
                  width: { md: "85%" }, // Use responsive width if needed
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    value={dayjs(formFields.date.value)}
                    onChange={handleDateChange}
                    minDate={dayjs(new Date())}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {form()}
            </Grid>
          </Grid>
        </Stack>
      </>
    );
  };

  const getSnackBar = () => {
    return (
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={
            isSuccess ? ("success" as AlertColor) : ("error" as AlertColor)
          }
          sx={{ width: "100%" }}
        >
          {isSuccess
            ? "Appointment details sent successfully!"
            : "Something went wrong! Please try again."}
        </Alert>
      </Snackbar>
    );
  };

  return (
    <>
      {makeAppointment()}
      {getSnackBar()}
    </>
  );
};

export default ContactUsForm;

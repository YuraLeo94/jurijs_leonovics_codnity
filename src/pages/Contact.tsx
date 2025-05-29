import React, { JSX, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { contactFormTexts } from "../constants";

const Contact = (): JSX.Element => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    });
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 600, mx: "auto", p: 2 }}
      >
        <TextField
          label={contactFormTexts.firstNameLabel}
          name="firstName"
          fullWidth
          margin="normal"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          label={contactFormTexts.lastNameLabel}
          name="lastName"
          fullWidth
          margin="normal"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <TextField
          label={contactFormTexts.emailLabel}
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          label={contactFormTexts.descriptionLabel}
          name="description"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={form.description}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          {contactFormTexts.sendButton}
        </Button>
      </Box>

      <Dialog open={modalOpen} onClose={handleClose}>
        <DialogTitle>{contactFormTexts.modalTitle}</DialogTitle>
        <DialogContent>{contactFormTexts.modalContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            {contactFormTexts.modalConfirmButton}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Contact;

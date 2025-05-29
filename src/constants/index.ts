const API_PATH = "https://jsonplaceholder.typicode.com";
const LOGO_TEXT = "MySite";
const CURRENT_YEAR = new Date().getFullYear();
const COPYRIGHT_TEXT = `© ${CURRENT_YEAR} MySite. All rights reserved.`;
const UNKNOWN_USER_TEXT = "Unknown User";
const UNKNOWN_ALBUM_TEXT = "Unknown Album";
const BUTTON_LOAD_MORE_TEXT = "Load more...";
const LOAD_MORE_END_TEXT = "You've reached the end!";
const SKELTON_COUNT = 3;
const NO_IMAGE_AVAILABLE_PATH = "/images/placeholder_400x200.svg";
const POST_PAGE_TITLE = "Posts";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Album", path: "/album" },
  { label: "Contact Us", path: "/contact" },
];

const postCardLabels = {
  authorLabel: "Author:",
  titleLabel: "Title:",
  descriptionLabel: "Description:",
};

const postCardModalLabels = {
  albumLabel: "Album:",
  userLabel: "User:",
  emailLabel: "Email:",
  descriptionLabel: "Description:",
};

const contactFormTexts = {
  firstNameLabel: "First Name",
  lastNameLabel: "Last Name",
  emailLabel: "Email",
  descriptionLabel: "Describe your request here",
  sendButton: "Send",
  modalTitle: "Thank you!",
  modalContent:
    "Thank you for your message! We will get back to you as soon as possible.",
  modalConfirmButton: "Close",
};

const albumCardLabels = {
  albumLabel: "Album:",
  userLabel: "User:",
};

export {
  API_PATH,
  LOGO_TEXT,
  COPYRIGHT_TEXT,
  UNKNOWN_USER_TEXT,
  BUTTON_LOAD_MORE_TEXT,
  LOAD_MORE_END_TEXT,
  UNKNOWN_ALBUM_TEXT,
  SKELTON_COUNT,
  NO_IMAGE_AVAILABLE_PATH,
  POST_PAGE_TITLE,
  navLinks,
  postCardLabels,
  contactFormTexts,
  postCardModalLabels,
  albumCardLabels,
};

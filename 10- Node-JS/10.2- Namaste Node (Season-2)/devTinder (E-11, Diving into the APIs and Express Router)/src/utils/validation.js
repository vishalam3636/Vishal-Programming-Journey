const validateEditProfileData = (req) => {
  const allowedEditFields = ["firstName", "lastName", "emailId"];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};

const validateEditPassword = (req) => {
  const allowedPwdEditFields = ["oldPassword", "newPassword"];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedPwdEditFields.includes(field)
  );
  return isEditAllowed;
};

module.exports = { validateEditProfileData, validateEditPassword };

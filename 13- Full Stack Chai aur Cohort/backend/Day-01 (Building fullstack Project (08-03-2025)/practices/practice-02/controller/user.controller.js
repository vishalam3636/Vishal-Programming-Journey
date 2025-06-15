const registerUser = async (req, res) => {
  res.send("registered");
};

const getAllUser = async (req, res) => {
  res.send("Get all user");
};

export { registerUser, getAllUser };

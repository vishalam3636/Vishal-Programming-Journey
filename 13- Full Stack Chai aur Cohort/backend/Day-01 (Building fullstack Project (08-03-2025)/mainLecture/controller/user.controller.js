const registerUser = async (req, res) => {
  res.send("Registered !!!");
};

const loginUser = async (req, res) => {
  res.send("User logged In !!");
};

export { registerUser, loginUser };

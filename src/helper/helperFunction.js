let sample = "hello ";
export const verifyLoginCredentials = (email, password) => {
  if (!email.includes("@")) {
    return { error: "invalid email address 'missing @'" };
  } else {
    if (email.length < 6) {
      return { error: "invalid email address " };
    } else {
      if (password.length < 5) {
        return { error: "ipassword must be greater than 5 characters" };
      } else {
        return true;
      }
    }
  }
};

export const verifySignUpCredentials = (email, password, confirmPassword) => {
  if (!email.includes("@")) {
    return { error: "invalid email address 'missing @'" };
  } else {
    if (email.length < 6) {
      return { error: "invalid email address " };
    } else {
      if (password.length < 5) {
        return { error: "password must be greater than 5 characters" };
      } else {
        if (password != confirmPassword) {
          return { error: "password doesnt match confirmed password" };
        } else {
          return true;
        }
      }
    }
  }
};

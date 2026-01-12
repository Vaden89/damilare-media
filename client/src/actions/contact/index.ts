"use server";

export const sendMessageAction = async (_: any, formData: FormData) => {
  console.log(formData);

  return {
    full_name: "",
    email: "",
    message: "",
  };
};

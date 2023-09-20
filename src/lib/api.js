export const sendContactForm = async(data) => 
fetch('../../api/contact', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
}).then((res) => {
    console.log(data, "DATA TEST");
    // console.log(res, "TESTING THE RES");
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
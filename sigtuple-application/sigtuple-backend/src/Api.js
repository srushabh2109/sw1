import axios from "axios";
import sendGrid from "@sendgrid/mail";
let _ = require("lodash");

let local = `http://localhost:1337`;
let staging = `http://3.16.244.13:1337`;

const Api = axios.create({
  baseURL: staging,
});

export default Api;

export const getBlogs = async (fields) => {
  let params = [];
  if (fields.start) {
    params.push(`_start=${fields.start}`);
  }
  if (fields.limit) {
    params.push(`_limit=${fields.limit}`);
  }
  let queryParams = params.length ? `?${params.join("&")}` : "";
  let data = await Api.get(`/blogs${queryParams}`);
  return data.data;
};

export const getClients = async () => {
  let data = await Api.get("/clients");
  return data.data;
};

export const getPublications = async (fields) => {
  let params = [];
  params.push(`_sort=updated_at:desc`);

  if (fields.start) {
    params.push(`_start=${fields.start}`);
  }
  if (fields.limit) {
    params.push(`_limit=${fields.limit}`);
  }
  if (fields.year) {
    // params.push(
    //   `publish_at_gte=${fields.year}-01-01&publish_at_lte=${fields.year}-12-31`
    // );
  }

  let queryParams = params.length ? `?${params.join("&")}` : "";

  let data = await Api.get(`/publications${queryParams}`);

  return data.data;
};

export const getPublicationCounts = async (fields) => {
  let params = [];

  if (fields.year) {
    params.push(
      `publish_at_gte=${fields.year}-01-01&publish_at_lte=${fields.year}-12-31`
    );
  }

  let queryParams = params.length ? `?${params.join("&")}` : "";

  let data = await Api.get(`/publications/count${queryParams}`);

  return data.data;
};

export const getBlogCounts = async () => {
  let data = await Api.get(`/blogs/count`);
  return data.data;
};

export const getOpenings = async () => {
  let data = await Api.get("/openings");

  return data.data;
};

export const getOpeningCounts = async () => {
  let data = await Api.get("/openings/count");

  return data.data;
};

// export const getTechSepcs = async (fields) =>{
//     let params=[]
//     if(fields.start){
//         params.push(`_start=${fields.start}`)
//     }
//     if(fields.limit){
//         params.push(`_limit=${fields.limit}`)
//     }

//     let queryParams=params.length ? `?${params.join("&")}`:''

//     let data = await Api.get(`/tech-specifications${queryParams}`);

//     return data.data;

// }

// export const getTechSepcsCounts = async () =>{
//     let data = await Api.get("/tech-specifications/count");

//     return data.data;

// }

export const getTeams = async (fields) => {
  let params = [];

  params.push(`_sort=created_at:asc`);

  // if(fields.start){
  //     params.push(`_start=${fields.start}`)
  // }
  // if(fields.limit){
  //     params.push(`_limit=${fields.limit}`)
  // }

  let queryParams = params.length ? `?${params.join("&")}` : "";

  console.log(queryParams);

  let data = await Api.get(`/teams${queryParams}`);

  return data.data;
};

export const getTeamCounts = async () => {
  let data = await Api.get("/teams/count");

  return data.data;
};

export const getStories = async (fields) => {
  let query = [];
  if (fields && fields.year) {
    query.push(`year_in=${fields.year - 1}`);
    query.push(`year_in=${fields.year}`);
    query.push(`year_in=${fields.year + 1}`);
  }
  let queryParams = query.length ? `?${query.join("&")}` : "";
  let data = await Api.get(`/stories${queryParams}`);

  return data.data;
};

export const addContactUs = async (fields) => {
  fields.company_name = fields.companyName;
  fields.phone_no = fields.phoneNo;
  fields = _.omit(fields, ["phoneNo", "companyName"]);
  let data = await Api.post(`/contactuses`, fields);
  return data.data;
};

export const getFAQs = async (fields) => {
  console.log(fields);
  let params = [];
  if (fields.type) {
    params.push(`type_eq=${fields.type}`);
  }
  if (fields.start) {
    params.push(`_start=${fields.start}`);
  }
  if (fields.limit) {
    params.push(`_limit=${fields.limit}`);
  }

  let queryParams = params.length ? `?${params.join("&")}` : "";

  let data = await Api.get(`/faqs${queryParams}`);

  return data.data;
};

export const getFAQCounts = async (fields) => {
  let params = [];
  if (fields.type) {
    params.push(`type_eq=${fields.type}`);
  }

  let queryParams = params.length ? `?${params.join("&")}` : "";

  let data = await Api.get(`/faqs/count${queryParams}`);

  return data.data;
};

export const sendOtp = async (fields) => {
  let data = await Api.post(`/bookings/send/otp`, fields);
  return data.data;
};

export const verifyOtp = async (fields) => {
  let data = await Api.post(`/bookings/verify/otp`, fields);
  return data.data;
};

export const getBookings = async (fields) => {
  let params = [];

  if (fields.book_at) {
    params.push(
      `book_at_gte=${fields.book_at}T00:00:00.000Z&book_at_lte=${fields.book_at}T23:59:00.000Z`
    );
  }

  let queryParams = params.length ? `?${params.join("&")}` : "";

  let data = await Api.get(`/bookings${queryParams}`);

  return data.data;
};

export const addBookings = async (fields) => {
  // await sendGridMail({
  //   to: "jigarfoon97@gmail.com",
  //   from: "demo1@gmail.com",
  //   subject: "Testing",
  //   text: "Testing",
  //   html: "<strong>Test</strong>",
  // });
  let data = await Api.post(`/bookings`, fields);
  return data.data;
};

export const getBookingSlots = async (fields) => {
  let data = await Api.post(`/bookings/get/booking/solts`, fields);
  return data.data;
};

export const getVideos = async (fields) => {
  let params = [];
  if (fields.type) {
    params.push(`type_eq=${fields.type}`);
  }

  let queryParams = params.length ? `?${params.join("&")}` : "";

  let data = await Api.get(`/videos${queryParams}`);

  return data.data[0];
};

export const getTermsNConditions = async () => {
  let data = await Api.get(`/terms-and-conditions?_sort=created_at:asc`);

  return data.data;
};

export const sendGridMail = async ({ to, from, subject, text, html }) => {
  try {
    sendGrid.setApiKey(
      "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"
    );
    const mailContent = {
      to: to,
      from: from,
      subject: subject,
      text: text,
      html: html,
    };

    console.log(mailContent);
    sendGrid
      .send(mailContent)
      .then(() => console.log("Mail send"))
      .catch((error) => console.log(error));
  } catch (error) {}
};

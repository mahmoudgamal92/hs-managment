import 'dotenv/config';

export default {
  expo: {
    name: "HS Managment",
    slug: "hs_managment",
    version: "1.0.1",
    extra: {
    WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN,
    WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER
    }
  }
};

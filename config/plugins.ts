export default ({ env }) => ({
  // upload provider
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      sizeLimit: parseFloat(env("UPLOAD_MAX_FILE_SIZE")) * 1024 * 1024, // 1mb in bytes
      breakpoints: {
        xlarge: 1920,
        // large: 1280,
        medium: 960,
        small: 640,
        //xsmall: 320,
      },
    },
  },
  // email provider
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "localhost"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
        secure: false,
        tls: {
          rejectUnauthorized: false,
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "sender@mail.localhost",
        defaultReplyTo: "sender@mail.localhost",
      },
    },
  },
});

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
});

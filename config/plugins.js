module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: "ap-south-1",
      params: {
        Bucket: "lib-sys",
      },
    },
  },

  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "19mcme04@uohyd.ac.in",
      defaultReplyTo: "19mcme04@uohyd.ac.in",
      testAddress: "19mcme04@uohyd.ac.in",
    },
  },
});

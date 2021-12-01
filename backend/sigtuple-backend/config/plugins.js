module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'nisargdiam@gmail.com',
        defaultReplyTo: 'nisargdiam@gmail.com',
        testAddress: 'nisargdiam@gmail.com'
      },
    },
  });
  

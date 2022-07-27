module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: 'smtp.feishu.cn', //SMTP Host
        port: 465   , //SMTP Port
        secure: true,
        username: 'web@spyx.com',
        password: '2faAX9e29j7onVaZ',
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      defaultFrom: 'web@spyx.com',
      defaultReplyTo: 'web@spyx.com',
    }, 
  },    
});
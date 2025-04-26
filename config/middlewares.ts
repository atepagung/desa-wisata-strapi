export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': [
            "'self'",    // ini WAJIB supaya bisa load dari domain sendiri
            'https:',
            'https://cdn.ckeditor.com',
          ],
          'connect-src': [
            "'self'",
            'https:',
            'https://proxy-event.ckeditor.com',
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https:',
          ],
          'frame-src': [
            "'self'",
            'https:',
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

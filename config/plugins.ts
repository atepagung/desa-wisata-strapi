export default ({ env }) => ({
    ckeditor: {
      enabled: true,
      config: {
        licenseKey: env('CKEDITOR_LICENSE_KEY'), 
      },
    },
  });
  
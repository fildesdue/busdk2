
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['tPqUSAvm89CQ6Ba6P7RSnu'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  
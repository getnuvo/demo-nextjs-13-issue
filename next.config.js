const withTM = require("next-transpile-modules")(["nuvo-react"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);

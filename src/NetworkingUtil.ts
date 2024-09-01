const os = require('os');

export default function getServerIP() {
  const networkInterfaces = os.networkInterfaces();

  for (const interfaceName in networkInterfaces) {
    const addresses = networkInterfaces[interfaceName];

    for (const addressInfo of addresses) {
      // Check if it's an IPv4 address and not an internal (localhost) address
      if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
        return addressInfo.address;
      }
    }
  }
  return 'IP address not found';
}

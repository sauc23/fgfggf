const { exec } = require('child_process');
const os = require('os');

// Install @warren-bank/hls-proxy package globally
exec('npm install --global "@warren-bank/hls-proxy"', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error installing @warren-bank/hls-proxy: ${error}`);
    return;
  }
  // Define the command to run HLS downloader with the specified user-agent and port
  const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
  const port = 3000;
  const hlsdCommand = `hlsd --user-agent "${userAgent}" --port ${port}`;

  // Execute the HLS downloader command
  exec(hlsdCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing HLS downloader command: ${error}`);
      return;
    }
    console.log(`HLS downloader is running on port ${port}`);
  });
});

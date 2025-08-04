#!/usr/bin/env node

const http = require('http');

function checkServer(port, name, path = '/') {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: path,
      method: 'GET',
      timeout: 3000
    };

    const req = http.request(options, (res) => {
      console.log(`✅ ${name} is running on http://localhost:${port}`);
      resolve(true);
    });

    req.on('error', (err) => {
      console.log(`❌ ${name} is NOT running on port ${port}`);
      resolve(false);
    });

    req.on('timeout', () => {
      console.log(`⏱️  ${name} timed out on port ${port}`);
      req.destroy();
      resolve(false);
    });

    req.setTimeout(3000);
    req.end();
  });
}

async function checkAllServers() {
  console.log('🔍 Checking SwipeShare servers...\n');
  
  const frontendRunning = await checkServer(3000, 'Frontend (React App)');
  const backendRunning = await checkServer(5000, 'Backend (Express API)', '/api/health');
  
  console.log('\n📊 Server Status Summary:');
  console.log('========================');
  
  if (frontendRunning) {
    console.log('🌐 Website URL: http://localhost:3000');
    console.log('   → Copy this URL and paste it in your web browser');
  } else {
    console.log('🚨 Frontend server needs to be started');
  }
  
  if (backendRunning) {
    console.log('🔧 API URL: http://localhost:5000');
  } else {
    console.log('🚨 Backend server needs to be started');
  }
  
  if (frontendRunning && backendRunning) {
    console.log('\n🎉 All servers are running! Website is ready to use!');
  } else if (frontendRunning) {
    console.log('\n⚠️  Website will load but some features may not work without backend');
  } else {
    console.log('\n❌ Servers need to be started. Run: npm run dev');
  }
}

checkAllServers();
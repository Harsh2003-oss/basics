//Creating a server using http.createServer() method

// const http = require('http');

// const server = http.createServer((request, response) => {
  
//   // IMPORTANT: Tell the browser we're sending HTML
  
//   if (request.url === '/') {
//     // Home page with HTML
//     response.end(`
//       <html>
//         <body style="font-family: Arial; background-color: black; padding: 20px;">
//           <h1 style="color: blue;">Welcome to My Website! 🏠</h1>
//           <p>This is my awesome home page!</p>
//           <a href="/about">Go to About Page</a>
//         </body>
//       </html>
//     `);
//   } 
//   else if (request.url === '/about') {
//     // About page with HTML
//     response.end(`
//       <html>
//         <body style="font-family: Arial; background-color: #e8f5e9; padding: 20px;">
//           <h1 style="color: green;">About Me 📖</h1>
//           <p>I'm learning backend development!</p>
//           <p>This is so cool!</p>
//           <a href="/">Back to Home</a> | <a href="/contact">Contact Me</a>
//         </body>
//       </html>
//     `);
//   } 
//   else if (request.url === '/contact') {
//     // Contact page with HTML
//     response.end(`
//       <html>
//         <body style="font-family: Arial; background-color: #fff3e0; padding: 20px;">
//           <h1 style="color: orange;">Contact Me 📧</h1>
//           <p>Email: hello@example.com</p>
//           <p>Phone: 123-456-7890</p>
//           <a href="/">Back to Home</a>
//         </body>
//       </html>
//     `);
//   } 
//   else {
//     // 404 page with HTML
//     response.end(`
//       <html>
//         <body style="font-family: Arial; background-color: #ffebee; padding: 20px;">
//           <h1 style="color: red;">404 - Page Not Found! ❌</h1>
//           <p>Oops! This page doesn't exist.</p>
//           <a href="/">Go back to Home</a>
//         </body>
//       </html>
//     `);
//   }
  
// });

//Here server listens on port 3000 :
// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
//   console.log('Now with colorful HTML pages! 🎨');
// });


//Here below is the code for form handeling
// const http = require('http');

// const server = http.createServer((request, response) => {
  
//   response.setHeader('Content-Type', 'text/html');
  
//   // Home page - Show a form
//   if (request.url === '/' && request.method === 'GET') {
//     response.end(`
//       <html>
//         <body style="font-family: Arial; padding: 40px; background-color: #f5f5f5;">
//           <h1>Welcome! 👋</h1>
//           <p>Fill out this form:</p>
          
//           <form action="/submit" method="POST">
//             <label>Your Name:</label><br>
//             <input type="text" name="name" required style="padding: 8px; margin: 10px 0; width: 300px;"><br>
            
//             <label>Your Message:</label><br>
//             <textarea name="message" required style="padding: 8px; margin: 10px 0; width: 300px; height: 80px;"></textarea><br>
            
//             <button type="submit" style="padding: 10px 20px; background: blue; color: white; border: none; cursor: pointer;">
//               Send Message
//             </button>
//           </form>
//         </body>
//       </html>
//     `);
//   }
  
//   // Handle form submission
//   else if (request.url === '/submit' && request.method === 'POST') {
    
//     // Collect the data user sent
//     let body = '';
    
//     request.on('data', (chunk) => {
//       body += chunk.toString();
//     });
    
//     request.on('end', () => {
//       // Parse the form data
//       // It comes like: name=John&message=Hello
//       const params = new URLSearchParams(body);
//       const name = params.get('name');
//       const message = params.get('message');
      
//       // Show a success page with their data
//       response.end(`
//         <html>
//           <body style="font-family: Arial; padding: 40px; background-color: #e8f5e9;">
//             <h1>Thank You! ✅</h1>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Message:</strong> ${message}</p>
//             <p>We received your message successfully!</p>
//             <a href="/">← Go back</a>
//           </body>
//         </html>
//       `);
//     });
//   }
  
//   else {
//     response.end(`
//       <html>
//         <body style="font-family: Arial; padding: 40px;">
//           <h1>404 - Page Not Found</h1>
//           <a href="/">Go Home</a>
//         </body>
//       </html>
//     `);
//   }
  
// });

// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
//   console.log('Try filling out the form! ✍️');
// });

// const http = require('http');

// // This array will store all messages
// // It's like a notebook where we write down everything
// let messages = [];

// const server = http.createServer((request, response) => {
  
//   response.setHeader('Content-Type', 'text/html');
  
//   // Home page - Show form
//   if (request.url === '/' && request.method === 'GET') {
//     response.end(`
//       <html>
//         <body style="font-family: Arial; padding: 40px; background-color: #f5f5f5;">
//           <h1>Send a Message! 💬</h1>
          
//           <form action="/submit" method="POST">
//             <label>Your Name:</label><br>
//             <input type="text" name="name" required style="padding: 8px; margin: 10px 0; width: 300px;"><br>
            
//             <label>Your Message:</label><br>
//             <textarea name="message" required style="padding: 8px; margin: 10px 0; width: 300px; height: 80px;"></textarea><br>
            
//             <button type="submit" style="padding: 10px 20px; background: blue; color: white; border: none; cursor: pointer;">
//               Send
//             </button>
//           </form>
          
//           <br><br>
//           <a href="/all-messages" style="color: blue;">📋 View All Messages</a>
//         </body>
//       </html>
//     `);
//   }
  
//   // Handle form submission
//   else if (request.url === '/submit' && request.method === 'POST') {
    
//     let body = '';
    
//     request.on('data', (chunk) => {
//       body += chunk.toString();
//     });
    
//     request.on('end', () => {
//       const params = new URLSearchParams(body);
//       const name = params.get('name');
//       const message = params.get('message');
      
//       // SAVE the message to our array
//       messages.push({
//         name: name,
//         message: message,
//         time: new Date().toLocaleString()
//       });
      
//       response.end(`
//         <html>
//           <body style="font-family: Arial; padding: 40px; background-color: #e8f5e9;">
//             <h1>Message Saved! ✅</h1>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Message:</strong> ${message}</p>
//             <p>Total messages saved: ${messages.length}</p>
//             <a href="/">← Send Another</a> | 
//             <a href="/all-messages">View All Messages</a>
//           </body>
//         </html>
//       `);
//     });
//   }
  
//   // Show ALL saved messages
//   else if (request.url === '/all-messages' && request.method === 'GET') {
    
//     let messageList = '';
    
//     // Loop through all messages and create HTML for each
//     for (let i = 0; i < messages.length; i++) {
//       messageList += `
//         <div style="background: white; padding: 15px; margin: 10px 0; border-radius: 5px;">
//           <strong>${messages[i].name}</strong> 
//           <small style="color: gray;">(${messages[i].time})</small>
//           <p>${messages[i].message}</p>
//         </div>
//       `;
//     }
    
//     response.end(`
//       <html>
//         <body style="font-family: Arial; padding: 40px; background-color: #e3f2fd;">
//           <h1>All Messages 📋</h1>
//           <p>Total: ${messages.length} messages</p>
          
//           ${messageList}
          
//           <br>
//           <a href="/">← Send New Message</a>
//         </body>
//       </html>
//     `);
//   }
  
//   else {
//     response.end(`
//       <html>
//         <body style="font-family: Arial; padding: 40px;">
//           <h1>404 - Page Not Found</h1>
//           <a href="/">Go Home</a>
//         </body>
//       </html>
//     `);
//   }
  
// });

// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
//   console.log('Messages are being saved! 💾');
// });


//Learning setTimeOut and knowing concepts of event loops and starvation
// console.log("hii harsh")

// let hi = () =>{ 
//      setTimeout(()=>{
//     console.log("Waiting for 3 sec")
// },3000)}

// hi();

// function starve(){
//     Promise.resolve().then(starve)
// }

// starve()

// console.log("wait over")


// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('Request received!');
  
//   setTimeout(() => {
//     res.end('Here is your data!');
//   }, 2000);
  
//   console.log('Processing other things...');
// });

// server.listen(3000);

//Middleware
const http = require('http');

// Our data
let users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' }
];

// MIDDLEWARE 1: Logger - logs every request
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`);
  next(); // Pass to next middleware/route
}

// MIDDLEWARE 2: Check if user is admin
function checkAdmin(req, res, next) {
  // In real apps, you'd check a token/session
  // For demo, we'll check a simple header
  const isAdmin = req.headers['user-role'] === 'admin';
  
  if (isAdmin) {
    next(); // User is admin, continue
  } else {
    res.statusCode = 403;
    res.end('Access Denied! Admin only.');
  }
}

// ROUTE HANDLER: Get all users
function getAllUsers(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(users));
}

// ROUTE HANDLER: Get single user
function getUser(req, res, id) {
  const user = users.find(u => u.id === parseInt(id));
  res.setHeader('Content-Type', 'application/json');
  
  if (user) {
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'User not found' }));
  }
}

// ROUTE HANDLER: Delete user (admin only)
function deleteUser(req, res, id) {
  const index = users.findIndex(u => u.id === parseInt(id));
  
  if (index !== -1) {
    users.splice(index, 1);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'User deleted' }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'User not found' }));
  }
}

// Main server
const server = http.createServer((req, res) => {
  
  // Run logger middleware for EVERY request
  logger(req, res, () => {
    
    // ROUTE: GET /users
    if (req.url === '/users' && req.method === 'GET') {
      getAllUsers(req, res);
    }
    
    // ROUTE: GET /users/:id
    else if (req.url.match(/^\/users\/\d+$/) && req.method === 'GET') {
      const id = req.url.split('/')[2];
      getUser(req, res, id);
    }
    
    // ROUTE: DELETE /users/:id (ADMIN ONLY)
    else if (req.url.match(/^\/users\/\d+$/) && req.method === 'DELETE') {
      const id = req.url.split('/')[2];
      
      // Run admin check middleware
      checkAdmin(req, res, () => {
        deleteUser(req, res, id);
      });
    }
    
    // 404 - Not found
    else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Route not found' }));
    }
    
  });
  
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
  console.log('\nRoutes:');
  console.log('GET    /users           - Get all users');
  console.log('GET    /users/1         - Get user by ID');
  console.log('DELETE /users/1         - Delete user (admin only)');
  console.log('\nTry in browser or use curl:');
  console.log('curl http://localhost:3000/users');
  console.log('curl http://localhost:3000/users/1');
  console.log('curl -X DELETE http://localhost:3000/users/1 -H "user-role: admin"');
});
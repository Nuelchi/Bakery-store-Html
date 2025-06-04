


// (function () {
//     // Inject styles
//     const style = document.createElement('style');
//     style.innerHTML = `
//         * { box-sizing: border-box; }
//         body { font-family: Arial, sans-serif; }

//         .chat-launcher {
//             position: fixed;
//             bottom: 20px;
//             right: 20px;
//             width: 56px;
//             height: 56px;
//             border-radius: 50%;
//             background: linear-gradient(135deg, #854fff, #6b3fd4);
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//             z-index: 9999;
//         }

//         .chat-launcher svg {
//             fill: white;
//             width: 24px;
//             height: 24px;
//         }

//         .chat-widget {
//             position: fixed;
//             bottom: 80px;
//             right: 20px;
//             width: 350px;
//             height: 500px;
//             background: white;
//             border-radius: 12px;
//             box-shadow: 0 6px 24px rgba(0,0,0,0.1);
//             display: none;
//             flex-direction: column;
//             overflow: hidden;
//             z-index: 9999;
//         }

//         .chat-header {
//             padding: 16px;
//             background: #ffffff;
//             border-bottom: 1px solid #e0e0e0;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//         }

//         .chat-header-logo {
//             display: flex;
//             align-items: center;
//             font-weight: 600;
//             font-size: 16px;
//             gap: 8px;
//         }

//         .chat-header-logo img {
//             width: 20px;
//             height: 20px;
//         }

//         .chat-body {
//             flex: 1;
//             padding: 16px;
//             overflow-y: auto;
//         }

//         .chat-message {
//             background-color: #f1f0f0;
//             padding: 10px 14px;
//             border-radius: 8px;
//             margin-bottom: 10px;
//             max-width: 80%;
//             word-wrap: break-word;
//         }

//         .chat-message.user {
//             background-color: #854fff;
//             color: white;
//             align-self: flex-end;
//         }

//         .chat-footer {
//             display: flex;
//             border-top: 1px solid #eee;
//             padding: 8px;
//         }

//         .chat-footer input {
//             flex: 1;
//             padding: 10px;
//             border: 1px solid #ccc;
//             border-radius: 8px;
//             margin-right: 8px;
//             font-size: 14px;
//         }

//         .chat-footer button {
//             background: linear-gradient(135deg, #854fff, #6b3fd4);
//             border: none;
//             padding: 10px 14px;
//             color: white;
//             border-radius: 50%;
//             cursor: pointer;
//         }

//         .chat-footer button svg {
//             fill: white;
//             width: 18px;
//             height: 18px;
//         }

//         .chat-response-time {
//             font-size: 12px;
//             color: #888;
//             padding: 0 16px 10px;
//         }
//     `;
//     document.head.appendChild(style);

//     // Create launcher button
//     const launcher = document.createElement('div');
//     launcher.className = 'chat-launcher';
//     launcher.id = 'chat-launcher';
//     launcher.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 3C6.477 3 2 7.03 2 12c0 1.847.63 3.55 1.689 4.927L2 21l4.293-1.689C7.73 20.37 9.81 21 12 21c5.523 0 10-4.03 10-9s-4.477-9-10-9z"/></svg>';
//     document.body.appendChild(launcher);

//     // Create chat widget
//     const widget = document.createElement('div');
//     widget.className = 'chat-widget';
//     widget.id = 'chat-widget';
//     widget.innerHTML = `
//         <div class="chat-header">
//             <div class="chat-header-logo">
//                 <img src="https://nocodecreative.io/favicon.ico" alt="logo" />
//                 nocodecreative.io
//             </div>
//             <div id="chat-close" style="cursor:pointer;">✕</div>
//         </div>
//         <div class="chat-body" id="chat-body">
//             <div class="chat-message">Hi 👋, how can we help?</div>
//         </div>
//         <div class="chat-response-time">We typically respond right away</div>
//         <div class="chat-footer">
//             <input type="text" id="chat-input" placeholder="Type your message..." />
//             <button id="chat-send-btn">
//                 <svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
//             </button>
//         </div>
//     `;
//     document.body.appendChild(widget);

//     // Event logic
//     launcher.addEventListener('click', () => {
//         widget.style.display = 'flex';
//     });

//     document.getElementById('chat-close').addEventListener('click', () => {
//         widget.style.display = 'none';
//     });

//     document.getElementById('chat-send-btn').addEventListener('click', () => {
//         const input = document.getElementById('chat-input');
//         const chatBody = document.getElementById('chat-body');
//         const messageText = input.value.trim();

//         if (messageText) {
//             const userMsg = document.createElement('div');
//             userMsg.className = 'chat-message user';
//             userMsg.textContent = messageText;
//             chatBody.appendChild(userMsg);
//             chatBody.scrollTop = chatBody.scrollHeight;
//             input.value = '';

//             // Simulate response
//             // setTimeout(() => {
//             //     const botMsg = document.createElement('div');
//             //     botMsg.className = 'chat-message';
//             //     botMsg.textContent = "Thanks for your message! We'll get back to you shortly.";
//             //     chatBody.appendChild(botMsg);
//             //     chatBody.scrollTop = chatBody.scrollHeight;
//             // }, 800);
//         }
//     });
// })();


(function () {
    // Get the global config
    const config = window.ChatWidgetConfig || {};
    const branding = config.branding || {};
    const styleConfig = config.style || {};

    // Inject styles
    const style = document.createElement('style');
    style.innerHTML = `
        * { box-sizing: border-box; }
        body { font-family: Arial, sans-serif; }

        .chat-launcher {
            position: fixed;
            bottom: 20px;
            ${styleConfig.position === 'left' ? 'left' : 'right'}: 20px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, ${styleConfig.primaryColor || '#854fff'}, ${styleConfig.secondaryColor || '#6b3fd4'});
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 9999;
        }

        .chat-launcher svg {
            fill: white;
            width: 24px;
            height: 24px;
        }

        .chat-widget {
            position: fixed;
            bottom: 80px;
            ${styleConfig.position === 'left' ? 'left' : 'right'}: 20px;
            width: 350px;
            height: 500px;
            background: ${styleConfig.backgroundColor || 'white'};
            border-radius: 12px;
            box-shadow: 0 6px 24px rgba(0,0,0,0.1);
            display: none;
            flex-direction: column;
            overflow: hidden;
            z-index: 9999;
            color: ${styleConfig.fontColor || '#333'};
        }

        .chat-header {
            padding: 16px;
            background: #ffffff;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .chat-header-logo {
            display: flex;
            align-items: center;
            font-weight: 600;
            font-size: 16px;
            gap: 8px;
        }

        .chat-header-logo img {
            width: 20px;
            height: 20px;
        }

        .chat-body {
            flex: 1;
            padding: 16px;
            overflow-y: auto;
        }

        .chat-message {
            background-color: #f1f0f0;
            padding: 10px 14px;
            border-radius: 8px;
            margin-bottom: 10px;
            max-width: 80%;
            word-wrap: break-word;
        }

        .chat-message.user {
            background-color: ${styleConfig.primaryColor || '#854fff'};
            color: white;
            align-self: flex-end;
        }

        .chat-footer {
            display: flex;
            border-top: 1px solid #eee;
            padding: 8px;
        }

        .chat-footer input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin-right: 8px;
            font-size: 14px;
        }

        .chat-footer button {
            background: linear-gradient(135deg, ${styleConfig.primaryColor || '#854fff'}, ${styleConfig.secondaryColor || '#6b3fd4'});
            border: none;
            padding: 10px 14px;
            color: white;
            border-radius: 50%;
            cursor: pointer;
        }

        .chat-footer button svg {
            fill: white;
            width: 18px;
            height: 18px;
        }

        .chat-response-time {
            font-size: 12px;
            color: #888;
            padding: 0 16px 10px;
        }
    `;
    document.head.appendChild(style);

    // Create launcher button
    const launcher = document.createElement('div');
    launcher.className = 'chat-launcher';
    launcher.id = 'chat-launcher';
    launcher.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M12 3C6.477 3 2 7.03 2 12c0 1.847.63 3.55 1.689 4.927L2 21l4.293-1.689C7.73 20.37 9.81 21 12 21c5.523 0 10-4.03 10-9s-4.477-9-10-9z"/>
        </svg>`;
    document.body.appendChild(launcher);

    // Create chat widget
    const widget = document.createElement('div');
    widget.className = 'chat-widget';
    widget.id = 'chat-widget';
    widget.innerHTML = `
        <div class="chat-header">
            <div class="chat-header-logo">
                <img src="${branding.logo || 'https://default.com/logo.png'}" alt="logo" />
                ${branding.name || 'Company'}
            </div>
            <div id="chat-close" style="cursor:pointer;">✕</div>
        </div>
        <div class="chat-body" id="chat-body">
            <div class="chat-message">${branding.welcomeText || 'Hi 👋, how can we help?'}</div>
        </div>
        <div class="chat-response-time">${branding.responseTimeText || 'We typically respond right away'}</div>
        <div class="chat-footer">
            <input type="text" id="chat-input" placeholder="Type your message..." />
            <button id="chat-send-btn">
                <svg viewBox="0 0 24 24">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
                </svg>
            </button>
        </div>
    `;
    document.body.appendChild(widget);

    // Event logic
    launcher.addEventListener('click', () => {
        widget.style.display = 'flex';
    });

    document.getElementById('chat-close').addEventListener('click', () => {
        widget.style.display = 'none';
    });

    document.getElementById('chat-send-btn').addEventListener('click', () => {
        const input = document.getElementById('chat-input');
        const chatBody = document.getElementById('chat-body');
        const messageText = input.value.trim();

        if (messageText) {
            const userMsg = document.createElement('div');
            userMsg.className = 'chat-message user';
            userMsg.textContent = messageText;
            chatBody.appendChild(userMsg);
            chatBody.scrollTop = chatBody.scrollHeight;
            input.value = '';

            // Optional: add simulated response here
                        // Simulate response
            // setTimeout(() => {
            //     const botMsg = document.createElement('div');
            //     botMsg.className = 'chat-message';
            //     botMsg.textContent = "Hello! thanks for your message! how can i help you today.";
            //     chatBody.appendChild(botMsg);
            //     chatBody.scrollTop = chatBody.scrollHeight;
            // }, 800);
        }
    });
})();
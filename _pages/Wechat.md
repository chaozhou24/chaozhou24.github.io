---
title: "Wechat Moments"
permalink: /Wechat.html
---

<div class="wechat-page">
  <div class="wechat-shell">
    <aside class="wechat-sidebar">
      <div class="sidebar-header">
        <div class="avatar">CZ</div>
        <div>
          <strong>同行交流群</strong>
          <p>欢迎进入不同话题房间自由交流</p>
        </div>
      </div>

      <div id="chat-list" class="chat-list">
        <button class="chat-item active" type="button" data-room="public" aria-current="true">
          <span class="dot"></span>
          <div>
            <strong>公开讨论</strong>
            <small>综合交流 · 所有人可见</small>
          </div>
        </button>
        <button class="chat-item" type="button" data-room="research">
          <span class="dot"></span>
          <div>
            <strong>科研专题</strong>
            <small>论文 / 方法 / 复现 / 实验</small>
          </div>
        </button>
        <button class="chat-item" type="button" data-room="life">
          <span class="dot"></span>
          <div>
            <strong>生活交流</strong>
            <small>效率 / 习惯 / 身心平衡</small>
          </div>
        </button>
      </div>

      <div class="sidebar-actions">
        <button id="clear-current-chat" type="button">清空当前房间记录</button>
      </div>
    </aside>

    <section class="wechat-main">
      <header class="chat-header">
        <div>
          <h2 id="room-title">💬 公开讨论</h2>
          <p id="room-desc">在这里自由发言，也欢迎切换到科研/生活分区。</p>
        </div>
        <div class="presence">
          <span class="presence-dot"></span>
          <span id="chat-status">多人在线中</span>
        </div>
      </header>

      <div id="quick-chat" class="quick-chat" aria-live="polite"></div>

      <div id="typing-row" class="typing-row" hidden>
        <span></span><span></span><span></span>
        <em id="typing-text">正在输入...</em>
      </div>

      <div class="composer-toolbar">
        <div class="role-switch" role="group" aria-label="切换发送身份">
          <button id="role-visitor" class="role-btn active" type="button" data-role="visitor">访客身份</button>
          <button id="role-author" class="role-btn" type="button" data-role="author">作者身份</button>
        </div>
        <div class="quick-prompts" aria-label="快捷输入">
          <button type="button" data-prompt="@作者 想请教一个研究方向选择问题。">@作者提问</button>
          <button type="button" data-prompt="我分享一个近期读到的好论文：">分享论文</button>
          <button type="button" data-prompt="最近大家怎么平衡科研和生活？">生活平衡</button>
        </div>
      </div>

      <form id="chat-form" class="chat-input" autocomplete="off">
        <input
          id="chat-text"
          type="text"
          maxlength="280"
          placeholder="输入消息（Enter 发送）"
          aria-label="输入聊天消息"
        />
        <button type="submit">发送</button>
      </form>

      <div class="giscus-wrapper">
        <div class="giscus-title">🧾 长文讨论区（持久保存）</div>
        <p>即时聊天用于快速互动；深度内容请在下方长期讨论区沉淀。</p>
        <script src="https://giscus.app/client.js"
                data-repo="chaozhou24/chaozhou24.github.io"
                data-repo-id="R_kgDORD_nug"
                data-category="General"
                data-category-id="DIC_kwDORD_nus4C4BcA"
                data-mapping="pathname"
                data-strict="0"
                data-reactions-enabled="1"
                data-emit-metadata="0"
                data-input-position="bottom"
                data-theme="light"
                data-lang="zh-CN"
                crossorigin="anonymous"
                async>
        </script>
      </div>
    </section>
  </div>
</div>

<style>
  .wechat-page { max-width: 1160px; margin: 24px auto; padding: 0 16px; }
  .wechat-shell {
    display: grid;
    grid-template-columns: 310px 1fr;
    min-height: 760px;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid #dfe4ee;
    background: #eaf0f8;
    box-shadow: 0 20px 34px rgba(15, 23, 42, 0.12);
  }

  .wechat-sidebar {
    background: linear-gradient(180deg, #1f2e40, #243d55);
    color: #f6fbff;
    padding: 18px 14px;
    display: flex;
    flex-direction: column;
  }
  .sidebar-header { display: flex; gap: 12px; align-items: center; margin-bottom: 18px; }
  .avatar {
    width: 46px; height: 46px; border-radius: 50%; display: grid; place-items: center;
    background: linear-gradient(145deg, #22c55e, #16a34a); font-weight: 700;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.12);
  }
  .sidebar-header p { margin: 2px 0 0; color: #d9e3f0; font-size: 13px; }

  .chat-list { display: flex; flex-direction: column; gap: 10px; }
  .chat-item {
    border: 1px solid transparent;
    border-radius: 12px;
    padding: 11px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 10px;
    color: inherit;
    background: rgba(255, 255, 255, 0.07);
    cursor: pointer;
    transition: transform .18s ease, background .2s ease, border-color .2s ease;
  }
  .chat-item:hover { transform: translateY(-1px); background: rgba(255, 255, 255, 0.12); }
  .chat-item.active {
    border-color: rgba(74, 222, 128, 0.75);
    background: rgba(74, 222, 128, 0.2);
    box-shadow: inset 0 0 0 1px rgba(74, 222, 128, 0.25);
  }
  .chat-item small { display: block; margin-top: 3px; color: #d5e1ee; }
  .dot { width: 9px; height: 9px; border-radius: 50%; background: #4ade80; flex: none; }

  .sidebar-actions { margin-top: auto; }
  .sidebar-actions button {
    width: 100%; border: 1px solid rgba(255, 255, 255, 0.3); background: transparent; color: #f0f6ff;
    border-radius: 10px; padding: 10px; cursor: pointer; transition: background .2s ease;
  }
  .sidebar-actions button:hover { background: rgba(255, 255, 255, 0.1); }

  .wechat-main { display: flex; flex-direction: column; background: #f0f4fb; }
  .chat-header {
    background: #fff;
    border-bottom: 1px solid #dde4ef;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .chat-header h2 { margin: 0; font-size: 20px; }
  .chat-header p { margin: 4px 0 0; color: #607085; font-size: 14px; }

  .presence { display: inline-flex; align-items: center; gap: 8px; color: #166534; font-weight: 600; font-size: 13px; }
  .presence-dot {
    width: 10px; height: 10px; border-radius: 50%; background: #22c55e;
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); animation: pulse 1.8s infinite;
  }
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
    70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
    100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
  }

  .quick-chat {
    flex: 1;
    min-height: 290px;
    max-height: 390px;
    overflow-y: auto;
    padding: 16px;
    background: linear-gradient(180deg, #e7edf6, #e2e9f4);
  }
  .msg-row { display: flex; align-items: flex-end; gap: 8px; margin: 10px 0; }
  .msg-row.outgoing { justify-content: flex-end; }
  .msg-avatar {
    width: 30px; height: 30px; border-radius: 50%; flex: none; display: grid; place-items: center;
    font-size: 12px; font-weight: 700; color: #1f2a36; background: #fff;
  }
  .msg-row.author .msg-avatar { background: #fde68a; color: #7c2d12; }
  .msg-row.visitor .msg-avatar { background: #bfdbfe; color: #1e3a8a; }
  .bubble {
    max-width: min(78%, 640px);
    border-radius: 12px;
    padding: 10px 12px;
    line-height: 1.54;
    background: #fff;
    box-shadow: 0 4px 10px rgba(15, 23, 42, 0.08);
    word-break: break-word;
    transform: translateY(6px);
    opacity: 0;
    animation: msgIn .2s ease forwards;
  }
  .outgoing .bubble { background: #95ec69; }
  .bubble time { display: block; margin-top: 6px; font-size: 12px; color: #5f6f82; }
  @keyframes msgIn { to { transform: translateY(0); opacity: 1; } }

  .typing-row { display: inline-flex; align-items: center; gap: 5px; margin: 4px 16px 10px; color: #64748b; font-size: 13px; }
  .typing-row span { width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; animation: blink 1.1s infinite ease-in-out; }
  .typing-row span:nth-child(2) { animation-delay: .15s; }
  .typing-row span:nth-child(3) { animation-delay: .3s; }
  @keyframes blink { 0%, 80%, 100% { opacity: .3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-2px); } }

  .composer-toolbar {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    padding: 8px 12px;
    background: #f8fafe;
    border-top: 1px solid #e2e8f2;
  }
  .role-switch { display: inline-flex; background: #e9eef7; border-radius: 999px; padding: 3px; gap: 4px; }
  .role-btn {
    border: 0; border-radius: 999px; padding: 6px 10px; font-size: 13px; cursor: pointer;
    background: transparent; color: #334155;
  }
  .role-btn.active { background: #fff; box-shadow: 0 1px 4px rgba(30, 41, 59, 0.14); }

  .quick-prompts { display: flex; gap: 8px; flex-wrap: wrap; }
  .quick-prompts button {
    border: 1px solid #cfd8e6; background: #fff; color: #334155; border-radius: 999px;
    font-size: 13px; padding: 5px 10px; cursor: pointer; transition: transform .15s ease;
  }
  .quick-prompts button:hover { transform: translateY(-1px); }

  .chat-input {
    display: flex;
    gap: 10px;
    padding: 12px;
    background: #f7f9fd;
    border-top: 1px solid #e1e8f3;
    border-bottom: 1px solid #e1e8f3;
  }
  .chat-input input {
    flex: 1;
    border: 1px solid #cad5e4;
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 15px;
    outline: none;
    transition: box-shadow .2s ease, border-color .2s ease;
  }
  .chat-input input:focus { border-color: #22c55e; box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.14); }
  .chat-input button {
    border: 0;
    border-radius: 10px;
    padding: 0 18px;
    background: linear-gradient(180deg, #22c55e, #16a34a);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: transform .15s ease;
  }
  .chat-input button:hover { transform: translateY(-1px); }

  .giscus-wrapper { background: #fff; padding: 14px 18px 20px; }
  .giscus-title { font-weight: 700; margin-bottom: 4px; }
  .giscus-wrapper p { margin: 0 0 10px; color: #607089; font-size: 14px; }

  @media (max-width: 980px) {
    .wechat-shell { grid-template-columns: 1fr; min-height: auto; }
    .chat-header { flex-direction: column; align-items: flex-start; }
    .composer-toolbar { flex-direction: column; align-items: flex-start; }
    .quick-chat { max-height: 340px; }
    .bubble { max-width: 85%; }
  }
</style>

<script>
  (function () {
    const rooms = {
      public: {
        title: '💬 公开讨论',
        desc: '在这里自由发言，也欢迎切换到科研/生活分区。',
        welcome: '欢迎来到公开讨论区，任何同学都可以在这里快速交流。'
      },
      research: {
        title: '🧪 科研专题',
        desc: '聚焦论文、实验设计、复现与学术工具。',
        welcome: '欢迎进入科研专题，建议带上问题背景与已尝试方案。'
      },
      life: {
        title: '🌿 生活交流',
        desc: '聊作息、效率、运动与生活经验。',
        welcome: '欢迎来到生活交流区，放松聊聊学习之外的日常。'
      }
    };

    const storageKey = 'wechat-multi-room-history-v1';
    const quickChat = document.getElementById('quick-chat');
    const chatList = document.getElementById('chat-list');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-text');
    const typingRow = document.getElementById('typing-row');
    const typingText = document.getElementById('typing-text');
    const clearBtn = document.getElementById('clear-current-chat');
    const roomTitle = document.getElementById('room-title');
    const roomDesc = document.getElementById('room-desc');
    const statusText = document.getElementById('chat-status');
    const roleButtons = Array.from(document.querySelectorAll('.role-btn'));
    const promptButtons = Array.from(document.querySelectorAll('.quick-prompts button'));

    if (!quickChat || !chatList || !form || !input) return;

    let currentRoom = 'public';
    let currentRole = 'visitor';
    let history = loadHistory();

    function nowText() {
      const now = new Date();
      return now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    }

    function loadHistory() {
      try {
        const raw = localStorage.getItem(storageKey);
        const parsed = raw ? JSON.parse(raw) : {};
        return {
          public: Array.isArray(parsed.public) ? parsed.public : [],
          research: Array.isArray(parsed.research) ? parsed.research : [],
          life: Array.isArray(parsed.life) ? parsed.life : []
        };
      } catch (e) {
        return { public: [], research: [], life: [] };
      }
    }

    function saveHistory() {
      try {
        localStorage.setItem(storageKey, JSON.stringify(history));
      } catch (e) {
        // ignore storage errors
      }
    }

    function createMsg(msg) {
      const row = document.createElement('div');
      row.className = `msg-row ${msg.direction} ${msg.role}`;

      const avatar = document.createElement('span');
      avatar.className = 'msg-avatar';
      avatar.textContent = msg.role === 'author' ? '作' : '访';

      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.textContent = msg.text;

      const time = document.createElement('time');
      time.textContent = `${msg.sender} · ${msg.time}`;
      bubble.appendChild(time);

      if (msg.direction === 'outgoing') {
        row.appendChild(bubble);
        row.appendChild(avatar);
      } else {
        row.appendChild(avatar);
        row.appendChild(bubble);
      }

      return row;
    }

    function appendMessage(msg, shouldSave) {
      quickChat.appendChild(createMsg(msg));
      quickChat.scrollTop = quickChat.scrollHeight;
      if (shouldSave) {
        history[currentRoom].push(msg);
        history[currentRoom] = history[currentRoom].slice(-120);
        saveHistory();
      }
    }

    function renderRoom() {
      const meta = rooms[currentRoom];
      roomTitle.textContent = meta.title;
      roomDesc.textContent = meta.desc;
      statusText.textContent = `${Object.keys(rooms).length} 个房间开放中`;
      quickChat.innerHTML = '';

      if (!history[currentRoom].length) {
        appendMessage({
          text: meta.welcome,
          direction: 'incoming',
          role: 'author',
          sender: '作者',
          time: nowText()
        }, false);
        return;
      }

      history[currentRoom].forEach(function (msg) {
        quickChat.appendChild(createMsg(msg));
      });
      quickChat.scrollTop = quickChat.scrollHeight;
    }

    function switchRoom(roomId) {
      if (!rooms[roomId]) return;
      currentRoom = roomId;
      Array.from(chatList.querySelectorAll('.chat-item')).forEach(function (btn) {
        const isActive = btn.getAttribute('data-room') === roomId;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-current', isActive ? 'true' : 'false');
      });
      renderRoom();
    }

    function switchRole(role) {
      currentRole = role;
      roleButtons.forEach(function (btn) {
        const active = btn.getAttribute('data-role') === role;
        btn.classList.toggle('active', active);
      });
    }

    chatList.addEventListener('click', function (e) {
      const target = e.target.closest('.chat-item');
      if (!target) return;
      switchRoom(target.getAttribute('data-room'));
    });

    roleButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchRole(btn.getAttribute('data-role'));
      });
    });

    promptButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        input.value = btn.getAttribute('data-prompt') || '';
        input.focus();
      });
    });

    input.addEventListener('input', function () {
      const typing = input.value.trim().length > 0;
      typingRow.hidden = !typing;
      typingText.textContent = currentRole === 'author' ? '作者正在输入...' : '访客正在输入...';
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;

      const isAuthor = currentRole === 'author';
      appendMessage({
        text: value,
        direction: isAuthor ? 'incoming' : 'outgoing',
        role: currentRole,
        sender: isAuthor ? '作者' : '访客',
        time: nowText()
      }, true);

      input.value = '';
      typingRow.hidden = true;
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        history[currentRoom] = [];
        saveHistory();
        renderRoom();
      });
    }

    renderRoom();
  })();
</script>

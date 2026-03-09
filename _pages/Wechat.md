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
          <p>科研 / 学习 / 求职 / 生活交流</p>
        </div>
      </div>

      <div class="chat-list">
        <button class="chat-item active" type="button" aria-current="true">
          <span class="dot"></span>
          <div>
            <strong>公开交流大厅</strong>
            <small id="chat-status">当前在线：欢迎加入讨论</small>
          </div>
        </button>
        <button class="chat-item" type="button" disabled>
          <span class="dot muted"></span>
          <div>
            <strong>科研专题房间（开发中）</strong>
            <small>后续支持分组讨论</small>
          </div>
        </button>
      </div>

      <div class="sidebar-actions">
        <button id="clear-chat" type="button">清空本地聊天记录</button>
      </div>
    </aside>

    <section class="wechat-main">
      <header class="chat-header">
        <div>
          <h2>💬 公开交流大厅</h2>
          <p>先在这里轻聊，再到下方讨论区沉淀长内容</p>
        </div>
        <span class="chat-badge">即时交流模式</span>
      </header>

      <div id="quick-chat" class="quick-chat" aria-live="polite"></div>

      <div id="typing-row" class="typing-row" hidden>
        <span></span><span></span><span></span>
        <em>系统正在输入...</em>
      </div>

      <div class="quick-prompts" aria-label="快捷提问">
        <button type="button" data-prompt="大家最近在做什么方向的研究？">研究方向</button>
        <button type="button" data-prompt="欢迎交换学习方法和资料！">学习方法</button>
        <button type="button" data-prompt="有没有求职/申请经验可以分享？">求职申请</button>
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
        <p>这里适合沉淀详细回复、经验总结与多人线程讨论。</p>
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
  .wechat-page { max-width: 1140px; margin: 26px auto; padding: 0 16px; }
  .wechat-shell {
    display: grid;
    grid-template-columns: 300px 1fr;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #e3e6ed;
    box-shadow: 0 14px 30px rgba(17, 24, 39, 0.1);
    min-height: 760px;
    background: #e9eef4;
  }

  .wechat-sidebar {
    background: linear-gradient(180deg, #1e2a38, #23374a);
    color: #f9fbff;
    padding: 18px 14px;
    display: flex;
    flex-direction: column;
  }

  .sidebar-header { display: flex; gap: 12px; align-items: center; margin-bottom: 20px; }
  .avatar {
    width: 44px; height: 44px; border-radius: 50%; background: #22c55e; display: grid;
    place-items: center; font-weight: 700;
  }
  .sidebar-header p { margin: 2px 0 0; color: #d6dde7; font-size: 13px; }

  .chat-list { display: flex; flex-direction: column; gap: 10px; }
  .chat-item {
    border: 0; background: rgba(255, 255, 255, 0.07); color: inherit; border-radius: 11px;
    padding: 10px; text-align: left; display: flex; gap: 10px; align-items: center;
  }
  .chat-item.active { border: 1px solid rgba(34, 197, 94, 0.6); background: rgba(34, 197, 94, 0.2); }
  .chat-item small { display: block; margin-top: 2px; color: #d7e0eb; }
  .chat-item:disabled { opacity: 0.8; cursor: not-allowed; }
  .dot { width: 9px; height: 9px; border-radius: 50%; background: #22c55e; flex: none; }
  .dot.muted { background: #90a3ba; }

  .sidebar-actions { margin-top: auto; padding-top: 16px; }
  .sidebar-actions button {
    width: 100%; border: 1px solid rgba(255, 255, 255, 0.3); background: transparent; color: #f4f7fb;
    border-radius: 9px; padding: 10px 12px; cursor: pointer;
  }
  .sidebar-actions button:hover { background: rgba(255, 255, 255, 0.08); }

  .wechat-main { display: flex; flex-direction: column; background: #f0f3f9; }
  .chat-header {
    padding: 15px 20px; background: #fff; border-bottom: 1px solid #dfe5ee;
    display: flex; justify-content: space-between; gap: 12px; align-items: center;
  }
  .chat-header h2 { margin: 0; font-size: 20px; }
  .chat-header p { margin: 4px 0 0; color: #5f6f83; font-size: 14px; }
  .chat-badge {
    background: #eafff0; color: #15803d; font-size: 12px; border: 1px solid #86efac;
    padding: 4px 8px; border-radius: 999px; white-space: nowrap;
  }

  .quick-chat {
    flex: 1;
    min-height: 280px;
    max-height: 360px;
    overflow-y: auto;
    padding: 16px;
    background: linear-gradient(180deg, #e8edf4, #e3e9f2);
  }
  .msg-row { display: flex; margin: 10px 0; align-items: flex-end; gap: 8px; }
  .msg-row.outgoing { justify-content: flex-end; }
  .msg-avatar {
    width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center;
    font-size: 12px; font-weight: 700; background: #fff; color: #2d3d50; flex: none;
  }
  .outgoing .msg-avatar { background: #86efac; color: #14532d; }
  .bubble {
    max-width: min(74%, 620px); border-radius: 12px; padding: 10px 12px; line-height: 1.52;
    background: #fff; box-shadow: 0 2px 8px rgba(17, 24, 39, 0.08); word-break: break-word;
  }
  .outgoing .bubble { background: #95ec69; }
  .bubble time { display: block; font-size: 12px; margin-top: 6px; color: #5d6c7d; }

  .typing-row {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin: 6px 16px 10px;
    color: #5f6f83;
    font-size: 13px;
  }
  .typing-row span {
    width: 6px; height: 6px; border-radius: 50%; background: #8aa2bf;
    animation: blink 1.2s infinite ease-in-out;
  }
  .typing-row span:nth-child(2) { animation-delay: 0.15s; }
  .typing-row span:nth-child(3) { animation-delay: 0.3s; }
  @keyframes blink { 0%, 80%, 100% { opacity: .3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-2px); } }

  .quick-prompts {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding: 0 12px 10px;
    background: #f6f8fc;
  }
  .quick-prompts button {
    border: 1px solid #d0d9e6;
    background: #fff;
    color: #314255;
    border-radius: 999px;
    font-size: 13px;
    padding: 5px 11px;
    cursor: pointer;
  }

  .chat-input {
    display: flex;
    gap: 10px;
    padding: 12px;
    border-top: 1px solid #dde4ed;
    border-bottom: 1px solid #dde4ed;
    background: #f7f9fd;
  }
  .chat-input input {
    flex: 1;
    border: 1px solid #cad4e0;
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 15px;
    outline: none;
  }
  .chat-input input:focus { border-color: #22c55e; box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.14); }
  .chat-input button {
    border: 0; background: #22c55e; color: #fff; border-radius: 10px;
    padding: 0 16px; font-weight: 600; cursor: pointer;
  }

  .giscus-wrapper { padding: 14px 18px 18px; background: #fff; }
  .giscus-title { font-weight: 700; margin-bottom: 4px; }
  .giscus-wrapper p { margin: 0 0 10px; color: #64748b; font-size: 14px; }

  @media (max-width: 920px) {
    .wechat-shell { grid-template-columns: 1fr; min-height: auto; }
    .quick-chat { max-height: 350px; }
    .chat-header { align-items: flex-start; flex-direction: column; }
    .bubble { max-width: 84%; }
  }
</style>

<script>
  (function () {
    const storageKey = 'wechat-quick-chat-history-v2';
    const quickChat = document.getElementById('quick-chat');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-text');
    const typingRow = document.getElementById('typing-row');
    const clearBtn = document.getElementById('clear-chat');
    const statusText = document.getElementById('chat-status');
    const promptButtons = Array.from(document.querySelectorAll('.quick-prompts button'));

    if (!quickChat || !form || !input) return;

    const botReplies = [
      '收到！建议把详细内容补充到下方长文讨论区，便于后续同学检索。',
      '很好的问题 👍 欢迎大家继续在这里接龙交流。',
      '感谢分享！如果有链接或资料，也欢迎一起贴出来。',
      '你这个话题很实用，后续可以在评论区开个专门线程。'
    ];

    function nowText() {
      const now = new Date();
      return now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    }

    function createMsg(msg) {
      const row = document.createElement('div');
      row.className = `msg-row ${msg.type}`;

      const avatar = document.createElement('span');
      avatar.className = 'msg-avatar';
      avatar.textContent = msg.type === 'outgoing' ? '你' : '系';

      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.textContent = msg.text;

      const time = document.createElement('time');
      time.textContent = `${msg.sender} · ${msg.time}`;
      bubble.appendChild(time);

      if (msg.type === 'outgoing') {
        row.appendChild(bubble);
        row.appendChild(avatar);
      } else {
        row.appendChild(avatar);
        row.appendChild(bubble);
      }

      return row;
    }

    function saveHistory(history) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(history));
      } catch (e) {
        // ignore storage errors
      }
    }

    function loadHistory() {
      try {
        const raw = localStorage.getItem(storageKey);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    let history = loadHistory();

    function pushMessage(text, type, sender, shouldSave) {
      const message = { text: text, type: type, sender: sender, time: nowText() };
      quickChat.appendChild(createMsg(message));
      quickChat.scrollTop = quickChat.scrollHeight;
      if (shouldSave) {
        history.push(message);
        history = history.slice(-80);
        saveHistory(history);
      }
    }

    function renderInitial() {
      quickChat.innerHTML = '';
      if (!history.length) {
        pushMessage('👋 欢迎来到交流大厅！可先轻聊，再到下方长文区沉淀讨论。', 'incoming', '系统', false);
        return;
      }
      history.forEach(function (item) {
        quickChat.appendChild(createMsg(item));
      });
      quickChat.scrollTop = quickChat.scrollHeight;
    }

    function botReply() {
      typingRow.hidden = false;
      statusText.textContent = '系统正在回复中...';
      window.setTimeout(function () {
        typingRow.hidden = true;
        const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
        pushMessage(reply, 'incoming', '系统', true);
        statusText.textContent = '当前在线：欢迎加入讨论';
      }, 700);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      pushMessage(value, 'outgoing', '你', true);
      input.value = '';
      botReply();
    });

    promptButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        input.value = btn.getAttribute('data-prompt') || '';
        input.focus();
      });
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        history = [];
        saveHistory(history);
        renderInitial();
        statusText.textContent = '已清空本地记录';
      });
    }

    renderInitial();
  })();
</script>

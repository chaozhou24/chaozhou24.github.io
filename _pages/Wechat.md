---
title: "Wechat Moments"
permalink: /Wechat.html
---

<div class="dc-page">
  <div class="dc-shell">

    <!-- Server rail -->
    <aside class="dc-serverbar">
      <button class="server-btn active" type="button" aria-label="Main server">
        <span>CZ</span>
      </button>
      <button class="server-btn" type="button" aria-label="Research server">
        <span>R</span>
      </button>
      <button class="server-btn" type="button" aria-label="Life server">
        <span>L</span>
      </button>

      <div class="server-sep"></div>

      <button class="server-btn add-btn" type="button" aria-label="More">
        <span>+</span>
      </button>
    </aside>

    <!-- Sidebar -->
    <aside class="dc-sidebar">
      <div class="dc-brand">
        <div class="dc-brand-text">
          <strong>Chao Zhou Hub</strong>
          <span>Academic community space</span>
        </div>
      </div>

      <div class="dc-search-wrap">
        <label class="visually-hidden" for="channel-search">Search channels</label>
        <input id="channel-search" type="text" placeholder="Search channels" />
      </div>

      <div class="channel-section">
        <button class="section-toggle" type="button" data-section="community" aria-expanded="true">
          <span class="section-caret">▾</span>
          <span>COMMUNITY</span>
        </button>
        <div class="section-body" data-section-body="community">
          <div class="dc-channel-list">
            <button class="dc-channel active" type="button" data-room="public" aria-current="true">
              <div class="dc-channel-main">
                <span class="hash hash-mark">#</span>
                <div class="channel-meta">
                  <strong>public-chat</strong>
                  <small>Open discussion for everyone</small>
                </div>
              </div>
              <span class="channel-badge" id="badge-public" style="visibility:hidden;"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="channel-section">
        <button class="section-toggle" type="button" data-section="academic" aria-expanded="true">
          <span class="section-caret">▾</span>
          <span>ACADEMIC</span>
        </button>
        <div class="section-body" data-section-body="academic">
          <div class="dc-channel-list">
            <button class="dc-channel" type="button" data-room="research">
              <div class="dc-channel-main">
                <span class="hash hash-mark">#</span>
                <div class="channel-meta">
                  <strong>research-room</strong>
                  <small>Papers, methods, experiments</small>
                </div>
              </div>
              <span class="channel-badge" id="badge-research" style="visibility:hidden;"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="channel-section">
        <button class="section-toggle" type="button" data-section="social" aria-expanded="true">
          <span class="section-caret">▾</span>
          <span>SOCIAL</span>
        </button>
        <div class="section-body" data-section-body="social">
          <div class="dc-channel-list">
            <button class="dc-channel" type="button" data-room="life">
              <div class="dc-channel-main">
                <span class="hash hash-mark">#</span>
                <div class="channel-meta">
                  <strong>life-corner</strong>
                  <small>Habits, balance, well-being</small>
                </div>
              </div>
              <span class="channel-badge" id="badge-life" style="visibility:hidden;"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="dc-sidebar-footer">
        <div class="dc-profile-card">
          <div class="profile-avatar">CZ</div>
          <div class="profile-meta">
            <strong>Chao Zhou</strong>
            <span>Online</span>
          </div>
        </div>
        <button id="clear-current-chat" type="button">Clear Current Channel</button>
      </div>
    </aside>

    <!-- Main -->
    <section class="dc-main">
      <header class="dc-topbar">
        <div class="dc-topbar-left">
          <span class="topbar-hash hash-mark">#</span>
          <div>
            <h2 id="room-title">public-chat</h2>
            <p id="room-desc">A place for open conversation, quick questions, and casual interaction.</p>
          </div>
        </div>

        <div class="dc-topbar-right">
          <button id="theme-toggle" class="top-icon-btn active" type="button" aria-label="Toggle theme" title="Toggle theme">
            <span id="theme-icon">🌙</span>
          </button>
          <button id="toggle-members" class="top-icon-btn active" type="button" aria-label="Toggle members" title="Toggle members">
            <span>👥</span>
          </button>
          <div class="dc-status-pill">
            <span class="status-dot"></span>
            <span id="chat-status">3 channels available</span>
          </div>
        </div>
      </header>

      <div class="dc-main-content">
        <div class="dc-chat-panel">
          <div class="dc-room-intro">
            <div class="intro-icon hash-mark">#</div>
            <div>
              <h3 id="intro-heading">Welcome to #public-chat</h3>
              <p id="intro-text">This is the beginning of the channel. Start a conversation, share ideas, or switch to a more focused room.</p>
            </div>
          </div>

          <div id="quick-chat" class="dc-chat" aria-live="polite"></div>

          <div id="typing-row" class="dc-typing" hidden>
            <span></span><span></span><span></span>
            <em id="typing-text">Someone is typing...</em>
          </div>

          <div class="dc-toolbar">
            <div class="dc-role-switch" role="group" aria-label="Switch sender role">
              <button id="role-visitor" class="dc-role-btn active" type="button" data-role="visitor">Visitor</button>
              <button id="role-author" class="dc-role-btn" type="button" data-role="author">Author</button>
            </div>

            <div class="dc-prompts" aria-label="Quick prompts">
              <button type="button" data-prompt="@Author I’d like to ask about choosing a research direction.">@Author question</button>
              <button type="button" data-prompt="I want to share a paper I recently found interesting:">Share a paper</button>
              <button type="button" data-prompt="How do you keep a healthy balance between research and daily life?">Work-life balance</button>
            </div>
          </div>

          <div id="reply-bar" class="reply-bar" hidden>
            <div class="reply-bar-content">
              <div class="reply-bar-title">Replying to <span id="reply-target-name">Author</span></div>
              <div id="reply-target-text" class="reply-bar-text"></div>
            </div>
            <button id="cancel-reply" class="reply-close-btn" type="button" aria-label="Cancel reply">✕</button>
          </div>

          <form id="chat-form" class="dc-input-wrap" autocomplete="off">
            <div class="dc-input-shell">
              <div class="dc-input-actions">
                <button class="input-icon-btn" type="button" data-insert="[Attachment] " aria-label="Attachment" title="Attachment">＋</button>
                <button class="input-icon-btn" type="button" data-insert="😊 " aria-label="Emoji" title="Emoji">😊</button>
                <button class="input-icon-btn" type="button" data-insert="[GIF] " aria-label="GIF" title="GIF">GIF</button>
              </div>

              <input
                id="chat-text"
                type="text"
                maxlength="280"
                placeholder="Message this channel"
                aria-label="Type a chat message"
              />

              <button type="submit">Send</button>
            </div>
          </form>

          <div class="dc-discussion">
            <div class="dc-discussion-title">Long-form Discussion</div>
            <p>Use the quick chat above for fast interaction. For deeper and persistent discussion, leave your thoughts below.</p>

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
                    data-theme="dark"
                    data-lang="en"
                    crossorigin="anonymous"
                    async>
            </script>
          </div>
        </div>

        <aside id="members-panel" class="dc-members">
          <div class="members-title">MEMBERS — ONLINE</div>

          <div class="member-group">
            <div class="member-item">
              <span class="member-avatar member-owner">CZ</span>
              <div class="member-meta">
                <strong>Chao Zhou</strong>
                <small>Owner · Active now</small>
              </div>
            </div>

            <div class="member-item">
              <span class="member-avatar member-research">RS</span>
              <div class="member-meta">
                <strong>Research Buddy</strong>
                <small>Discussing methods</small>
              </div>
            </div>

            <div class="member-item">
              <span class="member-avatar member-life">LF</span>
              <div class="member-meta">
                <strong>Life Friend</strong>
                <small>Sharing routines</small>
              </div>
            </div>

            <div class="member-item">
              <span class="member-avatar member-guest">GT</span>
              <div class="member-meta">
                <strong>Guest Visitor</strong>
                <small>Reading this channel</small>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</div>

<style>
  :root {
    --dc-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
    --dc-radius-lg: 22px;
    --dc-radius-md: 16px;
    --dc-radius-sm: 10px;
    --dc-transition: .18s ease;
  }

  body.theme-dark,
  :root {
    --dc-serverbar: #111214;
    --dc-sidebar: #1e1f22;
    --dc-sidebar-2: #18191c;
    --dc-main: #313338;
    --dc-main-2: #2b2d31;
    --dc-card: #232428;
    --dc-card-soft: #383a40;
    --dc-card-hover: rgba(255,255,255,0.06);
    --dc-border: rgba(255,255,255,0.06);
    --dc-border-strong: rgba(255,255,255,0.10);
    --dc-text: #f2f3f5;
    --dc-text-soft: #b5bac1;
    --dc-text-faint: #8e9297;
    --dc-accent: #5865f2;
    --dc-accent-2: #4752c4;
    --dc-green: #23a559;
    --dc-author: #f0b232;
    --dc-visitor: #4ea1ff;
    --dc-red: #ed4245;
    --dc-input: #1e1f22;
    --dc-reply-bg: #2c2f36;
    --dc-hover-toolbar: #1b1d21;
  }

  body.theme-light {
    --dc-serverbar: #edf1f7;
    --dc-sidebar: #f8fbff;
    --dc-sidebar-2: #f0f4fa;
    --dc-main: #ffffff;
    --dc-main-2: #f7f9fd;
    --dc-card: #ffffff;
    --dc-card-soft: #eef3fb;
    --dc-card-hover: rgba(15,23,42,0.04);
    --dc-border: rgba(15,23,42,0.08);
    --dc-border-strong: rgba(15,23,42,0.12);
    --dc-text: #172033;
    --dc-text-soft: #526077;
    --dc-text-faint: #7e8aa0;
    --dc-accent: #4f61ff;
    --dc-accent-2: #4250d6;
    --dc-green: #16a34a;
    --dc-author: #eab308;
    --dc-visitor: #3b82f6;
    --dc-red: #ef4444;
    --dc-input: #f5f8fd;
    --dc-reply-bg: #eef3fb;
    --dc-hover-toolbar: #ffffff;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .dc-page {
    max-width: 1560px;
    margin: 24px auto;
    padding: 0 16px;
  }

  .dc-shell {
    display: grid;
    grid-template-columns: 72px 270px minmax(0, 1fr);
    min-height: 940px;
    border-radius: var(--dc-radius-lg);
    overflow: hidden;
    background: var(--dc-main);
    box-shadow: var(--dc-shadow);
    border: 1px solid var(--dc-border);
  }

  .dc-serverbar {
    background: var(--dc-serverbar);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 14px 0;
    border-right: 1px solid var(--dc-border);
  }

  .server-btn {
    width: 48px;
    height: 48px;
    border: 0;
    border-radius: 16px;
    background: var(--dc-card);
    color: var(--dc-text-soft);
    cursor: pointer;
    font-weight: 800;
    transition: all var(--dc-transition);
    position: relative;
  }

  .server-btn span {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
  }

  .server-btn:hover {
    border-radius: 14px;
    background: var(--dc-accent);
    color: #fff;
    transform: translateY(-1px);
  }

  .server-btn.active {
    background: linear-gradient(135deg, var(--dc-accent), #7983ff);
    color: #fff;
    border-radius: 14px;
    box-shadow: 0 10px 20px rgba(88,101,242,0.28);
  }

  .server-btn.active::before {
    content: "";
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 22px;
    border-radius: 999px;
    background: currentColor;
    color: #fff;
  }

  .add-btn {
    color: #57f287;
    background: rgba(35,165,89,0.12);
  }

  .add-btn:hover {
    background: #23a559;
    color: #fff;
  }

  .server-sep {
    width: 34px;
    height: 2px;
    border-radius: 999px;
    background: var(--dc-border-strong);
    margin: 2px 0;
  }

  .dc-sidebar {
    background: var(--dc-sidebar);
    display: flex;
    flex-direction: column;
    padding: 14px 12px;
    border-right: 1px solid var(--dc-border);
  }

  .dc-brand {
    padding: 10px 10px 14px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--dc-border);
  }

  .dc-brand-text strong {
    display: block;
    color: var(--dc-text);
    font-size: 15px;
    line-height: 1.2;
  }

  .dc-brand-text span {
    display: block;
    color: var(--dc-text-faint);
    font-size: 12px;
    margin-top: 4px;
  }

  .dc-search-wrap {
    padding: 0 8px 12px;
  }

  .dc-search-wrap input {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--dc-border);
    background: var(--dc-card);
    color: var(--dc-text);
    border-radius: 12px;
    padding: 10px 12px;
    outline: none;
    font-size: 14px;
    transition: border-color var(--dc-transition), box-shadow var(--dc-transition);
  }

  .dc-search-wrap input::placeholder {
    color: var(--dc-text-faint);
  }

  .dc-search-wrap input:focus {
    border-color: rgba(88,101,242,0.6);
    box-shadow: 0 0 0 3px rgba(88,101,242,0.18);
  }

  .channel-section {
    margin-bottom: 8px;
  }

  .section-toggle {
    width: 100%;
    border: 0;
    background: transparent;
    color: var(--dc-text-faint);
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    cursor: pointer;
    text-align: left;
    border-radius: 8px;
    transition: background var(--dc-transition), color var(--dc-transition);
  }

  .section-toggle:hover {
    background: var(--dc-card-hover);
    color: var(--dc-text-soft);
  }

  .section-caret {
    display: inline-block;
    transition: transform var(--dc-transition);
    font-size: 12px;
  }

  .section-toggle[aria-expanded="false"] .section-caret {
    transform: rotate(-90deg);
  }

  .section-body[hidden] {
    display: none;
  }

  .dc-channel-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .dc-channel {
    border: 0;
    background: transparent;
    color: var(--dc-text-soft);
    border-radius: 12px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px 10px;
    cursor: pointer;
    transition: background var(--dc-transition), color var(--dc-transition), transform var(--dc-transition);
  }

  .dc-channel:hover {
    background: var(--dc-card-hover);
    color: var(--dc-text);
    transform: translateX(2px);
  }

  .dc-channel.active {
    background: var(--dc-card-hover);
    color: var(--dc-text);
    box-shadow: inset 0 0 0 1px var(--dc-border);
  }

  .dc-channel.hidden-by-search {
    display: none;
  }

  .dc-channel-main {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    min-width: 0;
  }

  .hash-mark {
    font-family: "Arial Black", "Segoe UI Black", "Helvetica Neue", Arial, sans-serif;
    font-weight: 900 !important;
    letter-spacing: -0.03em;
    text-shadow: 0 0 0.01px currentColor, 0 0 0.01px currentColor;
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
  }

  .hash {
    color: var(--dc-text-faint);
    font-size: 22px;
    line-height: 1;
    margin-top: -1px;
    flex: none;
    display: inline-block;
  }

  .dc-channel.active .hash {
    color: var(--dc-accent);
  }

  .channel-meta {
    min-width: 0;
  }

  .channel-meta strong {
    display: block;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.25;
    color: inherit;
  }

  .channel-meta small {
    display: block;
    color: var(--dc-text-faint);
    margin-top: 3px;
    line-height: 1.35;
  }

  .channel-badge {
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 999px;
    background: var(--dc-red);
    color: #fff;
    font-size: 11px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    box-shadow: 0 6px 14px rgba(237, 66, 69, 0.25);
  }

  .dc-channel.active .channel-badge {
    background: var(--dc-accent);
    box-shadow: 0 6px 14px rgba(88,101,242,0.28);
  }

  .dc-sidebar-footer {
    margin-top: auto;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .dc-profile-card {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--dc-sidebar-2);
    border: 1px solid var(--dc-border);
    border-radius: 12px;
    padding: 10px;
  }

  .profile-avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, var(--dc-accent), #7c84ff);
    color: #fff;
    font-weight: 800;
    flex: none;
  }

  .profile-meta strong {
    display: block;
    color: var(--dc-text);
    font-size: 14px;
    line-height: 1.2;
  }

  .profile-meta span {
    display: block;
    color: #57f287;
    font-size: 12px;
    margin-top: 2px;
  }

  .dc-sidebar-footer button {
    width: 100%;
    border: 1px solid var(--dc-border);
    background: var(--dc-sidebar-2);
    color: var(--dc-text-soft);
    border-radius: 10px;
    padding: 11px 12px;
    cursor: pointer;
    font-weight: 700;
    transition: background var(--dc-transition), color var(--dc-transition), transform var(--dc-transition);
  }

  .dc-sidebar-footer button:hover {
    background: var(--dc-card-hover);
    color: var(--dc-text);
    transform: translateY(-1px);
  }

  .dc-main {
    display: flex;
    flex-direction: column;
    background: var(--dc-main);
    min-width: 0;
  }

  .dc-topbar {
    min-height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 0 22px;
    background: var(--dc-main);
    border-bottom: 1px solid var(--dc-border);
  }

  .dc-topbar-left {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .topbar-hash {
    color: var(--dc-text-faint);
    font-size: 30px;
    line-height: 1;
    flex: none;
    display: inline-block;
    margin-top: -1px;
  }

  .dc-topbar h2 {
    margin: 0;
    color: var(--dc-text);
    font-size: 19px;
    line-height: 1.15;
  }

  .dc-topbar p {
    margin: 3px 0 0;
    color: var(--dc-text-soft);
    font-size: 13px;
    line-height: 1.4;
    max-width: 520px;
  }

  .dc-topbar-right {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: none;
  }

  .top-icon-btn {
    width: 40px;
    height: 40px;
    border: 1px solid var(--dc-border);
    border-radius: 12px;
    background: var(--dc-card);
    color: var(--dc-text-soft);
    cursor: pointer;
    transition: all var(--dc-transition);
    font-size: 16px;
  }

  .top-icon-btn:hover,
  .top-icon-btn.active {
    background: var(--dc-accent);
    color: #fff;
  }

  .dc-status-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 999px;
    background: var(--dc-card);
    border: 1px solid var(--dc-border);
    color: var(--dc-text-soft);
    font-size: 13px;
    font-weight: 700;
    white-space: nowrap;
  }

  .status-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--dc-green);
    box-shadow: 0 0 0 0 rgba(35, 165, 89, 0.6);
    animation: dcPulse 1.8s infinite;
  }

  @keyframes dcPulse {
    0% { box-shadow: 0 0 0 0 rgba(35, 165, 89, 0.6); }
    70% { box-shadow: 0 0 0 8px rgba(35, 165, 89, 0); }
    100% { box-shadow: 0 0 0 0 rgba(35, 165, 89, 0); }
  }

  .dc-main-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 220px;
    min-height: 0;
    flex: 1;
  }

  .dc-chat-panel {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .dc-members {
    background: var(--dc-main-2);
    border-left: 1px solid var(--dc-border);
    padding: 16px 12px;
  }

  .dc-members.hidden {
    display: none;
  }

  .members-title {
    color: var(--dc-text-faint);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.06em;
    margin-bottom: 14px;
  }

  .member-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .member-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 4px;
    border-radius: 10px;
    transition: background var(--dc-transition);
  }

  .member-item:hover {
    background: var(--dc-card-hover);
  }

  .member-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 800;
    font-size: 12px;
    color: #fff;
    flex: none;
  }

  .member-owner { background: linear-gradient(135deg, #5865f2, #7a84ff); }
  .member-research { background: linear-gradient(135deg, #f0b232, #f7c75d); color: #3a2400; }
  .member-life { background: linear-gradient(135deg, #23a559, #57f287); }
  .member-guest { background: linear-gradient(135deg, #4ea1ff, #7cc1ff); color: #072744; }

  .member-meta strong {
    display: block;
    color: var(--dc-text);
    font-size: 13px;
    line-height: 1.2;
  }

  .member-meta small {
    display: block;
    color: var(--dc-text-faint);
    margin-top: 2px;
    line-height: 1.3;
    font-size: 11px;
  }

  .dc-room-intro {
    display: grid;
    grid-template-columns: 70px minmax(0, 1fr);
    gap: 16px;
    align-items: center;
    padding: 24px 28px 16px;
    border-bottom: 1px solid var(--dc-border);
  }

  .intro-icon {
    width: 60px;
    height: 60px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    background: var(--dc-card);
    color: var(--dc-accent);
    font-size: 34px;
    flex: none;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
  }

  .dc-room-intro h3 {
    margin: 0;
    color: var(--dc-text);
    font-size: 24px;
    line-height: 1.18;
    letter-spacing: -0.02em;
  }

  .dc-room-intro p {
    margin: 8px 0 0;
    color: var(--dc-text-soft);
    font-size: 15px;
    line-height: 1.6;
    max-width: 760px;
  }

  .dc-chat {
    flex: 1;
    min-height: 360px;
    max-height: 600px;
    overflow-y: auto;
    padding: 14px 0 8px;
    background: var(--dc-main);
  }

  .dc-chat::-webkit-scrollbar {
    width: 10px;
  }

  .dc-chat::-webkit-scrollbar-thumb {
    background: var(--dc-card);
    border-radius: 999px;
  }

  .date-separator {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 28px 8px;
  }

  .date-separator::before,
  .date-separator::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--dc-border-strong);
  }

  .date-separator span {
    color: var(--dc-text-faint);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .msg-row {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 12px 28px;
    transition: background var(--dc-transition);
    position: relative;
  }

  .msg-row:hover {
    background: var(--dc-card-hover);
  }

  .msg-row.outgoing {
    flex-direction: row-reverse;
  }

  .msg-row.compact {
    padding-top: 4px;
  }

  .msg-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 800;
    font-size: 13px;
    color: white;
    flex: none;
    box-shadow: 0 8px 18px rgba(0,0,0,0.18);
  }

  .msg-row.author .msg-avatar {
    background: linear-gradient(135deg, var(--dc-author), #f7c75d);
    color: #3a2400;
  }

  .msg-row.visitor .msg-avatar {
    background: linear-gradient(135deg, var(--dc-visitor), #79bcff);
    color: #082542;
  }

  .msg-row.compact .msg-avatar {
    visibility: hidden;
    box-shadow: none;
  }

  .msg-body {
    max-width: min(84%, 920px);
    min-width: 0;
    position: relative;
  }

  .msg-row.outgoing .msg-body {
    text-align: right;
  }

  .msg-meta {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 6px;
  }

  .msg-row.outgoing .msg-meta {
    justify-content: flex-end;
  }

  .msg-row.compact .msg-meta {
    display: none;
  }

  .msg-name {
    color: var(--dc-text);
    font-weight: 800;
    font-size: 15px;
  }

  .msg-time {
    color: var(--dc-text-faint);
    font-size: 12px;
  }

  .reply-preview {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    max-width: 100%;
    margin-bottom: 8px;
    font-size: 12px;
    color: var(--dc-text-faint);
    background: rgba(0,0,0,0.04);
    padding: 6px 8px;
    border-radius: 10px;
    border: 1px solid var(--dc-border);
  }

  .msg-row.outgoing .reply-preview {
    justify-content: flex-end;
  }

  .reply-preview-line {
    width: 18px;
    height: 1px;
    background: currentColor;
    opacity: 0.6;
    flex: none;
  }

  .reply-preview strong {
    color: var(--dc-text-soft);
    font-weight: 700;
  }

  .reply-preview-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 360px;
  }

  .bubble {
    display: inline-block;
    max-width: 100%;
    background: var(--dc-card-soft);
    color: var(--dc-text);
    border-radius: 18px;
    padding: 13px 16px;
    line-height: 1.75;
    border: 1px solid var(--dc-border);
    box-shadow: 0 8px 18px rgba(0,0,0,0.08);
    word-break: break-word;
    transform: translateY(6px);
    opacity: 0;
    animation: msgIn .18s ease forwards;
    font-size: 15px;
  }

  .msg-row.outgoing .bubble {
    background: linear-gradient(180deg, var(--dc-accent), var(--dc-accent-2));
    color: #fff;
    border-color: transparent;
  }

  @keyframes msgIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .msg-actions {
    position: absolute;
    top: -10px;
    right: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--dc-hover-toolbar);
    border: 1px solid var(--dc-border);
    border-radius: 12px;
    padding: 6px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.10);
    opacity: 0;
    pointer-events: none;
    transform: translateY(4px);
    transition: opacity var(--dc-transition), transform var(--dc-transition);
    z-index: 3;
  }

  .msg-row.outgoing .msg-actions {
    right: auto;
    left: 0;
  }

  .msg-row:hover .msg-actions {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .msg-action-btn {
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: var(--dc-text-soft);
    cursor: pointer;
    transition: background var(--dc-transition), color var(--dc-transition);
    font-size: 13px;
  }

  .msg-action-btn:hover {
    background: var(--dc-card-hover);
    color: var(--dc-text);
  }

  .dc-typing {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin: 6px 28px 14px;
    color: var(--dc-text-faint);
    font-size: 13px;
  }

  .dc-typing span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #9ca3af;
    animation: blink 1.1s infinite ease-in-out;
  }

  .dc-typing span:nth-child(2) { animation-delay: .15s; }
  .dc-typing span:nth-child(3) { animation-delay: .3s; }

  @keyframes blink {
    0%, 80%, 100% { opacity: .25; transform: translateY(0); }
    40% { opacity: 1; transform: translateY(-2px); }
  }

  .dc-toolbar {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    align-items: center;
    padding: 16px 24px 12px;
    border-top: 1px solid var(--dc-border);
    flex-wrap: wrap;
  }

  .dc-role-switch {
    display: inline-flex;
    background: var(--dc-card);
    border: 1px solid var(--dc-border);
    border-radius: 999px;
    padding: 4px;
    gap: 4px;
  }

  .dc-role-btn {
    border: 0;
    border-radius: 999px;
    padding: 8px 14px;
    background: transparent;
    color: var(--dc-text-soft);
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    transition: background var(--dc-transition), color var(--dc-transition), transform var(--dc-transition);
  }

  .dc-role-btn.active {
    background: var(--dc-accent);
    color: #fff;
  }

  .dc-role-btn:hover {
    transform: translateY(-1px);
  }

  .dc-prompts {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .dc-prompts button {
    border: 1px solid var(--dc-border);
    background: var(--dc-card);
    color: var(--dc-text-soft);
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    padding: 8px 12px;
    cursor: pointer;
    transition: background var(--dc-transition), color var(--dc-transition), transform var(--dc-transition);
  }

  .dc-prompts button:hover {
    background: var(--dc-card-hover);
    color: var(--dc-text);
    transform: translateY(-1px);
  }

  .reply-bar {
    margin: 0 24px 12px;
    padding: 12px 14px;
    border: 1px solid var(--dc-border);
    background: var(--dc-reply-bg);
    border-radius: 14px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }

  .reply-bar-content {
    min-width: 0;
  }

  .reply-bar-title {
    color: var(--dc-text);
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .reply-bar-title span {
    color: var(--dc-accent);
  }

  .reply-bar-text {
    color: var(--dc-text-soft);
    font-size: 13px;
    line-height: 1.45;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 700px;
  }

  .reply-close-btn {
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: var(--dc-text-soft);
    cursor: pointer;
    transition: background var(--dc-transition), color var(--dc-transition);
    flex: none;
  }

  .reply-close-btn:hover {
    background: var(--dc-card-hover);
    color: var(--dc-text);
  }

  .dc-input-wrap {
    padding: 0 24px 20px;
  }

  .dc-input-shell {
    display: flex;
    gap: 10px;
    align-items: center;
    background: var(--dc-input);
    border: 1px solid var(--dc-border);
    border-radius: 16px;
    padding: 12px;
  }

  .dc-input-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: none;
  }

  .input-icon-btn {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 10px;
    background: var(--dc-card);
    color: var(--dc-text-soft);
    cursor: pointer;
    font-size: 14px;
    font-weight: 800;
    transition: all var(--dc-transition);
  }

  .input-icon-btn:hover {
    background: var(--dc-accent);
    color: #fff;
    transform: translateY(-1px);
  }

  .dc-input-shell input {
    flex: 1;
    border: 0;
    outline: none;
    background: transparent;
    color: var(--dc-text);
    font-size: 15px;
    padding: 8px 10px;
    min-width: 0;
  }

  .dc-input-shell input::placeholder {
    color: var(--dc-text-faint);
  }

  .dc-input-shell button[type="submit"] {
    border: 0;
    border-radius: 12px;
    padding: 11px 18px;
    background: linear-gradient(180deg, var(--dc-accent), var(--dc-accent-2));
    color: #fff;
    font-weight: 800;
    cursor: pointer;
    transition: transform var(--dc-transition), box-shadow var(--dc-transition);
    box-shadow: 0 10px 20px rgba(88,101,242,0.24);
    flex: none;
  }

  .dc-input-shell button[type="submit"]:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 24px rgba(88,101,242,0.28);
  }

  .dc-discussion {
    background: var(--dc-main-2);
    border-top: 1px solid var(--dc-border);
    padding: 20px 24px 28px;
  }

  .dc-discussion-title {
    color: var(--dc-text);
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 6px;
  }

  .dc-discussion p {
    margin: 0 0 14px;
    color: var(--dc-text-soft);
    font-size: 14px;
    line-height: 1.6;
  }

  @media (max-width: 1320px) {
    .dc-main-content {
      grid-template-columns: minmax(0, 1fr);
    }

    .dc-members {
      display: none;
    }
  }

  @media (max-width: 1180px) {
    .dc-shell {
      grid-template-columns: 72px 1fr;
    }

    .dc-sidebar {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    .dc-topbar {
      height: auto;
      padding: 16px 18px;
      flex-direction: column;
      align-items: flex-start;
    }

    .dc-toolbar {
      flex-direction: column;
      align-items: flex-start;
    }

    .dc-chat {
      max-height: 440px;
    }
  }

  @media (max-width: 680px) {
    .dc-page {
      margin: 14px auto;
      padding: 0 8px;
    }

    .dc-shell {
      grid-template-columns: 1fr;
      border-radius: 16px;
      min-height: auto;
    }

    .dc-serverbar {
      flex-direction: row;
      justify-content: center;
      padding: 10px;
      gap: 10px;
      border-right: 0;
      border-bottom: 1px solid var(--dc-border);
    }

    .server-btn.active::before {
      display: none;
    }

    .server-sep {
      width: 2px;
      height: 26px;
    }

    .dc-room-intro {
      grid-template-columns: 56px minmax(0, 1fr);
      padding: 18px 16px 12px;
    }

    .dc-room-intro h3 {
      font-size: 20px;
    }

    .msg-row {
      padding: 10px 16px;
    }

    .msg-body {
      max-width: 90%;
    }

    .dc-input-wrap {
      padding: 0 12px 14px;
    }

    .dc-discussion {
      padding: 16px 14px 22px;
    }

    .dc-input-shell {
      flex-wrap: wrap;
    }

    .dc-input-actions {
      width: 100%;
    }

    .dc-input-shell button[type="submit"] {
      width: 100%;
    }

    .reply-bar {
      margin: 0 12px 10px;
    }

    .date-separator,
    .dc-typing {
      padding-left: 16px;
      padding-right: 16px;
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>

<script>
  (function () {
    const rooms = {
      public: {
        title: 'public-chat',
        desc: 'A place for open conversation, quick questions, and casual interaction.',
        introHeading: 'Welcome to #public-chat',
        introText: 'This is the beginning of the channel. Start a conversation, share ideas, or switch to a more focused room.',
        welcome: 'Welcome to the public channel. Everyone is free to join, ask, and share.'
      },
      research: {
        title: 'research-room',
        desc: 'Focused discussion on papers, methods, experiments, and reproducibility.',
        introHeading: 'Welcome to #research-room',
        introText: 'Use this channel to discuss research ideas, technical methods, paper feedback, and experiment design.',
        welcome: 'Welcome to the research room. Sharing your problem setting and what you have tried usually leads to better discussion.'
      },
      life: {
        title: 'life-corner',
        desc: 'A relaxed space for productivity, habits, health, and daily balance.',
        introHeading: 'Welcome to #life-corner',
        introText: 'This channel is for routines, motivation, exercise, balance, and everyday thoughts beyond research.',
        welcome: 'Welcome to the life corner. Slow down a bit and talk about daily life too.'
      }
    };

    const storageKey = 'discord-style-room-history-v5';
    const unreadKey = 'discord-style-room-unread-v1';
    const themeKey = 'discord-style-theme-v1';

    const quickChat = document.getElementById('quick-chat');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-text');
    const typingRow = document.getElementById('typing-row');
    const typingText = document.getElementById('typing-text');
    const clearBtn = document.getElementById('clear-current-chat');
    const roomTitle = document.getElementById('room-title');
    const roomDesc = document.getElementById('room-desc');
    const introHeading = document.getElementById('intro-heading');
    const introText = document.getElementById('intro-text');
    const statusText = document.getElementById('chat-status');
    const roleButtons = Array.from(document.querySelectorAll('.dc-role-btn'));
    const promptButtons = Array.from(document.querySelectorAll('.dc-prompts button'));
    const inputActionButtons = Array.from(document.querySelectorAll('.input-icon-btn'));
    const channelSearch = document.getElementById('channel-search');
    const toggleMembersBtn = document.getElementById('toggle-members');
    const membersPanel = document.getElementById('members-panel');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const replyBar = document.getElementById('reply-bar');
    const replyTargetName = document.getElementById('reply-target-name');
    const replyTargetText = document.getElementById('reply-target-text');
    const cancelReplyBtn = document.getElementById('cancel-reply');

    const allChannelButtons = Array.from(document.querySelectorAll('.dc-channel'));
    const sectionToggles = Array.from(document.querySelectorAll('.section-toggle'));

    const badges = {
      public: document.getElementById('badge-public'),
      research: document.getElementById('badge-research'),
      life: document.getElementById('badge-life')
    };

    if (!quickChat || !form || !input) return;

    let currentRoom = 'public';
    let currentRole = 'visitor';
    let history = loadHistory();
    let unread = loadUnread();
    let replyState = null;

    initTheme();
    bindSectionToggles();

    function nowText() {
      const now = new Date();
      return now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    }

    function todayLabel() {
      const now = new Date();
      return now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      });
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
      } catch (e) {}
    }

    function loadUnread() {
      try {
        const raw = localStorage.getItem(unreadKey);
        const parsed = raw ? JSON.parse(raw) : {};
        return {
          public: Number.isFinite(parsed.public) ? parsed.public : 0,
          research: Number.isFinite(parsed.research) ? parsed.research : 0,
          life: Number.isFinite(parsed.life) ? parsed.life : 0
        };
      } catch (e) {
        return { public: 0, research: 0, life: 0 };
      }
    }

    function saveUnread() {
      try {
        localStorage.setItem(unreadKey, JSON.stringify(unread));
      } catch (e) {}
    }

    function createDateSeparator(text) {
      const row = document.createElement('div');
      row.className = 'date-separator';
      const label = document.createElement('span');
      label.textContent = text;
      row.appendChild(label);
      return row;
    }

    function createReplyPreview(reply) {
      const wrap = document.createElement('div');
      wrap.className = 'reply-preview';

      const line = document.createElement('span');
      line.className = 'reply-preview-line';

      const name = document.createElement('strong');
      name.textContent = reply.sender;

      const text = document.createElement('span');
      text.className = 'reply-preview-text';
      text.textContent = reply.text;

      wrap.appendChild(line);
      wrap.appendChild(name);
      wrap.appendChild(text);
      return wrap;
    }

    function createActions(msg) {
      const actions = document.createElement('div');
      actions.className = 'msg-actions';

      const reactBtn = document.createElement('button');
      reactBtn.className = 'msg-action-btn';
      reactBtn.type = 'button';
      reactBtn.title = 'React';
      reactBtn.textContent = '😊';
      reactBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        input.value += '😊 ';
        input.focus();
      });

      const copyBtn = document.createElement('button');
      copyBtn.className = 'msg-action-btn';
      copyBtn.type = 'button';
      copyBtn.title = 'Copy';
      copyBtn.textContent = '⧉';
      copyBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const copyText = msg.text || '';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(copyText).catch(function () {});
        } else {
          input.value = copyText;
        }
      });

      const replyBtn = document.createElement('button');
      replyBtn.className = 'msg-action-btn';
      replyBtn.type = 'button';
      replyBtn.title = 'Reply';
      replyBtn.textContent = '↩';
      replyBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        setReplyState(msg);
      });

      actions.appendChild(reactBtn);
      actions.appendChild(copyBtn);
      actions.appendChild(replyBtn);

      return actions;
    }

    function createMsg(msg, previousMsg, index) {
      const isCompact =
        previousMsg &&
        previousMsg.sender === msg.sender &&
        previousMsg.role === msg.role &&
        previousMsg.direction === msg.direction;

      const row = document.createElement('div');
      row.className = `msg-row ${msg.direction} ${msg.role}${isCompact ? ' compact' : ''}`;
      row.dataset.index = String(index);

      const avatar = document.createElement('span');
      avatar.className = 'msg-avatar';
      avatar.textContent = msg.role === 'author' ? 'AU' : 'VS';

      const body = document.createElement('div');
      body.className = 'msg-body';

      const meta = document.createElement('div');
      meta.className = 'msg-meta';

      const name = document.createElement('span');
      name.className = 'msg-name';
      name.textContent = msg.sender;

      const time = document.createElement('span');
      time.className = 'msg-time';
      time.textContent = msg.time;

      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.textContent = msg.text;

      meta.appendChild(name);
      meta.appendChild(time);
      body.appendChild(meta);

      if (msg.replyTo) {
        body.appendChild(createReplyPreview(msg.replyTo));
      }

      body.appendChild(bubble);
      body.appendChild(createActions(msg));

      row.appendChild(avatar);
      row.appendChild(body);

      row.addEventListener('dblclick', function () {
        setReplyState(msg);
      });

      return row;
    }

    function renderRoom() {
      const meta = rooms[currentRoom];
      const roomHistory = history[currentRoom];

      roomTitle.textContent = meta.title;
      roomDesc.textContent = meta.desc;
      introHeading.textContent = meta.introHeading;
      introText.textContent = meta.introText;
      statusText.textContent = `${Object.keys(rooms).length} channels available`;

      quickChat.innerHTML = '';
      quickChat.appendChild(createDateSeparator(`Today · ${todayLabel()}`));

      if (!roomHistory.length) {
        quickChat.appendChild(createMsg({
          text: meta.welcome,
          direction: 'incoming',
          role: 'author',
          sender: 'Author',
          time: nowText()
        }, null, 0));
      } else {
        roomHistory.forEach(function (msg, index) {
          const previousMsg = index > 0 ? roomHistory[index - 1] : null;
          quickChat.appendChild(createMsg(msg, previousMsg, index));
        });
      }

      quickChat.scrollTop = quickChat.scrollHeight;
      unread[currentRoom] = 0;
      saveUnread();
      updateBadges();
      clearReplyState();
    }

    function appendMessage(msg, shouldSave) {
      const roomHistory = history[currentRoom];

      if (!quickChat.querySelector('.date-separator')) {
        quickChat.appendChild(createDateSeparator(`Today · ${todayLabel()}`));
      }

      const previousMsg = roomHistory.length ? roomHistory[roomHistory.length - 1] : null;

      if (shouldSave) {
        roomHistory.push(msg);
        history[currentRoom] = roomHistory.slice(-120);
        saveHistory();
      }

      quickChat.appendChild(createMsg(msg, previousMsg, roomHistory.length - 1));
      quickChat.scrollTop = quickChat.scrollHeight;

      if (shouldSave) {
        unread[currentRoom] = 0;
        saveUnread();
        updateBadges();
      }
    }

    function switchRoom(roomId) {
      if (!rooms[roomId]) return;
      currentRoom = roomId;

      allChannelButtons.forEach(function (btn) {
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

    function updateBadges() {
      Object.keys(badges).forEach(function (key) {
        if (!badges[key]) return;

        const count = Number.isFinite(unread[key]) ? unread[key] : 0;

        if (key === currentRoom || count <= 0) {
          badges[key].textContent = '';
          badges[key].style.visibility = 'hidden';
        } else {
          badges[key].textContent = count;
          badges[key].style.visibility = 'visible';
        }
      });
    }

    function setReplyState(msg) {
      replyState = {
        sender: msg.sender,
        text: msg.text
      };
      replyTargetName.textContent = replyState.sender;
      replyTargetText.textContent = replyState.text;
      replyBar.hidden = false;
      input.focus();
    }

    function clearReplyState() {
      replyState = null;
      replyBar.hidden = true;
      replyTargetName.textContent = '';
      replyTargetText.textContent = '';
    }

    function bindSectionToggles() {
      sectionToggles.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const section = btn.getAttribute('data-section');
          const body = document.querySelector(`[data-section-body="${section}"]`);
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
          if (body) body.hidden = expanded;
        });
      });
    }

    function initTheme() {
      let savedTheme = null;
      try {
        savedTheme = localStorage.getItem(themeKey);
      } catch (e) {}

      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = savedTheme || (prefersDark ? 'dark' : 'light');

      applyTheme(theme);
    }

    function applyTheme(theme) {
      document.body.classList.remove('theme-dark', 'theme-light');
      document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');

      if (themeIcon) {
        themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
      }

      try {
        localStorage.setItem(themeKey, theme);
      } catch (e) {}

      const giscusFrame = document.querySelector('iframe.giscus-frame');
      if (giscusFrame && giscusFrame.contentWindow) {
        giscusFrame.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: theme === 'light' ? 'light' : 'dark'
              }
            }
          },
          'https://giscus.app'
        );
      }
    }

    allChannelButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchRoom(btn.getAttribute('data-room'));
      });
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

    inputActionButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const insertText = btn.getAttribute('data-insert') || '';
        input.value += insertText;
        input.focus();
      });
    });

    if (channelSearch) {
      channelSearch.addEventListener('input', function () {
        const keyword = channelSearch.value.trim().toLowerCase();
        allChannelButtons.forEach(function (btn) {
          const text = btn.textContent.toLowerCase();
          const matched = !keyword || text.indexOf(keyword) !== -1;
          btn.classList.toggle('hidden-by-search', !matched);
        });
      });
    }

    if (toggleMembersBtn && membersPanel) {
      toggleMembersBtn.addEventListener('click', function () {
        const willHide = !membersPanel.classList.contains('hidden');
        membersPanel.classList.toggle('hidden', willHide);
        toggleMembersBtn.classList.toggle('active', !willHide);
      });
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', function () {
        const isLight = document.body.classList.contains('theme-light');
        applyTheme(isLight ? 'dark' : 'light');
      });
    }

    if (cancelReplyBtn) {
      cancelReplyBtn.addEventListener('click', function () {
        clearReplyState();
      });
    }

    input.addEventListener('input', function () {
      const typing = input.value.trim().length > 0;
      typingRow.hidden = !typing;
      typingText.textContent = currentRole === 'author' ? 'Author is typing...' : 'Visitor is typing...';
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;

      const isAuthor = currentRole === 'author';
      const msg = {
        text: value,
        direction: isAuthor ? 'incoming' : 'outgoing',
        role: currentRole,
        sender: isAuthor ? 'Author' : 'Visitor',
        time: nowText()
      };

      if (replyState) {
        msg.replyTo = {
          sender: replyState.sender,
          text: replyState.text
        };
      }

      appendMessage(msg, true);

      input.value = '';
      typingRow.hidden = true;
      clearReplyState();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        history[currentRoom] = [];
        unread[currentRoom] = 0;
        saveHistory();
        saveUnread();
        renderRoom();
      });
    }

    updateBadges();
    renderRoom();
  })();
</script>

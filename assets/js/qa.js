(function () {
  'use strict';
  var status = document.getElementById('qa-status');
  var count = document.getElementById('qa-count');
  var fallback = document.getElementById('qa-fallback');
  var retry = document.getElementById('qa-retry');
  var discussionUrl = 'https://github.com/chaozhou24/chaozhou24.github.io/discussions/1';
  if (!status || !count || !fallback || !retry) return;

  function showFallback() {
    status.textContent = 'The shared discussion is currently unavailable.';
    count.hidden = true;
    fallback.hidden = false;
  }

  var timeout = window.setTimeout(showFallback, 20000);
  retry.addEventListener('click', function () { window.location.reload(); });

  window.addEventListener('message', function (event) {
    var frame = document.querySelector('iframe.giscus-frame');
    if (event.origin !== 'https://giscus.app' || !frame || event.source !== frame.contentWindow) return;
    if (!event.data || typeof event.data !== 'object' || !event.data.giscus) return;
    var data = event.data.giscus;
    if (typeof data.error === 'string') {
      window.clearTimeout(timeout);
      showFallback();
      return;
    }
    var discussion = data.discussion;
    if (!discussion || discussion.url !== discussionUrl || !discussion.repository ||
        discussion.repository.nameWithOwner !== 'chaozhou24/chaozhou24.github.io') return;
    if (discussion.locked) {
      window.clearTimeout(timeout);
      status.textContent = 'This discussion is read-only. New questions and replies are paused.';
      fallback.hidden = true;
      count.hidden = true;
      return;
    }
    var questions = discussion.totalCommentCount;
    var replies = discussion.totalReplyCount;
    if (!Number.isInteger(questions) || questions < 0 || !Number.isInteger(replies) || replies < 0) return;
    window.clearTimeout(timeout);
    count.textContent = questions + (questions === 1 ? ' question' : ' questions') + ' · ' +
      replies + (replies === 1 ? ' reply' : ' replies');
    count.hidden = false;
    fallback.hidden = true;
    status.textContent = 'Shared discussion · saved on GitHub';
  });
}());

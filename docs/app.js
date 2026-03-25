async function loadPanel() {
  const response = await fetch('./data/panel.json');
  if (!response.ok) {
    throw new Error('Failed to load panel data');
  }
  return response.json();
}

function renderSignals(signals) {
  const list = document.getElementById('signals-list');
  list.innerHTML = '';

  signals.forEach((signal) => {
    const li = document.createElement('li');
    li.textContent = signal;
    list.appendChild(li);
  });
}

function renderChannels(channels) {
  const grid = document.getElementById('channel-grid');
  grid.innerHTML = '';

  channels.forEach((channel) => {
    const section = document.createElement('section');
    section.className = 'channel-card';

    const itemsHtml = channel.items.map((item) => {
      const tags = [
        `<span class="tag ${item.level === '极低' ? 'level-low' : 'level-mid'}">${item.level}</span>`,
        `<span class="tag">${item.state}</span>`
      ].join('');

      return `
        <article class="item">
          <div class="item-title">${item.name}</div>
          <div class="item-desc">${item.desc}</div>
          <div class="item-tags">${tags}</div>
        </article>
      `;
    }).join('');

    section.innerHTML = `
      <div class="channel-meta">
        <span>${channel.key}</span>
        <span>${channel.subtitle}</span>
      </div>
      <h2>${channel.title}</h2>
      <p>${channel.description}</p>
      <div>${itemsHtml}</div>
    `;

    grid.appendChild(section);
  });
}

function renderProtocol(protocol) {
  document.getElementById('protocol-text').textContent = protocol;
}

async function init() {
  try {
    const panel = await loadPanel();
    renderProtocol(panel.protocol);
    renderSignals(panel.signals);
    renderChannels(panel.channels);
  } catch (error) {
    document.getElementById('channel-grid').innerHTML = `<section class="channel-card"><h2>加载失败</h2><p>${error.message}</p></section>`;
  }
}

init();

// ============================================================
//  RENDER.JS — reads from content.js and builds both views.
//  You should never need to edit this file.
// ============================================================

// ── Helpers ──────────────────────────────────────────────────

function imgGrid(images, cols = 2, placeholderCount = 2, placeholderLabel = "Screenshot") {
    if (!images || images.length === 0) {
        const boxes = Array.from({ length: placeholderCount }, (_, i) =>
            `<div class="img-placeholder" style="height:120px;">${placeholderLabel} ${i + 1}</div>`
        ).join('');
        return `<div class="img-grid-${cols}">${boxes}</div>`;
    }
    const imgs = images.map(img =>
        `<img src="${img.src}" alt="${img.alt || ''}" style="width:100%;height:120px;object-fit:cover;border:1px solid #999;">`
    ).join('');
    return `<div class="img-grid-${cols}">${imgs}</div>`;
}

function retroBtn(label, href, download = false) {
    if (!href) return '';
    const dl = download ? 'download' : '';
    return `<a href="${href}" target="${download ? '_self' : '_blank'}" ${dl}>
                <button class="retro-btn">${label}</button>
            </a>`;
}

function modernImgs(images) {
    if (!images || images.length === 0) return '';
    return `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;margin:12px 0;">
        ${images.map(img => `<img src="${img.src}" alt="${img.alt||''}" style="width:100%;height:110px;object-fit:cover;border-radius:4px;">`).join('')}
    </div>`;
}

function modernBtn(label, href, download = false) {
    if (!href) return '';
    return `<a href="${href}" target="${download ? '_self' : '_blank'}" ${download ? 'download' : ''}
               style="display:inline-block;margin:4px 6px 0 0;padding:5px 12px;background:#4a9eff;
                      color:white;border-radius:4px;font-size:12px;text-decoration:none;">${label}</a>`;
}

// Renders a description that is either a string or an array of strings
function renderDescription(description, modern = false) {
    if (Array.isArray(description)) {
        return description.map(para =>
            modern
                ? `<p style="margin-bottom:10px;">${para}</p>`
                : `<p style="margin-bottom:8px;">${para}</p>`
        ).join('');
    }
    return `<p>${description}</p>`;
}

// ── RETRO RENDERS ─────────────────────────────────────────────

function renderRetroWelcome() {
    const el = document.getElementById('retro-welcome-content');
    if (!el) return;
    const w = PORTFOLIO.welcome;
    el.innerHTML = `
        <h2 style="margin-bottom:16px;">Welcome!</h2>
        <p>${w.intro}</p>
        <p style="margin-top:16px;">${w.description}</p>
        <p style="margin-top:16px;">This portfolio showcases my work across multiple disciplines:</p>
        <ul style="margin:12px 0 12px 20px;font-size:13px;line-height:2;">
            ${w.bullets.map(b => `<li><strong>${b.label}</strong> — ${b.detail}</li>`).join('')}
        </ul>
        <p style="margin-top:16px;color:#555;font-size:11px;"><em>${w.tip}</em></p>
        <p style="margin-top:8px;color:#555;font-size:11px;"><em>${w.credits}</em></p>
    `;
}

function renderRetroAbout() {
    const el = document.getElementById('retro-about-content');
    if (!el) return;
    const p = PORTFOLIO;
    el.innerHTML = `
        <div style="text-align:center;margin-bottom:20px;">
            <img src="${p.photo}" alt="${p.name}"
                 onerror="this.style.display='none'"
                 style="width:150px;height:150px;border-radius:50%;border:3px solid #000;object-fit:cover;">
        </div>
        <h2 style="text-align:center;">${p.name}</h2>
        <p style="text-align:center;"><em>${p.title}</em></p>
        <h3 style="margin-top:20px;">Bio</h3>
        ${p.bio.map(para => `<p style="margin-bottom:10px;">${para}</p>`).join('')}
        <h3 style="margin-top:20px;">Skills</h3>
        <ul style="margin-left:18px;font-size:13px;line-height:1.8;">
            ${p.skills.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <h3 style="margin-top:20px;">Contact &amp; Links</h3>
        <p style="font-size:13px;line-height:2;">
            📧 <a href="mailto:${p.email}">${p.email}</a><br>
            💼 <a href="${p.linkedin}" target="_blank">${p.linkedin.replace('https://', '')}</a><br>
            🐱 <a href="${p.github}" target="_blank">${p.github.replace('https://', '')}</a><br>
            🎮 <a href="${p.itch}" target="_blank">${p.itch.replace('https://', '')}</a><br>
            🗿 <a href="${p.sketchfab}" target="_blank">${p.sketchfab.replace('https://', '')}</a>
        </p>
        <div style="text-align:center;margin-top:30px;">
            <a href="${p.resume}" download>
                <button class="retro-btn" style="padding:8px 20px;font-weight:bold;">📄 Download Resume</button>
            </a>
        </div>
    `;
}

function renderRetroCpp() {
    const el = document.getElementById('retro-cpp-content');
    if (!el) return;
    el.innerHTML = PORTFOLIO.cpp.map(proj => `
        <div class="project-item">
            <h4>${proj.title}</h4>
            ${renderDescription(proj.description)}
            <br>
            ${proj.youtubeId ? `<iframe width="100%" height="220" src="https://www.youtube.com/embed/${proj.youtubeId}" frameborder="0" allowfullscreen style="margin:8px 0;"></iframe>` : ''}
            ${imgGrid(proj.images, 2, 2, 'Screenshot')}
            <div style="margin-top:8px;">
                ${retroBtn('View on GitHub', proj.github)}
            </div>
        </div>
    `).join('');
}

function renderRetroCaustics() {
    const el = document.getElementById('retro-caustics-content');
    if (!el) return;
    const c = PORTFOLIO.caustics;
    el.innerHTML = `
        <div class="project-item">
            <h4>${c.title}</h4>
            ${renderDescription(c.description)}
            <br>
            ${imgGrid(c.images, 2, 4, 'Caustics Screenshot')}
            <div style="margin-top:8px;">
                ${retroBtn('View on GitHub', c.github)}
            </div>
        </div>
    `;
}

function renderRetroPurpleTeam() {
    const el = document.getElementById('retro-purpleteam-content');
    if (!el) return;
    const pt = PORTFOLIO.purpleTeam;
    el.innerHTML = `
        <div class="project-item">
            <h4>${pt.title}</h4>
            ${renderDescription(pt.description)}
            <br>
            ${imgGrid(pt.images, 2, 4, 'Screenshot')}
            <div style="margin-top:8px;">
                ${retroBtn('▶ Play on itch.io', pt.itchUrl)}
                ${retroBtn('⬇ Download (Windows)', pt.downloadUrl, true)}
            </div>
        </div>
    `;
}

function renderRetroBoardGames() {
    const el = document.getElementById('retro-boardgames-content');
    if (!el) return;
    el.innerHTML = PORTFOLIO.boardGames.map(bg => `
        <div class="project-item">
            <h4>${bg.title}</h4>
            ${renderDescription(bg.description)}
            <br>
            ${imgGrid(bg.images, 3, 3, 'Photo')}
            <div style="margin-top:8px;">
                ${retroBtn('📄 View Rules', bg.rulesUrl)}
                ${retroBtn('📓 Design Journal', bg.journalUrl)}
            </div>
        </div>
    `).join('');
}

function renderRetroScenes() {
    const el = document.getElementById('retro-scenes-content');
    if (!el) return;
    el.innerHTML = PORTFOLIO.scenes.map(scene => `
        <div class="project-item">
            <h4>${scene.title}</h4>
            ${renderDescription(scene.description)}
            <br>
            ${scene.sketchfabId
        ? `<iframe src="https://sketchfab.com/models/${scene.sketchfabId}/embed"
                           width="100%" height="300" frameborder="0"
                           allow="autoplay; fullscreen; xr-spatial-tracking"
                           style="margin:8px 0;"></iframe>`
        : `<div class="img-placeholder" style="height:180px;margin:8px 0;">Sketchfab embed — add sketchfabId in content.js once uploaded</div>`
    }
            ${imgGrid(scene.images, 2, 2, 'Render')}
            <div style="margin-top:8px;">
                ${retroBtn('⬇ Download Scene Files', scene.downloadUrl, true)}
            </div>
        </div>
    `).join('');
}

function renderRetroAnimations() {
    const el = document.getElementById('retro-animations-content');
    if (!el) return;
    el.innerHTML = PORTFOLIO.animations.map(anim => `
        <div class="project-item">
            <h4>${anim.title}</h4>
            ${renderDescription(anim.description)}
            <br>
            <iframe width="100%" height="260"
                    src="https://www.youtube.com/embed/${anim.youtubeId}"
                    frameborder="0" allowfullscreen style="margin:6px 0;"></iframe>
        </div>
    `).join('');
}

// ── MODERN RENDERS ────────────────────────────────────────────

function renderModern() {
    const el = document.getElementById('modern-content');
    if (!el) return;
    const p = PORTFOLIO;

    el.innerHTML = `
        <!-- Header -->
        <div class="modern-header">
            <h1>${p.name.split(' ')[0]} ${p.name.split(' ').slice(-1)[0]}</h1>
            <p>${p.title}</p>
        </div>

        <!-- Graphics / Tech Art -->
        <div class="modern-section">
            <h2>Graphics Programming / Technical Art</h2>

            <h3 style="margin-top:24px;font-size:20px;color:#aaa;">C++ Projects</h3>
            <div class="modern-grid">
                ${p.cpp.map(proj => `
                    <div class="modern-card">
                        <h3>${proj.title}</h3>
                        ${renderDescription(proj.description, true)}
                        ${modernImgs(proj.images)}
                        <div style="margin-top:10px;">
                            ${modernBtn('GitHub ↗', proj.github)}
                        </div>
                    </div>
                `).join('')}
            </div>

            <h3 style="margin-top:24px;font-size:20px;color:#aaa;">Unity Graphics Project</h3>
            <div class="modern-grid">
                <div class="modern-card">
                    <h3>${p.caustics.title}</h3>
                    ${renderDescription(p.caustics.description, true)}
                    ${modernImgs(p.caustics.images)}
                    <div style="margin-top:10px;">
                        ${modernBtn('GitHub ↗', p.caustics.github)}
                    </div>
                </div>
            </div>
        </div>

        <!-- Game Design -->
        <div class="modern-section">
            <h2>Game Design</h2>

            <h3 style="margin-top:24px;font-size:20px;color:#aaa;">Video Game</h3>
            <div class="modern-grid">
                <div class="modern-card">
                    <h3>${p.purpleTeam.title}</h3>
                    ${renderDescription(p.purpleTeam.description, true)}
                    ${modernImgs(p.purpleTeam.images)}
                    <div style="margin-top:10px;">
                        ${modernBtn('▶ Play on itch.io ↗', p.purpleTeam.itchUrl)}
                        ${modernBtn('⬇ Download (Windows)', p.purpleTeam.downloadUrl, true)}
                    </div>
                </div>
            </div>

            <h3 style="margin-top:24px;font-size:20px;color:#aaa;">Board Games</h3>
            <div class="modern-grid">
                ${p.boardGames.map(bg => `
                    <div class="modern-card">
                        <h3>${bg.title}</h3>
                        ${renderDescription(bg.description, true)}
                        ${modernImgs(bg.images)}
                        <div style="margin-top:10px;">
                            ${modernBtn('📄 Rules', bg.rulesUrl)}
                            ${modernBtn('📓 Design Journal', bg.journalUrl)}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- 3D Art -->
        <div class="modern-section">
            <h2>3D Art</h2>

            <h3 style="margin-top:24px;font-size:20px;color:#aaa;">3D Scenes</h3>
            <div class="modern-grid">
                ${p.scenes.map(scene => `
                    <div class="modern-card">
                        <h3>${scene.title}</h3>
                        ${renderDescription(scene.description, true)}
                        ${scene.sketchfabId
        ? `<iframe src="https://sketchfab.com/models/${scene.sketchfabId}/embed"
                                       width="100%" height="220" frameborder="0"
                                       allow="autoplay; fullscreen; xr-spatial-tracking"
                                       style="margin:10px 0;border-radius:4px;"></iframe>`
        : ''
    }
                        ${modernImgs(scene.images)}
                        <div style="margin-top:10px;">
                            ${modernBtn('⬇ Download Files', scene.downloadUrl, true)}
                        </div>
                    </div>
                `).join('')}
            </div>

            <h3 style="margin-top:24px;font-size:20px;color:#aaa;">Animations</h3>
            <div class="modern-grid">
                ${p.animations.map(anim => `
                    <div class="modern-card">
                        <h3>${anim.title}</h3>
                        ${renderDescription(anim.description, true)}
                        <div style="margin-top:10px;">
                            ${modernBtn('Watch on YouTube ↗', `https://www.youtube.com/watch?v=${anim.youtubeId}`)}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ── INIT — run all renders on page load ───────────────────────

document.addEventListener('DOMContentLoaded', function () {
    renderRetroWelcome();
    renderRetroAbout();
    renderRetroCpp();
    renderRetroCaustics();
    renderRetroPurpleTeam();
    renderRetroBoardGames();
    renderRetroScenes();
    renderRetroAnimations();
    renderModern();
});
type MacNestEmailOptions = {
  githubUrl: string;
  siteUrl: string;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
}

export function createMacNestThankYouEmail({ githubUrl, siteUrl }: MacNestEmailOptions) {
  const github = escapeHtml(githubUrl);
  const macNestUrl = escapeHtml(`${siteUrl}/macnest`);
  const installGuide = escapeHtml(`${siteUrl}/macnest#installation`);
  const logo = escapeHtml(`${siteUrl}/macnest/logo.png`);

  const html = `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#f3f5f2;color:#182018;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f5f2;padding:32px 12px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background:#ffffff;border:1px solid #e5e9e2;border-radius:18px;">
          <tr><td align="center" style="padding:36px 28px 24px;">
            <img src="${logo}" width="64" height="64" alt="MacNest logo" style="display:block;width:64px;height:64px;margin:0 auto 20px;border:0;object-fit:contain;" />
            <p style="margin:0;color:#4c741b;font-size:10px;font-weight:700;letter-spacing:1.8px;line-height:1.5;text-transform:uppercase;">MacNest for macOS</p>
            <h1 style="margin:12px 0 0;color:#172017;font-size:28px;line-height:1.2;font-weight:650;letter-spacing:-0.7px;">Thanks for checking out MacNest.</h1>
            <p style="margin:12px 0 0;color:#667064;font-size:15px;line-height:1.6;">A simpler way to manage your Mac development environment.</p>
          </td></tr>
          <tr><td style="padding:0 32px 28px;">
            <p style="margin:0;color:#414a40;font-size:14px;line-height:1.75;">Hi there,</p>
            <p style="margin:14px 0 0;color:#414a40;font-size:14px;line-height:1.75;">Thanks for giving MacNest a try! MacNest was built to make managing development tools and packages on macOS simpler, more organized, and less frustrating.</p>
            <p style="margin:14px 0 0;color:#414a40;font-size:14px;line-height:1.75;">I hope it becomes a useful part of your development workflow. If you have any feedback or suggestions, I’d love to hear from you.</p>
            <table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" style="margin:24px auto 0;"><tr><td align="center" bgcolor="#477714" style="border-radius:999px;">
              <a href="${macNestUrl}" style="display:inline-block;padding:13px 24px;color:#ffffff;text-decoration:none;font-size:14px;line-height:1.2;font-weight:600;">Explore MacNest</a>
            </td></tr></table>
          </td></tr>
          <tr><td style="padding:0 32px;">
            <div style="height:1px;background:#e8ece5;font-size:0;line-height:0;">&nbsp;</div>
          </td></tr>
          <tr><td style="padding:22px 32px 24px;">
            <h2 style="margin:0;color:#20291f;font-size:15px;line-height:1.4;font-weight:600;">Getting started</h2>
            <ol style="margin:12px 0 0;padding-left:20px;color:#50594e;font-size:13px;line-height:1.8;">
              <li>Download and open the MacNest DMG.</li>
              <li>Follow the <a href="${installGuide}" style="color:#3f6e13;text-decoration:underline;">installation instructions</a>.</li>
              <li>Launch MacNest from your Applications folder.</li>
            </ol>
            <p style="margin:20px 0 0;color:#50594e;font-size:13px;line-height:1.7;">Explore the source code or share feedback on the <a href="${github}" style="color:#3f6e13;text-decoration:underline;">MacNest GitHub repository</a>.</p>
          </td></tr>
          <tr><td align="center" style="padding:17px 28px;border-top:1px solid #e8ece5;color:#778073;font-size:11px;line-height:1.65;">
            You received this email because you requested a MacNest download.<br />
            <a href="${macNestUrl}" style="color:#596451;text-decoration:underline;">MacNest</a> · <a href="${escapeHtml(siteUrl)}" style="color:#596451;text-decoration:underline;">ranindu.dev</a>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;

  const text = `Thanks for checking out MacNest.
A simpler way to manage your Mac development environment.

Hi there,

Thanks for giving MacNest a try! MacNest was built to make managing development tools and packages on macOS simpler, more organized, and less frustrating.

I hope it becomes a useful part of your development workflow. If you have any feedback or suggestions, I’d love to hear from you.

Explore MacNest: ${siteUrl}/macnest

Getting started
1. Download and open the MacNest DMG.
2. Follow the installation instructions: ${siteUrl}/macnest#installation
3. Launch MacNest from your Applications folder.

Explore the source code or share feedback on the MacNest GitHub repository: ${githubUrl}

You received this email because you requested a MacNest download.
MacNest: ${siteUrl}/macnest
Portfolio: ${siteUrl}`;

  return { html, text };
}

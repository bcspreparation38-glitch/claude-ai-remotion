# Claude AI — 10-second Bengali Remotion promo

A vertical 9:16, 1080×1920, 30fps, 10-second motion-graphics promo. It contains Bengali on-screen text and animated UI-style visuals. It does **not** contain voiceover or music.

## Render automatically on GitHub

1. Upload the contents of this ZIP to the root of your repository (not the ZIP file itself).
2. Commit the files to the `main` branch.
3. Open the repository's **Actions** tab.
4. Select **Render Remotion Video** and click **Run workflow** (or wait for the push workflow).
5. Open the completed run and download the `claude-ai-promo-mp4` artifact.

The workflow installs dependencies, renders the MP4, and attaches it as a downloadable artifact.

## Render locally

```bash
npm install
npx remotion render src/index.ts Main out/claude-ai-promo.mp4
```

## Important accuracy note

The closing caption says Claude's free plan has usage limits. The video does not claim unlimited free usage.

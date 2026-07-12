Plan

1. Upload the user's photo as a Lovable Asset
   - Run `lovable-assets create --file /mnt/user-uploads/358e83f2-9a3b-4da0-aa56-84b562c36189.jpg --filename tahsin-portrait.jpg > src/assets/tahsin-portrait.jpg.asset.json`.
   - No binary copied into the repo.

2. Replace the placeholder photo in About.tsx
   - File: `src/components/portfolio/About.tsx`
   - Import the new asset JSON and use its `url` as the `<img>` src (alt stays "Portrait of Tahsin Shuborna").
   - Remove the solid `bg-chalk-dim` square. Container becomes a borderless 260px block (slightly larger for presence) with no background, no border, no rounded crop.
   - Blend the photo edges into the `bg-paper` background using a soft radial mask so the subject fades into the page instead of ending on a hard rectangle:
     - `mask-image: radial-gradient(ellipse at center, black 55%, transparent 90%)` (with `-webkit-mask-image` fallback)
     - `img` uses `object-cover` and inherits the mask via the wrapper.
   - Keep the same grid placement, spacing, and the "By the numbers" board card exactly as they are.

3. No other files, colors, fonts, or sections change.

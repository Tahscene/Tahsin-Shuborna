Plan

1. About section photo
   - File: src/components/portfolio/About.tsx
   - Remove the maroon ring and the circular crop.
   - Keep the photo as a plain 220px square: remove `rounded-full`, `border-4`, and the inline `borderColor` style.
   - Leave the placeholder image source and alt text unchanged.

2. Hero contact icon row
   - File: src/components/portfolio/Hero.tsx
   - Add a compact horizontal row of small icon-only links under the hero headline/subheadline, above the scroll prompt.
   - Links:
     - Email → mailto:shujaanat06@gmail.com (Mail icon)
     - LinkedIn → https://linkedin.com/in/tahsin-shuborna-shujaana (Linkedin icon)
     - GitHub → https://github.com/tahscene (Github icon)
     - ORCID → https://orcid.org/0009-0002-0382-5166 (Fingerprint icon)
     - Google Scholar → https://scholar.google.com/citations?user=XPETzMQAAAAJ&hl=en (GraduationCap icon)
   - Style: icons at ~18px, color `text-chalk-dim`, hover `text-accent`, spaced with `gap-4`, each link opens external URLs in a new tab where applicable and uses `rel="noopener noreferrer"`.
   - Keep the Teacher/Analyst toggle and mobile hamburger menu exactly as they are.

No other files or styles will be touched. The existing color palette, fonts, and all other sections remain unchanged.
---
title: "Markdown Test Article"
date: "2026-07-10"
excerpt: "A test article for verifying Markdown rendering, article routing, and local image loading."
tags: ["Next.js", "Markdown", "Blog"]
coverImage: "/images/articles/markdown-test/test-image.svg"
---

# Markdown Test Article

This is a test Markdown article. It exists so the blog can verify local Markdown parsing before real articles are migrated.

## Image Test

The image below is loaded from the `public/images/articles/markdown-test` folder.

![Standalone test image](/images/articles/markdown-test/test-image.svg)

## Markdown Features

- Lists
- **Bold text**
- _Italic text_
- `inline code`

```ts
type Article = {
  title: string;
  date: string;
  tags: string[];
};
```

| Feature | Status |
| --- | --- |
| Markdown parsing | Working |
| Local image rendering | Working |
| Table rendering | Working |

## Next Step

After this test page is stable, the home and archive pages can read article metadata from Markdown files instead of fake article objects.

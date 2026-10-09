# October 2026 batch, vivipm.com new posts

Source of truth for the two new blog posts. They are inserted into
`src/lib/blog-posts.ts` at the top of `STATIC_BLOG_POSTS` by
`content-batch/insert-posts.py`.

Both ship with `hero_image_url: null`. No verified, relevant photo was available
for either topic, and fabricating an Unsplash CDN URL produces a broken image.
Shipping without an image is the better outcome.

## V1

- slug: `security-deposit-smoke-damage-florida`
- question: Can a Florida landlord keep a security deposit for smoke damage?
- links in: nowtb.com remote seller process page, the existing 15/30 day deposit post
- links out: `/blog/security-deposits-florida-15-30-day-rule`, `/blog/florida-landlord-tenant-law-guide`, `/services`, `/rental-analysis`

## V2

- slug: `protect-vacant-rental-squatters-florida`
- question: How do I protect a vacant rental from squatters in Florida?
- links out: `/blog/florida-landlord-tenant-law-guide`, `/services`, `/rental-analysis`, `/blog/preventive-maintenance-saves-florida-rental-owners-thousands`

# Week 5 - Handoff notes (SIS 2 starter design)

Routes (from the prototype):
- posts-desktop: /
- post-desktop: /posts/:id
- 404-desktop: *

Components React files:
- Button: src/components/ui/Button.tsx
- Card: src/components/ui/Card.tsx
- Tag: src/components/ui/Tag.tsx

Button variants prop:
- primary
- secondary

PostCard layout:
- direction: column
- gap: 16px
- padding: 16px
- radius: 8px

Breakpoint change:
- phone: 1 column, stacked header
- desktop: 3 columns, inline header

Tokens (all ten):
- color/primary = #1D4ED8
- color/on-primary = #FFFFFF
- color/text = #1F2937
- color/text-muted = #9CA3AF
- color/surface = #FFFFFF
- color/border = #D1D5DB
- space/2 = 8px
- space/4 = 16px
- space/6 = 24px
- radius/md = 8px
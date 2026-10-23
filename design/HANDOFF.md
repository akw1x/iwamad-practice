# Week 5 - Handoff notes (SIS 2 starter design)

Routes (from the prototype):
- /
- /posts/:id
- /404

Components React files:
- src/components/ui/Button.tsx
- src/components/ui/Card.tsx
- src/components/ui/Tag.tsx
- src/components/PostCard.tsx

Button variants prop:
- primary | secondary | ghost

PostCard layout:
- direction: column, gap: 16px (var(--space-4)), padding: 16px (var(--space-4)), radius: 8px (var(--radius-md))

Breakpoint change:
- phone: 1 column, stacked header; desktop: 2 columns, row header; at 640px

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
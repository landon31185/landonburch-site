---
title: "The Six Objects AppFolio Doesn't Know It Has"
date: 2026-04-10
tags: [OOUX, "Gap Analysis", "Product Design"]
description: "An ORCA pass on AppFolio's rental application flow reveals six discrete objects hiding inside what the product treats as one monolithic process."
showNotes:
  - label: "OOUX — Object-Oriented UX by Sophia Prater"
    url: "https://www.ooux.com"
  - label: "AppFolio rental application flow (screenshot archive)"
    url: "https://www.appfolio.com"
---

Every product has objects it hasn't named yet. They're the things users refer to in support tickets, the nouns that pile up in feature requests, the entities your engineers model in the database but your design team has never drawn a box around.

AppFolio's rental application flow has six of them.

## The object hiding in plain sight: Application Status

When a renter submits an application, AppFolio tracks a status. But "status" is doing enormous work here — it's really three separate objects masquerading as one field:

1. **Screening Report** — the output of the background check, immutable once generated
2. **Condition Set** — the landlord's criteria for approval, mutable and negotiable
3. **Decision** — the landlord's resolved judgment, with a timestamp and an author

These aren't just data points. They have different lifecycles, different owners, and different actions attached to them. Treating them as one "status" field means the UI can't surface the right CTA at the right moment.

## Why this matters as AI enters the stack

When AI learns to generate UI, it generates from objects. If your objects are unclear, your AI-generated interfaces will be incoherent. The designer's job shifts upstream — defining the objects becomes the most leveraged work you can do.

The six objects in AppFolio's application flow aren't a refactor. They're a vocabulary. And vocabulary is where design starts.

## The other five

I'll map the remaining five in the follow-up post. Short version: **Applicant**, **Co-applicant** (different object, different lifecycle), **Unit** (the target of the application, not just a reference), **Invite** (the event that started the application), and **Follow-Up Message** (the comms thread that lives alongside it).

Each one has attributes, actions, and relationships that the current UI collapses into ambiguity.

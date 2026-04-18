---
title: "The Objects Your Product Forgot to Name"
date: 2026-04-10
tags: [OOUX, "Product Design", "AI"]
description: "Most products have six to ten persistent objects hiding inside flows no one has mapped. Naming them is the highest-leverage design work you can do before AI starts generating your UI."
showNotes:
  - label: "OOUX — Object-Oriented UX by Sophia Prater"
    url: "https://www.ooux.com"
  - label: "Cynefin Framework — Dave Snowden"
    url: "https://thecynefin.co"
---

Every product has objects it hasn't named yet. They're the things users refer to in support tickets, the nouns that pile up in feature requests, the entities engineers model in the database but design teams have never drawn a box around.

Most products have six to ten of them. Naming them is the highest-leverage design work you can do right now — especially as AI enters the stack.

## Why unnamed objects create bad UI

When an object goes unnamed, the interface treats it as a property of something else. A status becomes a field. A relationship becomes a toggle. A lifecycle becomes a linear form step.

The result: UX that feels technically correct but experientially wrong. Users can sense the missing concept even when they can't articulate it. They file tickets like "I can't find it" or "it disappeared" — because the object never had a home.

## The six types that get missed most often

**1. Status objects.** The state of something over time. Often collapsed into a single field on a parent object — but it has its own history, its own owner, and its own set of actions. When you realize it's its own object, a whole new set of UI possibilities opens up.

**2. Relationship objects.** The connection between two other objects. Not just a foreign key — a thing with its own attributes. When did it form? Who created it? Can it be paused, transferred, disputed?

**3. Event objects.** Things that happened. Most products log events in a database but never surface them as first-class objects users can interact with. They're invisible until something goes wrong.

**4. Request objects.** A user's intent before it becomes an action. Often modeled as a form submission and then discarded — but the request itself has value. It can be revised, withdrawn, delegated.

**5. Rule objects.** The logic governing how the system behaves. Usually hardcoded. Rarely visible to users. But when you surface rules as objects, users can understand, override, and own the behavior.

**6. Template objects.** The pattern behind an instance. Users create them implicitly ("just make it like last time") but the system has no model for them. Naming the template as a distinct object unlocks a whole category of workflow.

## Why this matters more as AI generates UI

When AI learns to generate interface, it generates from a model of the domain. If your objects are unclear, your AI-generated surfaces will be incoherent — fast.

The designer's job shifts upstream. Defining the objects cleanly, naming them precisely, mapping their relationships — that becomes the most leveraged work in the process. The AI handles the rendering. You handle the model.

That's not a diminished role. It's a more important one.

---
title: "Object Map Explorer"
date: 2026-04-01
description: "An interactive canvas for mapping object relationships. Paste a product description, get back a draft ORCA map with objects, nested elements, calls-to-action, and relationships visualized."
tags: [OOUX, Canvas, "AI Tools", TypeScript]
embedType: canvas
relatedPost: "the-objects-your-product-forgot"
---

## What this does

You describe a product flow in plain language. The tool parses out the likely objects — the persistent nouns that have their own lifecycle, attributes, and actions — and renders them as a connected graph.

It's not a finished tool. It's a thinking aid for early discovery: a way to get a first draft object map on the board before a whiteboard session.

## How it's built

Pure canvas API, no external dependencies. The layout algorithm is a basic force-directed graph. The "parsing" is hand-rolled pattern matching — no LLM in this version, though that's the obvious next step.

## Status

Working prototype. Needs: better collision resolution, export to SVG, mobile touch support.

## Try it

Paste any product description into the input. The tool looks for noun phrases and clusters them by how often they co-occur. Objects with more connections render larger.

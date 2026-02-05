# Back-to-projects lag – debugging steps

## What was added/changed

1. **Render counter** – On `/projects` you’ll see a small amber badge (bottom-right): “Renders: N”. It increments every time the projects page (or its segment) re-renders. Check the console for `[ProjectsRenderCounter] render count: N` as well.

2. **Lottie removed** – The Developer Skills Lottie on the projects page is commented out. If the lag goes away, Lottie (or its interaction with back navigation) is likely the cause.

3. **Delayed content** – The main projects content (hero + project list) is wrapped in a 100ms delay. You’ll see “Loading…” for a moment, then the full page. This tests whether delaying the first paint avoids a bad update cycle when navigating back.

4. **Minimal page** – For the “nuclear” test: open **`/projects?minimal=1`**. You get a minimal page (title + one paragraph, no Lottie, no project cards). Then go to any project, then press the browser **Back** button. If the lag disappears on this minimal page, the cause is in the full page content (Lottie, many ProjectCards, or something in that tree).

---

## How to test and what to report

### Test 1: Render loop

- Go to **Projects** (normal `/projects` or via nav).
- Note the “Renders” number (e.g. 1 or 2).
- Go into a **project** (e.g. MatchFit).
- Press the **browser Back** button to return to `/projects`.
- Watch the **Renders** badge and the console:
  - If the number **keeps increasing** (e.g. 5, 10, 20…) and doesn’t stop → there is a **render loop**. Report: “Counter kept increasing.”
  - If it goes up once or a few times and then **stops** → no clear loop. Report: “Counter stopped at N.”

### Test 2: Lag with current setup (no Lottie + delay)

- With the current code (Lottie off, delay on), do: **Projects → project → Back to projects**.
- Does the **lag still happen** and **never stop**?
  - If **no lag** → either removing Lottie or the delay fixed it. Report: “Lag gone.”
  - If **lag still there** → Report: “Lag still happens.”

### Test 3: Minimal page

- Open **`/projects?minimal=1`** in the address bar.
- Click into any **project**.
- Press the **browser Back** button (you should land on `/projects?minimal=1` again).
- Does the lag happen on this minimal page?
  - If **no lag** → the cause is in the full page content. Report: “No lag on minimal.”
  - If **lag still happens** → the cause is likely at route/layout level (Next.js or layout). Report: “Lag even on minimal.”

---

## Summary to report back

When you switch to Ask mode, share:

1. **Render counter:** Did it keep increasing after Back, or did it stop at a number?
2. **Lag:** With current setup (no Lottie, with delay), did the lag still occur when going Back to projects?
3. **Minimal page:** When testing `/projects?minimal=1` → project → Back, did you get lag or not?

That will narrow down whether we have a render loop, a Lottie/content issue, or a route/layout issue.

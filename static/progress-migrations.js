function migrateTanmonGridState(progress = {}, drafts = {}) {
  const nextProgress = { ...progress };
  const nextDrafts = { ...drafts };

  for (let oldIndex = 1; oldIndex <= 6; oldIndex += 1) {
    const from = `group-6-${oldIndex}`;
    const to = oldIndex === 1 ? "group-7-0" : `group-8-${oldIndex - 2}`;
    if (nextProgress[from] !== undefined) {
      if (nextProgress[to] === undefined) nextProgress[to] = nextProgress[from];
      delete nextProgress[from];
    }
  }

  const oldGroup = drafts["group-6"];
  if (oldGroup && typeof oldGroup === "object" && !Array.isArray(oldGroup)) {
    const group6 = { ...oldGroup };
    const group7 = { ...(drafts["group-7"] || {}) };
    const group8 = { ...(drafts["group-8"] || {}) };
    for (let oldIndex = 1; oldIndex <= 6; oldIndex += 1) {
      const from = `5-${oldIndex}-0`;
      const target = oldIndex === 1 ? group7 : group8;
      const to = oldIndex === 1 ? "6-0-0" : `7-${oldIndex - 2}-0`;
      if (group6[from] !== undefined) {
        if (target[to] === undefined) target[to] = group6[from];
        delete group6[from];
      }
    }
    nextDrafts["group-6"] = group6;
    if (Object.keys(group7).length) nextDrafts["group-7"] = group7;
    if (Object.keys(group8).length) nextDrafts["group-8"] = group8;
  }

  return { progress: nextProgress, drafts: nextDrafts };
}

if (typeof window !== "undefined") window.migrateTanmonGridState = migrateTanmonGridState;
if (typeof module !== "undefined") module.exports = { migrateTanmonGridState };

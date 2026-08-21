const test = require("node:test");
const assert = require("node:assert/strict");
const { migrateTanmonGridState } = require("../static/progress-migrations.js");

test("大問6の旧進捗と下書きを大問6・7・8へ移す", () => {
  const oldProgress = {
    "group-5-0": { correct: true },
    ...Object.fromEntries(Array.from({ length: 7 }, (_, index) => [
      `group-6-${index}`,
      { correct: true, at: `old-${index}` },
    ])),
  };
  const oldDrafts = {
    "group-5": { "4-0-0": ["3", "0"] },
    "group-6": Object.fromEntries(Array.from({ length: 7 }, (_, index) => [
      `5-${index}-0`,
      [String(index)],
    ])),
  };

  const migrated = migrateTanmonGridState(oldProgress, oldDrafts);

  assert.deepEqual(migrated.progress["group-6-0"], { correct: true, at: "old-0" });
  assert.deepEqual(migrated.progress["group-7-0"], { correct: true, at: "old-1" });
  assert.deepEqual(migrated.progress["group-8-4"], { correct: true, at: "old-6" });
  assert.equal(migrated.progress["group-6-1"], undefined);
  assert.deepEqual(migrated.drafts["group-6"], { "5-0-0": ["0"] });
  assert.deepEqual(migrated.drafts["group-7"], { "6-0-0": ["1"] });
  assert.deepEqual(migrated.drafts["group-8"], {
    "7-0-0": ["2"],
    "7-1-0": ["3"],
    "7-2-0": ["4"],
    "7-3-0": ["5"],
    "7-4-0": ["6"],
  });
  assert.deepEqual(migrated.progress["group-5-0"], { correct: true });
  assert.deepEqual(migrated.drafts["group-5"], { "4-0-0": ["3", "0"] });
});

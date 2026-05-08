const fs = require("fs");

const files = [
  "csr-desktop.json",
  "ssr-desktop.json",
  "ssg-desktop.json",
  "csr-mobile.json",
  "ssr-mobile.json",
  "ssg-mobile.json",
];

function parse(file) {
  const report = JSON.parse(fs.readFileSync(`./results/${file}`, "utf8"));
  const audits = report.audits;

  return {
    Performance: report.categories.performance.score * 100,
    TTFB: audits["server-response-time"]?.numericValue?.toFixed(2) || "N/A",
    LCP: audits["largest-contentful-paint"]?.numericValue?.toFixed(2),
    TBT: audits["total-blocking-time"]?.numericValue?.toFixed(2),
    CLS: audits["cumulative-layout-shift"]?.numericValue?.toFixed(2),
  };
}

const results = files.map((file) => ({
  File: file,
  ...parse(file),
}));

console.table(results);
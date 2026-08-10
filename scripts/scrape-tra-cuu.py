#!/usr/bin/env python3
"""Scrape engine lookup data from thietkeabc.com/tra-cuu into SQLite + JSON.

Usage: python3 scripts/scrape-tra-cuu.py
"""
import json
import re
import sqlite3
import time
import urllib.request
from pathlib import Path

BASE_URL = "https://thietkeabc.com/tra-cuu?page={}"
TOTAL_PAGES = 36
ROOT = Path(__file__).resolve().parent.parent
DB_PATH = ROOT / "data" / "dong-co.sqlite3"
JSON_PATH = ROOT / "src" / "data" / "vi" / "dong-co.json"

ROW_RE = re.compile(
    r"<tr>\s*"
    r'<td class="text-center">(.*?)</td>\s*'
    r'<td class="text-center">(.*?)</td>\s*'
    r'<td class="text-center">(.*?)</td>\s*'
    r'<td class="text-center">(.*?)</td>\s*'
    r'<td class="text-center">(.*?)</td>\s*'
    r'<td class="text-center">(.*?)</td>',
    re.S,
)


def clean(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def fetch(page: int) -> str:
    req = urllib.request.Request(
        BASE_URL.format(page), headers={"User-Agent": "Mozilla/5.0"}
    )
    with urllib.request.urlopen(req, timeout=20) as resp:
        return resp.read().decode("utf-8", errors="replace")


def parse(html: str):
    for hang, hieu_may, ps, hp, kw, rpm in ROW_RE.findall(html):
        yield {
            "hang": clean(hang),
            "hieu_may": clean(hieu_may),
            "ps": clean(ps),
            "hp": clean(hp),
            "kw": clean(kw),
            "rpm": clean(rpm),
        }


def main():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    JSON_PATH.parent.mkdir(parents=True, exist_ok=True)

    conn = sqlite3.connect(DB_PATH)
    conn.execute("DROP TABLE IF EXISTS dong_co")
    conn.execute(
        """
        CREATE TABLE dong_co (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            hang TEXT,
            hieu_may TEXT,
            ps TEXT,
            hp TEXT,
            kw TEXT,
            rpm TEXT
        )
        """
    )

    all_rows = []
    seen = set()
    for page in range(1, TOTAL_PAGES + 1):
        html = fetch(page)
        page_rows = list(parse(html))
        print(f"page {page}: {len(page_rows)} rows")
        for row in page_rows:
            key = (row["hang"], row["hieu_may"], row["ps"], row["hp"], row["kw"], row["rpm"])
            if key in seen:
                continue
            seen.add(key)
            all_rows.append(row)
        time.sleep(0.3)

    conn.executemany(
        "INSERT INTO dong_co (hang, hieu_may, ps, hp, kw, rpm) VALUES (:hang, :hieu_may, :ps, :hp, :kw, :rpm)",
        all_rows,
    )
    conn.commit()
    conn.close()

    JSON_PATH.write_text(json.dumps(all_rows, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Total: {len(all_rows)} rows -> {DB_PATH} & {JSON_PATH}")


if __name__ == "__main__":
    main()

"use client";

import { useState } from "react";

export type ServiceGroup = { label?: string; items: string[] };

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm text-white">
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * What a service includes, as tags. When a service has several audiences
 * (e.g. Pessoa Física / Jurídica), they become tabs so only one list shows at
 * a time and the card keeps the same size as the others.
 */
export function ServiceGroups({ groups }: { groups: ServiceGroup[] }) {
  const [active, setActive] = useState(0);

  if (groups.length === 1) {
    const [g] = groups;
    return (
      <div>
        {g.label ? <p className="mb-3 text-xs font-medium uppercase tracking-[1.5px] text-lime">{g.label}</p> : null}
        <Tags items={g.items} />
      </div>
    );
  }

  return (
    <div>
      <div role="tablist" className="mb-4 inline-flex rounded-full bg-black/20 p-1">
        {groups.map((g, i) => (
          <button
            key={g.label}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[1.2px] transition-colors ${
              active === i ? "bg-lime text-brand" : "text-white/70 hover:text-white"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        <Tags items={groups[active].items} />
      </div>
    </div>
  );
}

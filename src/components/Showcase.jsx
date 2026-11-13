import React from "react";
import { ArrowUpRight, Check, Command, MousePointer2 } from "lucide-react";

/**
 * Explain the product workflow with a visual task-board illustration.
 */
export default function Showcase() {
  return (
    <section className="section container showcase-section" id="showcase">
      <div className="showcase-copy" data-reveal><span className="eyebrow">A CLEARER WAY TO WORK</span><h2>Big picture thinking.<br /><span className="gradient-text">Beautifully organized.</span></h2><p>Give every idea a place to grow. Nexora keeps your team focused on the work that moves things forward, without adding another layer of complexity.</p><ul className="check-list"><li><Check size={16} /> Keep projects and priorities connected</li><li><Check size={16} /> See progress without chasing updates</li><li><Check size={16} /> Make the next step obvious for everyone</li></ul><a className="text-link" href="#pricing">Discover the workflow <ArrowUpRight size={16} /></a></div>
      <div className="kanban-window" data-reveal><div className="kanban-top"><div className="window-dots"><i /><i /><i /></div><span>PRODUCT / ROADMAP</span><div className="kanban-top__right"><Command size={13} /> K</div></div><div className="kanban-content"><div className="kanban-title"><div><small>YOUR WORKSPACE</small><h3>Product roadmap</h3></div><button className="mini-button">+ Add task</button></div><div className="kanban-columns">{[{title:"Up next", count:"03", cards:[["Website refresh","Design","violet"],["User interviews","Research","blue"]]},{title:"In progress",count:"02",cards:[["Mobile experience","Product","pink"],["Brand direction","Design","violet"]]},{title:"Completed",count:"04",cards:[["Core dashboard","Product","blue"],["Design system","Design","pink"]]}].map((column) => <div className="kanban-column" key={column.title}><div className="kanban-column__heading"><span>{column.title}</span><small>{column.count}</small></div>{column.cards.map(([title, tag, color]) => <div className="task-card" key={title}><span className={`task-tag task-tag--${color}`}>{tag}</span><strong>{title}</strong><div className="task-card__bottom"><div className="tiny-avatars"><i>A</i><i>J</i></div><span>↗</span></div></div>)}</div>)}</div></div><div className="cursor-bubble"><MousePointer2 size={14} /> Alex moved a task</div></div>
    </section>
  );
}

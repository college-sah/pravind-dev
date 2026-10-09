import React, { useState } from 'react';
import { X, Play, ThumbsUp, Search, ShoppingCart, Plus, Minus, Trash2, CheckCircle2, Circle, Edit2, Users, Github } from 'lucide-react';
export const LiveDemoModal = ({
  project,
  onClose
}) => {
  if (!project) return null;
  return <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090d1f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0f172a] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            </div>
            <div className="flex items-center gap-2 pl-2">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                Live Interactive Sandbox
              </span>
              <h3 className="text-sm font-semibold text-white truncate">{project.title}</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors">
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer" aria-label="Close demo">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {project.id === 'youtube-clone' && <YouTubeCloneDemo />}
          {project.id === 'shopping-cart' && <ShoppingCartDemo />}
          {project.id === 'react-todo-app' && <TodoAppDemo />}
          {project.id === 'viperteam7-hackathon' && <HackathonDemo />}
        </div>
      </div>
    </div>;
};

// 1. Interactive YouTube Clone Simulator
function YouTubeCloneDemo() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1240);
  const categories = ['All', 'React.js', 'Frontend', 'JavaScript', 'CSS', 'Tutorials'];
  const initialVideos = [{
    id: 'v1',
    title: 'Building Modern React 19 Applications with Tailwind CSS',
    channel: 'Pravind Dev Tech',
    views: '45K views',
    time: '3 days ago',
    category: 'React.js',
    duration: '18:42',
    accentColor: 'from-blue-600 to-cyan-500'
  }, {
    id: 'v2',
    title: 'Mastering JavaScript Async/Await & REST APIs in 2026',
    channel: 'Frontend Masters',
    views: '128K views',
    time: '1 week ago',
    category: 'JavaScript',
    duration: '24:10',
    accentColor: 'from-amber-600 to-yellow-500'
  }, {
    id: 'v3',
    title: 'Complete Tailwind CSS Responsive Design Breakdown',
    channel: 'CSS Wizards',
    views: '89K views',
    time: '2 weeks ago',
    category: 'CSS',
    duration: '14:15',
    accentColor: 'from-teal-600 to-emerald-500'
  }, {
    id: 'v4',
    title: 'Component Architecture & Custom React Hooks Guide',
    channel: 'React Codebase',
    views: '32K views',
    time: '1 month ago',
    category: 'React.js',
    duration: '19:05',
    accentColor: 'from-indigo-600 to-purple-500'
  }];
  const filteredVideos = initialVideos.filter(v => {
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <div className="space-y-5">
      {/* Search and Category Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search mock videos (e.g. React, CSS)..." className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400" />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map(cat => <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${selectedCategory === cat ? 'bg-red-600 text-white font-semibold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
              {cat}
            </button>)}
        </div>
      </div>

      {/* Active Video Player View (if video selected) */}
      {activeVideo && <div className="bg-[#0b1022] border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="relative aspect-video w-full rounded-lg bg-black overflow-hidden flex items-center justify-center border border-slate-800">
            <div className={`absolute inset-0 bg-gradient-to-tr ${activeVideo.accentColor} opacity-20`}></div>
            <div className="relative text-center p-6 space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl shadow-red-600/40 animate-pulse">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <p className="text-white font-medium text-sm sm:text-base">{activeVideo.title}</p>
              <p className="text-xs text-slate-400 font-mono">Simulated React Video Player Component</p>
            </div>
            <button onClick={() => setActiveVideo(null)} className="absolute top-3 right-3 bg-black/60 hover:bg-black p-1.5 rounded-md text-white text-xs">
              Close Player
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white">{activeVideo.title}</h4>
              <p className="text-xs text-slate-400">
                {activeVideo.channel} · {activeVideo.views} · {activeVideo.time}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => {
            setLiked(!liked);
            setLikeCount(liked ? likeCount - 1 : likeCount + 1);
          }} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${liked ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{likeCount.toLocaleString()}</span>
              </button>
              <button className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>}

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredVideos.map(video => <div key={video.id} onClick={() => setActiveVideo(video)} className="group cursor-pointer rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 overflow-hidden transition-all hover:-translate-y-0.5">
            <div className={`relative aspect-video bg-gradient-to-tr ${video.accentColor} p-4 flex flex-col justify-between`}>
              <div className="self-end bg-black/75 px-1.5 py-0.5 rounded text-[10px] font-mono text-white">
                {video.duration}
              </div>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/50 group-hover:bg-red-600 flex items-center justify-center text-white transition-colors">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
              <span className="text-[11px] text-white/80 font-medium">Click to Play Demo</span>
            </div>

            <div className="p-3.5 space-y-1">
              <h4 className="text-xs sm:text-sm font-semibold text-white line-clamp-2 group-hover:text-cyan-400 transition-colors">
                {video.title}
              </h4>
              <p className="text-xs text-slate-400">{video.channel}</p>
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span>{video.views}</span>
                <span>·</span>
                <span>{video.time}</span>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}

// 2. Interactive Shopping Cart Simulator
function ShoppingCartDemo() {
  const [cart, setCart] = useState({
    'p1': 1
  });
  const [coupon, setCoupon] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const products = [{
    id: 'p1',
    name: 'Keychron Mechanical Keyboard',
    price: 85,
    category: 'Hardware',
    desc: 'Hot-swappable switches, wireless RGB'
  }, {
    id: 'p2',
    name: 'Ultra-wide 34" Curved Monitor',
    price: 340,
    category: 'Displays',
    desc: '144Hz IPS display for coding ergonomics'
  }, {
    id: 'p3',
    name: 'React Developer Hoodie',
    price: 45,
    category: 'Apparel',
    desc: '100% premium cotton, embroidered logo'
  }, {
    id: 'p4',
    name: 'Desk Leather Mousepad',
    price: 25,
    category: 'Accessories',
    desc: 'Water-resistant, non-slip base'
  }];
  const addToCart = id => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };
  const updateQuantity = (id, delta) => {
    setCart(prev => {
      const nextCount = (prev[id] || 0) + delta;
      if (nextCount <= 0) {
        const copy = {
          ...prev
        };
        delete copy[id];
        return copy;
      }
      return {
        ...prev,
        [id]: nextCount
      };
    });
  };
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const rawSubtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find(prod => prod.id === id);
    return sum + (p ? p.price * qty : 0);
  }, 0);
  const discountAmount = rawSubtotal * appliedDiscount;
  const finalTotal = rawSubtotal - discountAmount;
  const handleApplyCoupon = e => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'INTERN2026') {
      setAppliedDiscount(0.15);
    } else {
      setAppliedDiscount(0);
    }
  };
  return <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* Product List */}
      <div className="lg:col-span-7 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <h4 className="text-sm font-semibold text-white">Available Products</h4>
          <span className="text-xs text-slate-400">Click Add to test React state</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {products.map(prod => {
          const countInCart = cart[prod.id] || 0;
          return <div key={prod.id} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{prod.category}</span>
                    <span className="font-mono text-cyan-400 font-bold">${prod.price}</span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-semibold text-white mt-1">{prod.name}</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{prod.desc}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  {countInCart > 0 ? <span className="text-xs text-emerald-400 font-medium">In Cart ({countInCart})</span> : <span className="text-xs text-slate-500">Not added</span>}
                  <button onClick={() => addToCart(prod.id)} className="px-2.5 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-xs font-medium cursor-pointer transition-colors">
                    + Add
                  </button>
                </div>
              </div>;
        })}
        </div>
      </div>

      {/* Cart Summary Drawer */}
      <div className="lg:col-span-5 bg-[#0b1022] border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-cyan-400" />
              <h4 className="text-sm font-semibold text-white">Cart State</h4>
            </div>
            <span className="text-xs font-mono bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded">
              {totalItems} items
            </span>
          </div>

          <div className="py-3 space-y-2.5 max-h-52 overflow-y-auto">
            {Object.keys(cart).length === 0 ? <div className="text-center py-6 text-slate-500 text-xs">
                Your cart is empty. Add products from the left!
              </div> : Object.entries(cart).map(([id, qty]) => {
            const item = products.find(p => p.id === id);
            if (!item) return null;
            return <div key={id} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                    <div className="flex-1 pr-2">
                      <p className="font-medium text-white truncate">{item.name}</p>
                      <p className="text-slate-400 font-mono">${item.price} each</p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button onClick={() => updateQuantity(id, -1)} className="p-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700" title="Decrease">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-mono text-white">{qty}</span>
                      <button onClick={() => updateQuantity(id, 1)} className="p-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700" title="Increase">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => updateQuantity(id, -qty)} className="p-1 rounded text-rose-400 hover:bg-rose-950/40 ml-1" title="Remove">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>;
          })}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 space-y-2.5">
          {/* Promo code form */}
          <form onSubmit={handleApplyCoupon} className="flex gap-2">
            <input type="text" value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Code (try INTERN2026)" className="flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-xs text-white uppercase placeholder-slate-500 focus:outline-none focus:border-cyan-400" />
            <button type="submit" className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 rounded font-medium">
              Apply
            </button>
          </form>

          {appliedDiscount > 0 && <div className="flex items-center justify-between text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 p-1.5 rounded">
              <span>Coupon applied (15% off)</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>}

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Subtotal</span>
            <span className="font-mono text-white">${rawSubtotal.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between text-sm font-semibold text-white pt-1 border-t border-slate-800/80">
            <span>Total</span>
            <span className="font-mono text-cyan-400 text-base">${finalTotal.toFixed(2)}</span>
          </div>

          <button onClick={() => alert('Simulated checkout complete! React state updated successfully.')} disabled={totalItems === 0} className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-semibold rounded-lg text-xs transition-all shadow-md">
            Checkout ({totalItems} items)
          </button>
        </div>
      </div>
    </div>;
}

// 3. Interactive React Todo App Simulator
function TodoAppDemo() {
  const [todos, setTodos] = useState([{
    id: 1,
    text: 'Study React.js useEffect and custom hooks',
    completed: true,
    priority: 'High'
  }, {
    id: 2,
    text: 'Build interactive YouTube Clone video grid',
    completed: true,
    priority: 'High'
  }, {
    id: 3,
    text: 'Prepare for Frontend Developer Internship interviews',
    completed: false,
    priority: 'High'
  }, {
    id: 4,
    text: 'Review Tailwind CSS responsive grid utilities',
    completed: false,
    priority: 'Normal'
  }]);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const handleAdd = e => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setTodos([...todos, {
      id: Date.now(),
      text: inputText.trim(),
      completed: false,
      priority: 'Normal'
    }]);
    setInputText('');
  };
  const toggleTodo = id => {
    setTodos(todos.map(t => t.id === id ? {
      ...t,
      completed: !t.completed
    } : t));
  };
  const deleteTodo = id => {
    setTodos(todos.filter(t => t.id !== id));
  };
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };
  const saveEdit = id => {
    setTodos(todos.map(t => t.id === id ? {
      ...t,
      text: editText.trim() || t.text
    } : t));
    setEditingId(null);
  };
  const clearCompleted = () => {
    setTodos(todos.filter(t => !t.completed));
  };
  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });
  const remainingCount = todos.filter(t => !t.completed).length;
  return <div className="max-w-xl mx-auto space-y-4">
      {/* Input form */}
      <form onSubmit={handleAdd} className="flex gap-2">
        <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} placeholder="Add a new task (e.g. Learn React Router)..." className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400" />
        <button type="submit" className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs sm:text-sm rounded-lg flex items-center gap-1.5 cursor-pointer transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </form>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-1">
          {['all', 'active', 'completed'].map(tab => <button key={tab} onClick={() => setFilter(tab)} className={`px-3 py-1 rounded-md capitalize font-medium transition-colors ${filter === tab ? 'bg-slate-800 text-cyan-300 font-semibold border border-slate-700' : 'text-slate-400 hover:text-white'}`}>
              {tab}
            </button>)}
        </div>

        <span className="text-slate-400 font-mono">
          {remainingCount} {remainingCount === 1 ? 'task' : 'tasks'} remaining
        </span>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {filteredTodos.length === 0 ? <div className="text-center py-8 text-slate-500 text-xs sm:text-sm">
            No tasks found in this view.
          </div> : filteredTodos.map(todo => <div key={todo.id} className={`flex items-center justify-between p-3 rounded-lg border transition-all ${todo.completed ? 'bg-slate-950/40 border-slate-800/50 opacity-75' : 'bg-slate-900/80 border-slate-800'}`}>
              <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
                <button onClick={() => toggleTodo(todo.id)} className="cursor-pointer text-slate-400 hover:text-cyan-400">
                  {todo.completed ? <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950/50" /> : <Circle className="w-5 h-5" />}
                </button>

                {editingId === todo.id ? <div className="flex items-center gap-2 flex-1">
                    <input type="text" value={editText} onChange={e => setEditText(e.target.value)} onKeyDown={e => {
              if (e.key === 'Enter') saveEdit(todo.id);
              if (e.key === 'Escape') setEditingId(null);
            }} className="flex-1 px-2 py-1 bg-slate-950 border border-cyan-500 rounded text-xs text-white focus:outline-none" autoFocus />
                    <button onClick={() => saveEdit(todo.id)} className="px-2 py-1 bg-cyan-600 text-white rounded text-xs">
                      Save
                    </button>
                  </div> : <span className={`text-xs sm:text-sm truncate select-none ${todo.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                    {todo.text}
                  </span>}
              </div>

              {editingId !== todo.id && <div className="flex items-center gap-1">
                  <button onClick={() => startEdit(todo.id, todo.text)} className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800" title="Edit task">
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => deleteTodo(todo.id)} className="p-1.5 text-slate-400 hover:text-rose-400 rounded hover:bg-rose-950/40" title="Delete task">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>}
            </div>)}
      </div>

      {/* Clear completed button */}
      {todos.some(t => t.completed) && <div className="pt-2 flex justify-end">
          <button onClick={clearCompleted} className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4">
            Clear completed tasks
          </button>
        </div>}
    </div>;
}

// 4. Interactive Hackathon Team Showcase Simulator
function HackathonDemo() {
  return <div className="space-y-4">
      <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/60 to-cyan-950/40 border border-cyan-800/50">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
          <Users className="w-4 h-4" />
          <span>ViperTeam7 — Hackathon Frontend Contribution</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300">
          In this collaborative hackathon sprint, Pravind was responsible for architecting the frontend user interface, responsive layout grid, and interactive JavaScript features under tight sprint deadlines.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-[11px] text-cyan-400 font-mono">Role</span>
          <h5 className="text-sm font-semibold text-white">Frontend UI Developer</h5>
          <p className="text-xs text-slate-400">Structured layout, DOM events, and styling</p>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-[11px] text-cyan-400 font-mono">Workflow</span>
          <h5 className="text-sm font-semibold text-white">Git & GitHub Teamwork</h5>
          <p className="text-xs text-slate-400">Branching, merge resolutions, PRs</p>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-[11px] text-cyan-400 font-mono">Tech Stack</span>
          <h5 className="text-sm font-semibold text-white">HTML, CSS, JS</h5>
          <p className="text-xs text-slate-400">Zero-dependency responsive layout</p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-[#0b1022] border border-slate-800 space-y-2">
        <h5 className="text-xs font-semibold text-white uppercase tracking-wider">
          Key Hackathon Achievements
        </h5>
        <ul className="text-xs text-slate-300 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Delivered a fully responsive landing page prototype in under 24 hours of hacking.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Collaborated seamlessly with backend peers to connect mock data payloads into clean UI cards.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Successfully presented the prototype to the evaluation panel with zero UI breakage.</span>
          </li>
        </ul>
      </div>
    </div>;
}
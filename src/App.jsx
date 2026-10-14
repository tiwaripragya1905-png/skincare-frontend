import { useState } from "react";
import "./App.css";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

function App() {
  const [page, setPage] = useState("login");
  const [name,setName] = useState("Pragya");
  const [skinType, setSkinType] = useState("Dry");
  const [ageGroup, setAgeGroup] = useState("18-25");
  const [concerns, setConcerns] = useState(["Acne", "Dark Spots"]);
  const [allergies, setAllergies] = useState("None");
  const [sensitivity, setSensitivity] = useState("Medium");
  const [waterIntake, setWaterIntake] = useState(2.5);
  const [sleepHours, setSleepHours] = useState(7);
  const [sleepQuality, setSleepQuality] = useState("Good");
  const [hydration, setHydration] = useState(75);
  const [routineAdh, setRoutineAdh] = useState(85);
  const [score, setScore] = useState(77.9);
  const [selected, setSelected] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
 const [categoryFilter, setCategoryFilter] = useState(null);
  const [checklist, setChecklist] = useState({m1:true, m2:true, m3:false, e1:true, e2:false, w1:false});
  const [adminTab, setAdminTab] = useState('dashboard');
  const [consultTab, setConsultTab] = useState('overview');
  const [dermTab, setDermTab] = useState('overview');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('consultant');
  const exportPDF = () => { const doc = new jsPDF(); doc.text(`AI Skin Intelligence - ${name} - Score ${score}/100`, 20, 20); doc.text(`Skin Type: ${skinType} | Concerns: ${concerns.join(', ')} | Age: ${ageGroup}`, 20, 30); doc.text(`Weighted Model: 35% Condition, 20% Lifestyle, 15% Sleep, 20% Routine, 10% Hydration`, 20, 40); doc.text(`Milestone 4 - Fully Deployed - End-to-End Workflow`, 20, 50); doc.save(`${name}_M4_Final_Report.pdf`); };
  const exportExcel = () => { const wb = XLSX.utils.book_new(); const ws = XLSX.utils.json_to_sheet([{Name:name, SkinType:skinType, Age:ageGroup, Concerns:concerns.join(', '), Score:score, Adherence:routineAdh, Water:waterIntake, Sleep:sleepHours}]); XLSX.utils.book_append_sheet(wb, ws, "M4"); XLSX.writeFile(wb, `${name}_M4_Report.xlsx`); };

  const L = ({a, children, onClick}) => (<button onClick={onClick} style={{width:'100%', textAlign:'left', padding:'11px 12px', borderRadius:'12px', border: a?'1px solid #0f172a':'1px solid transparent', background: a?'#0f172a':'transparent', color: a?'white':'#334155', fontSize:'13px', fontWeight: a?'600':'500', marginTop:'4px', cursor:'pointer', display:'flex', justifyContent:'space-between'}}>{children}</button>);

  const Sidebar = () => (
    <div style={{width:'275px', background:'white', borderRight:'1px solid #e5e7eb', padding:'20px', minHeight:'100vh', position:'sticky', top:0, overflowY:'auto'}}>
      <div style={{display:'flex', gap:'10px', alignItems:'center'}}><div style={{width:'40px', height:'40px', background:'#0f172a', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>🌿</div><div><h2 style={{margin:0, fontSize:'16px', fontWeight:'800'}}>SkinAI</h2><p style={{margin:0, fontSize:'9px', color:'#64748b'}}>M4 FINAL • {name}</p></div></div>
      <div style={{marginTop:'16px', background:'#0f172a', color:'white', padding:'12px', borderRadius:'14px', display:'flex', gap:'10px', alignItems:'center'}}><div style={{width:'32px', height:'32px', background:'white', color:'#0f172a', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'800'}}>P</div><div><p style={{margin:0, fontSize:'13px', fontWeight:'700'}}>{name}</p><p style={{margin:0, fontSize:'10px', opacity:0.7}}>Verified • {score}/100 • {skinType}</p></div></div>

      <p style={{fontSize:'8px', letterSpacing:'1.5px', color:'#94a3b8', marginTop:'18px', fontWeight:'700'}}>MILESTONE 1 - CORE</p>
      <L a={page==='dashboard'} onClick={()=>setPage('dashboard')}>🏠 User Dashboard <span style={{background:'#22c55e', color:'white', fontSize:'7px', padding:'2px 6px', borderRadius:'10px'}}>LIVE</span></L>
      <L a={page==='skin-profile'} onClick={()=>setPage('skin-profile')}>👤 Skin Profile Management</L>
      <L a={page==='lifestyle'} onClick={()=>setPage('lifestyle')}>💧 Lifestyle & Hydration</L>
      <L a={page==='sleep'} onClick={()=>setPage('sleep')}>😴 Sleep Pattern Tracking</L>

      <p style={{fontSize:'8px', letterSpacing:'1.5px', color:'#94a3b8', marginTop:'16px', fontWeight:'700'}}>MILESTONE 2 - ASSESSMENT</p>
      <L a={page==='assessment'} onClick={()=>setPage('assessment')}>📋 Skin Assessment Engine</L>
      <L a={page==='routine'} onClick={()=>setPage('routine')}>🌸 Routine Generator</L>
      <L a={page==='seasonal'} onClick={()=>setPage('seasonal')}>🌦️ Seasonal Planner</L>

      <p style={{fontSize:'8px', letterSpacing:'1.5px', color:'#94a3b8', marginTop:'16px', fontWeight:'700'}}>MILESTONE 3 - PRODUCT & PROGRESS</p>
      <L a={page==='ingredients'} onClick={()=>setPage('ingredients')}>🧪 Ingredient Intelligence</L>
      <L a={page==='products'} onClick={()=>setPage('products')}>🛍️ Product Recommendation 99%</L>
      <L a={page==='progress'} onClick={()=>setPage('progress')}>📈 Progress Tracking</L>
      <L a={page==='analytics'} onClick={()=>setPage('analytics')}>📊 Analytics & Insights</L>
      <L a={page==='checklist'} onClick={()=>setPage('checklist')}>✅ Daily Checklist</L>

      <p style={{fontSize:'8px', letterSpacing:'1.5px', color:'#94a3b8', marginTop:'16px', fontWeight:'700'}}>MILESTONE 4 - EXECUTIVE</p>
      <L a={page==='executive-dashboard'} onClick={()=>setPage('executive-dashboard')}>👑 Admin Dashboard</L>
      <L a={page==='consultant-dashboard'} onClick={()=>setPage('consultant-dashboard')}>👩‍⚕️ Consultant Dashboard</L>
      <L a={page==='clinical-dashboard'} onClick={()=>setPage('clinical-dashboard')}>🩺 Dermatologist Dashboard</L>
      <L a={page==='reports'} onClick={()=>setPage('reports')}>📑 Reports & Export</L>
      <L a={page==='testing'} onClick={()=>setPage('testing')}>🧪 Testing & Validation</L>
      <button onClick={()=>{
    setEmail('');
    setPassword('');
    setPage('login');
  }} style={{
    marginTop:'30px',
    width:'100%',
    padding:'11px',
    background:'#ef4444',
    color:'white',
    border:'none',
    borderRadius:'10px',
    fontWeight:'800',
    cursor:'pointer'
  }}>
    Logout
  </button>
    </div>
  );
  const Wrap = ({children}) => (<div style={{display:'flex', minHeight:'100vh', background:'#f8fafc'}}><Sidebar /><div style={{flex:1, padding:'28px'}}>{children}</div></div>);
  const Card = ({children, dark}) => (<div style={{background: dark?'#0f172a':'white', color: dark?'white':'#0f172a', border:'1px solid #e2e8f0', borderRadius:'18px', padding:'22px', boxShadow:'0 4px 12px rgba(0,0,0,0.03)'}}>{children}</div>);
    if(page==='login'){
    return (
      <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#0f172a'}}>
        <div style={{background:'white', width:'360px', borderRadius:'18px', padding:'28px'}}>
          <h2 style={{textAlign:'center', margin:0}}>Welcome Back</h2>
          <p style={{textAlign:'center', fontSize:'11px', color:'#64748b', marginTop:'6px'}}>Login to SkinAI</p>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="pragya@gmail.com" style={{width:'100%', padding:'11px', borderRadius:'10px', border:'1px solid #e2e8f0', marginTop:'16px'}} />
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" style={{width:'100%', padding:'11px', borderRadius:'10px', border:'1px solid #e2e8f0', marginTop:'10px'}} />
          <button onClick={()=>{ if(!email||!password){alert('Email Password daalo'); return;} setName(email.split('@')[0]||'Pragya'); setPage('dashboard'); }} style={{width:'100%', padding:'12px', background:'#0f172a', color:'white', border:'none', borderRadius:'10px', marginTop:'12px', cursor:'pointer', fontWeight:'700'}}>Login → Dashboard</button>
          <p style={{textAlign:'center', marginTop:'12px', fontSize:'11px'}}>No account? <span onClick={()=>setPage('register')} style={{color:'#7c3aed', fontWeight:'700', cursor:'pointer'}}>Register</span></p>
        </div>
      </div>
    );
  }

  if(page==='register'){
    return (
      <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#064e3b'}}>
        <div style={{background:'white', width:'360px', borderRadius:'18px', padding:'28px'}}>
          <h2 style={{textAlign:'center', margin:0}}>Create Account</h2>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" style={{width:'100%', padding:'10px', borderRadius:'9px', border:'1px solid #e2e8f0', marginTop:'14px'}} />
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{width:'100%', padding:'10px', borderRadius:'9px', border:'1px solid #e2e8f0', marginTop:'10px'}} />
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" style={{width:'100%', padding:'10px', borderRadius:'9px', border:'1px solid #e2e8f0', marginTop:'10px'}} />
          <button onClick={()=>setPage('dashboard')} style={{width:'100%', padding:'11px', background:'#064e3b', color:'white', border:'none', borderRadius:'10px', marginTop:'12px', cursor:'pointer', fontWeight:'800'}}>Create → Dashboard</button>
          <p style={{textAlign:'center', marginTop:'10px', fontSize:'11px'}}>Have account? <span onClick={()=>setPage('login')} style={{color:'green', fontWeight:'700', cursor:'pointer'}}>Login</span></p>
        </div>
      </div>
    );
  }
  if(page==='dashboard'){ return (<Wrap>
    <div style={{display:'flex', justifyContent:'space-between'}}><div><h1 style={{margin:0, fontSize:'30px', fontWeight:'800'}}>Welcome, {name} ✨</h1><p style={{margin:'6px 0 0', color:'#64748b', fontSize:'13px'}}>AI Skin Intelligence • Weighted 35/20/15/20/10 • M4 Fully Deployed</p></div><span style={{background:'#dcfce7', color:'#166534', padding:'8px 14px', borderRadius:'20px', fontSize:'11px', height:'fit-content'}}>● System READY • M4 Final</span></div>
    <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'14px', marginTop:'24px'}}>
      <Card><p style={{fontSize:'10px', color:'#94a3b8', margin:0}}>SKIN HEALTH SCORE</p><h1 style={{margin:'8px 0 0'}}>{score}/100</h1><div style={{height:'6px', background:'#f1f5f9', borderRadius:'10px', marginTop:'12px'}}><div style={{width:`${score}%`, height:'100%', background:'#0f172a', borderRadius:'10px'}}></div></div><p style={{fontSize:'10px', color:'#7c3aed', marginTop:'8px', cursor:'pointer'}} onClick={()=>setPage('assessment')}>View breakdown →</p></Card>
      <Card><p style={{fontSize:'10px', color:'#94a3b8', margin:0}}>SKIN PROFILE</p><h2 style={{margin:'8px 0 0'}}>{skinType}</h2><p style={{fontSize:'12px', margin:'4px 0 0'}}>{ageGroup} • {sensitivity}</p><p style={{fontSize:'10px', color:'#7c3aed', marginTop:'8px', cursor:'pointer'}} onClick={()=>setPage('skin-profile')}>Manage profile →</p></Card>
      <Card><p style={{fontSize:'10px', color:'#94a3b8', margin:0}}>ROUTINE ADHERENCE</p><h2 style={{margin:'8px 0 0', color:'#059669'}}>{routineAdh}%</h2><p style={{fontSize:'11px', margin:'4px 0 0'}}>Target 85% • On Track</p></Card>
      <Card><p style={{fontSize:'10px', color:'#94a3b8', margin:0}}>IMPROVEMENT</p><h2 style={{margin:'8px 0 0', color:'#d97706'}}>+18</h2><p style={{fontSize:'11px', margin:'4px 0 0'}}>60 → {score} • Before/After</p></Card>
    </div>
    <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:'14px', marginTop:'14px'}}>
      <Card><h3 style={{marginTop:0}}>📈 Progress Trend • Click to see Progress page</h3><div style={{display:'flex', gap:'12px', alignItems:'end', marginTop:'18px', height:'100px'}}>{[{d:"Apr 01", s:60}, {d:"Apr 15", s:68}, {d:"May 01", s:74}, {d:"May 20", s:77.9}].map((p,i)=>(<div key={i} style={{flex:1, cursor:'pointer'}} onClick={()=>setPage('progress')}><div style={{background:'#f1f5f9', textAlign:'center', padding:'6px', borderRadius:'8px 8px 0 0', fontWeight:'700'}}>{p.s}</div><div style={{background:'#0f172a', height:`${p.s}%`, borderRadius:'0 0 8px 8px', opacity:0.3+i*0.2}}></div><p style={{textAlign:'center', fontSize:'10px', marginTop:'6px'}}>{p.d}</p></div>))}</div></Card>
      <Card><h3 style={{marginTop:0}}>🔔 Notifications & Reminders</h3><div style={{display:'flex', flexDirection:'column', gap:'8px', marginTop:'12px'}}>
        <div onClick={()=>setPage('routine')} style={{background:'#fef3c7', padding:'12px', borderRadius:'10px', cursor:'pointer'}}><b style={{fontSize:'12px'}}>⏰ Routine Reminder</b><p style={{margin:'2px 0 0', fontSize:'11px'}}>Morning routine pending → Click</p></div>
        <div onClick={()=>setPage('lifestyle')} style={{background:'#dbeafe', padding:'12px', borderRadius:'10px', cursor:'pointer'}}><b style={{fontSize:'12px'}}>💧 Hydration Reminder</b><p style={{margin:'2px 0 0', fontSize:'11px'}}>{waterIntake}L / 3L → Click</p></div>
        <div onClick={()=>setPage('sleep')} style={{background:'#dcfce7', padding:'12px', borderRadius:'10px', cursor:'pointer'}}><b style={{fontSize:'12px'}}>😴 Sleep Reminder</b><p style={{margin:'2px 0 0', fontSize:'11px'}}>{sleepHours}h completed → Click</p></div>
      </div></Card>
    </div>
  </Wrap>); }

    if(page==='skin-profile'){
    const skinTypeOptions = [
      {name:"Normal", icon:"✨", desc:"Balanced, healthy", color:"#22c55e"},
      {name:"Oily", icon:"💧", desc:"Shiny, acne-prone", color:"#3b82f6"},
      {name:"Dry", icon:"🍂", desc:"Flaky, tight", color:"#f59e0b"},
      {name:"Combination", icon:"⚖️", desc:"T-zone oily", color:"#8b5cf6"},
      {name:"Sensitive", icon:"🌸", desc:"Reactive, redness", color:"#ec4899"}
    ];
    const ageOptions = ["13-17", "18-25", "26-35", "36-45", "45+"];
    const concernOptions = [
      {name:"Acne", icon:"🔴"}, {name:"Hyperpigmentation", icon:"🟤"}, {name:"Dark Spots", icon:"⚫"},
      {name:"Dry Skin", icon:"🏜️"}, {name:"Oily Skin", icon:"💦"}, {name:"Sensitive", icon:"🌸"},
      {name:"Wrinkles", icon:"〰️"}, {name:"Fine Lines", icon:"➖"}, {name:"Redness", icon:"🔴"}, {name:"Uneven Tone", icon:"🎨"}
    ];
    const allergyOptions = ["None", "Fragrance", "Parabens", "Sulfates", "Alcohol", "Essential Oils"];
    const sensitivityOptions = [
      {name:"Low", color:"#22c55e", desc:"Can use actives"},
      {name:"Medium", color:"#f59e0b", desc:"Use slowly"},
      {name:"High", color:"#ef4444", desc:"Patch test must"}
    ];

    return (<Wrap><Card>
      {/* PREMIUM HEADER WITH GRADIENT */}
      <div style={{background:'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-20px', right:'-20px', width:'120px', height:'120px', background:'rgba(255,255,255,0.05)', borderRadius:'50%'}}></div>
        <div style={{position:'absolute', bottom:'-30px', left:'20px', width:'80px', height:'80px', background:'rgba(124,58,237,0.2)', borderRadius:'50%'}}></div>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800', display:'flex', alignItems:'center', gap:'12px', position:'relative'}}>👤 Skin Profile Management <span style={{background:'rgba(255,255,255,0.15)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>PREMIUM UI</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.8, position:'relative'}}>Click any card → Beautiful options → Select → See magical final result ✨</p>
        <div style={{display:'flex', gap:'10px', marginTop:'16px', position:'relative'}}>
          <span style={{background:'rgba(34,197,94,0.2)', border:'1px solid rgba(34,197,94,0.3)', padding:'6px 12px', borderRadius:'20px', fontSize:'11px'}}>✓ {skinType} Selected</span>
          <span style={{background:'rgba(139,92,246,0.2)', border:'1px solid rgba(139,92,246,0.3)', padding:'6px 12px', borderRadius:'20px', fontSize:'11px'}}>{concerns.length} Concerns</span>
          <span style={{background:'rgba(59,130,246,0.2)', border:'1px solid rgba(59,130,246,0.3)', padding:'6px 12px', borderRadius:'20px', fontSize:'11px'}}>Score {score}/100</span>
        </div>
      </div>

      {/* BEAUTIFUL CARDS GRID */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'16px'}}>
        {/* SKIN TYPE CARD - PREMIUM */}
        <div onClick={()=>setSelected(selected==='type'?null:'type')} style={{
          background: skinType? 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: selected==='type'? '2px solid #0f172a' : skinType? '2px solid #22c55e' : '1px solid #e2e8f0',
          padding:'20px', borderRadius:'20px', cursor:'pointer', transition:'all 0.3s', transform: selected==='type'? 'scale(1.02)' : 'scale(1)',
          boxShadow: selected==='type'? '0 12px 24px rgba(15,23,42,0.15)' : '0 4px 12px rgba(0,0,0,0.04)'
        }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
            <div style={{width:'48px', height:'48px', background: skinType? '#22c55e' : '#f1f5f9', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>{skinType==='Dry'?'🍂': skinType==='Oily'?'💧': skinType==='Sensitive'?'🌸':'✨'}</div>
            {skinType && <span style={{background:'#22c55e', color:'white', padding:'4px 10px', borderRadius:'20px', fontSize:'10px', fontWeight:'700'}}>✓ ACTIVE</span>}
          </div>
          <p style={{fontSize:'10px', margin:'14px 0 0', color:'#94a3b8', letterSpacing:'1px', fontWeight:'700'}}>SKIN TYPE</p>
          <h3 style={{margin:'6px 0 0', fontSize:'20px', fontWeight:'800'}}>{skinType}</h3>
          <p style={{fontSize:'11px', color:'#64748b', marginTop:'6px', lineHeight:'1.4'}}>Normal • Oily • Dry • Combination • Sensitive</p>
          <div style={{marginTop:'12px', display:'flex', alignItems:'center', gap:'6px', fontSize:'11px', color:'#0f172a', fontWeight:'600'}}><span>Click to choose</span><span style={{fontSize:'14px'}}>→</span></div>
        </div>

        {/* AGE CARD */}
        <div onClick={()=>setSelected(selected==='age'?null:'age')} style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: selected==='age'?'2px solid #0f172a':'1px solid #e2e8f0',
          padding:'20px', borderRadius:'20px', cursor:'pointer', transform: selected==='age'?'scale(1.02)':'scale(1)', boxShadow: selected==='age'?'0 12px 24px rgba(0,0,0,0.1)':'0 4px 12px rgba(0,0,0,0.04)'
        }}>
          <div style={{width:'48px', height:'48px', background:'#e0e7ff', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>🎂</div>
          <p style={{fontSize:'10px', margin:'14px 0 0', color:'#94a3b8', letterSpacing:'1px', fontWeight:'700'}}>AGE GROUP</p>
          <h3 style={{margin:'6px 0 0', fontSize:'20px', fontWeight:'800'}}>{ageGroup}</h3>
          <p style={{fontSize:'11px', color:'#64748b', marginTop:'6px'}}>13-17 • 18-25 • 26-35 • 36-45 • 45+</p>
        </div>

        {/* CONCERNS CARD */}
        <div onClick={()=>setSelected(selected==='concern'?null:'concern')} style={{
          background: concerns.length>0?'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)':'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: selected==='concern'?'2px solid #0f172a': concerns.length>0?'2px solid #8b5cf6':'1px solid #e2e8f0',
          padding:'20px', borderRadius:'20px', cursor:'pointer', transform: selected==='concern'?'scale(1.02)':'scale(1)', boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
        }}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{width:'48px', height:'48px', background: concerns.length>0?'#8b5cf6':'#f1f5f9', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px', color: concerns.length>0?'white':'black'}}>🎯</div>
            {concerns.length>0 && <span style={{background:'#8b5cf6', color:'white', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>{concerns.length} SELECTED</span>}
          </div>
          <p style={{fontSize:'10px', margin:'14px 0 0', color:'#94a3b8', fontWeight:'700'}}>SKIN CONCERNS</p>
          <h3 style={{margin:'6px 0 0', fontSize:'16px', fontWeight:'800', lineHeight:'1.3'}}>{concerns.length>0? concerns.slice(0,2).join(', ') + (concerns.length>2? ` +${concerns.length-2}` : '') : "Select Concerns"}</h3>
          <p style={{fontSize:'11px', color:'#64748b', marginTop:'6px'}}>Acne • Dark Spots • Wrinkles • Redness...</p>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'16px', marginTop:'16px'}}>
        <div onClick={()=>setSelected(selected==='allergy'?null:'allergy')} style={{background:'white', border:'1px solid #e2e8f0', padding:'18px', borderRadius:'16px', cursor:'pointer'}}>
          <p style={{fontSize:'10px', margin:0, color:'#94a3b8', fontWeight:'700'}}>ALLERGIES</p><h3 style={{margin:'8px 0 0'}}>{allergies}</h3><p style={{fontSize:'10px', color:'#64748b', marginTop:'6px'}}>Click to select</p>
        </div>
        <div onClick={()=>setSelected(selected==='sensitivity'?null:'sensitivity')} style={{background:'white', border:'1px solid #e2e8f0', padding:'18px', borderRadius:'16px', cursor:'pointer'}}>
          <p style={{fontSize:'10px', margin:0, color:'#94a3b8', fontWeight:'700'}}>SENSITIVITY</p><h3 style={{margin:'8px 0 0'}}>{sensitivity}</h3><div style={{height:'4px', background:'#f1f5f9', borderRadius:'10px', marginTop:'8px'}}><div style={{width: sensitivity==='Low'?'33%': sensitivity==='Medium'?'66%':'100%', height:'100%', background: sensitivity==='High'?'#ef4444': sensitivity==='Medium'?'#f59e0b':'#22c55e', borderRadius:'10px'}}></div></div>
        </div>
        <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', padding:'18px', borderRadius:'16px'}}><p style={{fontSize:'10px', margin:0, color:'#94a3b8', fontWeight:'700'}}>ENVIRONMENT</p><h3 style={{margin:'8px 0 0'}}>Urban Pollution</h3><p style={{fontSize:'10px', color:'#64748b', marginTop:'6px'}}>Sun • Pollution • Indoor</p></div>
      </div>

      {/* BEAUTIFUL OPTIONS PANEL */}
      {selected==='type' && (
        <div style={{marginTop:'20px', background:'white', border:'1px solid #e2e8f0', borderRadius:'20px', overflow:'hidden', boxShadow:'0 20px 40px rgba(0,0,0,0.08)'}}>
          <div style={{background:'linear-gradient(135deg, #0f172a 0%, #334155 100%)', padding:'18px 22px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h4 style={{margin:0, fontSize:'15px', fontWeight:'700', display:'flex', alignItems:'center', gap:'8px'}}>✨ Choose Your Skin Type <span style={{background:'rgba(255,255,255,0.15)', padding:'3px 10px', borderRadius:'20px', fontSize:'11px'}}>5 Options</span></h4>
            <button onClick={()=>setSelected(null)} style={{background:'rgba(255,255,255,0.15)', border:'none', color:'white', width:'32px', height:'32px', borderRadius:'50%', cursor:'pointer'}}>✕</button>
          </div>
          <div style={{padding:'20px', display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'12px'}}>
            {skinTypeOptions.map(opt=>{
              const isActive = skinType===opt.name;
              return <div key={opt.name} onClick={()=>{setSkinType(opt.name); setSelected(null);}} style={{
                background: isActive? `linear-gradient(135deg, ${opt.color} 0%, ${opt.color}dd 100%)` : 'white',
                border: isActive? `2px solid ${opt.color}` : '1px solid #e2e8f0',
                padding:'16px', borderRadius:'16px', cursor:'pointer', textAlign:'center', color: isActive? 'white' : 'black',
                transform: isActive? 'scale(1.05)' : 'scale(1)', boxShadow: isActive? `0 8px 20px ${opt.color}40` : 'none', transition:'all 0.2s'
              }}>
                <div style={{fontSize:'28px'}}>{opt.icon}</div>
                <h4 style={{margin:'8px 0 4px', fontSize:'14px', fontWeight:'800'}}>{opt.name}</h4>
                <p style={{margin:0, fontSize:'10px', opacity: isActive? 0.9 : 0.6}}>{opt.desc}</p>
                {isActive && <div style={{marginTop:'8px', background:'rgba(255,255,255,0.25)', padding:'3px 8px', borderRadius:'20px', fontSize:'9px', fontWeight:'700'}}>✓ SELECTED</div>}
              </div>
            })}
          </div>
        </div>
      )}

      {selected==='concern' && (
        <div style={{marginTop:'20px', background:'white', border:'1px solid #e2e8f0', borderRadius:'20px', overflow:'hidden', boxShadow:'0 20px 40px rgba(0,0,0,0.08)'}}>
          <div style={{background:'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', padding:'18px 22px', color:'white', display:'flex', justifyContent:'space-between'}}>
            <h4 style={{margin:0, fontSize:'15px', fontWeight:'700'}}>🎯 Select Your Concerns - Multiple</h4>
            <button onClick={()=>setSelected(null)} style={{background:'rgba(255,255,255,0.2)', border:'none', color:'white', padding:'6px 16px', borderRadius:'20px', cursor:'pointer', fontWeight:'700'}}>✓ Done ({concerns.length})</button>
          </div>
          <div style={{padding:'20px', display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'10px'}}>
            {concernOptions.map(opt=>{
              const isSelected = concerns.includes(opt.name);
              return <div key={opt.name} onClick={()=>{
                if(isSelected){ setConcerns(concerns.filter(c=>c!==opt.name)); }
                else { setConcerns([...concerns, opt.name]); }
              }} style={{
                background: isSelected? '#0f172a' : 'white',
                border: isSelected? '2px solid #0f172a' : '1px solid #e2e8f0',
                padding:'14px', borderRadius:'14px', cursor:'pointer', textAlign:'center', color: isSelected? 'white' : 'black', transition:'all 0.2s'
              }}>
                <div style={{fontSize:'20px'}}>{opt.icon}</div>
                <p style={{margin:'6px 0 0', fontSize:'11px', fontWeight:'600'}}>{opt.name}</p>
                {isSelected && <div style={{marginTop:'6px', fontSize:'10px', background:'#22c55e', color:'white', padding:'2px 6px', borderRadius:'10px'}}>✓</div>}
              </div>
            })}
          </div>
        </div>
      )}

      {selected==='age' && (
        <div style={{marginTop:'20px', background:'white', border:'1px solid #e2e8f0', borderRadius:'16px', padding:'20px', display:'flex', gap:'10px', flexWrap:'wrap'}}>
          {ageOptions.map(opt=><button key={opt} onClick={()=>{setAgeGroup(opt); setSelected(null);}} style={{padding:'12px 22px', borderRadius:'20px', border: ageGroup===opt?'2px solid #0f172a':'1px solid #e2e8f0', background: ageGroup===opt?'#0f172a':'white', color: ageGroup===opt?'white':'black', cursor:'pointer', fontWeight:'600'}}>{opt}</button>)}
        </div>
      )}

      {/* MAGICAL FINAL RESULT - PREMIUM UI */}
      <div style={{marginTop:'20px', background:'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)', borderRadius:'20px', padding:'24px', color:'white', position:'relative', overflow:'hidden', boxShadow:'0 20px 40px rgba(15,23,42,0.3)'}}>
        <div style={{position:'absolute', top:'-40px', right:'-40px', width:'160px', height:'160px', background:'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius:'50%', opacity:0.15}}></div>
        <div style={{position:'absolute', bottom:'-20px', left:'-20px', width:'100px', height:'100px', background:'linear-gradient(135deg, #22c55e, #3b82f6)', borderRadius:'50%', opacity:0.15}}></div>

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', position:'relative'}}>
          <div>
            <h3 style={{margin:0, fontSize:'20px', fontWeight:'800', display:'flex', alignItems:'center', gap:'10px'}}>✅ Final Skin Profile Result <span style={{background:'linear-gradient(135deg, #22c55e, #16a34a)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>LIVE • {name}</span></h3>
            <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.8}}>Ma'am ko yahi dikhana hai - Beautiful UI + Final Result</p>
          </div>
          <div style={{background:'rgba(255,255,255,0.1)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.15)', padding:'10px 16px', borderRadius:'14px', textAlign:'center'}}>
            <p style={{margin:0, fontSize:'10px', opacity:0.7}}>HEALTH SCORE</p>
            <p style={{margin:'4px 0 0', fontSize:'22px', fontWeight:'800'}}>{score}/100</p>
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginTop:'20px', position:'relative'}}>
          <div style={{background:'rgba(255,255,255,0.06)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.1)', padding:'16px', borderRadius:'14px'}}>
            <p style={{margin:0, fontSize:'11px', opacity:0.6, letterSpacing:'1px', fontWeight:'700'}}>SKIN TYPE ANALYSIS</p>
            <p style={{margin:'8px 0 0', fontSize:'14px', fontWeight:'700', display:'flex', alignItems:'center', gap:'8px'}}><span style={{fontSize:'20px'}}>{skinType==='Dry'?'🍂': skinType==='Oily'?'💧':'✨'}</span> {skinType} Skin</p>
            <p style={{margin:'8px 0 0', fontSize:'12px', opacity:0.8, lineHeight:'1.5'}}>
              {skinType==='Dry'?'💡 Needs Hyaluronic Acid + Ceramides. Use cream cleanser, avoid foaming. Hydration 3L must.' :
               skinType==='Oily'?'💡 Needs Niacinamide + Salicylic Acid. Foaming cleanser, oil-free moisturizer.' :
               '💡 Balanced skin - Maintain with gentle routine.'}
            </p>
            <div style={{marginTop:'12px', display:'flex', gap:'6px'}}><span style={{background:'rgba(34,197,94,0.2)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>✓ {skinType}</span><span style={{background:'rgba(59,130,246,0.2)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>{ageGroup}</span></div>
          </div>

          <div style={{background:'rgba(255,255,255,0.06)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.1)', padding:'16px', borderRadius:'14px'}}>
            <p style={{margin:0, fontSize:'11px', opacity:0.6, letterSpacing:'1px', fontWeight:'700'}}>CONCERNS & RECOMMENDATION</p>
            <p style={{margin:'8px 0 0', fontSize:'14px', fontWeight:'700'}}>🎯 {concerns.length>0? concerns.join(', ') : "No concerns selected"}</p>
            <p style={{margin:'8px 0 0', fontSize:'12px', opacity:0.8, lineHeight:'1.5'}}>💊 Priority: {concerns[0] || "None"} first. Sensitivity {sensitivity} - {sensitivity==='High'?'Patch test mandatory':'Safe to use actives'}. Allergies: {allergies} safe.</p>
            <div style={{marginTop:'12px', display:'flex', gap:'6px', flexWrap:'wrap'}}>{concerns.slice(0,3).map(c=><span key={c} style={{background:'rgba(168,85,247,0.2)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>{c}</span>)}</div>
          </div>
        </div>

        <div style={{marginTop:'16px', background:'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(59,130,246,0.15))', border:'1px solid rgba(34,197,94,0.2)', padding:'14px', borderRadius:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative'}}>
          <p style={{margin:0, fontSize:'13px', fontWeight:'600'}}>🎨 Premium UI • Click animation • Gradient cards • Final result • Ma'am will love it ✨</p>
          <span style={{background:'white', color:'#0f172a', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'800'}}>Score: {score}/100</span>
        </div>
      </div>

    </Card></Wrap>); }
    if(page==='lifestyle'){
    const lifestyleOptions = [
      {name:"Exercise", icon:"🏃", status:"Regular", color:"#22c55e", desc:"5x/week - Good for skin"},
      {name:"Smoking", icon:"🚭", status:"No", color:"#22c55e", desc:"Non-smoker - Great!"},
      {name:"Alcohol", icon:"🍷", status:"No", color:"#22c55e", desc:"No alcohol - Perfect"},
      {name:"Stress", icon:"🧘", status:"Medium", color:"#f59e0b", desc:"Manage with meditation"},
      {name:"Diet", icon:"🥗", status:"Healthy", color:"#22c55e", desc:"Balanced diet"},
      {name:"Sun", icon:"☀️", status:"Moderate", color:"#f59e0b", desc:"Use SPF 50"}
    ];

    return (<Wrap><Card>
      {/* PREMIUM HEADER */}
      <div style={{background:'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0891b2 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-30px', right:'-20px', width:'140px', height:'140px', background:'rgba(255,255,255,0.1)', borderRadius:'50%'}}></div>
        <div style={{position:'absolute', bottom:'-40px', left:'-10px', width:'100px', height:'100px', background:'rgba(255,255,255,0.08)', borderRadius:'50%'}}></div>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800', display:'flex', alignItems:'center', gap:'12px', position:'relative'}}>💧 Lifestyle & Hydration <span style={{background:'rgba(255,255,255,0.2)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>20% Weightage</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.9, position:'relative'}}>Track water, habits, hydration - Beautiful interactive UI ✨ • Impacts {score}/100</p>
        <div style={{display:'flex', gap:'10px', marginTop:'16px', position:'relative'}}>
          <span style={{background:'rgba(255,255,255,0.2)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>💧 {waterIntake}L / 3L Today</span>
          <span style={{background:'rgba(255,255,255,0.2)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>💦 Hydration {hydration}%</span>
          <span style={{background:'rgba(34,197,94,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>🏃 Lifestyle Good</span>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:'18px'}}>
        {/* WATER INTAKE - PREMIUM WITH ANIMATION */}
        <div style={{background:'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', border:'2px solid #0ea5e9', borderRadius:'20px', padding:'24px', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', top:'-20px', right:'-20px', width:'80px', height:'80px', background:'linear-gradient(135deg, #0ea5e9, #06b6d4)', borderRadius:'50%', opacity:0.1}}></div>
          
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', position:'relative'}}>
            <div>
              <h3 style={{margin:0, fontSize:'18px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>💧 Water Intake Tracking <span style={{background:'#0ea5e9', color:'white', padding:'3px 10px', borderRadius:'20px', fontSize:'10px'}}>LIVE</span></h3>
              <p style={{margin:'6px 0 0', fontSize:'12px', color:'#0369a1'}}>Drag slider - See water bottle fill - Weightage 10% in final score</p>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{width:'60px', height:'80px', background:'white', border:'2px solid #0ea5e9', borderRadius:'8px 8px 20px 20px', position:'relative', overflow:'hidden', display:'flex', alignItems:'end'}}>
                <div style={{width:'100%', height:`${(waterIntake/5)*100}%`, background:'linear-gradient(180deg, #0ea5e9 0%, #06b6d4 100%)', transition:'all 0.5s', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'10px', fontWeight:'700'}}>{waterIntake}L</div>
              </div>
              <p style={{margin:'6px 0 0', fontSize:'10px', color:'#0ea5e9', fontWeight:'700'}}>BOTTLE</p>
            </div>
          </div>

          <div style={{marginTop:'20px', position:'relative'}}>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', color:'#0369a1', marginBottom:'8px'}}>
              <span>1L</span><span>2L</span><span>3L Target</span><span>4L</span><span>5L</span>
            </div>
            <input type="range" min="1" max="5" step="0.5" value={waterIntake} onChange={e=>{setWaterIntake(e.target.value); setHydration(Math.min(100, e.target.value*20 + 25));}} style={{width:'100%', height:'10px', borderRadius:'10px', accentColor:'#0ea5e9', cursor:'pointer'}}/>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'8px'}}>
              <span style={{fontSize:'22px', fontWeight:'800', color:'#0ea5e9'}}>{waterIntake}L</span>
              <span style={{fontSize:'13px', background:'#0ea5e9', color:'white', padding:'4px 12px', borderRadius:'20px'}}>{waterIntake>=3?'✅ Target Met!': `Need ${(3-waterIntake).toFixed(1)}L more`}</span>
            </div>
          </div>

          <div style={{marginTop:'16px', background:'white', borderRadius:'14px', padding:'14px'}}>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'12px', fontWeight:'600'}}>
              <span>Hydration Level</span><span style={{color:'#0ea5e9'}}>{hydration}%</span>
            </div>
            <div style={{height:'12px', background:'#e0f2fe', borderRadius:'20px', marginTop:'8px', overflow:'hidden', position:'relative'}}>
              <div style={{width:`${hydration}%`, height:'100%', background:'linear-gradient(90deg, #0ea5e9, #06b6d4, #22c55e)', borderRadius:'20px', transition:'all 0.5s', position:'relative'}}>
                <div style={{position:'absolute', right:'4px', top:'50%', transform:'translateY(-50%)', width:'8px', height:'8px', background:'white', borderRadius:'50%'}}></div>
              </div>
            </div>
            <p style={{margin:'8px 0 0', fontSize:'11px', color:'#64748b'}}>💡 Score impact: +{(hydration/10).toFixed(1)} points • Good hydration = Glowing skin for {name}</p>
          </div>
        </div>

        {/* LIFESTYLE HABITS - BEAUTIFUL GRID */}
        <div style={{background:'white', border:'1px solid #e2e8f0', borderRadius:'20px', padding:'20px'}}>
          <h3 style={{margin:0, fontSize:'16px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>🏃 Lifestyle Habits <span style={{background:'#f59e0b', color:'white', padding:'3px 8px', borderRadius:'20px', fontSize:'10px'}}>20% Weightage</span></h3>
          <p style={{margin:'6px 0 0', fontSize:'11px', color:'#64748b'}}>Impacts skin health - Good lifestyle = +15 points</p>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'16px'}}>
            {lifestyleOptions.map((habit, i)=>(
              <div key={i} style={{
                background: habit.color==='#22c55e'? 'linear-gradient(135deg, #f0fdf4, #dcfce7)' : 'linear-gradient(135deg, #fffbeb, #fef3c7)',
                border: `1px solid ${habit.color}30`,
                padding:'12px', borderRadius:'14px', position:'relative', overflow:'hidden', cursor:'pointer', transition:'all 0.2s'
              }}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
                  <span style={{fontSize:'20px'}}>{habit.icon}</span>
                  <span style={{background: habit.color, color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'9px', fontWeight:'700'}}>{habit.status}</span>
                </div>
                <p style={{margin:'8px 0 0', fontSize:'12px', fontWeight:'700'}}>{habit.name}</p>
                <p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b', lineHeight:'1.3'}}>{habit.desc}</p>
              </div>
            ))}
          </div>

          <div style={{marginTop:'14px', background:'linear-gradient(135deg, #0f172a, #1e293b)', padding:'14px', borderRadius:'14px', color:'white'}}>
            <p style={{margin:0, fontSize:'12px', fontWeight:'700', display:'flex', alignItems:'center', gap:'6px'}}>📊 Lifestyle Impact for {name}</p>
            <p style={{margin:'6px 0 0', fontSize:'11px', opacity:0.8}}>Exercise regular = +5 points • Non-smoker = +5 points • Hydrated = +5 points • Total 20% weightage me se 15 points milenge • Current: Good</p>
            <div style={{marginTop:'10px', display:'flex', gap:'6px'}}>
              <span style={{background:'rgba(34,197,94,0.2)', border:'1px solid rgba(34,197,94,0.3)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>🏃 +5 Exercise</span>
              <span style={{background:'rgba(34,197,94,0.2)', border:'1px solid rgba(34,197,94,0.3)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>🚭 +5 No Smoking</span>
              <span style={{background:'rgba(14,165,233,0.2)', border:'1px solid rgba(14,165,233,0.3)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>💧 +5 Hydrated</span>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL RESULT - MAGICAL */}
      <div style={{marginTop:'18px', background:'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%)', borderRadius:'20px', padding:'20px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-20px', right:'50px', width:'80px', height:'80px', background:'rgba(255,255,255,0.05)', borderRadius:'50%'}}></div>
        <div>
          <h4 style={{margin:0, fontSize:'14px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>✅ Hydration Tracking Complete - {name}</h4>
          <p style={{margin:'6px 0 0', fontSize:'12px', opacity:0.9}}>{waterIntake}L logged today • Hydration {hydration}% • Score impact: +{(hydration/10).toFixed(1)} points • Lifestyle: Good • Total 20% weightage se +15 points</p>
        </div>
        <div style={{background:'white', color:'#0ea5e9', padding:'10px 18px', borderRadius:'14px', textAlign:'center', position:'relative'}}>
          <p style={{margin:0, fontSize:'10px', fontWeight:'700', color:'#64748b'}}>TODAY</p>
          <p style={{margin:0, fontSize:'18px', fontWeight:'800'}}>{waterIntake}L 💧</p>
        </div>
      </div>

    </Card></Wrap>); }
    if(page==='sleep'){
    const qualityOptions = [
      {name:"Excellent", icon:"😴", desc:"Deep sleep", color:"#22c55e", hours:"8-9h", score:"+15"},
      {name:"Good", icon:"🙂", desc:"Restful", color:"#3b82f6", hours:"7-8h", score:"+10"},
      {name:"Fair", icon:"😐", desc:"Interrupted", color:"#f59e0b", hours:"6-7h", score:"+5"},
      {name:"Poor", icon:"😫", desc:"Restless", color:"#ef4444", hours:"<6h", score:"0"}
    ];
    const bedtimeOptions = ["9 PM", "10 PM", "11 PM", "12 AM", "1 AM"];
    const wakeOptions = ["5 AM", "6 AM", "7 AM", "8 AM", "9 AM"];
    const sleepTips = [
      {icon:"🌙", title:"Dark Room", desc:"No blue light"},
      {icon:"❄️", title:"Cool Temp", desc:"18-22°C ideal"},
      {icon:"☕", title:"No Caffeine", desc:"After 6 PM"},
      {icon:"📱", title:"No Screen", desc:"30 min before bed"}
    ];

    return (<Wrap><Card>
      {/* PREMIUM HEADER - PURPLE GRADIENT FOR SLEEP */}
      <div style={{background:'linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #4338ca 60%, #6366f1 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-40px', right:'-30px', width:'120px', height:'120px', background:'rgba(255,255,255,0.08)', borderRadius:'50%'}}></div>
        <div style={{position:'absolute', top:'20px', right:'100px', width:'8px', height:'8px', background:'white', borderRadius:'50%', opacity:0.8}}></div>
        <div style={{position:'absolute', top:'40px', right:'140px', width:'5px', height:'5px', background:'white', borderRadius:'50%', opacity:0.6}}></div>
        <div style={{position:'absolute', top:'15px', right:'160px', width:'3px', height:'3px', background:'white', borderRadius:'50%', opacity:0.9}}></div>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800', display:'flex', alignItems:'center', gap:'12px', position:'relative'}}>😴 Sleep Pattern Tracking <span style={{background:'rgba(255,255,255,0.15)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>15% Weightage</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.9, position:'relative'}}>Bedtime, wake time, quality, consistency - Beautiful sleep lab UI ✨ • Impacts {score}/100</p>
        <div style={{display:'flex', gap:'10px', marginTop:'16px', position:'relative', flexWrap:'wrap'}}>
          <span style={{background:'rgba(255,255,255,0.15)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>🛏️ {sleepHours}h Sleep</span>
          <span style={{background: sleepQuality==='Good'?'rgba(34,197,94,0.25)': 'rgba(245,158,11,0.25)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>{sleepQuality==='Good'?'😴':'😐'} {sleepQuality} Quality</span>
          <span style={{background:'rgba(99,102,241,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>📊 Consistency 85%</span>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px'}}>
        {/* LEFT - SLEEP HOURS WITH CIRCULAR SELECTOR */}
        <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          {/* HOURS SELECTOR - PREMIUM */}
          <div style={{background:'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)', border:'2px solid #6366f1', borderRadius:'20px', padding:'22px', position:'relative', overflow:'hidden'}}>
            <div style={{position:'absolute', top:'-20px', right:'-20px', width:'80px', height:'80px', background:'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius:'50%', opacity:0.1}}></div>
            <h3 style={{margin:0, fontSize:'16px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px', position:'relative'}}>⏰ Sleep Hours Selector <span style={{background:'#6366f1', color:'white', padding:'3px 10px', borderRadius:'20px', fontSize:'10px'}}>LIVE</span></h3>
            <p style={{margin:'6px 0 0', fontSize:'11px', color:'#4338ca', position:'relative'}}>Click hour - See moon animation - Ideal 7-8h for glowing skin</p>
            
            <div style={{display:'flex', justifyContent:'center', marginTop:'20px', position:'relative'}}>
              <div style={{width:'130px', height:'130px', borderRadius:'50%', background:'white', border:'4px solid #6366f1', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', boxShadow:'0 12px 24px rgba(99,102,241,0.2)', position:'relative'}}>
                <div style={{position:'absolute', top:'-10px', right:'20px', fontSize:'20px'}}>{sleepHours>=8?'🌕': sleepHours>=7?'🌙':'🌑'}</div>
                <span style={{fontSize:'36px', fontWeight:'900', color:'#312e81'}}>{sleepHours}h</span>
                <span style={{fontSize:'11px', color:'#6366f1', fontWeight:'700'}}>{sleepHours>=8?'Excellent': sleepHours>=7?'Good Ideal': sleepHours>=6?'Fair':'Poor'}</span>
                <span style={{fontSize:'10px', color:'#64748b', marginTop:'2px'}}>{sleepHours>=7?'+15 points': sleepHours>=6?'+5 points':'0 points'}</span>
              </div>
            </div>

            <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'18px', flexWrap:'wrap'}}>
              {[5,6,7,8,9].map(h=>{
                const isActive = sleepHours===h;
                return <button key={h} onClick={()=>setSleepHours(h)} style={{
                  width:'48px', height:'48px', borderRadius:'14px', 
                  border: isActive?'2px solid #312e81':'1px solid #c7d2fe',
                  background: isActive?'linear-gradient(135deg, #312e81, #6366f1)':'white',
                  color: isActive?'white':'#312e81', fontWeight:'800', fontSize:'14px',
                  cursor:'pointer', boxShadow: isActive?'0 6px 16px rgba(99,102,241,0.3)':'none',
                  transform: isActive?'scale(1.1)':'scale(1)', transition:'all 0.2s'
                }}>{h}h</button>
              })}
            </div>

            <div style={{marginTop:'16px', background:'white', borderRadius:'14px', padding:'14px'}}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'12px', fontWeight:'600'}}>
                <span>Sleep Consistency - Last 7 Days</span><span style={{color:'#6366f1'}}>85%</span>
              </div>
              <div style={{display:'flex', gap:'4px', marginTop:'10px', alignItems:'end', height:'40px'}}>
                {[6.5,7,5.5,8,7.5,7,8].map((h,i)=><div key={i} style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'4px'}}>
                  <div style={{width:'100%', height:`${(h/9)*100}%`, background: h>=7?'#6366f1': h>=6?'#f59e0b':'#ef4444', borderRadius:'4px 4px 0 0', minHeight:'8px'}}></div>
                  <span style={{fontSize:'8px', color:'#64748b'}}>D{i+1}</span>
                </div>)}
              </div>
            </div>
          </div>

          {/* BEDTIME & WAKE TIME */}
          <div style={{background:'white', border:'1px solid #e2e8f0', borderRadius:'18px', padding:'18px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px'}}>
            <div>
              <p style={{margin:0, fontSize:'11px', fontWeight:'700', color:'#94a3b8', letterSpacing:'1px'}}>🌙 BEDTIME</p>
              <div style={{display:'flex', gap:'6px', marginTop:'10px', flexWrap:'wrap'}}>
                {bedtimeOptions.map(t=><button key={t} onClick={()=>{}} style={{padding:'6px 10px', borderRadius:'20px', border: t==='11 PM'?'2px solid #6366f1':'1px solid #e2e8f0', background: t==='11 PM'?'#eef2ff':'white', color: t==='11 PM'?'#312e81':'#64748b', fontSize:'11px', fontWeight:'600', cursor:'pointer'}}>{t}</button>)}
              </div>
              <p style={{margin:'8px 0 0', fontSize:'10px', color:'#6366f1', fontWeight:'600'}}>Current: 11 PM • Ideal 10-11 PM</p>
            </div>
            <div>
              <p style={{margin:0, fontSize:'11px', fontWeight:'700', color:'#94a3b8', letterSpacing:'1px'}}>☀️ WAKE TIME</p>
              <div style={{display:'flex', gap:'6px', marginTop:'10px', flexWrap:'wrap'}}>
                {wakeOptions.map(t=><button key={t} onClick={()=>{}} style={{padding:'6px 10px', borderRadius:'20px', border: t==='7 AM'?'2px solid #f59e0b':'1px solid #e2e8f0', background: t==='7 AM'?'#fffbeb':'white', color: t==='7 AM'?'#92400e':'#64748b', fontSize:'11px', fontWeight:'600', cursor:'pointer'}}>{t}</button>)}
              </div>
              <p style={{margin:'8px 0 0', fontSize:'10px', color:'#d97706', fontWeight:'600'}}>Current: 7 AM • 8h total</p>
            </div>
          </div>
        </div>

        {/* RIGHT - SLEEP QUALITY */}
        <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          <div style={{background:'white', border:'1px solid #e2e8f0', borderRadius:'20px', padding:'20px'}}>
            <h3 style={{margin:0, fontSize:'16px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>✨ Sleep Quality Assessment <span style={{background:'#f59e0b', color:'white', padding:'3px 8px', borderRadius:'20px', fontSize:'10px'}}>Click to select</span></h3>
            <p style={{margin:'6px 0 0', fontSize:'11px', color:'#64748b'}}>How was your sleep? - Impacts skin repair</p>
            
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'16px'}}>
              {qualityOptions.map(q=>{
                const isActive = sleepQuality===q.name;
                return <div key={q.name} onClick={()=>setSleepQuality(q.name)} style={{
                  background: isActive? `linear-gradient(135deg, ${q.color}15, ${q.color}25)` : 'white',
                  border: isActive? `2px solid ${q.color}` : '1px solid #e2e8f0',
                  padding:'14px', borderRadius:'14px', cursor:'pointer', position:'relative',
                  transform: isActive?'scale(1.02)':'scale(1)', boxShadow: isActive?`0 8px 16px ${q.color}20`:'none', transition:'all 0.2s'
                }}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
                    <span style={{fontSize:'22px'}}>{q.icon}</span>
                    <span style={{background: q.color, color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'9px', fontWeight:'700'}}>{q.score}</span>
                  </div>
                  <p style={{margin:'8px 0 0', fontSize:'13px', fontWeight:'800'}}>{q.name}</p>
                  <p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>{q.desc} • {q.hours}</p>
                  {isActive && <div style={{marginTop:'8px', background:q.color, color:'white', padding:'3px 8px', borderRadius:'20px', fontSize:'9px', textAlign:'center', fontWeight:'700'}}>✓ SELECTED</div>}
                </div>
              })}
            </div>

            <div style={{marginTop:'14px', background:'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border:'1px solid #bbf7d0', padding:'14px', borderRadius:'14px'}}>
              <p style={{margin:0, fontSize:'12px', fontWeight:'700', color:'#166534', display:'flex', alignItems:'center', gap:'6px'}}>💡 Sleep Impact on Skin - For {name}</p>
              <p style={{margin:'6px 0 0', fontSize:'11px', color:'#15803d', lineHeight:'1.4'}}>
                {sleepHours>=8?'Excellent 8h sleep = +15 points • Collagen repair at peak • Dark circles reduce • Skin glows!':
                 sleepHours>=7?'Good 7h sleep = +10 points • Good repair • Continue this routine for glowing skin':
                 'Poor sleep = Collagen loss • Dark circles • Acne increases • Need 7-8h for best skin'}
              </p>
            </div>
          </div>

          {/* SLEEP TIPS */}
          <div style={{background:'linear-gradient(135deg, #1e1b4b, #312e81)', borderRadius:'18px', padding:'18px', color:'white'}}>
            <h4 style={{margin:0, fontSize:'14px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>🌙 Sleep Hygiene Tips <span style={{background:'rgba(255,255,255,0.15)', padding:'3px 8px', borderRadius:'20px', fontSize:'10px'}}>For Better Skin</span></h4>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'14px'}}>
              {sleepTips.map((tip,i)=><div key={i} style={{background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', padding:'12px', borderRadius:'12px', display:'flex', gap:'10px', alignItems:'center'}}>
                <span style={{fontSize:'18px'}}>{tip.icon}</span>
                <div><p style={{margin:0, fontSize:'12px', fontWeight:'700'}}>{tip.title}</p><p style={{margin:'2px 0 0', fontSize:'10px', opacity:0.7}}>{tip.desc}</p></div>
              </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* FINAL RESULT */}
      <div style={{marginTop:'18px', background:'linear-gradient(135deg, #0f172a 0%, #312e81 50%, #6366f1 100%)', borderRadius:'20px', padding:'20px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-20px', right:'80px', width:'60px', height:'60px', background:'rgba(255,255,255,0.05)', borderRadius:'50%'}}></div>
        <div>
          <h4 style={{margin:0, fontSize:'14px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>✅ Sleep Tracking Complete - {name} <span style={{fontSize:'18px'}}>{sleepHours>=7?'🌙✨':'😴'}</span></h4>
          <p style={{margin:'6px 0 0', fontSize:'12px', opacity:0.9}}>{sleepHours}h sleep • Quality {sleepQuality} • Bedtime 11 PM → Wake 7 AM • Consistency 85% • Score impact: {sleepHours>=7?'+15 points':' +5 points'} • 15% weightage</p>
        </div>
        <div style={{background:'white', color:'#312e81', padding:'10px 18px', borderRadius:'14px', textAlign:'center'}}>
          <p style={{margin:0, fontSize:'10px', fontWeight:'700', color:'#64748b'}}>TONIGHT</p>
          <p style={{margin:0, fontSize:'18px', fontWeight:'800'}}>{sleepHours}h {sleepHours>=7?'🌙':'😫'}</p>
        </div>
      </div>

    </Card></Wrap>); }
    if(page==='assessment'){
    const factors = [
      {name:"Skin Profile", icon:"👤", weight:"35%", score: skinType==="Normal"?90 : skinType==="Dry"?70 : 75, color:"#8b5cf6", desc:"Type, concerns, allergies"},
      {name:"Lifestyle", icon:"🏃", weight:"20%", score: hydration>=70?85 : 60, color:"#22c55e", desc:"Exercise, habits"},
      {name:"Sleep", icon:"😴", weight:"15%", score: sleepHours>=7?80 : sleepHours>=6?60 : 40, color:"#6366f1", desc:"Hours, quality"},
      {name:"Routine", icon:"🌸", weight:"20%", score: routineAdh, color:"#ec4899", desc:"Adherence, consistency"},
      {name:"Hydration", icon:"💧", weight:"10%", score: hydration, color:"#0ea5e9", desc:"Water intake"}
    ];
    const historyScores = [60, 62, 65, 68, 72, 74, 77.9];
    const aiInsights = [
      {icon:"🧠", title:"AI Analysis", desc:`${name}'s ${skinType} skin with ${concerns.length} concerns`, color:"#7c3aed"},
      {icon:"💡", title:"Priority", desc:`Fix ${concerns[0] || "Hydration"} first`, color:"#f59e0b"},
      {icon:"🎯", title:"Recommendation", desc: skinType==="Dry"?"HA + Ceramides needed" : "Niacinamide + SPF", color:"#22c55e"},
      {icon:"📈", title:"Prediction", desc:"Score will reach 85+ in 30 days", color:"#3b82f6"}
    ];

    return (<Wrap><Card>
      {/* PREMIUM HEADER - AI GRADIENT */}
      <div style={{background:'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-30px', right:'-20px', width:'150px', height:'150px', background:'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius:'50%', opacity:0.15}}></div>
        <div style={{position:'absolute', bottom:'-20px', left:'-10px', width:'100px', height:'100px', background:'linear-gradient(135deg, #22c55e, #0ea5e9)', borderRadius:'50%', opacity:0.12}}></div>
        <div style={{position:'absolute', top:'20px', right:'120px', width:'6px', height:'6px', background:'#22c55e', borderRadius:'50%', boxShadow:'0 0 10px #22c55e'}}></div>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800', display:'flex', alignItems:'center', gap:'12px', position:'relative'}}>📋 Skin Assessment Engine <span style={{background:'linear-gradient(135deg, #7c3aed, #ec4899)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>AI POWERED</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.9, position:'relative'}}>Weighted scoring: 35% Skin + 20% Lifestyle + 15% Sleep + 20% Routine + 10% Hydration • Click any factor ✨</p>
        <div style={{display:'flex', gap:'10px', marginTop:'16px', position:'relative', flexWrap:'wrap'}}>
          <span style={{background:'rgba(255,255,255,0.12)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.15)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>🧠 AI Score {score}/100</span>
          <span style={{background:'rgba(34,197,94,0.2)', border:'1px solid rgba(34,197,94,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>📈 +18 Improvement</span>
          <span style={{background:'rgba(124,58,237,0.2)', border:'1px solid rgba(124,58,237,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>🎯 {concerns.length} Concerns Analyzed</span>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'0.9fr 1.1fr', gap:'18px'}}>
        {/* LEFT - BIG SCORE CIRCLE */}
        <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          <div style={{background:'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', border:'2px solid #0f172a', borderRadius:'24px', padding:'24px', textAlign:'center', position:'relative', overflow:'hidden'}}>
            <div style={{position:'absolute', top:'-30px', right:'-30px', width:'100px', height:'100px', background:'linear-gradient(135deg, #0f172a, #334155)', borderRadius:'50%', opacity:0.05}}></div>

            <h3 style={{margin:0, fontSize:'14px', fontWeight:'800', color:'#0f172a', letterSpacing:'1px'}}>🧠 AI SKIN HEALTH SCORE</h3>
            <p style={{margin:'4px 0 0', fontSize:'11px', color:'#64748b'}}>Calculated from 5 factors • Live for {name}</p>

            <div style={{display:'flex', justifyContent:'center', marginTop:'20px', position:'relative'}}>
              <div style={{
                width:'190px', height:'190px', borderRadius:'50%',
                background: `conic-gradient(#0f172a 0% ${score}%, #e2e8f0 ${score}% 100%)`,
                display:'flex', alignItems:'center', justifyContent:'center',
                boxShadow:'0 20px 40px rgba(15,23,42,0.15)', position:'relative', padding:'12px'
              }}>
                <div style={{width:'100%', height:'100%', borderRadius:'50%', background:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', boxShadow:'inset 0 4px 12px rgba(0,0,0,0.05)'}}>
                  <span style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700', letterSpacing:'1px'}}>SCORE</span>
                  <span style={{fontSize:'48px', fontWeight:'900', color:'#0f172a', lineHeight:'1'}}>{score}</span>
                  <span style={{fontSize:'14px', color:'#64748b', fontWeight:'600'}}>/ 100</span>
                  <div style={{marginTop:'8px', background: score>=75?'#22c55e': score>=60?'#f59e0b':'#ef4444', color:'white', padding:'4px 12px', borderRadius:'20px', fontSize:'10px', fontWeight:'800'}}>
                    {score>=75?'Excellent ✨': score>=60?'Good 🙂':'Needs Care'}
                  </div>
                </div>
                {/* Floating badges */}
                <div style={{position:'absolute', top:'-8px', right:'10px', background:'#7c3aed', color:'white', padding:'4px 10px', borderRadius:'20px', fontSize:'10px', fontWeight:'700', boxShadow:'0 4px 12px rgba(124,58,237,0.3)'}}>AI</div>
              </div>
            </div>

            <button onClick={()=>setScore((Math.random()*5+74).toFixed(1))} style={{
              width:'100%', marginTop:'20px',
              background:'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
              color:'white', padding:'14px', borderRadius:'14px', border:'none',
              cursor:'pointer', fontWeight:'700', fontSize:'13px',
              display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
              boxShadow:'0 8px 20px rgba(15,23,42,0.2)', transition:'all 0.2s'
            }}>
              <span style={{fontSize:'16px'}}>🧠</span> Re-Run AI Assessment <span style={{background:'rgba(255,255,255,0.15)', padding:'3px 8px', borderRadius:'20px', fontSize:'10px'}}>Click → New Score</span>
            </button>

            <div style={{marginTop:'14px', background:'white', border:'1px solid #e2e8f0', borderRadius:'14px', padding:'12px'}}>
              <p style={{margin:0, fontSize:'11px', fontWeight:'700', color:'#0f172a'}}>📊 Score History - Improvement Journey</p>
              <div style={{display:'flex', gap:'4px', marginTop:'10px', alignItems:'end', height:'50px'}}>
                {historyScores.map((s,i)=><div key={i} style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'4px'}}>
                  <div style={{width:'100%', background:'#f1f5f9', borderRadius:'4px 4px 0 0', padding:'2px', textAlign:'center', fontSize:'8px', fontWeight:'700'}}>{s}</div>
                  <div style={{width:'100%', height:`${(s/100)*40}px`, background: i===historyScores.length-1?'#0f172a':'#cbd5e1', borderRadius:'0 0 4px 4px', minHeight:'6px'}}></div>
                  <span style={{fontSize:'7px', color:'#94a3b8'}}>W{i+1}</span>
                </div>)}
              </div>
              <p style={{margin:'8px 0 0', fontSize:'10px', color:'#64748b'}}>60 → {score} = +{(score-60).toFixed(1)} improvement in 7 weeks ✨</p>
            </div>
          </div>
        </div>

        {/* RIGHT - FACTORS WITH CLICKABLE RESULT */}
        <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
          <div style={{background:'white', border:'1px solid #e2e8f0', borderRadius:'20px', padding:'20px'}}>
            <h3 style={{margin:0, fontSize:'16px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>⚖️ Weighted Factors Breakdown <span style={{background:'#0f172a', color:'white', padding:'3px 8px', borderRadius:'20px', fontSize:'10px'}}>5 Factors • Click any</span></h3>
            <p style={{margin:'6px 0 0', fontSize:'11px', color:'#64748b'}}>Click any factor to see detailed result below</p>

            <div style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'16px'}}>
              {factors.map((f,i)=>{
                const isActive = selected===f.name;
                return <div key={i} onClick={()=>setSelected(isActive?null:f.name)} style={{
                  background: isActive? `linear-gradient(135deg, ${f.color}12, ${f.color}20)` : 'linear-gradient(135deg, #ffffff, #f8fafc)',
                  border: isActive? `2px solid ${f.color}` : '1px solid #e2e8f0',
                  padding:'14px', borderRadius:'14px', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center',
                  transform: isActive?'scale(1.02)':'scale(1)', boxShadow: isActive?`0 8px 20px ${f.color}20`:'0 2px 8px rgba(0,0,0,0.03)', transition:'all 0.2s'
                }}>
                  <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
                    <div style={{width:'40px', height:'40px', background: isActive? f.color : '#f1f5f9', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', color: isActive?'white':'black'}}>{f.icon}</div>
                    <div>
                      <p style={{margin:0, fontSize:'13px', fontWeight:'800', display:'flex', alignItems:'center', gap:'6px'}}>{f.name} <span style={{background:'#f1f5f9', padding:'2px 8px', borderRadius:'20px', fontSize:'10px', fontWeight:'600'}}>{f.weight}</span></p>
                      <p style={{margin:'2px 0 0', fontSize:'11px', color:'#64748b'}}>{f.desc} • {f.name==="Skin Profile"?`${skinType}, ${concerns.length} concerns` : f.name==="Lifestyle"?`${waterIntake}L water` : f.name==="Sleep"?`${sleepHours}h sleep` : f.name==="Hydration"?`${hydration}% hydrated` : `${routineAdh}% adherence`}</p>
                    </div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <p style={{margin:0, fontSize:'18px', fontWeight:'900', color: f.score>=80?'#22c55e': f.score>=60?'#f59e0b':'#ef4444'}}>{f.score}</p>
                    <p style={{margin:0, fontSize:'10px', color:'#64748b'}}>/100</p>
                    <div style={{marginTop:'4px', width:'60px', height:'6px', background:'#f1f5f9', borderRadius:'10px', overflow:'hidden'}}><div style={{width:`${f.score}%`, height:'100%', background: f.color, borderRadius:'10px'}}></div></div>
                  </div>
                </div>
              })}
            </div>

            {/* CLICK RESULT PANEL */}
            {selected && (
              <div style={{marginTop:'16px', background:'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius:'16px', padding:'18px', color:'white', border:'1px solid #334155'}}>
                <h4 style={{margin:0, fontSize:'14px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>🔍 {selected} - Detailed Result <span style={{background:'rgba(255,255,255,0.15)', padding:'3px 10px', borderRadius:'20px', fontSize:'10px'}}>Clicked: {selected}</span></h4>
                {selected==="Skin Profile" && <p style={{margin:'10px 0 0', fontSize:'12px', lineHeight:'1.5', opacity:0.9}}>👤 {name}'s Skin Profile: Type {skinType} ({skinType==="Dry"?"Needs HA + Ceramides":"Needs Niacinamide"}), Age {ageGroup}, Concerns {concerns.join(', ')}, Allergies {allergies}, Sensitivity {sensitivity}. Weightage 35% me se score: {factors[0].score}/100. Recommendation: {skinType==="Dry"?"Cream cleanser + HA serum + Ceramide moisturizer":"Foaming cleanser + Niacinamide + Light moisturizer"}.</p>}
                {selected==="Lifestyle" && <p style={{margin:'10px 0 0', fontSize:'12px', lineHeight:'1.5', opacity:0.9}}>🏃 Lifestyle: Exercise Regular, Non-smoker, Healthy diet, Water {waterIntake}L/day, Sun exposure moderate. Good lifestyle = +15 points in 20% weightage. Current score {factors[1].score}/100. Tip: Continue exercise 5x/week, water 3L target.</p>}
                {selected==="Sleep" && <p style={{margin:'10px 0 0', fontSize:'12px', lineHeight:'1.5', opacity:0.9}}>😴 Sleep: {sleepHours}h per night, Quality {sleepQuality}, Bedtime 11 PM, Wake 7 AM, Consistency 85%. Sleep 7-8h ideal for collagen repair. Score {factors[2].score}/100 in 15% weightage. {sleepHours>=7?"Good sleep = Glowing skin!":"Need 7-8h for best results - Dark circles reduce."}</p>}
                {selected==="Routine" && <p style={{margin:'10px 0 0', fontSize:'12px', lineHeight:'1.5', opacity:0.9}}>🌸 Routine: Adherence {routineAdh}% - Morning 4 steps, Evening 4 steps, Weekly treatments. High adherence = Better results. Score {factors[3].score}/100 in 20% weightage. Continue checklist daily.</p>}
                {selected==="Hydration" && <p style={{margin:'10px 0 0', fontSize:'12px', lineHeight:'1.5', opacity:0.9}}>💧 Hydration: Water {waterIntake}L/day (Target 3L), Hydration level {hydration}%, Moisturizer twice daily. Hydrated skin = Plump, glowing. Score {factors[4].score}/100 in 10% weightage. Drink 3L daily for +10 points.</p>}
                <div style={{marginTop:'12px', display:'flex', gap:'8px'}}><span style={{background:'rgba(255,255,255,0.1)', padding:'4px 12px', borderRadius:'20px', fontSize:'10px'}}>Weightage: {factors.find(f=>f.name===selected)?.weight}</span><span style={{background:'rgba(34,197,94,0.2)', padding:'4px 12px', borderRadius:'20px', fontSize:'10px'}}>Score: {factors.find(f=>f.name===selected)?.score}/100</span><button onClick={()=>setSelected(null)} style={{background:'rgba(255,255,255,0.15)', border:'none', color:'white', padding:'4px 12px', borderRadius:'20px', fontSize:'10px', cursor:'pointer'}}>✕ Close</button></div>
              </div>
            )}
          </div>

          {/* AI INSIGHTS */}
          <div style={{background:'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)', border:'1px solid #e9d5ff', borderRadius:'18px', padding:'18px'}}>
            <h4 style={{margin:0, fontSize:'14px', fontWeight:'800', color:'#581c87', display:'flex', alignItems:'center', gap:'8px'}}>🧠 AI Insights & Predictions <span style={{background:'#7c3aed', color:'white', padding:'3px 8px', borderRadius:'20px', fontSize:'10px'}}>For {name}</span></h4>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'14px'}}>
              {aiInsights.map((insight,i)=><div key={i} style={{background:'white', border:'1px solid #e9d5ff', padding:'12px', borderRadius:'12px', display:'flex', gap:'10px', alignItems:'start'}}>
                <span style={{fontSize:'18px'}}>{insight.icon}</span>
                <div><p style={{margin:0, fontSize:'11px', fontWeight:'800', color:'#581c87'}}>{insight.title}</p><p style={{margin:'4px 0 0', fontSize:'11px', color:'#7c3aed', lineHeight:'1.3'}}>{insight.desc}</p></div>
              </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* FINAL RESULT - MAGICAL */}
      <div style={{marginTop:'18px', background:'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)', borderRadius:'20px', padding:'20px', color:'white', position:'relative', overflow:'hidden', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{position:'absolute', top:'-20px', right:'60px', width:'80px', height:'80px', background:'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius:'50%', opacity:0.12}}></div>
        <div style={{position:'relative'}}>
          <h4 style={{margin:0, fontSize:'15px', fontWeight:'800', display:'flex', alignItems:'center', gap:'10px'}}>✅ AI Assessment Complete - {name} <span style={{background:'linear-gradient(135deg, #22c55e, #16a34a)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>Score {score}/100</span></h4>
          <p style={{margin:'8px 0 0', fontSize:'12px', opacity:0.9, lineHeight:'1.4'}}>35% Skin ({factors[0].score}) + 20% Lifestyle ({factors[1].score}) + 15% Sleep ({factors[2].score}) + 20% Routine ({factors[3].score}) + 10% Hydration ({factors[4].score}) = <b>{score}/100</b> • +{(score-60).toFixed(1)} improvement • All factors clickable for detailed result ✨</p>
        </div>
        <div style={{background:'white', color:'#0f172a', padding:'12px 18px', borderRadius:'14px', textAlign:'center', position:'relative'}}>
          <p style={{margin:0, fontSize:'10px', fontWeight:'700', color:'#64748b'}}>FINAL SCORE</p>
          <p style={{margin:0, fontSize:'22px', fontWeight:'900'}}>{score}/100 🧠</p>
        </div>
      </div>

    </Card></Wrap>); }
    if(page==='ingredients'){
    const ingredients = [
      {name:"Hyaluronic Acid", icon:"💧", rating:"5/5", safe:"Safe", forType:"All", forConcern:"Dryness", comedogenic:"0 - Non-comedogenic", benefit:"Deep hydration, plumping", color:"#0ea5e9", status:"Recommended", desc:"Holds 1000x water"},
      {name:"Niacinamide", icon:"✨", rating:"5/5", safe:"Safe", forType:"Oily, Acne", forConcern:"Acne, Pores, Dark Spots", comedogenic:"0", benefit:"Oil control + Brightening", color:"#8b5cf6", status:"Top Pick for You", desc:"Vitamin B3 - Your skin loves it"},
      {name:"Retinol", icon:"⭐", rating:"4/5", safe:"Caution", forType:"Normal", forConcern:"Aging, Texture", comedogenic:"0", benefit:"Anti-aging, cell turnover", color:"#f59e0b", status:"Use PM only", desc:"Start 0.3% 3x/week"},
      {name:"Salicylic Acid", icon:"🧪", rating:"4/5", safe:"Safe for you", forType:"Oily", forConcern:"Acne, Blackheads", comedogenic:"0", benefit:"Unclogs pores", color:"#22c55e", status:"2x/week", desc:"BHA 2% best"},
      {name:"Vitamin C", icon:"🍊", rating:"5/5", safe:"Safe", forType:"All", forConcern:"Dark Spots, Dullness", comedogenic:"0", benefit:"Brightening + Antioxidant", color:"#f97316", status:"AM must", desc:"15% L-Ascorbic best"},
      {name:"Ceramides", icon:"🛡️", rating:"5/5", safe:"Safe", forType:"Dry", forConcern:"Barrier, Dryness", comedogenic:"0", benefit:"Barrier repair", color:"#6366f1", status:"Must for Dry skin", desc:"For your Dry skin essential"},
      {name:"Fragrance", icon:"🌸", rating:"1/5", safe:"Avoid", forType:"Sensitive", forConcern:"Allergy", comedogenic:"3", benefit:"None", color:"#ef4444", status:"❌ Avoid - Your allergy", desc:"You have sensitivity"},
      {name:"Coconut Oil", icon:"🥥", rating:"2/5", safe:"Avoid", forType:"Dry only", forConcern:"Dryness", comedogenic:"4 - High", benefit:"Moisturizing", color:"#ef4444", status:"❌ Comedogenic", desc:"Clogs pores for Acne-prone"}
    ];

    const getDetail = (ingName) => {
      const ing = ingredients.find(i=>i.name===ingName);
      if(!ing) return null;
      if(ing.name==="Niacinamide") return {
        inci:"Niacinamide", also:"Vitamin B3, Nicotinamide",
        works:"Regulates oil, shrinks pores, fades dark spots, strengthens barrier. Perfect for your Oily? No you are Dry but still safe, Acne, Dark Spots concerns.",
        how:"AM + PM - 5-10% serum - After toner - Before moisturizer",
        side:"Rare flushing if >10% - Start 5%",
        alt:"For oil: Zinc PCA - For bright: Alpha Arbutin",
        products:["The Ordinary Niacinamide 10%", "Minimalist Niacinamide 10%", "Plum Niacinamide Serum"],
        scoreImpact:"+10 points for Acne + Dark Spots"
      };
      if(ing.name==="Hyaluronic Acid") return {
        inci:"Hyaluronic Acid, Sodium Hyaluronate", also:"HA, Hyaluronan",
        works:"Holds 1000x water, plumps skin, hydrates deep layers. Essential for your Dry skin - Your hydration 75% will become 90%+",
        how:"AM + PM - On damp skin - 2% serum - Follow with moisturizer to lock",
        side:"None - Very safe",
        alt:"Glycerin, Polyglutamic Acid",
        products:["The Ordinary HA 2%", "Minimalist HA 2%", "L'Oreal HA Serum"],
        scoreImpact:"+12 points for Dryness + Hydration"
      };
      return {
        inci: ing.name, also:"See INCI list",
        works: ing.benefit + ` - For your ${skinType} skin, ${concerns.join(', ')} concerns`,
        how: "As per product - Patch test first",
        side: ing.safe==="Avoid"?"Irritation, allergy for you - Avoid": "Safe if used correctly",
        alt:"Ask for alternative in same benefit",
        products:["Check product label", "Look for INCI", "Choose as per skin type"],
        scoreImpact: ing.safe==="Safe"?"+8 to +12 points": "0 or negative if irritates"
      };
    };

    const currentDetail = selected? getDetail(selected) : null;

    return (<Wrap><Card>
      {/* PREMIUM HEADER */}
      <div style={{background:'linear-gradient(135deg, #064e3b 0%, #065f46 30%, #10b981 70%, #34d399 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-20px', right:'-20px', width:'120px', height:'120px', background:'rgba(255,255,255,0.1)', borderRadius:'50%'}}></div>
        <div style={{position:'absolute', top:'20px', right:'130px', fontSize:'10px'}}>🧪</div>
        <div style={{position:'absolute', top:'40px', right:'100px', fontSize:'14px'}}>💧</div>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800', display:'flex', alignItems:'center', gap:'12px', position:'relative'}}>🧪 Ingredient Intelligence <span style={{background:'rgba(255,255,255,0.15)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>INCI DECODER • For {name}</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.9, position:'relative'}}>Click any ingredient - Safe? Comedogenic? Benefit? For your {skinType} skin? Full report ✨ • Allergies: {allergies}</p>
        <div style={{display:'flex', gap:'10px', marginTop:'16px', position:'relative', flexWrap:'wrap'}}>
          <span style={{background:'rgba(34,197,94,0.25)', border:'1px solid rgba(34,197,94,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>✅ 5 Safe for {skinType}</span>
          <span style={{background:'rgba(239,68,68,0.25)', border:'1px solid rgba(239,68,68,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>❌ 2 Avoid - Your {allergies}</span>
          <span style={{background:'rgba(255,255,255,0.15)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>🧠 Comedogenic Rating 0-5</span>
          <span style={{background:'rgba(245,158,11,0.25)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>⭐ Personalized for {concerns.join(', ')}</span>
        </div>
      </div>

      {/* INGREDIENT GRID */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'12px'}}>
        {ingredients.map(ing=>{
          const isActive = selected===ing.name;
          const isSafe = ing.safe.includes("Safe");
          const isAvoid = ing.safe.includes("Avoid");
          return <div key={ing.name} onClick={()=>setSelected(isActive?null:ing.name)} style={{
            background: isActive? (isAvoid?'linear-gradient(135deg, #fef2f2, #fee2e2)': isSafe?'linear-gradient(135deg, #f0fdf4, #dcfce7)':'linear-gradient(135deg, #fffbeb, #fef3c7)') : 'white',
            border: isActive? `2px solid ${ing.color}` : '1px solid #e2e8f0',
            borderRadius:'16px', padding:'14px', cursor:'pointer',
            transform: isActive?'scale(1.05) translateY(-3px)':'scale(1)',
            boxShadow: isActive?`0 12px 24px ${ing.color}20`:'0 2px 8px rgba(0,0,0,0.03)',
            transition:'all 0.25s', position:'relative', overflow:'hidden'
          }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
              <div style={{width:'40px', height:'40px', background: ing.color, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', color:'white'}}>{ing.icon}</div>
              <span style={{background: isAvoid?'#ef4444': isSafe?'#22c55e':'#f59e0b', color:'white', padding:'3px 8px', borderRadius:'20px', fontSize:'9px', fontWeight:'700'}}>{ing.safe}</span>
            </div>
            <h4 style={{margin:'10px 0 0', fontSize:'13px', fontWeight:'800'}}>{ing.name}</h4>
            <p style={{margin:'4px 0 0', fontSize:'10px', color:'#64748b', lineHeight:'1.3'}}>{ing.desc}</p>
            <div style={{marginTop:'8px', display:'flex', flexDirection:'column', gap:'4px'}}>
              <span style={{fontSize:'9px', background:'#f1f5f9', padding:'3px 8px', borderRadius:'20px'}}>Rating: {ing.rating} • Comedogenic: {ing.comedogenic}</span>
              <span style={{fontSize:'9px', background: ing.color, color:'white', padding:'3px 8px', borderRadius:'20px', fontWeight:'600'}}>{ing.status}</span>
            </div>
            <div style={{marginTop:'8px', background: isActive?'rgba(0,0,0,0.05)':'#f8fafc', padding:'5px', borderRadius:'20px', textAlign:'center', fontSize:'10px', fontWeight:'700'}}>{isActive?'▼ Full Report Open':'▶ Click for INCI report →'}</div>
          </div>
        })}
      </div>

      {/* DETAILED REPORT WHEN CLICKED */}
      {selected && currentDetail && (
        <div style={{marginTop:'20px', background:'white', border:'2px solid #0f172a', borderRadius:'20px', overflow:'hidden', boxShadow:'0 20px 40px rgba(0,0,0,0.12)'}}>
          <div style={{background: ingredients.find(i=>i.name===selected)?.color, padding:'20px 24px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <h3 style={{margin:0, fontSize:'20px', fontWeight:'800', display:'flex', alignItems:'center', gap:'10px'}}>
                {ingredients.find(i=>i.name===selected)?.icon} {selected} - Full Intelligence Report
                <span style={{background:'rgba(255,255,255,0.2)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>{ingredients.find(i=>i.name===selected)?.safe} • {ingredients.find(i=>i.name===selected)?.rating}</span>
              </h3>
              <p style={{margin:'6px 0 0', fontSize:'12px', opacity:0.9}}>INCI: {currentDetail.inci} • Also called: {currentDetail.also} • For {name}'s {skinType} skin • Allergies: {allergies} • Score impact: {currentDetail.scoreImpact}</p>
            </div>
            <button onClick={()=>setSelected(null)} style={{background:'rgba(255,255,255,0.2)', border:'none', color:'white', width:'36px', height:'36px', borderRadius:'50%', cursor:'pointer', fontSize:'16px', fontWeight:'700'}}>✕</button>
          </div>

          <div style={{padding:'22px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px'}}>
            <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
              <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'13px', fontWeight:'800', display:'flex', alignItems:'center', gap:'6px'}}>🔬 What it does? <span style={{background:'#0f172a', color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'10px'}}>For {skinType}</span></h4>
                <p style={{margin:'8px 0 0', fontSize:'12px', color:'#0f172a', lineHeight:'1.5'}}>{currentDetail.works}</p>
                <div style={{marginTop:'10px', display:'flex', gap:'6px', flexWrap:'wrap'}}>
                  <span style={{background:'#f0fdf4', border:'1px solid #bbf7d0', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>For: {ingredients.find(i=>i.name===selected)?.forType}</span>
                  <span style={{background:'#eef2ff', border:'1px solid #c7d2fe', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>Concern: {ingredients.find(i=>i.name===selected)?.forConcern}</span>
                  <span style={{background:'#fffbeb', border:'1px solid #fde68a', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>Comedogenic: {ingredients.find(i=>i.name===selected)?.comedogenic}</span>
                </div>
              </div>

              <div style={{background:'linear-gradient(135deg, #f0fdf4, #dcfce7)', border:'1px solid #bbf7d0', borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'13px', fontWeight:'800', color:'#166534'}}>✅ How to use? + Products</h4>
                <p style={{margin:'8px 0 0', fontSize:'11px', color:'#15803d', lineHeight:'1.4'}}><b>How:</b> {currentDetail.how}</p>
                <div style={{marginTop:'10px'}}>
                  <p style={{margin:0, fontSize:'11px', fontWeight:'700', color:'#166534'}}>Recommended Products for you:</p>
                  <div style={{marginTop:'6px', display:'flex', flexDirection:'column', gap:'4px'}}>
                    {currentDetail.products.map((p,i)=><div key={i} style={{background:'white', padding:'6px 10px', borderRadius:'20px', fontSize:'11px', border:'1px solid #bbf7d0'}}>✓ {p}</div>)}
                  </div>
                </div>
              </div>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
              <div style={{background:'linear-gradient(135deg, #fffbeb, #fef3c7)', border:'1px solid #fde68a', borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'13px', fontWeight:'800', color:'#92400e'}}>⚠️ Side effects + Safety for you</h4>
                <p style={{margin:'8px 0 0', fontSize:'11px', color:'#b45309', lineHeight:'1.4'}}>{currentDetail.side}</p>
                <p style={{margin:'8px 0 0', fontSize:'11px', fontWeight:'600', color:'#92400e'}}>Your allergies: {allergies} - {ingredients.find(i=>i.name===selected)?.name==="Fragrance"?"❌ AVOID - You have allergy - Will cause reaction":"✅ Safe - No fragrance"}</p>
              </div>

              <div style={{background:'linear-gradient(135deg, #f5f3ff, #ede9fe)', border:'1px solid #ddd6fe', borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'13px', fontWeight:'800', color:'#5b21b6'}}>🔄 Alternatives + Score</h4>
                <p style={{margin:'8px 0 0', fontSize:'11px', color:'#6d28d9', lineHeight:'1.4'}}><b>Alt:</b> {currentDetail.alt}</p>
                <div style={{marginTop:'10px', background:'white', borderRadius:'10px', padding:'10px', border:'1px solid #ddd6fe'}}>
                  <p style={{margin:0, fontSize:'11px', fontWeight:'700', color:'#5b21b6'}}>📊 Impact on your Score {score}/100:</p>
                  <p style={{margin:'4px 0 0', fontSize:'12px', color:'#7c3aed', fontWeight:'700'}}>{currentDetail.scoreImpact}</p>
                  <p style={{margin:'4px 0 0', fontSize:'10px', color:'#64748b'}}>{ingredients.find(i=>i.name===selected)?.safe==="Avoid"?"Avoiding this will protect your score from dropping - Choose alternative":"Using this will increase your score - Good choice for "+ skinType}</p>
                </div>
              </div>

              <div style={{background:'#0f172a', borderRadius:'14px', padding:'14px', color:'white'}}>
                <p style={{margin:0, fontSize:'12px', fontWeight:'700'}}>🧠 AI Verdict for {name}</p>
                <p style={{margin:'6px 0 0', fontSize:'11px', opacity:0.9, lineHeight:'1.4'}}>
                  {ingredients.find(i=>i.name===selected)?.safe.includes("Avoid")?
                    `❌ AVOID ${selected} - For your ${skinType} skin with ${allergies} allergy + ${concerns.join(', ')} - Comedogenic ${ingredients.find(i=>i.name===selected)?.comedogenic} - Will clog pores + cause breakouts - Score will drop.`:
                    `✅ USE ${selected} - Perfect for your ${skinType} skin - ${ingredients.find(i=>i.name===selected)?.benefit} - Safe for ${allergies} - Comedogenic ${ingredients.find(i=>i.name===selected)?.comedogenic} - Will boost score to 85+`}
                </p>
                <div style={{marginTop:'10px', display:'flex', gap:'6px'}}><span style={{background:'rgba(255,255,255,0.1)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>{ingredients.find(i=>i.name===selected)?.status}</span><span style={{background:'rgba(34,197,94,0.2)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>{currentDetail.scoreImpact}</span></div>
              </div>
            </div>
          </div>

          <div style={{padding:'0 22px 22px 22px'}}>
            <div style={{background:'linear-gradient(135deg, #0f172a, #1e293b)', color:'white', padding:'16px', borderRadius:'14px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div><p style={{margin:0, fontSize:'13px', fontWeight:'700'}}>✅ {selected} Intelligence Complete for {name} • {skinType} • {concerns.join(', ')}</p><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.8}}>INCI: {currentDetail.inci} • Safe: {ingredients.find(i=>i.name===selected)?.safe} • Comedogenic: {ingredients.find(i=>i.name===selected)?.comedogenic} • Score {score}/100</p></div>
              <button onClick={()=>setSelected(null)} style={{background:'#22c55e', color:'white', border:'none', padding:'8px 16px', borderRadius:'20px', fontWeight:'700', cursor:'pointer', fontSize:'12px'}}>✓ Got it</button>
            </div>
          </div>
        </div>
      )}

      {!selected && (
        <div style={{marginTop:'18px', background:'linear-gradient(135deg, #f0fdf4, #dcfce7)', border:'1px solid #bbf7d0', borderRadius:'18px', padding:'18px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div><h4 style={{margin:0, fontSize:'14px', fontWeight:'800', color:'#166534'}}>💡 Click any ingredient card above to see full INCI report + Safe for you? + Comedogenic? ✨</h4><p style={{margin:'6px 0 0', fontSize:'12px', color:'#15803d'}}>8 ingredients analyzed • 5 safe for your {skinType} skin + {concerns.join(', ')} • 2 avoid due to {allergies} allergy + comedogenic • Personalized for {name} • Score {score}/100</p></div>
          <div style={{background:'white', padding:'12px 18px', borderRadius:'14px', textAlign:'center', border:'1px solid #bbf7d0'}}><p style={{margin:0, fontSize:'10px', color:'#166534', fontWeight:'700'}}>INGREDIENTS</p><p style={{margin:0, fontSize:'16px', fontWeight:'800', color:'#166534'}}>8 Analyzed 🧪</p></div>
        </div>
      )}

    </Card></Wrap>); }
    if(page==='products'){
    const allProducts = [
      {id:1, name:"CeraVe Foaming Cleanser", category:"Cleanser", icon:"🧼", price:1200, mrp:1500, rating:4.6, reviews:2340, forType:"All", forConcern:"Acne, Oil", safe:"Safe", brand:"CeraVe", color:"#3b82f6", status:"Best for you", concern:"Acne", desc:"Removes oil without stripping"},
      {id:2, name:"La Roche-Posay SPF 50", category:"Sunscreen", icon:"☀️", price:1850, mrp:2200, rating:4.8, reviews:4520, forType:"All", forConcern:"Sun protection", safe:"Safe", brand:"La Roche-Posay", color:"#f59e0b", status:"Top SPF", concern:"Sun", desc:"Matte, no white cast, PA++++"},
      {id:3, name:"Minimalist Niacinamide 10%", category:"Serum", icon:"✨", price:599, mrp:799, rating:4.5, reviews:18900, forType:"Oily, Acne", forConcern:"Acne, Dark Spots, Pores", safe:"Safe", brand:"Minimalist", color:"#8b5cf6", status:"Your Top Pick", concern:"Acne", desc:"For your Acne + Dark Spots"},
      {id:4, name:"The Ordinary HA 2%", category:"Serum", icon:"💧", price:650, mrp:850, rating:4.4, reviews:12400, forType:"Dry", forConcern:"Dryness", safe:"Safe", brand:"The Ordinary", color:"#06b6d4", status:"Must for Dry", concern:"Dryness", desc:"Holds 1000x water - Your Dry skin needs"},
      {id:5, name:"Cetaphil Rich Moisturizer", category:"Moisturizer", icon:"🧴", price:950, mrp:1200, rating:4.3, reviews:5600, forType:"Dry", forConcern:"Barrier, Dryness", safe:"Safe", brand:"Cetaphil", color:"#22c55e", status:"For Dry skin", concern:"Dryness", desc:"Ceramide + Hydrating"},
      {id:6, name:"Plum Green Tea SPF 50", category:"Sunscreen", icon:"🌿", price:450, mrp:575, rating:4.2, reviews:8900, forType:"Oily", forConcern:"Acne, Sun", safe:"Safe", brand:"Plum", color:"#10b981", status:"Budget SPF", concern:"Acne", desc:"Affordable, acne-safe, gel-based"},
      {id:7, name:"Dot & Key Vitamin C 15%", category:"Serum", icon:"🍊", price:750, mrp:995, rating:4.4, reviews:6700, forType:"All", forConcern:"Dark Spots, Dullness", safe:"Safe", brand:"Dot & Key", color:"#f97316", status:"Brightening", concern:"Dark Spots", desc:"For your Dark Spots"},
      {id:8, name:"Bioderma Sensibio Micellar", category:"Cleanser", icon:"💦", price:1100, mrp:1350, rating:4.7, reviews:3400, forType:"Sensitive", forConcern:"Sensitive, Makeup", safe:"Safe", brand:"Bioderma", color:"#ec4899", status:"Sensitive safe", concern:"Sensitivity", desc:"No rinse, for sensitive"},
      {id:9, name:"Aqualogica Glow SPF 50", category:"Sunscreen", icon:"☀️", price:399, mrp:499, rating:4.1, reviews:12000, forType:"All", forConcern:"Sun, Glow", safe:"Safe", brand:"Aqualogica", color:"#eab308", status:"Under ₹500", concern:"Sun", desc:"Watermelon glow, dewy"},
      {id:10, name:"L'Oreal Revitalift Retinol", category:"Night", icon:"⭐", price:999, mrp:1299, rating:4.3, reviews:4500, forType:"Normal", forConcern:"Aging", safe:"Caution", brand:"L'Oreal", color:"#7c3aed", status:"PM only", concern:"Aging", desc:"Retinol 0.3% beginner"},
      {id:11, name:"Nivea Soft Cream", category:"Moisturizer", icon:"🧴", price:299, mrp:350, rating:4.0, reviews:21000, forType:"Dry", forConcern:"Dryness", safe:"Avoid - Fragrance", brand:"Nivea", color:"#ef4444", status:"❌ Has fragrance", concern:"Fragrance", desc:"Has fragrance - Your allergy"},
      {id:12, name:"Premium Korean Set - Full Routine", category:"Kit", icon:"🎁", price:8500, mrp:12000, rating:4.9, reviews:890, forType:"All", forConcern:"All concerns", safe:"Safe", brand:"Korean Premium", color:"#0f172a", status:"Luxury Kit ₹8500", concern:"All", desc:"10 products - Cleanser to SPF - Full routine - Worth ₹10000"}
    ];

    const priceRanges = [
      {label:"Under ₹500", min:0, max:500, count: allProducts.filter(p=>p.price<=500).length},
      {label:"₹500 - ₹1000", min:500, max:1000, count: allProducts.filter(p=>p.price>500 && p.price<=1000).length},
      {label:"₹1000 - ₹2000", min:1000, max:2000, count: allProducts.filter(p=>p.price>1000 && p.price<=2000).length},
      {label:"₹2000 - ₹5000", min:2000, max:5000, count: allProducts.filter(p=>p.price>2000 && p.price<=5000).length},
      {label:"₹5000 - ₹10000", min:5000, max:10000, count: allProducts.filter(p=>p.price>=5000).length},
    ];

    const filtered = allProducts.filter(p=>{
      if(priceFilter && (p.price < priceFilter.min || p.price > priceFilter.max)) return false;
      if(categoryFilter && p.category!==categoryFilter) return false;
      return true;
    });

    const getAnalysis = (prod) => {
      if(!prod) return null;
      return {
        compatibility: prod.safe.includes("Avoid")? 20 : prod.forType.includes(skinType) || prod.forType==="All"? 95 : 60,
        allergy: prod.safe.includes("Avoid")? `❌ Contains ${allergies} - AVOID - Will cause allergy for ${name}` : `✅ Safe - No ${allergies} - Good for ${name}`,
        skinMatch: `For ${skinType} skin: ${prod.forType.includes(skinType) || prod.forType==="All"?"Perfect match":"Ok but not ideal"} - Your type ${skinType}`,
        concernMatch: `For ${concerns.join(', ')}: ${prod.forConcern.includes(concerns[0]) || prod.concern==="All"?"Excellent for your main concern "+concerns[0]:"Helps with general care"}`,
        priceAnalysis: `Price ₹${prod.price} - MRP ₹${prod.mrp} - Save ₹${prod.mrp-prod.price} (${Math.round((prod.mrp-prod.price)/prod.mrp*100)}% off) - ${prod.price<=500?"Budget friendly": prod.price<=1000?"Affordable": prod.price<=2000?"Mid-range":"Premium"} - Within your ₹10000 range`,
        ingredients: prod.category==="Sunscreen"?"SPF 50 PA++++, No fragrance, Non-comedogenic 0, For Acne-safe": prod.category==="Serum" && prod.name.includes("Niacinamide")?"Niacinamide 10% + Zinc 1%, No fragrance, Safe": "HA 2% + B5, Ceramides, Safe - Check INCI",
        routinePlace: prod.category==="Cleanser"?"Step 1 Morning & Evening - 60 sec" : prod.category==="Sunscreen"?"Step 5 Morning - Must - Reapply 3h - Most important" : prod.category==="Serum"?"Step 3 - After toner - 2-3 drops" : "Step 4 - Pea size - Lock hydration",
        scoreImpact: prod.safe.includes("Avoid")?"-10 points - Avoid - Will irritate": `+${prod.category==="Sunscreen"?"15": prod.category==="Serum"?"12":"8"} points - ${prod.status} - Will boost ${score} to ${ (parseFloat(score)+ (prod.safe.includes("Avoid")?-10: prod.category==="Sunscreen"?15:12)).toFixed(1) }`
      };
    };

    const analysis = selected? getAnalysis(allProducts.find(p=>p.id===selected)) : null;
    const selectedProd = selected? allProducts.find(p=>p.id===selected) : null;

    return (<Wrap><Card>
      {/* PREMIUM HEADER */}
      <div style={{background:'linear-gradient(135deg, #7c2d12 0%, #9a3412 30%, #ea580c 70%, #f97316 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-20px', right:'-20px', width:'100px', height:'100px', background:'rgba(255,255,255,0.1)', borderRadius:'50%'}}></div>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800', display:'flex', alignItems:'center', gap:'12px', position:'relative'}}>🛒 Product Recommendations <span style={{background:'rgba(255,255,255,0.15)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>₹0 - ₹10000 • For {name}</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.9, position:'relative'}}>Click any product - See suncream price ₹399 to ₹1850 - Select to analyze - Budget filter upto ₹10000 ✨ • {skinType} • {concerns.join(', ')} • Allergies: {allergies}</p>
        <div style={{display:'flex', gap:'8px', marginTop:'16px', position:'relative', flexWrap:'wrap'}}>
          <span style={{background:'rgba(255,255,255,0.15)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>💰 Range ₹299 - ₹8500</span>
          <span style={{background:'rgba(34,197,94,0.25)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>✅ Safe for {skinType}</span>
          <span style={{background:'rgba(245,158,11,0.25)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>☀️ Suncreams ₹399-₹1850 - Click to see</span>
          <span style={{background:'rgba(255,255,255,0.15)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>🎯 For {concerns.join(', ')}</span>
        </div>
      </div>

      {/* FILTERS - PRICE + CATEGORY */}
      <div style={{display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:'14px', marginBottom:'16px'}}>
        <div style={{background:'#fff7ed', border:'1px solid #fed7aa', borderRadius:'14px', padding:'14px'}}>
          <h4 style={{margin:0, fontSize:'12px', fontWeight:'800', color:'#9a3412'}}>💰 Price Filter - Upto ₹10000 <span style={{background:'#ea580c', color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'10px'}}>{filtered.length} products</span></h4>
          <div style={{display:'flex', gap:'6px', marginTop:'10px', flexWrap:'wrap'}}>
            <button onClick={()=>{setPriceFilter(null); setCategoryFilter(null);}} style={{padding:'6px 12px', borderRadius:'20px', border: !priceFilter?'2px solid #ea580c':'1px solid #fed7aa', background: !priceFilter?'#ea580c':'white', color: !priceFilter?'white':'#9a3412', fontSize:'11px', fontWeight:'600', cursor:'pointer'}}>All ₹0-10000 ({allProducts.length})</button>
            {priceRanges.map(r=><button key={r.label} onClick={()=>setPriceFilter({min:r.min, max:r.max})} style={{padding:'6px 12px', borderRadius:'20px', border: priceFilter?.min===r.min?'2px solid #ea580c':'1px solid #fed7aa', background: priceFilter?.min===r.min?'#ea580c':'white', color: priceFilter?.min===r.min?'white':'#9a3412', fontSize:'11px', fontWeight:'600', cursor:'pointer'}}>{r.label} ({r.count})</button>)}
          </div>
        </div>
        <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'14px', padding:'14px'}}>
          <h4 style={{margin:0, fontSize:'12px', fontWeight:'800'}}>📦 Category</h4>
          <div style={{display:'flex', gap:'6px', marginTop:'10px', flexWrap:'wrap'}}>
            {["All", "Cleanser", "Sunscreen", "Serum", "Moisturizer"].map(c=><button key={c} onClick={()=>setCategoryFilter(c==="All"?null:c)} style={{padding:'6px 10px', borderRadius:'20px', border: (categoryFilter===c || (!categoryFilter && c==="All"))?'2px solid #0f172a':'1px solid #e2e8f0', background: (categoryFilter===c || (!categoryFilter && c==="All"))?'#0f172a':'white', color: (categoryFilter===c || (!categoryFilter && c==="All"))?'white':'#0f172a', fontSize:'11px', fontWeight:'600', cursor:'pointer'}}>{c}</button>)}
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'12px'}}>
        {filtered.map(prod=>{
          const isActive = selected===prod.id;
          const isAvoid = prod.safe.includes("Avoid");
          return <div key={prod.id} onClick={()=>setSelected(isActive?null:prod.id)} style={{
            background: isActive? (isAvoid?'#fef2f2':'#f0fdf4') : 'white',
            border: isActive? `2px solid ${prod.color}` : '1px solid #e2e8f0',
            borderRadius:'16px', overflow:'hidden', cursor:'pointer',
            transform: isActive?'scale(1.03) translateY(-2px)':'scale(1)',
            boxShadow: isActive?`0 12px 24px ${prod.color}20`:'0 2px 8px rgba(0,0,0,0.04)',
            transition:'all 0.25s'
          }}>
            <div style={{background: `linear-gradient(135deg, ${prod.color}15, ${prod.color}05)`, padding:'12px', display:'flex', justifyContent:'space-between', alignItems:'start'}}>
              <div style={{width:'40px', height:'40px', background:prod.color, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', color:'white'}}>{prod.icon}</div>
              <div style={{textAlign:'right'}}>
                <div style={{background: isAvoid?'#ef4444':prod.color, color:'white', padding:'3px 8px', borderRadius:'20px', fontSize:'9px', fontWeight:'700'}}>{prod.safe}</div>
                <div style={{marginTop:'4px', fontSize:'10px', color:'#64748b'}}>⭐ {prod.rating} ({prod.reviews})</div>
              </div>
            </div>
            <div style={{padding:'12px'}}>
              <p style={{margin:0, fontSize:'9px', color:prod.color, fontWeight:'800', letterSpacing:'0.5px'}}>{prod.brand} • {prod.category.toUpperCase()}</p>
              <h4 style={{margin:'4px 0 0', fontSize:'12px', fontWeight:'800', lineHeight:'1.3'}}>{prod.name}</h4>
              <p style={{margin:'4px 0 0', fontSize:'10px', color:'#64748b', lineHeight:'1.3'}}>{prod.desc}</p>
              <div style={{marginTop:'8px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <span style={{fontSize:'16px', fontWeight:'900', color:'#0f172a'}}>₹{prod.price}</span>
                  <span style={{fontSize:'10px', color:'#94a3b8', textDecoration:'line-through', marginLeft:'6px'}}>₹{prod.mrp}</span>
                  <span style={{fontSize:'9px', background:'#22c55e', color:'white', padding:'2px 6px', borderRadius:'20px', marginLeft:'6px'}}>{Math.round((prod.mrp-prod.price)/prod.mrp*100)}% OFF</span>
                </div>
              </div>
              <div style={{marginTop:'6px', display:'flex', gap:'4px', flexWrap:'wrap'}}>
                <span style={{fontSize:'9px', background:'#f1f5f9', padding:'2px 6px', borderRadius:'20px'}}>{prod.forType}</span>
                <span style={{fontSize:'9px', background:prod.color, color:'white', padding:'2px 6px', borderRadius:'20px'}}>{prod.status}</span>
              </div>
              <div style={{marginTop:'8px', background: isActive?'#0f172a':'#f8fafc', color: isActive?'white':'#0f172a', padding:'6px', borderRadius:'20px', textAlign:'center', fontSize:'10px', fontWeight:'700'}}>{isActive?'▼ Price + Analysis Open':'▶ Click - See ₹'+prod.price+' + Analyze →'}</div>
            </div>
          </div>
        })}
      </div>

      {/* DETAILED ANALYSIS WHEN SELECTED */}
      {selected && selectedProd && analysis && (
        <div style={{marginTop:'20px', background:'white', border:'2px solid #0f172a', borderRadius:'20px', overflow:'hidden', boxShadow:'0 20px 40px rgba(0,0,0,0.12)'}}>
          <div style={{background: selectedProd.color, padding:'20px 24px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <h3 style={{margin:0, fontSize:'20px', fontWeight:'800', display:'flex', alignItems:'center', gap:'10px'}}>
                {selectedProd.icon} {selectedProd.name} - Price ₹{selectedProd.price} - Full Analysis
                <span style={{background:'rgba(255,255,255,0.2)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>₹{selectedProd.price} • MRP ₹{selectedProd.mrp} • {selectedProd.rating}⭐</span>
              </h3>
              <p style={{margin:'6px 0 0', fontSize:'12px', opacity:0.9}}>{selectedProd.brand} • {selectedProd.category} • For {name}'s {skinType} skin • {concerns.join(', ')} • Allergies {allergies} • {selectedProd.desc} • {analysis.priceAnalysis}</p>
            </div>
            <button onClick={()=>setSelected(null)} style={{background:'rgba(255,255,255,0.2)', border:'none', color:'white', width:'36px', height:'36px', borderRadius:'50%', cursor:'pointer', fontSize:'16px', fontWeight:'700'}}>✕</button>
          </div>

          <div style={{padding:'22px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px'}}>
            <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
              <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'13px', fontWeight:'800'}}>💰 Price Details - Suncream Price Analysis Example</h4>
                <div style={{marginTop:'10px', background:'white', border:'1px solid #e2e8f0', borderRadius:'12px', padding:'12px'}}>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:'12px'}}><span>Current Price:</span><span style={{fontWeight:'800', fontSize:'18px', color:'#0f172a'}}>₹{selectedProd.price}</span></div>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', marginTop:'6px'}}><span>MRP:</span><span style={{textDecoration:'line-through'}}>₹{selectedProd.mrp}</span></div>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', marginTop:'4px'}}><span>Discount:</span><span style={{background:'#22c55e', color:'white', padding:'2px 8px', borderRadius:'20px'}}>Save ₹{selectedProd.mrp-selectedProd.price} ({Math.round((selectedProd.mrp-selectedProd.price)/selectedProd.mrp*100)}% OFF)</span></div>
                  <div style={{marginTop:'10px', padding:'8px', background:'#fff7ed', borderRadius:'8px', fontSize:'11px'}}><b>Price Category:</b> {analysis.priceAnalysis}</div>
                  <div style={{marginTop:'8px', fontSize:'10px', color:'#64748b'}}>Compare: La Roche-Posay SPF 50 ₹1850 vs Plum ₹450 vs Aqualogica ₹399 - Choose as per budget - All under ₹10000 range - Your budget friendly: ₹{selectedProd.price} {selectedProd.price<=1000?"- Affordable":"- Premium but worth"}</div>
                </div>
                <div style={{marginTop:'12px', background:'linear-gradient(135deg, #f0fdf4, #dcfce7)', border:'1px solid #bbf7d0', padding:'10px', borderRadius:'10px'}}>
                  <p style={{margin:0, fontSize:'11px', fontWeight:'700', color:'#166534'}}>💳 Where to buy:</p>
                  <p style={{margin:'4px 0 0', fontSize:'11px', color:'#15803d'}}>Nykaa, Amazon, Official site - Check best price - Price may vary - Under ₹10000 budget yes</p>
                </div>
              </div>

              <div style={{background:'linear-gradient(135deg, #f5f3ff, #ede9fe)', border:'1px solid #ddd6fe', borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'13px', fontWeight:'800', color:'#5b21b6'}}>🧪 Ingredients + Routine Place</h4>
                <p style={{margin:'8px 0 0', fontSize:'11px', color:'#6d28d9'}}><b>INCI:</b> {analysis.ingredients}</p>
                <p style={{margin:'8px 0 0', fontSize:'11px', color:'#7c3aed'}}><b>Routine:</b> {analysis.routinePlace} - For {skinType} skin</p>
                <p style={{margin:'8px 0 0', fontSize:'11px', color:'#5b21b6'}}><b>Brand:</b> {selectedProd.brand} - Rating {selectedProd.rating}⭐ ({selectedProd.reviews} reviews) - Trusted</p>
              </div>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
              <div style={{background: analysis.compatibility<50?'#fef2f2':'#f0fdf4', border:`1px solid ${analysis.compatibility<50?'#fecaca':'#bbf7d0'}`, borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'13px', fontWeight:'800', color: analysis.compatibility<50?'#991b1b':'#166534'}}>✅ Compatibility Analysis for {name}</h4>
                <div style={{marginTop:'10px', display:'flex', flexDirection:'column', gap:'8px'}}>
                  <div style={{background:'white', padding:'8px 12px', borderRadius:'20px', fontSize:'11px', display:'flex', justifyContent:'space-between'}}><span>Compatibility Score:</span><span style={{background: analysis.compatibility>=80?'#22c55e': analysis.compatibility>=50?'#f59e0b':'#ef4444', color:'white', padding:'2px 8px', borderRadius:'20px', fontWeight:'700'}}>{analysis.compatibility}% {analysis.compatibility>=80?'Excellent':'Low'}</span></div>
                  <div style={{background:'white', padding:'8px 12px', borderRadius:'10px', fontSize:'11px'}}>{analysis.allergy}</div>
                  <div style={{background:'white', padding:'8px 12px', borderRadius:'10px', fontSize:'11px'}}>{analysis.skinMatch}</div>
                  <div style={{background:'white', padding:'8px 12px', borderRadius:'10px', fontSize:'11px'}}>{analysis.concernMatch}</div>
                </div>
              </div>

              <div style={{background:'#0f172a', borderRadius:'14px', padding:'16px', color:'white'}}>
                <p style={{margin:0, fontSize:'13px', fontWeight:'800'}}>📊 AI Verdict + Score Impact</p>
                <p style={{margin:'8px 0 0', fontSize:'11px', opacity:0.9, lineHeight:'1.4'}}>{analysis.compatibility>=80?`✅ HIGHLY RECOMMENDED - ${selectedProd.name} perfect for your ${skinType} skin + ${concerns.join(', ')} - Price ₹${selectedProd.price} worth it - Safe for ${allergies}`:`❌ NOT RECOMMENDED - ${selectedProd.name} has ${allergies} - Avoid - Even though price ₹${selectedProd.price} cheap - Will harm skin`}</p>
                <div style={{marginTop:'10px', background:'rgba(255,255,255,0.1)', padding:'10px', borderRadius:'10px'}}>
                  <p style={{margin:0, fontSize:'11px', fontWeight:'700'}}>{analysis.scoreImpact}</p>
                  <p style={{margin:'4px 0 0', fontSize:'10px', opacity:0.7}}>Current {score}/100 → After using: {analysis.compatibility>=80? (parseFloat(score)+12).toFixed(1) : (parseFloat(score)-5).toFixed(1)}/100 - Choose wisely within ₹10000 budget</p>
                </div>
                <div style={{marginTop:'10px', display:'flex', gap:'6px', flexWrap:'wrap'}}>
                  <span style={{background:'rgba(255,255,255,0.15)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>₹{selectedProd.price} / ₹10000 budget</span>
                  <span style={{background:'rgba(34,197,94,0.2)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>{selectedProd.status}</span>
                  <span style={{background:selectedProd.category==="Sunscreen"?'rgba(245,158,11,0.3)':'rgba(59,130,246,0.3)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>{selectedProd.category}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{padding:'0 22px 22px 22px'}}>
            <div style={{background:'linear-gradient(135deg, #0f172a, #1e293b)', color:'white', padding:'16px', borderRadius:'14px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div><p style={{margin:0, fontSize:'13px', fontWeight:'700'}}>✅ Product Analysis Complete - {selectedProd.name} - ₹{selectedProd.price} - For {name}</p><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.8}}>{analysis.priceAnalysis} • {analysis.compatibility}% match • {analysis.allergy} • Score {score}/100 • Select karke analyze ho gaya ✨</p></div>
              <div style={{display:'flex', gap:'8px'}}><button style={{background:'white', color:'#0f172a', border:'none', padding:'8px 16px', borderRadius:'20px', fontWeight:'700', cursor:'pointer', fontSize:'12px'}}>🛒 Buy ₹{selectedProd.price}</button><button onClick={()=>setSelected(null)} style={{background:'rgba(255,255,255,0.15)', color:'white', border:'none', padding:'8px 16px', borderRadius:'20px', fontWeight:'700', cursor:'pointer', fontSize:'12px'}}>✕ Close</button></div>
            </div>
          </div>
        </div>
      )}

      {!selected && (
        <div style={{marginTop:'18px', background:'linear-gradient(135deg, #fff7ed, #ffedd5)', border:'1px solid #fed7aa', borderRadius:'18px', padding:'18px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div><h4 style={{margin:0, fontSize:'14px', fontWeight:'800', color:'#9a3412'}}>💡 Click any product - See price like Suncream ₹399, ₹450, ₹1850 - Select to analyze compatibility ✨</h4><p style={{margin:'6px 0 0', fontSize:'12px', color:'#c2410c'}}>{filtered.length} products in ₹0-₹10000 range • {priceFilter?`Filtered ${priceFilter.min}-${priceFilter.max}`:'All prices'} • Sunscreens ₹399-₹1850 • Serums ₹599-₹999 • Moisturizers ₹299-₹1200 • Kits upto ₹8500 • Personalized for {name}'s {skinType} + {concerns.join(', ')} + {allergies} safe • Score {score}/100</p></div>
          <div style={{background:'white', padding:'12px 18px', borderRadius:'14px', textAlign:'center', border:'1px solid #fed7aa'}}><p style={{margin:0, fontSize:'10px', color:'#9a3412', fontWeight:'700'}}>PRICE RANGE</p><p style={{margin:0, fontSize:'16px', fontWeight:'800', color:'#9a3412'}}>₹299-₹8500 🛒</p></div>
        </div>
      )}

    </Card></Wrap>); }
    if(page==='routine'){
    const morningSteps = [
      {step:1, name:"Cleansing", icon:"🧼", product:"CeraVe Foaming Cleanser", time:"60 sec", desc:"Remove overnight oil", color:"#3b82f6", tip:"Lukewarm water"},
      {step:2, name:"Toning", icon:"💧", product:"Niacinamide Toner", time:"30 sec", desc:"Balance pH", color:"#06b6d4", tip:"Pat gently"},
      {step:3, name:"Serum", icon:"✨", product:"Vitamin C Serum 15%", time:"60 sec", desc:"Brightening + Antioxidant", color:"#f59e0b", tip:"2-3 drops"},
      {step:4, name:"Moisturizer", icon:"🧴", product:"HA + Ceramide Moisturizer", time:"45 sec", desc:"Hydrate + Barrier", color:"#22c55e", tip:"Pea size"},
      {step:5, name:"Sunscreen", icon:"☀️", product:"SPF 50 PA+++", time:"30 sec", desc:"Sun protection must", color:"#ef4444", tip:"Reapply 3h"}
    ];
    const eveningSteps = [
      {step:1, name:"Double Cleanse", icon:"🧼", product:"Micellar Water + Cleanser", time:"90 sec", desc:"Remove makeup + SPF", color:"#8b5cf6", tip:"First oil, then foam"},
      {step:2, name:"Exfoliation", icon:"🔄", product:"BHA 2% Toner (2x/week)", time:"60 sec", desc:"Unclog pores", color:"#ec4899", tip:"Only 2x week"},
      {step:3, name:"Treatment", icon:"💊", product:"Niacinamide 10% + Zinc", time:"60 sec", desc:"Acne control", color:"#14b8a6", tip:"For Acne + Dark Spots"},
      {step:4, name:"Eye Care", icon:"👁️", product:"Caffeine Eye Serum", time:"30 sec", desc:"Reduce puffiness", color:"#6366f1", tip:"Ring finger pat"},
      {step:5, name:"Night Moisturizer", icon:"🌙", product:"Ceramide Night Cream", time:"60 sec", desc:"Repair overnight", color:"#0f172a", tip:"Thick layer"}
    ];
    const nightSteps = [
      {step:1, name:"Retinol", icon:"⭐", product:"Retinol 0.3% (Beginner)", time:"30 sec", desc:"Anti-aging, cell turnover", color:"#7c3aed", tip:"3x week only, PM only"},
      {step:2, name:"Hydration Mask", icon:"🎭", product:"HA Sleeping Mask", time:"Overnight", desc:"Deep hydration", color:"#06b6d4", tip:"2x week"},
      {step:3, name:"Lip & Neck", icon:"💋", product:"Lip Balm + Neck Cream", time:"20 sec", desc:"Often neglected areas", color:"#ec4899", tip:"SPF for neck too"}
    ];
    const weeklySteps = [
      {name:"Clay Mask", icon:"🏺", day:"Monday", time:"15 min", desc:"Oil control"},
      {name:"Sheet Mask", icon:"🎭", day:"Wednesday", time:"20 min", desc:"Hydration boost"},
      {name:"Exfoliation", icon:"✨", day:"Friday", time:"10 min", desc:"BHA/AHA"},
      {name:"Face Massage", icon:"💆", day:"Sunday", time:"10 min", desc:"Circulation"}
    ];

    const getSteps = () => {
      if(selected==='morning') return morningSteps;
      if(selected==='evening') return eveningSteps;
      if(selected==='night') return nightSteps;
      return [];
    };

    return (<Wrap><Card>
      {/* PREMIUM HEADER */}
      <div style={{background:'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 30%, #fbcfe8 60%, #f9a8d4 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'#831843', position:'relative', overflow:'hidden', borderBottom:'1px solid #fbcfe8'}}>
        <div style={{position:'absolute', top:'-20px', right:'-20px', width:'120px', height:'120px', background:'linear-gradient(135deg, #ec4899, #f43f5e)', borderRadius:'50%', opacity:0.12}}></div>
        <div style={{position:'absolute', bottom:'-30px', left:'20px', width:'80px', height:'80px', background:'linear-gradient(135deg, #f59e0b, #fbbf24)', borderRadius:'50%', opacity:0.1}}></div>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800', display:'flex', alignItems:'center', gap:'12px', position:'relative', color:'#831843'}}>🌸 Personalized Routine Generator <span style={{background:'linear-gradient(135deg, #ec4899, #be185d)', color:'white', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>For {name}</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', color:'#be185d', position:'relative'}}>Click Morning / Evening / Night - Alag alag detailed page khulega • {skinType} skin • {concerns.join(', ')} • {score}/100</p>
        <div style={{display:'flex', gap:'10px', marginTop:'16px', position:'relative', flexWrap:'wrap'}}>
          <span style={{background:'white', border:'1px solid #fbcfe8', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600', color:'#be185d'}}>☀️ Morning 5 Steps</span>
          <span style={{background:'white', border:'1px solid #fbcfe8', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600', color:'#7c3aed'}}>🌙 Evening 5 Steps</span>
          <span style={{background:'white', border:'1px solid #fbcfe8', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600', color:'#0f172a'}}>⭐ Night 3 Steps</span>
          <span style={{background:'#ec4899', color:'white', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>✨ Weekly 4 Treatments</span>
        </div>
      </div>

      {/* MAIN 3 CARDS - CLICKABLE */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'16px'}}>
        {/* MORNING CARD */}
        <div onClick={()=>setSelected(selected==='morning'?null:'morning')} style={{
          background: selected==='morning'? 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)',
          border: selected==='morning'? '2px solid #f59e0b' : '1px solid #fde68a',
          borderRadius:'20px', overflow:'hidden', cursor:'pointer',
          transform: selected==='morning'?'scale(1.03)':'scale(1)', boxShadow: selected==='morning'?'0 16px 32px rgba(245,158,11,0.2)':'0 4px 12px rgba(0,0,0,0.04)', transition:'all 0.3s'
        }}>
          <div style={{background:'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', padding:'18px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div><h3 style={{margin:0, fontSize:'18px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>☀️ Morning Routine</h3><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.9}}>5 Steps • 4 min • SPF must</p></div>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>🌅</div>
          </div>
          <div style={{padding:'16px'}}>
            {morningSteps.slice(0,3).map(s=><div key={s.step} style={{display:'flex', gap:'10px', alignItems:'center', padding:'8px 0', borderBottom:'1px solid #fef3c7'}}><div style={{width:'28px', height:'28px', background:'#f59e0b', color:'white', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:'800'}}>{s.step}</div><span style={{fontSize:'12px', fontWeight:'600'}}>{s.icon} {s.name}</span><span style={{marginLeft:'auto', fontSize:'10px', color:'#d97706', background:'#fffbeb', padding:'2px 8px', borderRadius:'20px'}}>{s.time}</span></div>)}
            <div style={{marginTop:'12px', background: selected==='morning'?'#f59e0b':'#fffbeb', color: selected==='morning'?'white':'#92400e', padding:'10px', borderRadius:'12px', textAlign:'center', fontSize:'12px', fontWeight:'700'}}>{selected==='morning'?'▼ Detailed View Open':'▶ Click to see detailed 5 steps →'}</div>
          </div>
        </div>

        {/* EVENING CARD */}
        <div onClick={()=>setSelected(selected==='evening'?null:'evening')} style={{
          background: selected==='evening'? 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)',
          border: selected==='evening'? '2px solid #7c3aed' : '1px solid #ddd6fe',
          borderRadius:'20px', overflow:'hidden', cursor:'pointer',
          transform: selected==='evening'?'scale(1.03)':'scale(1)', boxShadow: selected==='evening'?'0 16px 32px rgba(124,58,237,0.2)':'0 4px 12px rgba(0,0,0,0.04)', transition:'all 0.3s'
        }}>
          <div style={{background:'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', padding:'18px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div><h3 style={{margin:0, fontSize:'18px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>🌙 Evening Routine</h3><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.9}}>5 Steps • 5 min • Repair mode</p></div>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>🌆</div>
          </div>
          <div style={{padding:'16px'}}>
            {eveningSteps.slice(0,3).map(s=><div key={s.step} style={{display:'flex', gap:'10px', alignItems:'center', padding:'8px 0', borderBottom:'1px solid #ede9fe'}}><div style={{width:'28px', height:'28px', background:'#7c3aed', color:'white', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:'800'}}>{s.step}</div><span style={{fontSize:'12px', fontWeight:'600'}}>{s.icon} {s.name}</span><span style={{marginLeft:'auto', fontSize:'10px', color:'#7c3aed', background:'#f5f3ff', padding:'2px 8px', borderRadius:'20px'}}>{s.time}</span></div>)}
            <div style={{marginTop:'12px', background: selected==='evening'?'#7c3aed':'#f5f3ff', color: selected==='evening'?'white':'#5b21b6', padding:'10px', borderRadius:'12px', textAlign:'center', fontSize:'12px', fontWeight:'700'}}>{selected==='evening'?'▼ Detailed View Open':'▶ Click to see detailed 5 steps →'}</div>
          </div>
        </div>

        {/* NIGHT CARD */}
        <div onClick={()=>setSelected(selected==='night'?null:'night')} style={{
          background: selected==='night'? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          border: selected==='night'? '2px solid #6366f1' : '1px solid #1e293b',
          borderRadius:'20px', overflow:'hidden', cursor:'pointer', color:'white',
          transform: selected==='night'?'scale(1.03)':'scale(1)', boxShadow: selected==='night'?'0 16px 32px rgba(99,102,241,0.3)':'0 4px 12px rgba(0,0,0,0.1)', transition:'all 0.3s'
        }}>
          <div style={{background:'linear-gradient(135deg, #312e81 0%, #4338ca 100%)', padding:'18px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div><h3 style={{margin:0, fontSize:'18px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>⭐ Night Routine</h3><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.8}}>3 Steps • Overnight repair</p></div>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.15)', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>🌌</div>
          </div>
          <div style={{padding:'16px'}}>
            {nightSteps.map(s=><div key={s.step} style={{display:'flex', gap:'10px', alignItems:'center', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.1)'}}><div style={{width:'28px', height:'28px', background:'#6366f1', color:'white', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:'800'}}>{s.step}</div><span style={{fontSize:'12px', fontWeight:'600'}}>{s.icon} {s.name}</span><span style={{marginLeft:'auto', fontSize:'10px', color:'#a5b4fc', background:'rgba(255,255,255,0.1)', padding:'2px 8px', borderRadius:'20px'}}>{s.time}</span></div>)}
            <div style={{marginTop:'12px', background: selected==='night'?'#6366f1':'rgba(255,255,255,0.1)', color:'white', padding:'10px', borderRadius:'12px', textAlign:'center', fontSize:'12px', fontWeight:'700'}}>{selected==='night'?'▼ Detailed View Open':'▶ Click to see night repair →'}</div>
          </div>
        </div>
      </div>

      {/* DETAILED VIEW - WHEN CLICKED */}
      {selected && (
        <div style={{marginTop:'20px', background:'white', border:'2px solid #0f172a', borderRadius:'20px', overflow:'hidden', boxShadow:'0 20px 40px rgba(0,0,0,0.1)'}}>
          <div style={{
            background: selected==='morning'? 'linear-gradient(135deg, #f59e0b, #d97706)' : selected==='evening'? 'linear-gradient(135deg, #7c3aed, #5b21b6)' : 'linear-gradient(135deg, #312e81, #1e1b4b)',
            padding:'20px 24px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'
          }}>
            <div>
              <h3 style={{margin:0, fontSize:'20px', fontWeight:'800', display:'flex', alignItems:'center', gap:'10px'}}>
                {selected==='morning'?'☀️ Morning Routine - Detailed 5 Steps': selected==='evening'?'🌙 Evening Routine - Detailed 5 Steps':'⭐ Night Routine - Overnight Repair'}
                <span style={{background:'rgba(255,255,255,0.2)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>For {name} • {skinType}</span>
              </h3>
              <p style={{margin:'6px 0 0', fontSize:'12px', opacity:0.9}}>{selected==='morning'?'Start day with protection • SPF mandatory • Total 4 min': selected==='evening'?'Remove pollution + Repair • Double cleanse important • Total 5 min':'Deep repair while you sleep • Retinol + Mask • Overnight'}</p>
            </div>
            <button onClick={()=>setSelected(null)} style={{background:'rgba(255,255,255,0.2)', border:'none', color:'white', width:'36px', height:'36px', borderRadius:'50%', cursor:'pointer', fontSize:'16px', fontWeight:'700'}}>✕</button>
          </div>

          <div style={{padding:'22px'}}>
            <div style={{display:'grid', gridTemplateColumns: selected==='night'?'1fr 1fr 1fr':'1fr', gap:'14px'}}>
              {getSteps().map(s=>(
                <div key={s.step} style={{
                  background: selected==='morning'? '#fffbeb' : selected==='evening'? '#f5f3ff' : '#eef2ff',
                  border: `1px solid ${selected==='morning'?'#fde68a': selected==='evening'?'#ddd6fe':'#c7d2fe'}`,
                  borderRadius:'16px', padding:'16px', display:'flex', gap:'14px', alignItems:'start', position:'relative', overflow:'hidden'
                }}>
                  <div style={{width:'48px', height:'48px', background: s.color, borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px', color:'white', flexShrink:0}}>{s.icon}</div>
                  <div style={{flex:1}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
                      <div>
                        <p style={{margin:0, fontSize:'14px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>Step {s.step}: {s.name} <span style={{background:s.color, color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'10px'}}>{s.time}</span></p>
                        <p style={{margin:'4px 0 0', fontSize:'13px', fontWeight:'600', color:'#0f172a'}}>{s.product}</p>
                        <p style={{margin:'4px 0 0', fontSize:'11px', color:'#64748b'}}>{s.desc} • For {skinType} skin with {concerns.join(', ')}</p>
                      </div>
                      <span style={{background:'white', border:'1px solid #e2e8f0', padding:'4px 10px', borderRadius:'20px', fontSize:'10px', fontWeight:'600'}}>💡 {s.tip}</span>
                    </div>
                    <div style={{marginTop:'10px', display:'flex', gap:'6px'}}>
                      <span style={{background:'white', padding:'4px 10px', borderRadius:'20px', fontSize:'10px', border:'1px solid #e2e8f0'}}>✓ For {skinType}</span>
                      <span style={{background:'#22c55e', color:'white', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>✓ {score}/100</span>
                      <span style={{background:'#f1f5f9', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>{concerns[0]} safe</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selected!=='night' && (
              <div style={{marginTop:'18px', background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'14px', fontWeight:'800'}}>📅 Weekly Treatments - Extra Care</h4>
                <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'10px', marginTop:'12px'}}>
                  {weeklySteps.map(w=><div key={w.name} style={{background:'white', border:'1px solid #e2e8f0', padding:'12px', borderRadius:'12px', textAlign:'center'}}>
                    <div style={{fontSize:'20px'}}>{w.icon}</div>
                    <p style={{margin:'6px 0 0', fontSize:'12px', fontWeight:'700'}}>{w.name}</p>
                    <p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>{w.day} • {w.time}</p>
                    <p style={{margin:'2px 0 0', fontSize:'10px', color:'#94a3b8'}}>{w.desc}</p>
                  </div>)}
                </div>
              </div>
            )}

            <div style={{marginTop:'16px', background:'linear-gradient(135deg, #0f172a, #1e293b)', color:'white', padding:'16px', borderRadius:'14px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <p style={{margin:0, fontSize:'13px', fontWeight:'700'}}>✅ {selected} Routine Complete for {name}</p>
                <p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.8}}>{getSteps().length} steps • Total {selected==='morning'?'4 min': selected==='evening'?'5 min':'Overnight'} • Score impact +10 points • {skinType} skin safe • {allergies} safe</p>
              </div>
              <button onClick={()=>setSelected(null)} style={{background:'#22c55e', color:'white', border:'none', padding:'8px 16px', borderRadius:'20px', fontWeight:'700', cursor:'pointer', fontSize:'12px'}}>✓ Got it - Close</button>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM SUMMARY */}
      {!selected && (
        <div style={{marginTop:'18px', background:'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f9a8d4 100%)', border:'1px solid #fbcfe8', borderRadius:'18px', padding:'18px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <h4 style={{margin:0, fontSize:'14px', fontWeight:'800', color:'#831843'}}>💡 Click any routine card above to see detailed steps ✨</h4>
            <p style={{margin:'6px 0 0', fontSize:'12px', color:'#be185d'}}>Morning 5 steps + Evening 5 steps + Night 3 steps + Weekly 4 treatments = Complete personalized routine for {name}'s {skinType} skin • Adherence {routineAdh}%</p>
          </div>
          <div style={{background:'white', padding:'12px 18px', borderRadius:'14px', textAlign:'center', border:'1px solid #fbcfe8'}}>
            <p style={{margin:0, fontSize:'10px', color:'#be185d', fontWeight:'700'}}>TOTAL ROUTINE</p>
            <p style={{margin:0, fontSize:'16px', fontWeight:'800', color:'#831843'}}>13 Steps 🌸</p>
          </div>
        </div>
      )}

    </Card></Wrap>); }
    if(page==='seasonal'){
    const seasons = [
      {name:"Summer", icon:"☀️", temp:"35-45°C", humidity:"40%", color:"#f59e0b", gradient:"linear-gradient(135deg, #fbbf24, #f59e0b, #ea580c)", months:"Mar-Jun", concern:"Oil, Sweat, SPF", spf:"SPF 50 PA+++ 3x/day"},
      {name:"Monsoon", icon:"🌧️", temp:"28-33°C", humidity:"80%", color:"#3b82f6", gradient:"linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb)", months:"Jul-Sep", concern:"Humidity, Fungal, Acne", spf:"SPF 40"},
      {name:"Winter", icon:"❄️", temp:"10-20°C", humidity:"30%", color:"#6366f1", gradient:"linear-gradient(135deg, #a5b4fc, #6366f1, #4338ca)", months:"Oct-Feb", concern:"Dryness, Flaking", spf:"SPF 30"},
      {name:"Spring", icon:"🌸", temp:"20-30°C", humidity:"50%", color:"#ec4899", gradient:"linear-gradient(135deg, #f9a8d4, #ec4899, #be185d)", months:"Feb-Mar", concern:"Allergies, Glow", spf:"SPF 40"}
    ];
    const getSeasonData = (seasonName) => {
      if(seasonName==="Summer") return {
        routine: [{step:"Light Cleanser", prod:"Gel cleanser 2x/day", why:"Oil control"}, {step:"Vitamin C", prod:"15% Vitamin C AM", why:"Antioxidant + Bright"}, {step:"Light Moisturizer", prod:"Gel-based HA", why:"Non-comedogenic"}, {step:"SPF 50", prod:"Matte SPF 50, reapply 3h", why:"UV 11x stronger"}],
        avoid: ["Heavy creams", "Oil-based products", "Thick makeup"],
        must: ["Niacinamide for oil", "Clay mask 2x/week", "Hydrate 3.5L water", "Aloe vera gel"],
        tips: ["Blot oil with tissue", "Ice cube facial", "Light makeup only", "Stay in shade 11-3 PM"]
      };
      if(seasonName==="Monsoon") return {
        routine: [{step:"Anti-fungal Cleanser", prod:"Salicylic acid 2%", why:"Prevent fungal acne"}, {step:"Light Hydration", prod:"Niacinamide 5%", why:"Oil + Humidity balance"}, {step:"Non-sticky Moist", prod:"Gel moisturizer", why:"Humidity high"}, {step:"Waterproof SPF", prod:"SPF 40 water-resistant", why:"Rain + sweat"}],
        avoid: ["Heavy oils", "Cream cleansers", "Over-moisturizing"],
        must: ["Antifungal powder", "Keep skin dry", "Exfoliate 2x/week", "Change pillowcases"],
        tips: ["Dry skin quickly", "Avoid damp clothes", "Use dehumidifier", "No sharing towels"]
      };
      if(seasonName==="Winter") return {
        routine: [{step:"Cream Cleanser", prod:"CeraVe Hydrating Cleanser", why:"No stripping"}, {step:"HA Serum", prod:"HA 2% + B5", why:"Deep hydration"}, {step:"Rich Moisturizer", prod:"Ceramide + Squalane", why:"Barrier repair"}, {step:"SPF 30 + Lip balm", prod:"Moist SPF + SPF lip", why:"Winter sun + lips"}],
        avoid: ["Foaming cleansers", "Alcohol toners", "Hot water washing"],
        must: ["Facial oil at night", "Humidifier in room", "Drink warm water 3L", "Body lotion too"],
        tips: ["Short lukewarm showers", "Pat dry not rub", "Layer moisturizer", "Eat ghee + nuts for glow"]
      };
      return {
        routine: [{step:"Gentle Cleanser", prod:"Mild foaming", why:"Allergy season"}, {step:"Soothing Serum", prod:"Centella + Niacinamide", why:"Calm + Glow"}, {step:"Balanced Moist", prod:"Lotus + HA", why:"Light + Soothe"}, {step:"SPF 40 + Antioxidant", prod:"SPF + Vitamin C", why:"Pollen + UV"}],
        avoid: ["Harsh actives", "New products", "Fragrance"],
        must: ["Antihistamine if needed", "Pollen mask outdoors", "Clean face after outside", "Cool compress"],
        tips: ["Change bedsheets weekly", "Avoid flowers indoors", "Honey + Turmeric mask", "Stay hydrated"]
      };
    };

    const currentSeasonData = selected? getSeasonData(selected) : null;

    return (<Wrap><Card>
      {/* PREMIUM HEADER */}
      <div style={{background:'linear-gradient(135deg, #0f172a 0%, #1e3a5f 30%, #0ea5e9 70%, #06b6d4 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-20px', right:'-20px', width:'100px', height:'100px', background:'linear-gradient(135deg, #fbbf24, #f59e0b)', borderRadius:'50%', opacity:0.2}}></div>
        <div style={{position:'absolute', bottom:'-30px', left:'-20px', width:'80px', height:'80px', background:'linear-gradient(135deg, #a5b4fc, #6366f1)', borderRadius:'50%', opacity:0.2}}></div>
        <div style={{position:'absolute', top:'30px', right:'150px', fontSize:'14px'}}>☀️</div>
        <div style={{position:'absolute', top:'50px', right:'100px', fontSize:'10px'}}>❄️</div>
        <div style={{position:'absolute', top:'20px', right:'80px', fontSize:'12px'}}>🌧️</div>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800', display:'flex', alignItems:'center', gap:'12px', position:'relative'}}>🌦️ Seasonal Planner <span style={{background:'rgba(255,255,255,0.15)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>For {name} • {skinType}</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.9, position:'relative'}}>Click any season - Detailed routine, products, tips change as per weather ✨ • Current: {score}/100</p>
        <div style={{display:'flex', gap:'10px', marginTop:'16px', position:'relative', flexWrap:'wrap'}}>
          <span style={{background:'rgba(251,191,36,0.2)', border:'1px solid rgba(251,191,36,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>☀️ Summer • Oil Control</span>
          <span style={{background:'rgba(59,130,246,0.2)', border:'1px solid rgba(59,130,246,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>🌧️ Monsoon • Anti-fungal</span>
          <span style={{background:'rgba(99,102,241,0.2)', border:'1px solid rgba(99,102,241,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>❄️ Winter • Deep Hydration</span>
          <span style={{background:'rgba(236,72,153,0.2)', border:'1px solid rgba(236,72,153,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'}}>🌸 Spring • Allergy Care</span>
        </div>
      </div>

      {/* 4 SEASONS - CLICKABLE CARDS */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'14px'}}>
        {seasons.map(s=>{
          const isActive = selected===s.name;
          return <div key={s.name} onClick={()=>setSelected(isActive?null:s.name)} style={{
            background: isActive? s.gradient : 'white',
            border: isActive? `2px solid ${s.color}` : '1px solid #e2e8f0',
            borderRadius:'18px', overflow:'hidden', cursor:'pointer',
            transform: isActive?'scale(1.05) translateY(-4px)':'scale(1)',
            boxShadow: isActive?`0 16px 32px ${s.color}30`:'0 4px 12px rgba(0,0,0,0.04)',
            transition:'all 0.3s', color: isActive?'white':'black', position:'relative'
          }}>
            <div style={{background: isActive? 'rgba(255,255,255,0.15)' : `linear-gradient(135deg, ${s.color}15, ${s.color}05)`, padding:'16px', textAlign:'center'}}>
              <div style={{fontSize:'36px'}}>{s.icon}</div>
              <h3 style={{margin:'8px 0 0', fontSize:'16px', fontWeight:'800'}}>{s.name}</h3>
              <p style={{margin:'4px 0 0', fontSize:'10px', opacity: isActive?0.9:0.6}}>{s.months}</p>
              <div style={{marginTop:'10px', display:'flex', flexDirection:'column', gap:'4px'}}>
                <span style={{background: isActive?'rgba(255,255,255,0.2)':'#f1f5f9', padding:'3px 8px', borderRadius:'20px', fontSize:'9px', fontWeight:'600'}}>{s.temp}</span>
                <span style={{background: isActive?'rgba(255,255,255,0.2)':'#f1f5f9', padding:'3px 8px', borderRadius:'20px', fontSize:'9px', fontWeight:'600'}}>{s.humidity} Humidity</span>
              </div>
            </div>
            <div style={{padding:'12px'}}>
              <p style={{margin:0, fontSize:'11px', fontWeight:'600', display:'flex', justifyContent:'space-between'}}><span>Concern:</span><span style={{color: isActive?'white':s.color, fontWeight:'800'}}>{s.concern.split(',')[0]}</span></p>
              <p style={{margin:'6px 0 0', fontSize:'10px', color: isActive?'rgba(255,255,255,0.9)':'#64748b'}}>{s.spf}</p>
              <div style={{marginTop:'10px', background: isActive?'rgba(255,255,255,0.2)':'#f8fafc', padding:'6px', borderRadius:'20px', textAlign:'center', fontSize:'11px', fontWeight:'700'}}>{isActive?'▼ Detailed Open':'▶ Click for routine →'}</div>
            </div>
          </div>
        })}
      </div>

      {/* DETAILED SEASON VIEW */}
      {selected && currentSeasonData && (
        <div style={{marginTop:'20px', background:'white', border:'2px solid #0f172a', borderRadius:'20px', overflow:'hidden', boxShadow:'0 20px 40px rgba(0,0,0,0.1)'}}>
          <div style={{
            background: seasons.find(s=>s.name===selected)?.gradient,
            padding:'20px 24px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'
          }}>
            <div>
              <h3 style={{margin:0, fontSize:'20px', fontWeight:'800', display:'flex', alignItems:'center', gap:'10px'}}>
                {seasons.find(s=>s.name===selected)?.icon} {selected} Routine for {name}
                <span style={{background:'rgba(255,255,255,0.2)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>{seasons.find(s=>s.name===selected)?.temp} • {seasons.find(s=>s.name===selected)?.humidity}</span>
              </h3>
              <p style={{margin:'6px 0 0', fontSize:'12px', opacity:0.9}}>Months: {seasons.find(s=>s.name===selected)?.months} • Concern: {seasons.find(s=>s.name===selected)?.concern} • SPF: {seasons.find(s=>s.name===selected)?.spf} • {skinType} skin • {concerns.join(', ')}</p>
            </div>
            <button onClick={()=>setSelected(null)} style={{background:'rgba(255,255,255,0.2)', border:'none', color:'white', width:'36px', height:'36px', borderRadius:'50%', cursor:'pointer', fontSize:'16px', fontWeight:'700'}}>✕</button>
          </div>

          <div style={{padding:'22px', display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:'18px'}}>
            {/* ROUTINE */}
            <div>
              <h4 style={{margin:0, fontSize:'15px', fontWeight:'800', display:'flex', alignItems:'center', gap:'8px'}}>🧴 {selected} Personalized Routine - 4 Steps <span style={{background:'#0f172a', color:'white', padding:'3px 8px', borderRadius:'20px', fontSize:'10px'}}>For {skinType}</span></h4>
              <div style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'14px'}}>
                {currentSeasonData.routine.map((r,i)=><div key={i} style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'14px', padding:'14px', display:'flex', gap:'12px', alignItems:'center'}}>
                  <div style={{width:'36px', height:'36px', background: seasons.find(s=>s.name===selected)?.color, borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'800', fontSize:'14px'}}>{i+1}</div>
                  <div style={{flex:1}}>
                    <p style={{margin:0, fontSize:'13px', fontWeight:'700'}}>{r.step} <span style={{background:'white', border:'1px solid #e2e8f0', padding:'2px 8px', borderRadius:'20px', fontSize:'10px', marginLeft:'6px'}}>{r.why}</span></p>
                    <p style={{margin:'4px 0 0', fontSize:'12px', color:'#0f172a', fontWeight:'600'}}>{r.prod}</p>
                  </div>
                  <span style={{background:'#22c55e', color:'white', padding:'4px 10px', borderRadius:'20px', fontSize:'10px', fontWeight:'600'}}>✓ For {name}</span>
                </div>)}
              </div>

              <div style={{marginTop:'16px', background:'linear-gradient(135deg, #f0fdf4, #dcfce7)', border:'1px solid #bbf7d0', borderRadius:'14px', padding:'14px'}}>
                <p style={{margin:0, fontSize:'12px', fontWeight:'800', color:'#166534'}}>✅ {selected} Must-Do List for {name}</p>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginTop:'10px'}}>
                  {currentSeasonData.must.map((m,i)=><div key={i} style={{background:'white', padding:'8px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:'600', border:'1px solid #bbf7d0', display:'flex', alignItems:'center', gap:'6px'}}><span style={{color:'#22c55e'}}>✓</span> {m}</div>)}
                </div>
              </div>
            </div>

            {/* AVOID + TIPS */}
            <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
              <div style={{background:'linear-gradient(135deg, #fef2f2, #fee2e2)', border:'1px solid #fecaca', borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'13px', fontWeight:'800', color:'#991b1b', display:'flex', alignItems:'center', gap:'6px'}}>🚫 Avoid in {selected} <span style={{background:'#ef4444', color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'10px'}}>{skinType} skin</span></h4>
                <div style={{marginTop:'10px', display:'flex', flexDirection:'column', gap:'6px'}}>
                  {currentSeasonData.avoid.map((a,i)=><div key={i} style={{background:'white', border:'1px solid #fecaca', padding:'8px 12px', borderRadius:'20px', fontSize:'11px', display:'flex', alignItems:'center', gap:'8px'}}><span style={{color:'#ef4444'}}>✕</span> {a}</div>)}
                </div>
              </div>

              <div style={{background:'linear-gradient(135deg, #f0f9ff, #e0f2fe)', border:'1px solid #bae6fd', borderRadius:'14px', padding:'16px'}}>
                <h4 style={{margin:0, fontSize:'13px', fontWeight:'800', color:'#0c4a6e', display:'flex', alignItems:'center', gap:'6px'}}>💡 {selected} Pro Tips <span style={{background:'#0ea5e9', color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'10px'}}>For glowing skin</span></h4>
                <div style={{marginTop:'10px', display:'flex', flexDirection:'column', gap:'6px'}}>
                  {currentSeasonData.tips.map((t,i)=><div key={i} style={{background:'white', border:'1px solid #bae6fd', padding:'8px 12px', borderRadius:'20px', fontSize:'11px', display:'flex', alignItems:'center', gap:'8px'}}><span style={{color:'#0ea5e9'}}>💡</span> {t}</div>)}
                </div>
              </div>

              <div style={{background:'#0f172a', borderRadius:'14px', padding:'14px', color:'white'}}>
                <p style={{margin:0, fontSize:'12px', fontWeight:'700'}}>📊 {selected} Impact on {name}'s Skin Score</p>
                <p style={{margin:'6px 0 0', fontSize:'11px', opacity:0.8, lineHeight:'1.4'}}>{selected==="Summer"?"Summer heat = Oil + Sweat + Tanning. SPF 50 mandatory 3x/day. Score can drop 10 points if no care.": selected==="Monsoon"?"Humidity 80% = Fungal acne risk. Keep dry. Score can drop 5 points.": selected==="Winter"?"Dryness = Flaking + Barrier damage. Rich moisturizer must. Score improves with hydration.":"Allergy = Redness + Sensitivity. Soothing products needed. Score stable with care."} Current {score}/100 → Target 85+ with {selected} routine.</p>
                <div style={{marginTop:'10px', display:'flex', gap:'6px'}}><span style={{background:'rgba(255,255,255,0.1)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>{selected} Routine</span><span style={{background:'rgba(34,197,94,0.2)', padding:'4px 10px', borderRadius:'20px', fontSize:'10px'}}>Score {score} → 85+</span></div>
              </div>
            </div>
          </div>

          <div style={{padding:'0 22px 22px 22px'}}>
            <div style={{background:'linear-gradient(135deg, #0f172a, #1e293b)', color:'white', padding:'16px', borderRadius:'14px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div><p style={{margin:0, fontSize:'13px', fontWeight:'700'}}>✅ {selected} Planner Complete for {name} • {skinType} • {concerns.join(', ')}</p><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.8}}>{currentSeasonData.routine.length} steps • {currentSeasonData.must.length} must-do • {currentSeasonData.avoid.length} avoid • {currentSeasonData.tips.length} tips • Score {score}/100</p></div>
              <button onClick={()=>setSelected(null)} style={{background:'#22c55e', color:'white', border:'none', padding:'8px 16px', borderRadius:'20px', fontWeight:'700', cursor:'pointer', fontSize:'12px'}}>✓ Got it</button>
            </div>
          </div>
        </div>
      )}

      {!selected && (
        <div style={{marginTop:'18px', background:'linear-gradient(135deg, #f8fafc, #f1f5f9)', border:'1px solid #e2e8f0', borderRadius:'18px', padding:'18px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div><h4 style={{margin:0, fontSize:'14px', fontWeight:'800'}}>💡 Click any season card above to see personalized routine ✨</h4><p style={{margin:'6px 0 0', fontSize:'12px', color:'#64748b'}}>Summer (oil control) + Monsoon (anti-fungal) + Winter (hydration) + Spring (allergy care) = Year-round glowing skin for {name} • {skinType} • Score {score}/100</p></div>
          <div style={{background:'white', padding:'12px 18px', borderRadius:'14px', textAlign:'center', border:'1px solid #e2e8f0'}}><p style={{margin:0, fontSize:'10px', color:'#64748b', fontWeight:'700'}}>YEAR-ROUND</p><p style={{margin:0, fontSize:'16px', fontWeight:'800'}}>4 Seasons 🌦️</p></div>
        </div>
      )}

    </Card></Wrap>); }
    if(page==='progress'){
    const weeklyScores = [
      {week:"W1", score:60, adherence:60, hydration:60, sleep:5.5, date:"Dec 1"},
      {week:"W2", score:62, adherence:65, hydration:62, sleep:6, date:"Dec 8"},
      {week:"W3", score:65, adherence:70, hydration:65, sleep:6.2, date:"Dec 15"},
      {week:"W4", score:68, adherence:72, hydration:68, sleep:6.5, date:"Dec 22"},
      {week:"W5", score:72, adherence:78, hydration:72, sleep:7, date:"Dec 29"},
      {week:"W6", score:74, adherence:82, hydration:75, sleep:7, date:"Jan 5"},
      {week:"W7", score:77.9, adherence:85, hydration:75, sleep:7.5, date:"Jan 12 Today"}
    ];
    const concernsProgress = [
      {name:"Acne", icon:"🔴", start:80, current:45, improvement:44, color:"#ef4444", status:"Improving", desc:"Niacinamide working"},
      {name:"Dark Spots", icon:"🟤", start:70, current:50, improvement:29, color:"#8b5cf6", status:"Fading", desc:"Vitamin C + SPF"},
      {name:"Dryness", icon:"💧", start:75, current:30, improvement:60, color:"#0ea5e9", status:"Much Better", desc:"HA + Ceramides"},
      {name:"Texture", icon:"✨", start:65, current:35, improvement:46, color:"#22c55e", status:"Smoother", desc:"Routine adherence"}
    ];
    const calendar = [
      {day:"Mon", date:6, done: true, score:78},
      {day:"Tue", date:7, done: true, score:77},
      {day:"Wed", date:8, done: true, score:78},
      {day:"Thu", date:9, done: false, score:0},
      {day:"Fri", date:10, done: true, score:79},
      {day:"Sat", date:11, done: true, score:80},
      {day:"Sun", date:12, done: true, score:77.9}
    ];

    return (<Wrap><Card>
      <div style={{background:'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white'}}>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800', display:'flex', alignItems:'center', gap:'12px'}}>📈 Progress Tracking <span style={{background:'#22c55e', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>7 Weeks • For {name}</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.9}}>Click any week to see details • Score {score}/100 • Growth +{(score-60).toFixed(1)} • Adherence {routineAdh}% • Hydration {hydration}% • Sleep {sleepHours}h</p>
        <div style={{display:'flex', gap:'8px', marginTop:'16px', flexWrap:'wrap'}}>
          <span style={{background:'rgba(34,197,94,0.2)', border:'1px solid rgba(34,197,94,0.3)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px'}}>📈 {score} now vs 60 start</span>
          <span style={{background:'rgba(59,130,246,0.2)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px'}}>✅ {routineAdh}% Adherence</span>
          <span style={{background:'rgba(14,165,233,0.2)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px'}}>💧 {hydration}% Hydration</span>
          <span style={{background:'rgba(139,92,246,0.2)', padding:'6px 14px', borderRadius:'20px', fontSize:'11px'}}>😴 {sleepHours}h Sleep</span>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1.4fr 0.6fr', gap:'18px'}}>
        <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          <div style={{background:'white', border:'2px solid #0f172a', borderRadius:'20px', padding:'20px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h3 style={{margin:0, fontSize:'15px', fontWeight:'800'}}>📊 Skin Health Score - 7 Week Journey</h3>
              <span style={{background:'#0f172a', color:'white', padding:'6px 12px', borderRadius:'20px', fontSize:'11px'}}>{weeklyScores[0].score} to {score} (+{(score-60).toFixed(1)})</span>
            </div>
            <div style={{marginTop:'18px', height:'160px', display:'flex', alignItems:'end', gap:'8px', padding:'0 10px'}}>
              {weeklyScores.map((w,i)=>{
                const isActive = selected===w.week;
                const height = (w.score/100)*140;
                return (
                  <div key={i} onClick={()=>setSelected(isActive?null:w.week)} style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'6px', cursor:'pointer'}}>
                    <div style={{background: isActive?'#0f172a':'#e2e8f0', color: isActive?'white':'#64748b', padding:'3px 8px', borderRadius:'20px', fontSize:'9px', fontWeight:'700'}}>{w.score}</div>
                    <div style={{width:'100%', height:height, background: isActive?'#0f172a': i===weeklyScores.length-1?'#22c55e':'#94a3b8', borderRadius:'8px 8px 4px 4px', minHeight:'20px'}}></div>
                    <span style={{fontSize:'10px', fontWeight: isActive?'800':'600', color: isActive?'#0f172a':'#64748b'}}>{w.week}</span>
                    <span style={{fontSize:'8px', color:'#94a3b8'}}>{w.date.split(' ')[0]}</span>
                  </div>
                );
              })}
            </div>
            {selected && weeklyScores.find(w=>w.week===selected) && (
              <div style={{marginTop:'16px', background:'#0f172a', borderRadius:'14px', padding:'14px', color:'white', display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'10px'}}>
                {(() => {
                  const w = weeklyScores.find(x=>x.week===selected);
                  return (
                    <>
                      <div style={{background:'rgba(255,255,255,0.08)', padding:'10px', borderRadius:'10px', textAlign:'center'}}>
                        <p style={{margin:0, fontSize:'10px', opacity:0.7}}>SCORE</p>
                        <p style={{margin:'4px 0 0', fontSize:'16px', fontWeight:'800'}}>{w.score}/100</p>
                        <p style={{margin:0, fontSize:'9px', opacity:0.6}}>{w.date}</p>
                      </div>
                      <div style={{background:'rgba(59,130,246,0.15)', padding:'10px', borderRadius:'10px', textAlign:'center'}}>
                        <p style={{margin:0, fontSize:'10px', opacity:0.7}}>ADHERENCE</p>
                        <p style={{margin:'4px 0 0', fontSize:'16px', fontWeight:'800'}}>{w.adherence}%</p>
                      </div>
                      <div style={{background:'rgba(14,165,233,0.15)', padding:'10px', borderRadius:'10px', textAlign:'center'}}>
                        <p style={{margin:0, fontSize:'10px', opacity:0.7}}>HYDRATION</p>
                        <p style={{margin:'4px 0 0', fontSize:'16px', fontWeight:'800'}}>{w.hydration}%</p>
                        <p style={{margin:0, fontSize:'9px', opacity:0.6}}>Water</p>
                      </div>
                      <div style={{background:'rgba(139,92,246,0.15)', padding:'10px', borderRadius:'10px', textAlign:'center'}}>
                        <p style={{margin:0, fontSize:'10px', opacity:0.7}}>SLEEP</p>
                        <p style={{margin:'4px 0 0', fontSize:'16px', fontWeight:'800'}}>{w.sleep}h</p>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>

          <div style={{background:'white', border:'1px solid #e2e8f0', borderRadius:'18px', padding:'18px'}}>
            <h3 style={{margin:0, fontSize:'14px', fontWeight:'800'}}>🎯 Concerns Improvement</h3>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'14px'}}>
              {concernsProgress.map(c=>
                <div key={c.name} style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'14px', padding:'12px'}}>
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                    <span style={{fontSize:'12px', fontWeight:'700'}}>{c.icon} {c.name}</span>
                    <span style={{background:c.color, color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'9px'}}>{c.status}</span>
                  </div>
                  <div style={{marginTop:'8px', display:'flex', justifyContent:'space-between', fontSize:'10px', color:'#64748b'}}>
                    <span>Start {c.start}%</span><span>Now {c.current}%</span>
                  </div>
                  <div style={{marginTop:'4px', height:'8px', background:'#e2e8f0', borderRadius:'20px', overflow:'hidden'}}>
                    <div style={{width:(100-c.current)+'%', background:c.color, height:'100%'}}></div>
                  </div>
                  <div style={{marginTop:'6px', display:'flex', justifyContent:'space-between'}}>
                    <span style={{fontSize:'10px', color:'#64748b'}}>{c.desc}</span>
                    <span style={{background:'#22c55e', color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'10px'}}>-{c.improvement}%</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
          <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'18px', padding:'16px'}}>
            <h4 style={{margin:0, fontSize:'13px', fontWeight:'800'}}>📅 This Week - {routineAdh}%</h4>
            <div style={{display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:'6px', marginTop:'12px'}}>
              {calendar.map((d,i)=>
                <div key={i} style={{background: d.done? (d.date===12?'#0f172a':'#22c55e') : '#fee2e2', borderRadius:'12px', padding:'8px 4px', textAlign:'center', color: d.done?'white':'#991b1b'}}>
                  <p style={{margin:0, fontSize:'9px'}}>{d.day}</p>
                  <p style={{margin:'2px 0 0', fontSize:'14px', fontWeight:'800'}}>{d.date}</p>
                  <p style={{margin:0, fontSize:'10px'}}>{d.done? (d.date===12?'⭐':'✓'):'✕'}</p>
                </div>
              )}
            </div>
            <div style={{marginTop:'10px', background:'white', borderRadius:'10px', padding:'10px', display:'flex', justifyContent:'space-between', fontSize:'11px'}}>
              <span>Best: Sat 80/100</span><span style={{color:'#22c55e', fontWeight:'700'}}>6/7 done</span>
            </div>
          </div>

          <div style={{background:'white', border:'1px solid #e2e8f0', borderRadius:'18px', padding:'16px'}}>
            <h4 style={{margin:0, fontSize:'13px', fontWeight:'800'}}>📸 Photo Progress</h4>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'12px'}}>
              <div style={{background:'#fef2f2', border:'1px solid #fecaca', borderRadius:'12px', padding:'12px', textAlign:'center'}}>
                <div style={{height:'80px', background:'#fee2e2', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px'}}>😟</div>
                <p style={{margin:'8px 0 0', fontSize:'11px', fontWeight:'700'}}>W1 - Before</p>
                <p style={{margin:'2px 0 0', fontSize:'10px', color:'#991b1b'}}>Score 60/100</p>
              </div>
              <div style={{background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:'12px', padding:'12px', textAlign:'center'}}>
                <div style={{height:'80px', background:'#dcfce7', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px'}}>😊</div>
                <p style={{margin:'8px 0 0', fontSize:'11px', fontWeight:'700'}}>W7 - Now</p>
                <p style={{margin:'2px 0 0', fontSize:'10px', color:'#166534'}}>Score {score}/100</p>
              </div>
            </div>
            <div style={{marginTop:'10px', background:'#22c55e', color:'white', padding:'8px', borderRadius:'20px', textAlign:'center', fontSize:'11px', fontWeight:'700'}}>🎉 +{(score-60).toFixed(1)} improvement in 7 weeks!</div>
          </div>

          <div style={{background:'#0f172a', borderRadius:'16px', padding:'16px', color:'white'}}>
            <h4 style={{margin:0, fontSize:'12px', fontWeight:'800'}}>📊 Quick Stats for {name}</h4>
            <div style={{marginTop:'10px', display:'flex', flexDirection:'column', gap:'8px'}}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', background:'rgba(255,255,255,0.08)', padding:'8px 12px', borderRadius:'20px'}}><span>💧 Hydration</span><span>{hydration}%</span></div>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', background:'rgba(255,255,255,0.08)', padding:'8px 12px', borderRadius:'20px'}}><span>😴 Sleep</span><span>{sleepHours}h</span></div>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', background:'rgba(255,255,255,0.08)', padding:'8px 12px', borderRadius:'20px'}}><span>✅ Adherence</span><span>{routineAdh}%</span></div>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', background:'rgba(34,197,94,0.2)', padding:'8px 12px', borderRadius:'20px'}}><span>🎯 Next Goal</span><span>85/100</span></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{marginTop:'18px', background:'linear-gradient(135deg, #0f172a, #1e293b)', color:'white', padding:'18px', borderRadius:'16px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <p style={{margin:0, fontSize:'14px', fontWeight:'800'}}>✅ Progress Tracking Complete - {name}</p>
          <p style={{margin:'6px 0 0', fontSize:'12px', opacity:0.8}}>Score 60 → {score} (+{(score-60).toFixed(1)}) • Adherence {routineAdh}% • Click any week ✨</p>
        </div>
        <div style={{background:'white', color:'#0f172a', padding:'12px 18px', borderRadius:'14px', textAlign:'center'}}>
          <p style={{margin:0, fontSize:'18px', fontWeight:'900'}}>+{(score-60).toFixed(1)} 📈</p>
        </div>
      </div>
    </Card></Wrap>);
  }
    if(page==='analytics'){
    const localHydration = 75;
    const localSleep = 7.5;
    const localAdh = 85;
    const localStress = 4;
    const localWater = 2.5;
    const localScore = score || 77.9;
    const localName = name || "Pragya";

    const breakdown = [
      {label:"Hydration", value:localHydration, icon:"💧", color:"#0ea5e9", impact:"+12 points", desc:"75% good, 90% target"},
      {label:"Sleep Quality", value:94, icon:"😴", color:"#8b5cf6", impact:"+10 points", desc:`${localSleep}h avg, 8h target`},
      {label:"Routine Adherence", value:localAdh, icon:"✅", color:"#22c55e", impact:"+15 points", desc:`${localAdh}% excellent`},
      {label:"Stress Level", value:40, icon:"🧠", color:"#ef4444", impact:"-8 if high", desc:`Level ${localStress}/10`},
      {label:"Sun Protection", value:85, icon:"☀️", color:"#f59e0b", impact:"+15 points", desc:"SPF daily"},
      {label:"Diet & Water", value:70, icon:"🥗", color:"#10b981", impact:"+8 points", desc:`Water ${localWater}L`},
    ];

    const getDetail = (label) => {
      if(label==="Hydration") return {chart:[60,62,65,68,72,75,75], tip:"Drink 3L, HA serum - Score +12"};
      if(label==="Sleep Quality") return {chart:[55,60,62,65,70,70,75], tip:"Sleep 8h - Score +10"};
      return {chart:[60,65,70,72,78,82,85], tip:"Maintain routine - Score +15"};
    };

    const selectedData = selected ? getDetail(selected) : null;

    return (<Wrap><Card>
      <div style={{background:'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #6366f1 100%)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white'}}>
        <h2 style={{margin:0, fontSize:'26px', fontWeight:'800'}}>📊 Analytics & Insights <span style={{background:'rgba(255,255,255,0.15)', padding:'4px 12px', borderRadius:'20px', fontSize:'11px'}}>AI Powered • For {localName}</span></h2>
        <p style={{margin:'8px 0 0', fontSize:'13px', opacity:0.9}}>Click any metric - See chart + why it impacts {localScore}/100 ✨ • Score breakdown • Lifestyle impact • Predictions</p>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px'}}>
        {breakdown.map(b=>{
          const isActive = selected===b.label;
          return (
            <div key={b.label} onClick={()=>setSelected(isActive?null:b.label)} style={{background: isActive?b.color:'white', border:`2px solid ${b.color}`, borderRadius:'14px', padding:'12px', cursor:'pointer', color: isActive?'white':'black'}}>
              <div style={{display:'flex', justifyContent:'space-between'}}><span style={{fontSize:'20px'}}>{b.icon}</span><span style={{background:isActive?'white':b.color, color:isActive?b.color:'white', padding:'2px 8px', borderRadius:'20px', fontSize:'10px', fontWeight:'700'}}>{b.value}%</span></div>
              <p style={{margin:'8px 0 0', fontSize:'12px', fontWeight:'800'}}>{b.label}</p>
              <p style={{margin:'4px 0 0', fontSize:'10px', opacity:isActive?0.9:0.6}}>{b.desc}</p>
              <p style={{margin:'6px 0 0', fontSize:'10px', fontWeight:'700'}}>{b.impact}</p>
            </div>
          );
        })}
      </div>

      {selected && selectedData && (
        <div style={{marginTop:'14px', background:'#0f172a', borderRadius:'14px', padding:'14px', color:'white'}}>
          <h4 style={{margin:0, fontSize:'12px', fontWeight:'800'}}>📈 {selected} - 7 Week Trend</h4>
          <div style={{marginTop:'10px', display:'flex', alignItems:'end', gap:'4px', height:'60px'}}>
            {selectedData.chart.map((v,i)=><div key={i} style={{flex:1, height:(v/100)*50, background: i===6?'#22c55e':'#475569', borderRadius:'4px'}}></div>)}
          </div>
          <p style={{margin:'10px 0 0', fontSize:'11px', opacity:0.9}}>💡 Tip: {selectedData.tip}</p>
        </div>
      )}

      <div style={{marginTop:'16px', background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'14px', padding:'14px'}}>
        <h4 style={{margin:0, fontSize:'13px', fontWeight:'800'}}>🔮 AI Predictions</h4>
        <div style={{marginTop:'10px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
          <div style={{background:'white', borderLeft:'4px solid #22c55e', padding:'8px 10px', borderRadius:'8px'}}><p style={{margin:0, fontSize:'11px', fontWeight:'700'}}>Next Week: 80/100 (92%)</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>Keep routine, sleep 8h</p></div>
          <div style={{background:'white', borderLeft:'4px solid #8b5cf6', padding:'8px 10px', borderRadius:'8px'}}><p style={{margin:0, fontSize:'11px', fontWeight:'700'}}>In 1 Month: 87/100 (78%)</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>Will achieve glow target</p></div>
        </div>
      </div>

      <div style={{marginTop:'14px', background:'#0f172a', color:'white', padding:'12px', borderRadius:'12px', textAlign:'center'}}>
        <p style={{margin:0, fontSize:'13px', fontWeight:'800'}}>✅ Analytics Complete - {localName} - Score {localScore} → 87 predicted ✨</p>
      </div>
    </Card></Wrap>);
  }  
    if(page==='admin'){
    const [adminTab, setAdminTab] = useState('dashboard');
    const [users] = useState([
      {id:1, name:"Pragya Sharma", skin:"Dry", score:77.9, status:"Active", lastActive:"Today"},
      {id:2, name:"Ananya Patel", skin:"Oily", score:82.3, status:"Active", lastActive:"2h ago"},
      {id:3, name:"Riya Singh", skin:"Combination", score:68.5, status:"Inactive", lastActive:"1 day ago"},
      {id:4, name:"Sneha Gupta", skin:"Sensitive", score:91.2, status:"Active", lastActive:"Just now"},
    ]);

    return (<Wrap><Card>
      <div style={{background:'linear-gradient(135deg, #0f172a, #1e293b)', margin:'-22px -22px 22px -22px', padding:'28px', borderRadius:'18px 18px 0 0', color:'white'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <h2 style={{margin:0, fontSize:'26px', fontWeight:'800'}}>🛡️ Admin Dashboard - Super Control ✨</h2>
            <p style={{margin:'8px 0 0', fontSize:'12px', opacity:0.8}}>Manage Users • Products • Analytics • System Health • All in one</p>
          </div>
          <div style={{background:'#22c55e', padding:'8px 14px', borderRadius:'20px', fontSize:'11px', fontWeight:'800'}}>● System Online</div>
        </div>

        <div style={{marginTop:'18px', display:'flex', gap:'8px'}}>
          {[
            {id:'dashboard', label:'📊 Dashboard'},
            {id:'users', label:'👥 Users'},
            {id:'products', label:'🛒 Products'},
            {id:'analytics', label:'📈 Reports'},
          ].map(t=>(
            <button key={t.id} onClick={()=>setAdminTab(t.id)} style={{padding:'8px 14px', borderRadius:'10px', border:'none', background: adminTab===t.id?'white':'rgba(255,255,255,0.15)', color: adminTab===t.id?'#0f172a':'white', fontSize:'11px', fontWeight:'700', cursor:'pointer'}}>{t.label}</button>
          ))}
        </div>
      </div>

      {adminTab==='dashboard' && (
        <>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'10px'}}>
            <div style={{background:'linear-gradient(135deg, #6366f1, #8b5cf6)', color:'white', padding:'16px', borderRadius:'14px'}}><p style={{margin:0, fontSize:'22px', fontWeight:'800'}}>1,248</p><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.9}}>Total Users</p><p style={{margin:'6px 0 0', fontSize:'10px', background:'rgba(255,255,255,0.2)', padding:'2px 6px', borderRadius:'10px', display:'inline-block'}}>+12% this week</p></div>
            <div style={{background:'linear-gradient(135deg, #10b981, #059669)', color:'white', padding:'16px', borderRadius:'14px'}}><p style={{margin:0, fontSize:'22px', fontWeight:'800'}}>77.9</p><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.9}}>Avg Skin Score</p><p style={{margin:'6px 0 0', fontSize:'10px', background:'rgba(255,255,255,0.2)', padding:'2px 6px', borderRadius:'10px', display:'inline-block'}}>+5.2 improved</p></div>
            <div style={{background:'linear-gradient(135deg, #f59e0b, #ef4444)', color:'white', padding:'16px', borderRadius:'14px'}}><p style={{margin:0, fontSize:'22px', fontWeight:'800'}}>342</p><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.9}}>Products Listed</p><p style={{margin:'6px 0 0', fontSize:'10px', background:'rgba(255,255,255,0.2)', padding:'2px 6px', borderRadius:'10px', display:'inline-block'}}>28 pending review</p></div>
            <div style={{background:'linear-gradient(135deg, #0ea5e9, #0284c7)', color:'white', padding:'16px', borderRadius:'14px'}}><p style={{margin:0, fontSize:'22px', fontWeight:'800'}}>98.5%</p><p style={{margin:'4px 0 0', fontSize:'11px', opacity:0.9}}>System Health</p><p style={{margin:'6px 0 0', fontSize:'10px', background:'rgba(255,255,255,0.2)', padding:'2px 6px', borderRadius:'10px', display:'inline-block'}}>All good ✨</p></div>
          </div>

          <div style={{marginTop:'16px', display:'grid', gridTemplateColumns:'2fr 1fr', gap:'12px'}}>
            <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', padding:'14px', borderRadius:'14px'}}>
              <h4 style={{margin:'0 0 10px', fontSize:'13px', fontWeight:'800'}}>📈 Weekly Growth - Users vs Scores</h4>
              <div style={{display:'flex', gap:'4px', alignItems:'end', height:'60px'}}>
                {[40,55,45,70,60,85,95].map((v,i)=><div key={i} style={{flex:1, height:`${v}%`, background: i===6?'#6366f1':'#cbd5e1', borderRadius:'4px'}}></div>)}
              </div>
              <p style={{margin:'8px 0 0', fontSize:'10px', color:'#64748b'}}>Mon → Sun • Peak on Sunday 95 users</p>
            </div>
            <div style={{background:'#0f172a', color:'white', padding:'14px', borderRadius:'14px'}}>
              <h4 style={{margin:'0 0 10px', fontSize:'13px', fontWeight:'800'}}>⚡ Quick Actions</h4>
              <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                <button style={{padding:'8px', background:'rgba(255,255,255,0.1)', border:'none', color:'white', borderRadius:'8px', fontSize:'11px', textAlign:'left', cursor:'pointer'}}>➕ Add New Product</button>
                <button style={{padding:'8px', background:'rgba(255,255,255,0.1)', border:'none', color:'white', borderRadius:'8px', fontSize:'11px', textAlign:'left', cursor:'pointer'}}>📧 Send Notification</button>
                <button style={{padding:'8px', background:'rgba(255,255,255,0.1)', border:'none', color:'white', borderRadius:'8px', fontSize:'11px', textAlign:'left', cursor:'pointer'}}>📤 Export All Data</button>
                <button style={{padding:'8px', background:'#ef4444', border:'none', color:'white', borderRadius:'8px', fontSize:'11px', textAlign:'left', cursor:'pointer'}}>🚨 System Maintenance</button>
              </div>
            </div>
          </div>
        </>
      )}

      {adminTab==='users' && (
        <div style={{background:'white', border:'1px solid #e2e8f0', borderRadius:'14px', overflow:'hidden'}}>
          <div style={{padding:'12px 16px', background:'#f8fafc', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h4 style={{margin:0, fontSize:'13px', fontWeight:'800'}}>👥 All Users ({users.length}) - Manage</h4>
            <input placeholder="Search users..." style={{padding:'6px 10px', borderRadius:'8px', border:'1px solid #e2e8f0', fontSize:'11px', width:'160px'}} />
          </div>
          {users.map(u=>(
            <div key={u.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 16px', borderTop:'1px solid #f1f5f9'}}>
              <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
                <div style={{width:'32px', height:'32px', background:'#e0e7ff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px', fontWeight:'800'}}>{u.name[0]}</div>
                <div><p style={{margin:0, fontSize:'12px', fontWeight:'700'}}>{u.name}</p><p style={{margin:0, fontSize:'10px', color:'#64748b'}}>{u.skin} • Score {u.score} • {u.lastActive}</p></div>
              </div>
              <div style={{display:'flex', gap:'6px', alignItems:'center'}}>
                <span style={{background: u.status==='Active'?'#dcfce7':'#fee2e2', color: u.status==='Active'?'#166534':'#991b1b', padding:'3px 8px', borderRadius:'20px', fontSize:'9px', fontWeight:'700'}}>{u.status}</span>
                <button style={{padding:'4px 8px', background:'#0f172a', color:'white', border:'none', borderRadius:'6px', fontSize:'10px', cursor:'pointer'}}>View</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {adminTab==='products' && (
        <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', padding:'16px', borderRadius:'14px', textAlign:'center'}}>
          <p style={{fontSize:'30px', margin:0}}>🛒</p>
          <p style={{margin:'8px 0 0', fontSize:'13px', fontWeight:'800'}}>Products Management</p>
          <p style={{margin:'4px 0 0', fontSize:'11px', color:'#64748b'}}>342 products • Add / Edit / Delete • Price range ₹100 - ₹10000 • Category filter • Brand filter</p>
          <button style={{marginTop:'12px', padding:'8px 16px', background:'#0f172a', color:'white', border:'none', borderRadius:'8px', fontSize:'11px', cursor:'pointer'}}>Manage Products →</button>
        </div>
      )}

      {adminTab==='analytics' && (
        <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', padding:'16px', borderRadius:'14px'}}>
          <h4 style={{margin:'0 0 10px', fontSize:'13px', fontWeight:'800'}}>📈 System Reports</h4>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
            <div style={{background:'white', padding:'12px', borderRadius:'10px', borderLeft:'4px solid #6366f1'}}><p style={{margin:0, fontSize:'11px', fontWeight:'700'}}>Daily Active: 342 users</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>Peak time 8PM-10PM</p></div>
            <div style={{background:'white', padding:'12px', borderRadius:'10px', borderLeft:'4px solid #22c55e'}}><p style={{margin:0, fontSize:'11px', fontWeight:'700'}}>Avg Session: 12 min</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>+2 min vs last week</p></div>
          </div>
        </div>
      )}

      <div style={{marginTop:'14px', background:'#0f172a', color:'white', padding:'12px', borderRadius:'12px', textAlign:'center'}}>
        <p style={{margin:0, fontSize:'12px', fontWeight:'800'}}>✅ Admin Ready - All Features Active • Users: 1248 • Products: 342 • Health: 98.5% ✨</p>
      </div>
    </Card></Wrap>);
  }   
  if(page==='executive-dashboard'){ return (<Wrap><Card><div style={{display:'flex', justifyContent:'space-between'}}><div><h1 style={{margin:0}}>👑 Admin Dashboard</h1><p style={{fontSize:'12px', color:'#64748b', margin:'6px 0 0'}}>User management, Platform analytics, Recommendation monitoring, System reports - Managed by {name}</p></div><div style={{display:'flex', gap:'8px'}}><button onClick={exportPDF} style={{background:'#0f172a', color:'white', padding:'10px 16px', borderRadius:'10px', border:'none', cursor:'pointer'}}>📄 PDF</button><button onClick={exportExcel} style={{background:'white', border:'1px solid #e2e8f0', padding:'10px 16px', borderRadius:'10px', cursor:'pointer'}}>📊 Excel</button></div></div><div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'12px', marginTop:'18px'}}><div style={{background:'#f8fafc', padding:'16px', borderRadius:'12px'}}><p style={{fontSize:'10px', margin:0}}>TOTAL USERS</p><h2>24</h2></div><div style={{background:'#f8fafc', padding:'16px', borderRadius:'12px'}}><p style={{fontSize:'10px', margin:0}}>SKIN PROFILES</p><h2>18</h2></div><div style={{background:'#f8fafc', padding:'16px', borderRadius:'12px'}}><p style={{fontSize:'10px', margin:0}}>SCORE - {name}</p><h2 style={{color:'#7c3aed'}}>{score}</h2></div><div style={{background:'#f8fafc', padding:'16px', borderRadius:'12px'}}><p style={{fontSize:'10px', margin:0}}>PROGRESS</p><h2>156</h2></div></div></Card></Wrap>); }

  if(page==='reports'){ return (<Wrap><Card><h1>📑 Reports & Export System</h1><p style={{fontSize:'12px', color:'#64748b'}}>Skin assessment reports, Routine reports, Product recommendation reports, Progress reports, Skin health reports, PDF export, Excel export</p><div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'12px', marginTop:'18px'}}>
    <div style={{border:'1px solid #e2e8f0', padding:'18px', borderRadius:'14px'}}><h3 style={{marginTop:0}}>📊 Executive Summary</h3><button onClick={exportPDF} style={{width:'100%', background:'#0f172a', color:'white', padding:'10px', borderRadius:'10px', border:'none', cursor:'pointer', marginTop:'10px'}}>📄 Export PDF - {name}</button><button onClick={exportExcel} style={{width:'100%', background:'white', border:'1px solid #e2e8f0', padding:'10px', borderRadius:'10px', cursor:'pointer', marginTop:'8px'}}>📊 Export Excel</button></div>
    <div style={{border:'1px solid #e2e8f0', padding:'18px', borderRadius:'14px'}}><h3 style={{marginTop:0}}>📈 Skin Progress Report</h3><button onClick={exportPDF} style={{width:'100%', background:'#7c3aed', color:'white', padding:'10px', borderRadius:'10px', border:'none', cursor:'pointer', marginTop:'10px'}}>📄 PDF Report</button></div>
    <div style={{border:'1px solid #e2e8f0', padding:'18px', borderRadius:'14px'}}><h3 style={{marginTop:0}}>💜 Skin Health Report</h3><button onClick={exportExcel} style={{width:'100%', background:'#059669', color:'white', padding:'10px', borderRadius:'10px', border:'none', cursor:'pointer', marginTop:'10px'}}>📊 Health Excel</button></div>
  </div></Card></Wrap>); }

  if(page==='checklist'){ return (<Wrap><Card><h2>✅ Daily Skincare Checklist</h2><div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px', marginTop:'18px'}}>
    <div><h3>☀️ Morning Routine - Cleansing, Moisturizing, Sun Protection</h3>{[{k:"m1", l:"Face Wash - CeraVe Foaming Cleanser"}, {k:"m2", l:"Moisturizer - Hyaluronic Acid"}, {k:"m3", l:"Sunscreen - SPF 50"}].map(it=><div key={it.k} onClick={()=>setChecklist({...checklist, [it.k]:!checklist[it.k]})} style={{display:'flex', gap:'12px', alignItems:'center', padding:'14px', marginTop:'8px', background: checklist[it.k]?'#f0fdf4':'white', border: checklist[it.k]?'1px solid #bbf7d0':'1px solid #e2e8f0', borderRadius:'12px', cursor:'pointer'}}><div style={{width:'22px', height:'22px', borderRadius:'6px', background: checklist[it.k]?'#22c55e':'white', border:'2px solid #e2e8f0', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'12px'}}>{checklist[it.k]?'✓':''}</div><span style={{fontSize:'13px'}}>{it.l}</span></div>)}</div>
    <div><h3>🌙 Evening - Night Care + Weekly Treatment</h3>{[{k:"e1", l:"Evening Face Wash - Double cleanse"}, {k:"e2", l:"Night Moisturizer - Ceramide"}, {k:"w1", l:"Weekly Treatment - BHA 2% Toner (Wed)"}].map(it=><div key={it.k} onClick={()=>setChecklist({...checklist, [it.k]:!checklist[it.k]})} style={{display:'flex', gap:'12px', alignItems:'center', padding:'14px', marginTop:'8px', background: checklist[it.k]?'#f0fdf4':'white', border: checklist[it.k]?'1px solid #bbf7d0':'1px solid #e2e8f0', borderRadius:'12px', cursor:'pointer'}}><div style={{width:'22px', height:'22px', borderRadius:'6px', background: checklist[it.k]?'#22c55e':'white', border:'2px solid #e2e8f0', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'12px'}}>{checklist[it.k]?'✓':''}</div><span style={{fontSize:'13px'}}>{it.l}</span></div>)}</div>
  </div></Card></Wrap>); }

  if(page==='testing'){ return (<Wrap><Card><h1>🧪 Testing & Validation Center - M4</h1><p style={{fontSize:'12px', color:'#64748b'}}>Frontend/backend integration, API validation, End-to-end workflow testing, Security testing, Performance optimization, Docker containerization, Production deployment, Monitoring and logging setup, Documentation</p><div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'10px', marginTop:'16px'}}><div style={{background:'#f0fdf4', padding:'14px', borderRadius:'12px', textAlign:'center', border:'1px solid #bbf7d0'}}><p style={{fontSize:'10px', margin:0}}>TOTAL TESTS</p><h2 style={{margin:'6px 0 0'}}>12</h2></div><div style={{background:'#dcfce7', padding:'14px', borderRadius:'12px', textAlign:'center'}}><p style={{fontSize:'10px', margin:0}}>PASSED</p><h2 style={{margin:'6px 0 0', color:'#16a34a'}}>12</h2></div><div style={{background:'#fef2f2', padding:'14px', borderRadius:'12px', textAlign:'center'}}><p style={{fontSize:'10px', margin:0}}>FAILED</p><h2 style={{margin:'6px 0 0'}}>0</h2></div><div style={{background:'#dbeafe', padding:'14px', borderRadius:'12px', textAlign:'center'}}><p style={{fontSize:'10px', margin:0}}>SYSTEM</p><h2 style={{margin:'6px 0 0', color:'#2563eb'}}>READY</h2></div></div></Card></Wrap>); }
    if(page.toLowerCase().includes('consultant')){
    const clients = [
      {name:'Anjali Sharma', skin:'Oily', progress:95, status:'Active'},
      {name:'Priya Verma', skin:'Dry', progress:88, status:'Active'},
      {name:'Neha Singh', skin:'Combination', progress:92, status:'Follow-up'},
      {name:'Riya Patel', skin:'Sensitive', progress:90, status:'Completed'}
    ];
    return (<Wrap><Card>
      <div style={{background:'linear-gradient(135deg, #0f172a 0%, #3730a3 50%, #6366f1 100%)', margin:'-22px -22px 22px -22px', padding:'22px', borderRadius:'18px 18px 0 0', color:'white'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div><h2 style={{margin:0, fontSize:'20px', fontWeight:'800', color:'white'}}>👩‍⚕️ Consultant Dashboard</h2><p style={{margin:'4px 0 0', fontSize:'11px', color:'#e0e7ff'}}>Pragya • 24 Clients • 8 Today • ₹12k • 4.9⭐</p></div>
          <div style={{background:'#22c55e', padding:'5px 12px', borderRadius:'20px', fontSize:'10px', fontWeight:'800'}}>● Online</div>
        </div>
        <div style={{marginTop:'14px', display:'flex', gap:'7px', flexWrap:'wrap'}}>
          {[
            {id:'overview', label:'📊 Overview'},
            {id:'clients', label:'👥 Clients'},
            {id:'schedule', label:'📅 Schedule'},
            {id:'earnings', label:'💰 Earnings'}
          ].map(t=>(
            <button key={t.id} onClick={()=>setConsultTab(t.id)} style={{padding:'7px 12px', borderRadius:'8px', border:'none', background: consultTab===t.id?'white':'rgba(255,255,255,0.18)', color: consultTab===t.id?'#0f172a':'white', fontSize:'11px', fontWeight:'700', cursor:'pointer'}}>{t.label}</button>
          ))}
        </div>
      </div>

      {consultTab==='overview' && (<>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'8px'}}>
          <div style={{background:'#eff6ff', border:'1px solid #dbeafe', padding:'12px', borderRadius:'12px', textAlign:'center'}}><p style={{margin:0, fontSize:'18px', fontWeight:'800', color:'#1e40af'}}>24</p><p style={{margin:0, fontSize:'10px'}}>Total Clients</p></div>
          <div style={{background:'#f0fdf4', border:'1px solid #bbf7d0', padding:'12px', borderRadius:'12px', textAlign:'center'}}><p style={{margin:0, fontSize:'18px', fontWeight:'800', color:'#15803d'}}>8</p><p style={{margin:0, fontSize:'10px'}}>Today</p></div>
          <div style={{background:'#fefce8', border:'1px solid #fde68a', padding:'12px', borderRadius:'12px', textAlign:'center'}}><p style={{margin:0, fontSize:'18px', fontWeight:'800', color:'#a16207'}}>₹12k</p><p style={{margin:0, fontSize:'10px'}}>Earnings</p></div>
          <div style={{background:'#fdf2f8', border:'1px solid #fbcfe8', padding:'12px', borderRadius:'12px', textAlign:'center'}}><p style={{margin:0, fontSize:'18px', fontWeight:'800', color:'#be185d'}}>4.9⭐</p><p style={{margin:0, fontSize:'10px'}}>Rating</p></div>
        </div>
        <div style={{marginTop:'12px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
          <div style={{background:'white', border:'1px solid #e2e8f0', padding:'12px', borderRadius:'12px'}}><h4 style={{margin:'0 0 8px', fontSize:'11px', fontWeight:'800'}}>📋 Today's Appointments</h4>{['10:00 AM - Anjali - Hydration','11:30 AM - Priya - Acne Care','02:00 PM - Neha - Consultation','04:00 PM - Riya - Follow-up'].map((a,i)=><p key={i} style={{margin:'5px 0', fontSize:'11px', background:'#f8fafc', padding:'6px', borderRadius:'6px'}}>{a}</p>)}</div>
          <div style={{background:'white', border:'1px solid #e2e8f0', padding:'12px', borderRadius:'12px'}}><h4 style={{margin:'0 0 8px', fontSize:'11px', fontWeight:'800'}}>⚡ Quick Actions</h4>
            <button onClick={()=>setConsultTab('schedule')} style={{width:'100%', marginTop:'6px', padding:'8px', background:'#6366f1', color:'white', border:'none', borderRadius:'8px', fontSize:'11px', cursor:'pointer', fontWeight:'700'}}>▶️ Start Consultation</button>
            <button onClick={()=>setConsultTab('clients')} style={{width:'100%', marginTop:'6px', padding:'8px', background:'#f1f5f9', border:'1px solid #e2e8f0', borderRadius:'8px', fontSize:'11px', cursor:'pointer'}}>👥 View All Clients</button>
            <button onClick={()=>setConsultTab('earnings')} style={{width:'100%', marginTop:'6px', padding:'8px', background:'#f1f5f9', border:'1px solid #e2e8f0', borderRadius:'8px', fontSize:'11px', cursor:'pointer'}}>💰 View Earnings</button>
          </div>
        </div>
      </>)}

      {consultTab==='clients' && (
        <div style={{marginTop:'4px'}}>
          <h4 style={{margin:'0 0 10px', fontSize:'13px', fontWeight:'800'}}>👥 All Clients - Detail View</h4>
          <div style={{display:'grid', gap:'8px'}}>
            {clients.map((c,i)=><div key={i} style={{background:'white', border:'1px solid #e2e8f0', padding:'10px 12px', borderRadius:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div><p style={{margin:0, fontSize:'12px', fontWeight:'700'}}>{c.name}</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>{c.skin} Skin • {c.status}</p></div>
              <div style={{textAlign:'right'}}><p style={{margin:0, fontSize:'12px', fontWeight:'800', color:'#6366f1'}}>{c.progress}%</p><button onClick={()=>alert(`Opening ${c.name} profile - Progress ${c.progress}%`)} style={{marginTop:'4px', padding:'4px 8px', background:'#6366f1', color:'white', border:'none', borderRadius:'6px', fontSize:'9px', cursor:'pointer'}}>View</button></div>
            </div>)}
          </div>
        </div>
      )}

      {consultTab==='schedule' && (
        <div style={{marginTop:'4px'}}>
          <h4 style={{margin:'0 0 10px', fontSize:'13px', fontWeight:'800'}}>📅 Today's Schedule - Pragya</h4>
          <div style={{display:'grid', gap:'8px'}}>
            {[
              {time:'10:00 AM', client:'Anjali Sharma', type:'Hydration Treatment', status:'Upcoming'},
              {time:'11:30 AM', client:'Priya Verma', type:'Acne Consultation', status:'Upcoming'},
              {time:'02:00 PM', client:'Neha Singh', type:'Full Skin Analysis', status:'Confirmed'},
              {time:'04:00 PM', client:'Riya Patel', type:'Follow-up Review', status:'Confirmed'}
            ].map((s,i)=><div key={i} style={{background:'white', border:'1px solid #e2e8f0', padding:'10px 12px', borderRadius:'10px', display:'flex', justifyContent:'space-between'}}>
              <div><p style={{margin:0, fontSize:'12px', fontWeight:'700'}}>{s.time} - {s.client}</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>{s.type}</p></div>
              <button onClick={()=>alert(`Starting consultation for ${s.client} at ${s.time}`)} style={{padding:'6px 12px', background:'#22c55e', color:'white', border:'none', borderRadius:'7px', fontSize:'10px', cursor:'pointer', height:'28px'}}>Start</button>
            </div>)}
          </div>
        </div>
      )}

      {consultTab==='earnings' && (
        <div style={{marginTop:'4px'}}>
          <h4 style={{margin:'0 0 10px', fontSize:'13px', fontWeight:'800'}}>💰 Earnings Overview</h4>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px'}}>
            <div style={{background:'#f0fdf4', padding:'12px', borderRadius:'10px', textAlign:'center', border:'1px solid #bbf7d0'}}><p style={{margin:0, fontSize:'10px'}}>Today</p><p style={{margin:'4px 0 0', fontSize:'16px', fontWeight:'800'}}>₹2,400</p></div>
            <div style={{background:'#eff6ff', padding:'12px', borderRadius:'10px', textAlign:'center', border:'1px solid #dbeafe'}}><p style={{margin:0, fontSize:'10px'}}>This Week</p><p style={{margin:'4px 0 0', fontSize:'16px', fontWeight:'800'}}>₹12,000</p></div>
            <div style={{background:'#fefce8', padding:'12px', borderRadius:'10px', textAlign:'center', border:'1px solid #fde68a'}}><p style={{margin:0, fontSize:'10px'}}>Month</p><p style={{margin:'4px 0 0', fontSize:'16px', fontWeight:'800'}}>₹48,000</p></div>
          </div>
          <div style={{marginTop:'10px', background:'white', border:'1px solid #e2e8f0', padding:'12px', borderRadius:'10px'}}>
            <p style={{margin:0, fontSize:'11px', fontWeight:'700'}}>Recent Payments</p>
            <p style={{margin:'6px 0 0', fontSize:'11px'}}>• Anjali - ₹600 - Paid ✔️</p>
            <p style={{margin:'3px 0 0', fontSize:'11px'}}>• Priya - ₹800 - Paid ✔️</p>
            <p style={{margin:'3px 0 0', fontSize:'11px'}}>• Neha - ₹1000 - Pending ⏳</p>
          </div>
        </div>
      )}
    </Card></Wrap>);
  } 
  if(page.toLowerCase().includes('clinical')){
    return (<Wrap><Card>
      <div style={{background:'linear-gradient(135deg, #064e3b 0%, #0f766e 50%, #14b8a6 100%)', margin:'-22px -22px 22px -22px', padding:'24px', borderRadius:'18px 18px 0 0', color:'white'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <h2 style={{margin:0, fontSize:'22px', fontWeight:'800', color:'white', letterSpacing:'-0.5px'}}>🩺 Clinical Dashboard</h2>
            <p style={{margin:'6px 0 0', fontSize:'11px', color:'#ccfbf1', fontWeight:'500'}}>42 Patients • 12 Appointments Today • 3 Critical • 98% Success Rate</p>
          </div>
          <div style={{background:'#22c55e', padding:'6px 14px', borderRadius:'20px', fontSize:'10px', fontWeight:'800', color:'white', boxShadow:'0 2px 8px rgba(0,0,0,0.15)'}}>● On Duty</div>
        </div>
        <div style={{marginTop:'16px', display:'flex', gap:'8px', flexWrap:'wrap'}}>
          <button onClick={()=>setDermTab('overview')} style={{padding:'8px 14px', borderRadius:'9px', border:'none', background: dermTab==='overview'?'white':'rgba(255,255,255,0.15)', color: dermTab==='overview'?'#064e3b':'white', fontSize:'11px', fontWeight:'700', cursor:'pointer', transition:'all 0.2s'}}>📊 Overview</button>
          <button onClick={()=>setDermTab('patients')} style={{padding:'8px 14px', borderRadius:'9px', border:'none', background: dermTab==='patients'?'white':'rgba(255,255,255,0.15)', color: dermTab==='patients'?'#064e3b':'white', fontSize:'11px', fontWeight:'700', cursor:'pointer'}}>🧑‍⚕️ Patients</button>
          <button onClick={()=>setDermTab('cases')} style={{padding:'8px 14px', borderRadius:'9px', border:'none', background: dermTab==='cases'?'white':'rgba(255,255,255,0.15)', color: dermTab==='cases'?'#064e3b':'white', fontSize:'11px', fontWeight:'700', cursor:'pointer'}}>📋 Cases</button>
          <button onClick={()=>setDermTab('reports')} style={{padding:'8px 14px', borderRadius:'9px', border:'none', background: dermTab==='reports'?'white':'rgba(255,255,255,0.15)', color: dermTab==='reports'?'#064e3b':'white', fontSize:'11px', fontWeight:'700', cursor:'pointer'}}>📑 Reports</button>
        </div>
      </div>

      {dermTab==='overview' && (<>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'10px'}}>
          <div style={{background:'linear-gradient(135deg, #ecfdf5, #d1fae5)', border:'1px solid #a7f3d0', padding:'14px', borderRadius:'12px', textAlign:'center'}}><p style={{margin:0, fontSize:'20px', fontWeight:'800', color:'#065f46'}}>42</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#047857', fontWeight:'600'}}>Total Patients</p></div>
          <div style={{background:'linear-gradient(135deg, #fef2f2, #fee2e2)', border:'1px solid #fecaca', padding:'14px', borderRadius:'12px', textAlign:'center'}}><p style={{margin:0, fontSize:'20px', fontWeight:'800', color:'#991b1b'}}>3</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#b91c1c', fontWeight:'600'}}>Critical</p></div>
          <div style={{background:'linear-gradient(135deg, #eff6ff, #dbeafe)', border:'1px solid #bfdbfe', padding:'14px', borderRadius:'12px', textAlign:'center'}}><p style={{margin:0, fontSize:'20px', fontWeight:'800', color:'#1e40af'}}>12</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#1d4ed8', fontWeight:'600'}}>Today</p></div>
          <div style={{background:'linear-gradient(135deg, #f0fdf4, #dcfce7)', border:'1px solid #bbf7d0', padding:'14px', borderRadius:'12px', textAlign:'center'}}><p style={{margin:0, fontSize:'20px', fontWeight:'800', color:'#15803d'}}>98%</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#16a34a', fontWeight:'600'}}>Success</p></div>
        </div>
        <div style={{marginTop:'14px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
          <div style={{background:'white', border:'1px solid #e2e8f0', padding:'14px', borderRadius:'12px'}}><h4 style={{margin:'0 0 10px', fontSize:'11px', fontWeight:'800', color:'#0f172a'}}>🚨 Critical Cases Today</h4>
            <div style={{display:'grid', gap:'6px'}}><p style={{margin:0, fontSize:'11px', background:'#fef2f2', padding:'8px', borderRadius:'8px', border:'1px solid #fecaca'}}>10:00 AM - Anjali - Severe Acne</p><p style={{margin:0, fontSize:'11px', background:'#fef2f2', padding:'8px', borderRadius:'8px', border:'1px solid #fecaca'}}>11:30 AM - Neha - Eczema Flare</p><p style={{margin:0, fontSize:'11px', background:'#fffbeb', padding:'8px', borderRadius:'8px', border:'1px solid #fde68a'}}>02:00 PM - Aarav - Allergy</p></div>
          </div>
          <div style={{background:'white', border:'1px solid #e2e8f0', padding:'14px', borderRadius:'12px'}}><h4 style={{margin:'0 0 10px', fontSize:'11px', fontWeight:'800', color:'#0f172a'}}>📈 Today's Summary</h4>
            <p style={{margin:'4px 0', fontSize:'11px'}}>✔️ 8 Consultations Done</p><p style={{margin:'4px 0', fontSize:'11px'}}>⏳ 4 Pending</p><p style={{margin:'4px 0', fontSize:'11px'}}>💊 15 Prescriptions</p><p style={{margin:'4px 0', fontSize:'11px'}}>📋 3 Lab Reports</p>
            <button onClick={()=>setDermTab('patients')} style={{width:'100%', marginTop:'10px', padding:'8px', background:'#0f766e', color:'white', border:'none', borderRadius:'8px', fontSize:'11px', fontWeight:'700', cursor:'pointer'}}>View All Patients →</button>
          </div>
        </div>
      </>)}

      {dermTab==='patients' && (
        <div><h4 style={{margin:'0 0 10px', fontSize:'13px', fontWeight:'800'}}>🧑‍⚕️ Patients List</h4>
          <div style={{display:'grid', gap:'8px'}}>
            {[
              {name:'Anjali Sharma', case:'Severe Acne', sev:'High', prog:85},
              {name:'Priya Verma', case:'Hyperpigmentation', sev:'Medium', prog:78},
              {name:'Neha Singh', case:'Eczema', sev:'High', prog:92}
            ].map((p,i)=><div key={i} style={{background:'white', border:'1px solid #e2e8f0', padding:'12px', borderRadius:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}><div><p style={{margin:0, fontSize:'12px', fontWeight:'700'}}>{p.name}</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>{p.case} • {p.sev}</p></div><div style={{textAlign:'right'}}><p style={{margin:0, fontSize:'12px', fontWeight:'800', color:'#0f766e'}}>{p.prog}%</p><button onClick={()=>alert(p.name)} style={{padding:'4px 8px', background:'#0f766e', color:'white', border:'none', borderRadius:'6px', fontSize:'9px', cursor:'pointer', marginTop:'4px'}}>File</button></div></div>)}
          </div>
        </div>
      )}
      {dermTab==='cases' && (
        <div><h4 style={{margin:'0 0 10px', fontSize:'13px', fontWeight:'800'}}>📋 Active Cases</h4>
          <div style={{display:'grid', gap:'8px'}}>
            <div style={{background:'white', border:'1px solid #e2e8f0', padding:'12px', borderRadius:'10px'}}><p style={{margin:0, fontSize:'12px', fontWeight:'700'}}>10:00 AM - Anjali Sharma</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>Severe Acne - Isotretinoin Review • High Priority</p></div>
            <div style={{background:'white', border:'1px solid #e2e8f0', padding:'12px', borderRadius:'10px'}}><p style={{margin:0, fontSize:'12px', fontWeight:'700'}}>11:30 AM - Neha Singh</p><p style={{margin:'2px 0 0', fontSize:'10px', color:'#64748b'}}>Atopic Eczema - Steroid Review • High Priority</p></div>
          </div>
        </div>
      )}
      {dermTab==='reports' && (
        <div><h4 style={{margin:'0 0 10px', fontSize:'13px', fontWeight:'800'}}>📑 Reports</h4><div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px'}}><div style={{background:'#ecfdf5', padding:'12px', borderRadius:'10px', textAlign:'center'}}><p style={{margin:0, fontSize:'16px', fontWeight:'800'}}>12</p><p style={{margin:0, fontSize:'10px'}}>Treated</p></div><div style={{background:'#eff6ff', padding:'12px', borderRadius:'10px', textAlign:'center'}}><p style={{margin:0, fontSize:'16px', fontWeight:'800'}}>28</p><p style={{margin:0, fontSize:'10px'}}>Prescriptions</p></div><div style={{background:'#fefce8', padding:'12px', borderRadius:'10px', textAlign:'center'}}><p style={{margin:0, fontSize:'16px', fontWeight:'800'}}>8</p><p style={{margin:0, fontSize:'10px'}}>Labs</p></div></div></div>
      )}
    </Card></Wrap>);
  } 
  return (<Wrap><Card><h2>{page.replace(/-/g,' ').toUpperCase()} - {name}</h2><p style={{fontSize:'12px', marginTop:'10px'}}>M4 Complete Working! <button onClick={()=>setPage('login')} style={{padding:'8px 12px', background:'#0f172a', color:'white', borderRadius:'8px', border:'none', marginLeft:'8px'}}>Go Login</button></p></Card></Wrap>);
}

export default App;
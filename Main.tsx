import React from "react";
import {
  AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig,
} from "remotion";

const C = {
  bg: "#101827", panel: "#172438", cream: "#F7F3EA",
  muted: "#B8C5D6", orange: "#F5A623", teal: "#62D6C5",
  white: "#FFFFFF", dark: "#0B1220"
};

const BengaliText: React.FC<{children: React.ReactNode; size?: number; color?: string; weight?: number; style?: React.CSSProperties}> =
({children, size=62, color=C.cream, weight=700, style={}}) => (
  <div style={{
    fontFamily: '"Noto Sans Bengali", "Hind Siliguri", "Arial", sans-serif',
    fontSize: size, color, fontWeight: weight, lineHeight: 1.35,
    textAlign: "center", ...style
  }}>{children}</div>
);

const Pill: React.FC<{label:string; color:string}> = ({label,color}) => (
  <div style={{
    border: `2px solid ${color}`, color, borderRadius: 999, padding: "14px 28px",
    fontSize: 28, fontWeight: 700, letterSpacing: 1
  }}>{label}</div>
);

const AssistantCard: React.FC<{frame:number}> = ({frame}) => {
  const pulse = 1 + Math.sin(frame / 8) * 0.025;
  return <div style={{
    width: 660, height: 520, borderRadius: 42, background: C.panel,
    border: "2px solid #34445B", padding: 38, boxSizing: "border-box",
    boxShadow: "0 30px 100px rgba(0,0,0,.28)", transform: `scale(${pulse})`
  }}>
    <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:34}}>
      <div style={{width:24,height:24,borderRadius:"50%",background:C.teal}}/>
      <div style={{color:C.cream,fontSize:30,fontWeight:700}}>Claude Assistant</div>
      <div style={{marginLeft:"auto",color:C.muted,fontSize:22}}>● ● ●</div>
    </div>
    <div style={{background:"#22334A",borderRadius:22,padding:24,marginBottom:22}}>
      <div style={{fontSize:23,color:C.muted,marginBottom:10}}>আপনার নির্দেশনা</div>
      <div style={{fontSize:30,color:C.cream,fontWeight:600}}>একটি ভিডিওর পরিকল্পনা তৈরি করো</div>
    </div>
    <div style={{background:"#183A3B",borderRadius:22,padding:24}}>
      <div style={{fontSize:23,color:C.teal,marginBottom:12}}>Claude-এর উত্তর</div>
      {["গবেষণা ও তথ্য সাজানো","স্ক্রিপ্ট ও কনটেন্ট পরিকল্পনা","কোডিংয়ে সহায়তা"].map((t,i)=>
        <div key={t} style={{display:"flex",gap:14,alignItems:"center",fontSize:26,color:C.cream,marginTop:12}}>
          <span style={{color:C.teal,fontSize:30}}>✓</span>{t}
        </div>
      )}
    </div>
  </div>;
};

export const Main: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const scene1 = frame < 90;
  const scene2 = frame >= 90 && frame < 210;
  const scene3 = frame >= 210;
  const local = scene1 ? frame : scene2 ? frame-90 : frame-210;
  const enter = spring({frame: local, fps, config:{damping:14, stiffness:100}});
  const fade = interpolate(local,[0,12],[0,1],{extrapolateRight:"clamp"});
  const drift = interpolate(local,[0,90],[45,-15],{extrapolateRight:"clamp"});
  return <AbsoluteFill style={{
    background: `radial-gradient(circle at 50% 25%, #243B53 0%, ${C.bg} 58%, #0B1220 100%)`,
    justifyContent:"center",alignItems:"center",padding:70,boxSizing:"border-box"
  }}>
    <div style={{position:"absolute",top:90,left:70,right:70,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{fontSize:27,color:C.muted,fontWeight:700,letterSpacing:3}}>AI EXPLAINER</div>
      <Pill label="CLAUDE" color={C.teal}/>
    </div>
    {scene1 && <div style={{opacity:fade,transform:`translateY(${drift}px) scale(${0.92+enter*0.08})`,display:"flex",flexDirection:"column",alignItems:"center",gap:64}}>
      <div style={{width:250,height:250,borderRadius:70,background:"linear-gradient(145deg,#F6B94A,#E88928)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 25px 90px rgba(245,166,35,.22)"}}>
        <div style={{fontSize:142,color:C.dark,fontWeight:900}}>AI</div>
      </div>
      <BengaliText size={68}>আপনার নিজের কাজের জন্য</BengaliText>
      <BengaliText size={82} color={C.teal}>একজন AI সহকারী?</BengaliText>
      <div style={{fontSize:28,color:C.muted}}>ভাবুন তো, কেমন হতো!</div>
    </div>}
    {scene2 && <div style={{opacity:fade,transform:`translateY(${drift}px) scale(${0.94+enter*0.06})`,display:"flex",flexDirection:"column",alignItems:"center",gap:46}}>
      <AssistantCard frame={frame}/>
      <BengaliText size={62}>সঠিক নির্দেশনা দিলে Claude পারে—</BengaliText>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center",maxWidth:850}}>
        <Pill label="লেখালেখি" color={C.orange}/>
        <Pill label="পরিকল্পনা" color={C.teal}/>
        <Pill label="কোডিং" color="#A9B8FF"/>
      </div>
    </div>}
    {scene3 && <div style={{opacity:fade,transform:`translateY(${drift}px) scale(${0.94+enter*0.06})`,display:"flex",flexDirection:"column",alignItems:"center",gap:45}}>
      <div style={{fontSize:30,color:C.muted,fontWeight:700,letterSpacing:3}}>GET STARTED</div>
      <div style={{width:250,height:250,borderRadius:"50%",border:`5px solid ${C.teal}`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 90px rgba(98,214,197,.15)"}}>
        <div style={{fontSize:100,color:C.teal,fontWeight:900}}>✓</div>
      </div>
      <BengaliText size={76}>শুরু করতে পারেন</BengaliText>
      <BengaliText size={104} color={C.orange}>ফ্রিতেই!</BengaliText>
      <BengaliText size={31} color={C.muted} weight={500}>তবে Free প্ল্যানে ব্যবহারের সীমা আছে</BengaliText>
    </div>}
    <div style={{position:"absolute",bottom:100,left:70,right:70,display:"flex",alignItems:"center",gap:16}}>
      <div style={{height:5,background:"#34445B",borderRadius:10,flex:1,overflow:"hidden"}}>
        <div style={{height:"100%",width:`${(frame/299)*100}%`,background:C.teal,borderRadius:10}}/>
      </div>
      <div style={{fontSize:20,color:C.muted}}>10s</div>
    </div>
  </AbsoluteFill>;
};
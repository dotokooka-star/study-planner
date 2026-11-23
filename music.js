// 공부 소리: 85 BPM 우주 앰비언트(패드 + 유리 아르페지오 + 스트링 + 맥박), 코드로 합성. 선택적으로 8D(이어폰용) 효과.
// 새 곡 추가는 TRACKS에 곡 하나를 더 넣으면 된다.
const BPM=85,B=60/BPM,mtof=m=>440*Math.pow(2,(m-69)/12);
const CH=[{b:36,n:[60,64,67,71,74]},{b:41,n:[65,69,72,76,83]},{b:45,n:[69,72,76,79,83]},{b:43,n:[67,71,74,79,81]}];
const PAT=[0,1,2,3,4,3,2,1,0,2,4,2,1,3,2,1];

export function createMusic(api){
  const {getS,log}=api;
  let ac=null,sess=null,dry=null,revIn=null,dlyIn=null,pans=null,timer=null,rot=null,barIdx=0,nextTime=0,playing=false;
  const vol=()=>Math.max(0,Math.min(100,getS().soundVol==null?50:getS().soundVol))/100*.9;
  const eight=()=>!!getS().sound8d;
  const speed=()=>(getS().sound8dSpd||80)/100;

  function ensureCtx(){
    if(!ac){
      const C=window.AudioContext||window.webkitAudioContext;
      if(!C){log('이 브라우저는 소리를 지원하지 않아');return false}
      try{ac=new C()}catch(e){log('오디오 시작 실패 '+e.message);return false}
    }
    return true;
  }
  // 아이폰: 무음 스위치가 켜져 있어도 소리가 나도록 '재생 모드'로 바꾸고, 소리 없는 오디오를 계속 틀어 둔다.
  let silent=null;
  const isIOS=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  function unlockIOS(){
    try{if(navigator.audioSession)navigator.audioSession.type='playback'}catch(e){}
    if(!isIOS())return;
    try{
      if(!silent){
        const sr=8000,n=sr/2,buf=new ArrayBuffer(44+n),v=new DataView(buf);
        const w=(o,s)=>{for(let i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i))};
        w(0,'RIFF');v.setUint32(4,36+n,true);w(8,'WAVE');w(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr,true);v.setUint16(32,1,true);v.setUint16(34,8,true);w(36,'data');v.setUint32(40,n,true);
        for(let i=0;i<n;i++)v.setUint8(44+i,128);
        silent=new Audio(URL.createObjectURL(new Blob([buf],{type:'audio/wav'})));silent.loop=true;silent.setAttribute('playsinline','');
      }
      silent.play().catch(e=>log('무음 오디오 재생 실패 '+e.message));
    }catch(e){log('아이폰 소리 잠금 해제 실패 '+e.message)}
  }
  function prime(){
    if(!ensureCtx())return;
    if(ac.state==='suspended')ac.resume().catch(e=>log('오디오 재개 실패 '+e.message));
    unlockIOS();
  }
  // 터치할 때마다 브라우저가 막아둔 소리를 풀어 준다
  const wake=()=>{if(ac&&ac.state==='suspended')ac.resume().catch(()=>{})};
  document.addEventListener('pointerdown',wake,{passive:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)wake()});
  // 설정의 '소리 테스트': 띵동 세 음을 직접 들려준다
  function test(){
    if(!ensureCtx())return '이 브라우저는 소리를 지원하지 않아';
    prime();
    try{
      const t=ac.currentTime+.05;
      [[660,0],[880,.22],[1320,.44]].forEach(([f,d])=>{const o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(0,t+d);g.gain.linearRampToValueAtTime(.3,t+d+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d+.9);o.connect(g);g.connect(ac.destination);o.start(t+d);o.stop(t+d+1)});
    }catch(e){return '소리 테스트 실패: '+e.message}
    return ac.state==='running'?'띵동 소리가 났어? 안 들리면 폰 무음 스위치와 미디어 볼륨을 확인해줘':'브라우저가 소리를 막고 있어. 화면을 한 번 터치하고 다시 눌러줘';
  }

  function mkPan(r,period,dir){
    const p=ac.createPanner();p.panningModel='HRTF';p.distanceModel='inverse';p.refDistance=1;p.rolloffFactor=.35;
    const g=ac.createGain();g.connect(p);p.connect(sess);
    return{inp:g,p,r,period,dir,ph:Math.random()*6.28,ang:0};
  }
  function build(){
    sess=ac.createGain();sess.gain.value=0;
    const comp=ac.createDynamicsCompressor();comp.threshold.value=-18;comp.ratio.value=3;
    const mk=ac.createGain();mk.gain.value=1.7;
    const lim=ac.createDynamicsCompressor();lim.threshold.value=-4;lim.knee.value=0;lim.ratio.value=20;lim.attack.value=.003;lim.release.value=.1;
    sess.connect(comp);comp.connect(mk);mk.connect(lim);lim.connect(ac.destination);
    dry=ac.createGain();dry.gain.value=.9;dry.connect(sess);
    const len=Math.floor(ac.sampleRate*3.8),ir=ac.createBuffer(2,len,ac.sampleRate);
    for(let c=0;c<2;c++){const d=ir.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.6)}
    const conv=ac.createConvolver();conv.buffer=ir;const rlp=ac.createBiquadFilter();rlp.type='lowpass';rlp.frequency.value=5500;
    revIn=ac.createGain();revIn.connect(conv);conv.connect(rlp);const rg=ac.createGain();rg.gain.value=.55;rlp.connect(rg);rg.connect(sess);
    dlyIn=ac.createGain();const dl=ac.createDelay(1.5);dl.delayTime.value=B*.75;const fb=ac.createGain();fb.gain.value=.38;
    const dlp=ac.createBiquadFilter();dlp.type='lowpass';dlp.frequency.value=2800;
    dlyIn.connect(dl);dl.connect(dlp);dlp.connect(fb);fb.connect(dl);dlp.connect(sess);dlp.connect(revIn);
    pans={pad:mkPan(3,30,1),arp:mkPan(2.5,14,-1),str:mkPan(4,44,1)};
  }
  function out(node,wet,del,bus){
    node.connect(eight()&&bus?bus.inp:dry);
    if(wet){const g=ac.createGain();g.gain.value=wet;node.connect(g);g.connect(revIn)}
    if(del){const g=ac.createGain();g.gain.value=del;node.connect(g);g.connect(dlyIn)}
  }
  function setPos(b,x,z){const p=b.p;if(p.positionX){p.positionX.setTargetAtTime(x,ac.currentTime,.05);p.positionZ.setTargetAtTime(z,ac.currentTime,.05)}else p.setPosition(x,0,z)}
  function rotate(){
    let last=performance.now();
    return setInterval(()=>{
      if(!ac||!pans)return;const now=performance.now(),dt=(now-last)/1000;last=now;
      if(!eight())return;
      Object.values(pans).forEach(b=>{b.ang+=b.dir*dt*6.2832/b.period*speed();const a=b.ph+b.ang;setPos(b,b.r*Math.sin(a),-b.r*Math.cos(a))});
    },50);
  }

  function pad(t,notes,dur){notes.forEach(m=>{[['sawtooth',-6],['triangle',6]].forEach(([ty,dt])=>{const o=ac.createOscillator();o.type=ty;o.frequency.value=mtof(m);o.detune.value=dt;const f=ac.createBiquadFilter();f.type='lowpass';f.frequency.value=1000;const g=ac.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.022,t+1.4);g.gain.setValueAtTime(.022,t+dur);g.gain.linearRampToValueAtTime(0,t+dur+1.8);o.connect(f);f.connect(g);out(g,.4,.1,pans.pad);o.start(t);o.stop(t+dur+2)})})}
  function strings(t,notes,dur,fac){notes.forEach(m=>{[-9,0,9].forEach(dt=>{const o=ac.createOscillator();o.type='sawtooth';o.frequency.value=mtof(m+12);o.detune.value=dt;const lfo=ac.createOscillator();lfo.frequency.value=5+Math.random();const lg=ac.createGain();lg.gain.value=5;lfo.connect(lg);lg.connect(o.detune);lfo.start(t);lfo.stop(t+dur+2);const f=ac.createBiquadFilter();f.type='lowpass';f.frequency.value=2200;const g=ac.createGain();const p=.011*fac;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(p,t+1.7);g.gain.setValueAtTime(p,t+dur);g.gain.linearRampToValueAtTime(0,t+dur+1.6);o.connect(f);f.connect(g);out(g,.5,.05,pans.str);o.start(t);o.stop(t+dur+2)})})}
  function arp(t,m,vel){const f=mtof(m),c=ac.createOscillator(),md=ac.createOscillator();c.type='sine';md.type='sine';c.frequency.value=f;md.frequency.value=f*3.01;const mg=ac.createGain();mg.gain.setValueAtTime(f*1.4,t);mg.gain.exponentialRampToValueAtTime(1,t+.5);md.connect(mg);mg.connect(c.frequency);const g=ac.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.075*vel,t+.006);g.gain.exponentialRampToValueAtTime(.0001,t+1.1);c.connect(g);out(g,.5,.5,pans.arp);c.start(t);md.start(t);c.stop(t+1.2);md.stop(t+1.2)}
  function bass(t,m,dur){const o=ac.createOscillator();o.type='sine';o.frequency.value=mtof(m);const g=ac.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.11,t+.4);g.gain.setValueAtTime(.11,t+dur);g.gain.linearRampToValueAtTime(0,t+dur+1);o.connect(g);out(g,.1,0);o.start(t);o.stop(t+dur+1.1)}
  function pulse(t){const o=ac.createOscillator();o.type='sine';o.frequency.setValueAtTime(90,t);o.frequency.exponentialRampToValueAtTime(42,t+.2);const g=ac.createGain();g.gain.setValueAtTime(.1,t);g.gain.exponentialRampToValueAtTime(.0001,t+.3);o.connect(g);out(g,0,0);o.start(t);o.stop(t+.35)}
  function bar(i,t0){
    const ch=CH[Math.floor(i/2)%4],even=i%2===0;
    if(even){pad(t0,ch.n.slice(0,4).map(x=>x-12),8*B);bass(t0,ch.b,8*B);if(i>=8)strings(t0,ch.n.slice(0,4),8*B,Math.min(1,(i-8)/4))}
    if(i>=2){const f=Math.min(1,(i-2)/6);for(let s=0;s<16;s++){if(Math.random()<.14)continue;const m=ch.n[PAT[s]%ch.n.length]+12,vel=(s%4===0?1:.65)*(.8+Math.random()*.3)*f;arp(t0+s*B/4,m,vel)}}
    if(i>=12){for(let b=0;b<4;b++)pulse(t0+b*B)}
  }
  function sched(){
    if(!ac||!playing)return;
    const now=ac.currentTime;
    while(nextTime<now+.7){bar(barIdx,nextTime);barIdx++;nextTime+=4*B}
  }

  function start(){
    if(playing||!ensureCtx())return;
    try{
      prime();build();playing=true;nextTime=ac.currentTime+.3;
      sess.gain.setValueAtTime(0,ac.currentTime);sess.gain.linearRampToValueAtTime(vol(),ac.currentTime+1.6);
      sched();timer=setInterval(sched,150);rot=rotate();log('공부 소리 시작 '+barIdx+'마디부터');
    }catch(e){playing=false;log('공부 소리 시작 실패 '+e.message)}
  }
  function stop(){
    if(!playing)return;
    playing=false;clearInterval(timer);clearInterval(rot);timer=null;rot=null;
    const s=sess;
    try{s.gain.cancelScheduledValues(ac.currentTime);s.gain.setTargetAtTime(0,ac.currentTime,.25);setTimeout(()=>{try{s.disconnect()}catch(e){}if(!playing&&silent)silent.pause()},1600)}catch(e){}
    log('공부 소리 멈춤');
  }
  // 공부 중일 때만 재생
  function sync(shouldPlay){
    const want=!!shouldPlay&&getS().sound!==false;
    if(want&&!playing)start();else if(!want&&playing)stop();
  }
  // 설정이 바뀌었을 때(볼륨 등) 바로 반영
  function apply(){if(playing&&sess)sess.gain.setTargetAtTime(vol(),ac.currentTime,.1)}
  return{prime,sync,apply,test,isPlaying:()=>playing,state:()=>ac?ac.state:'none'};
}

// 공부 화면(테마) 모듈.
// 새 테마 추가: SCENES에 장면 한 개를 넣고, 어울리는 문구가 있으면 QUOTES + QUOTE_SETS에 한 줄씩 추가하면 설정에 자동으로 나타난다.
const QUOTES={
good:["오늘의 한 걸음이 내일의 나를 만든다","천천히 가도 괜찮아, 멈추지만 않으면 돼","지금 이 집중이 미래의 나에게 주는 선물이야","완벽보다 꾸준함이 이긴다","시작이 반이래, 이미 반은 왔어","어제의 나보다 딱 한 뼘만 더","작은 노력이 쌓여 큰 변화가 된다","포기하지 않으면 반드시 닿는다","지금 흘린 땀이 훗날의 여유가 된다","너는 생각보다 훨씬 잘하고 있어","한 페이지만 더, 딱 한 페이지만","별은 어두울수록 더 빛난다","오늘 끝까지 해낸 나를 칭찬해줘","쉬어가도 괜찮아, 다시 돌아오면 되니까","집중한 시간은 절대 배신하지 않아","아무리 큰 산도 한 걸음부터","지금 이 순간에만 집중하자","노력은 조용히, 결과는 눈부시게","버티는 하루가 모여 길이 된다","네 속도로 가면 돼, 방향만 잃지 마","천 리 길도 한 걸음부터","넘어진 횟수보다 일어난 횟수가 너를 말해준다","오늘 배운 것은 내일의 무기가 된다","할 수 있다고 믿는 순간 반은 이룬 거야","지금 힘든 건 성장하고 있다는 신호야","꿈은 계획을 세울 때 비로소 현실이 된다","한 번에 하나씩, 그러면 다 끝나","네 노력은 반드시 어딘가에 쌓이고 있어","비교는 어제의 나하고만 하자","오늘의 집중이 내일의 자신감이야","느려도 앞으로 가고 있으면 충분해","실패는 끝이 아니라 방법 하나를 알게 된 거야","스스로를 믿는 것에서 모든 게 시작돼","조급해하지 마, 꽃도 피는 때가 있어","오늘 한 시간이 한 달 뒤를 바꾼다","힘들 때가 바로 성장하는 때야","좋은 습관 하나가 인생을 바꾼다","지금 시작해도 늦지 않았어","네가 걸어온 길도 충분히 대단해","마음이 흔들릴 땐 숨 한 번 크게 쉬자","하루하루가 쌓여 너의 이야기가 된다","끝까지 가는 사람이 결국 이긴다","오늘의 작은 승리를 기억해","해보지 않고는 아무것도 알 수 없어","열심히 한 만큼 마음도 단단해진다","한계는 생각보다 훨씬 멀리 있어","너라서 할 수 있는 일이 있어","반복하는 사람이 결국 익숙해지고 잘하게 돼","오늘도 책상 앞에 앉은 것만으로 이미 대단해","지금의 선택이 미래의 나를 웃게 한다","배움에는 끝이 없고, 그래서 늘 새로 시작할 수 있어","가장 어두운 밤도 결국 아침으로 이어진다","마음먹은 오늘이 가장 빠른 시작이야","쌓은 만큼 가벼워지는 날이 반드시 와","오늘의 너는 어제보다 분명 한 뼘 자랐어","큰 성공은 작은 반복의 다른 이름이야","지금의 인내는 나중의 자유가 된다","모르는 게 많다는 건 배울 게 많다는 뜻이야","너는 이미 충분히 잘 가고 있어, 계속 가자","한 줄을 읽어도 읽은 거야, 그걸로 충분해","목표가 멀어 보여도 지금 한 문제가 길을 만든다","지치면 쉬고, 쉬었으면 다시 걸으면 돼","노력은 배신하지 않지만 포기는 배신한다","오늘의 땀방울이 내일의 이름이 된다","스스로에게 친절하되, 약속에는 엄격하자","불가능은 해보기 전까지만 존재해","가장 좋은 때는 지금 앉은 이 순간이야","겨울을 견딘 나무가 제일 단단한 꽃을 피워","오늘 하루를 이기면 인생도 이긴다","조용한 집중이 가장 큰 소리를 낸다","하나를 끝까지 해본 사람은 뭐든 해낼 수 있어","어려운 문제는 네가 자라는 문이야","한 걸음 물러서도 다시 달려가면 돼","지금 이 시간이 훗날 가장 빛나는 기억이 될 거야","오늘 최선을 다했다면 결과가 어떻든 너는 이긴 거야","마음이 가는 곳에 시간도 따라간다","꾸준함은 재능을 이기는 가장 확실한 힘이야","작은 성취를 모아 큰 자신감을 만들자","지금 쏟는 마음이 미래의 너를 지켜줄 거야","시작한 너에게 이미 박수를 보낸다"],
hard:["하고 싶다는 말은 안 하는 사람의 변명이야","폰 보는 동안 누군가는 앞서가고 있어","내일부터라고? 어제도 그렇게 말했어","재능 탓하기 전에 오늘 몇 시간 앉아 있었는지 세어봐","피곤한 건 맞아, 근데 시험은 안 기다려줘","지금 놀면 나중에 더 못 놀아","계획만 세우는 건 공부가 아니야","의지가 없는 게 아니라 시작을 안 하는 거야","시간이 없는 게 아니라 우선순위가 없는 거야","오늘 안 한 공부는 내일의 두 배가 된다","변명 한 줄 쓸 시간에 문제 한 개 풀어","남 탓해도 성적은 그대로야","하기 싫은 걸 하는 게 진짜 실력이야","이대로면 내년에도 똑같은 고민 하고 있을걸","기분 좋을 때만 하면 평생 못 해","공부 안 하는 이유는 수백 가지, 하는 이유는 하나야, 네 미래","지금 편하면 나중에 힘들어","결과가 마음에 안 들면 어제의 나부터 의심해봐","유튜브 10분이 한 시간 되는 거 알지","열심히 하는 척은 성적이 먼저 알아봐","잠깐만 쉬자는 말이 제일 위험해","아무도 대신 공부해주지 않아","부러워하지 말고 앉아서 해","오늘 대충 하면 내일도 대충이야","하루 놓치면 이틀은 놓치기 쉬워져","불안하면 책을 펴, 폰을 켜지 말고","지금 안 하면 그때 가서 후회해도 소용없어","머리 탓이 아니라 엉덩이 탓이야","노력 안 한 꿈은 그냥 상상일 뿐이야","지금 이 순간에도 시간은 가고 있어","한숨 쉴 시간에 한 줄 더 읽어","포기하기 쉬운 날이 바로 이겨야 하는 날이야","놀 때는 즐거웠겠지, 결과 볼 때는?","간절하지 않으면 움직이지도 않아","공부가 힘든 게 아니라 시작이 힘든 거야","오늘의 게으름이 내일의 후회가 된다","안 한 만큼 정확하게 나온다","한 번 더 확인할 시간에 한 번 더 풀어","졸리면 일어나서 세수하고 다시 앉아","남들 쉴 때 하는 게 차이를 만들어","목표는 거창한데 오늘 한 건 뭐야","핑계는 편하고 결과는 아파","지금 이 한 시간이 합격과 불합격을 가른다","하고 나서 후회하는 사람은 없어","막연한 걱정보다 구체적인 한 문제가 낫다","지금 일어나 앉아, 5분만 해보자","힘든 척 말고 해낸 걸 보여줘","내일의 나는 오늘의 너에게 달려 있어","놀고 싶은 마음은 시험 끝나고 써","지금 안 하면 이 말 또 보게 될걸","꿈을 이루는 사람은 기분이 아니라 일정대로 움직여","평범한 사람이 비범해지는 방법은 남들이 포기하는 지점에서 한 번 더 하는 거야","오늘 흘리지 않은 땀은 시험장에서 눈물로 돌아와","천재도 노력하는데 너는 뭘 믿고 쉬어","성적표는 거짓말을 못 해, 네가 한 만큼 찍혀","시작 안 한 계획은 그냥 소원이야","지금의 불편함을 피하면 더 큰 불편함이 기다려","어제 못 한 건 오늘의 변명이 되지 않아","기회는 준비한 사람한테만 기회처럼 보여","쉬운 길만 고르면 평생 같은 자리야","네가 미루는 사이 경쟁자는 한 문제를 더 풀어","불만은 쉽고 노력은 어려워서 다들 불만만 해","자존감은 위로가 아니라 해낸 횟수에서 나와","오늘의 한 시간을 아끼는 사람이 내일의 열 시간을 번다","힘들다고 말할 시간에 한 장 더 넘겨","못 하는 게 아니라 안 하는 거라고 인정부터 해","습관이 너를 만든다, 폰 잡는 습관부터 버려","합격하는 사람은 하기 싫어도 앉는 사람이야","누가 깨워주길 기다리지 마, 네가 일어나","후회는 항상 늦게 오고 기회는 항상 빨리 간다","오늘의 한계는 내일의 변명이 된다","지금 흔들리면 시험장에서 무너진다","어차피 해야 할 거면 지금 해","놀 때 불안하면 이미 알고 있는 거야, 지금 해야 한다는 걸","노력한 척 말고 노력해","오늘의 네가 내일의 점수를 이미 정하고 있어","쉬운 건 누구나 해, 어려운 걸 끝내는 게 네 몫이야","마음속 목소리가 쉬자고 하면 한 문제만 더 풀어","미래의 네가 지금의 너를 지켜보고 있어","변하고 싶다면 오늘 불편한 걸 선택해"],
cosmic:["별빛은 오래 걸려 도착하지만, 반드시 도착해","지금 읽는 한 줄이 먼 훗날 네 하늘의 별자리가 된다","모든 은하도 먼지 한 알에서 시작했어","가장 먼 별도 한 줄기 빛에서 시작해","어둠이 깊을수록 별은 또렷해진다","너의 노력은 아직 도착하지 않은 별빛이야","천천히 도는 행성도 결국 제 궤도를 한 바퀴 돌아와","오늘의 집중은 밤하늘에 새기는 작은 별 하나","우주는 서두르지 않지만 모든 걸 이룬다","지금 흘린 땀은 훗날 은하수가 되어 흐를 거야","혜성은 사라져도 그 꼬리는 하늘에 오래 남아","흔들려도 궤도는 이탈하지 않아, 너의 방향을 믿어","침묵 속에서도 별들은 쉬지 않고 빛나","한 번의 폭발이 아니라 오랜 타오름이 별을 만든다","지금의 막막함은 새벽 직전의 가장 깊은 밤이야","달도 차고 기울며 제 길을 가, 쉬어가도 괜찮아","너라는 우주는 아직 팽창하는 중이야","작은 불씨 하나가 성운 속에서 별로 태어난다","빛의 속도로 달릴 필요 없어, 멈추지만 않으면 닿아","오늘의 한 문제가 내일의 항로를 비춘다","어둠을 두려워하지 마, 별은 어둠에서만 보여","시간은 궤도처럼 돌아오지만 오늘은 한 번뿐이야","네가 쌓은 시간은 우주의 먼지처럼 사라지지 않아","북극성은 움직이지 않아서 길을 알려줘, 너의 목표처럼","깊은 밤을 건넌 배만이 새벽 항구를 만난다","별은 스스로 타올라서 빛나는 거야","작은 위성도 큰 행성 곁에서 제 몫의 빛을 낸다","지금의 고요는 멈춤이 아니라 자라는 시간이야","은하는 하루아침에 돌지 않아, 그래도 끝없이 돌고 있지","너의 집중은 어둠 속 등대의 불빛 같아","우주의 끝은 알 수 없지만 한 걸음은 늘 가까이 있어","오늘의 계획은 밤하늘에 그리는 나만의 별자리","아무리 멀리 있는 별도 언젠가는 네 눈에 닿아","해가 져야 별이 뜨듯 힘든 시간이 지나야 빛이 보여","한 방울의 노력이 모여 은하의 강이 된다","어제의 실패는 지나간 유성, 오늘의 하늘은 새롭다","궤도를 도는 건 반복이 아니라 앞으로 나아가는 방법이야","별똥별을 기다리지 말고 스스로 빛이 되자","지금의 땀방울은 우주를 건너는 작은 별가루야","끝없는 어둠 속에서도 별 하나면 길을 찾을 수 있어","너는 이미 은하 속 하나뿐인 별이야","시간의 바다 위에 오늘이라는 별 하나를 띄워 보내","먼 길을 가는 별일수록 조용히 빛나","조용히 쌓은 하루가 밤하늘 가득 별이 된다","우주가 너를 위해 천천히 돌아가고 있어, 서두르지 않아도 돼","네 안의 작은 별을 꺼뜨리지 마","가장 깊은 어둠에서 가장 맑은 별빛이 나와","달빛 아래서 쌓은 시간이 아침의 힘이 돼","별자리는 이어야 보이고, 하루는 이어야 길이 돼","지금 이 시간을 우주에 새겨두자","별은 지나온 시간까지 품고 빛나","어떤 밤도 영원하지 않고, 어떤 별도 헛되이 뜨지 않아","오늘의 너는 내일의 별빛을 만들고 있어","먼지가 모여 행성이 되듯 하루가 모여 네가 된다","길을 잃어도 별이 있으면 다시 방향을 잡을 수 있어","우주의 고요 속에서도 네 마음은 천천히 자라","광활한 하늘에 점 하나, 그 점이 오늘의 너야","눈을 감아도 별은 거기 있어, 네 노력도 그래","지금 이 한 줄이 별빛 한 줄기가 되어 너를 데려갈 거야"]
};
// 설정에 나오는 문구 묶음 (id, 이름)
export const QUOTE_SETS=[['good','좋은 말'],['hard','뼈 때리는 말'],['cosmic','우주 시구']];
const DECKKEY='studyplanner.deck.v2';
const rnd=(a,b)=>a+Math.random()*(b-a);

/* ===== 장면(테마) 목록 =====
   장면 만들기: create()가 {setup(W,H), frame(ctx,env)}를 돌려주면 된다.
   env = {W,H,now,dt,level(0~1 등장),prog(0~1 진행),k(화면 크기 배율)} */
function cosmosScene(){
  let bg=null,stars=[],shoot=null;
  const ORB=[{a:78,b:26,rot:-.35,sp:.00032,ph:0},{a:104,b:34,rot:.5,sp:-.00024,ph:2},{a:128,b:44,rot:1.25,sp:.00018,ph:4,timer:true}];
  function buildBg(W,H){
    const dpr=Math.min(2,window.devicePixelRatio||1);
    bg=document.createElement('canvas');bg.width=W*dpr;bg.height=H*dpr;const g=bg.getContext('2d');g.setTransform(dpr,0,0,dpr,0,0);
    const base=g.createLinearGradient(0,0,W,H);base.addColorStop(0,'#070a20');base.addColorStop(.5,'#0b0a24');base.addColorStop(1,'#04060f');g.fillStyle=base;g.fillRect(0,0,W,H);
    const x0=-W*.1,y0=H*1.05,x1=W*1.1,y1=-H*.05,dx=x1-x0,dy=y1-y0,len=Math.hypot(dx,dy),nx=-dy/len,ny=dx/len,sc=Math.max(1,Math.min(W,H)/440);
    const pal=[[70,90,220],[120,70,200],[40,140,190],[170,80,170],[60,70,170]];
    g.globalCompositeOperation='lighter';
    for(let i=0;i<110;i++){const t=Math.random(),off=(Math.random()+Math.random()-1)*H*.28,x=x0+dx*t+nx*off,y=y0+dy*t+ny*off,r=rnd(70,220)*sc,c=pal[Math.floor(Math.random()*pal.length)],a=rnd(.02,.055);
      const rg=g.createRadialGradient(x,y,0,x,y,r);rg.addColorStop(0,'rgba('+c+','+a+')');rg.addColorStop(1,'rgba('+c+',0)');g.fillStyle=rg;g.beginPath();g.arc(x,y,r,0,6.28);g.fill()}
    for(let i=0;i<30;i++){const t=Math.random(),off=(Math.random()-.5)*H*.2,x=x0+dx*t+nx*off,y=y0+dy*t+ny*off,r=rnd(40,110)*sc;
      const rg=g.createRadialGradient(x,y,0,x,y,r);rg.addColorStop(0,'rgba(190,200,255,.03)');rg.addColorStop(1,'rgba(190,200,255,0)');g.fillStyle=rg;g.beginPath();g.arc(x,y,r,0,6.28);g.fill()}
    g.globalCompositeOperation='source-over';
    for(let i=0;i<16;i++){const t=Math.random(),off=(Math.random()-.5)*H*.16,x=x0+dx*t+nx*off,y=y0+dy*t+ny*off,r=rnd(30,90)*sc;
      const rg=g.createRadialGradient(x,y,0,x,y,r);rg.addColorStop(0,'rgba(4,5,14,.32)');rg.addColorStop(1,'rgba(4,5,14,0)');g.fillStyle=rg;g.beginPath();g.arc(x,y,r,0,6.28);g.fill()}
    const n=Math.min(2400,Math.round(W*H/380));
    for(let i=0;i<n;i++){const inBand=Math.random()<.7,t=Math.random(),off=inBand?(Math.random()+Math.random()-1)*H*.26:(Math.random()-.5)*H*2;
      const x=inBand?x0+dx*t+nx*off:Math.random()*W,y=inBand?y0+dy*t+ny*off:Math.random()*H;
      g.globalAlpha=rnd(.1,.55);g.fillStyle=Math.random()<.2?'#b5c4ff':'#eef0ff';g.fillRect(x,y,rnd(.5,1.1),rnd(.5,1.1))}
    g.globalAlpha=1;
  }
  function setup(W,H){
    buildBg(W,H);shoot=null;
    stars=[...Array(Math.min(120,Math.round(W*H/9000)))].map(()=>({x:Math.random(),y:Math.random(),r:rnd(.6,1.5),p:Math.random()*6.28,s:rnd(.3,1.1),big:Math.random()<.12,h:Math.random()<.3?'#a9bbff':Math.random()<.2?'#ffdcb8':'#f2f4ff'}));
  }
  function sparkle(ctx,len,al){ctx.lineWidth=1;[[1,0],[0,1]].forEach(([ux,uy])=>{const g=ctx.createLinearGradient(-ux*len,-uy*len,ux*len,uy*len);g.addColorStop(0,'rgba(200,215,255,0)');g.addColorStop(.5,'rgba(235,242,255,'+al+')');g.addColorStop(1,'rgba(200,215,255,0)');ctx.strokeStyle=g;ctx.beginPath();ctx.moveTo(-ux*len,-uy*len);ctx.lineTo(ux*len,uy*len);ctx.stroke()})}
  function frame(ctx,e){
    const {W,H,now,dt,level,prog:p,k}=e,pulse=1+.04*Math.sin(now/1200);
    ctx.fillStyle='#05060f';ctx.fillRect(0,0,W,H);
    const sh=Math.sin(now/9000)*8;
    ctx.globalAlpha=.4+.6*level;ctx.drawImage(bg,sh-8,sh*.4-4,W+16,H+8);ctx.globalAlpha=1;
    stars.forEach(s=>{const tw=.5+.5*Math.sin(now/1300*s.s+s.p),x=((s.x+now/220000*s.r)%1)*W,y=s.y*H,al=(.3+.7*level)*tw;
      ctx.globalAlpha=al;ctx.fillStyle=s.h;ctx.beginPath();ctx.arc(x,y,s.r,0,6.28);ctx.fill();
      if(s.big){ctx.globalAlpha=al*.35;ctx.strokeStyle=s.h;ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(x-7,y);ctx.lineTo(x+7,y);ctx.moveTo(x,y-7);ctx.lineTo(x,y+7);ctx.stroke()}});
    ctx.globalAlpha=1;
    if(level>.7&&!shoot&&Math.random()<.0012)shoot={x:Math.random()*W*.7+W*.3,y:Math.random()*H*.25,l:0};
    if(shoot){shoot.l+=dt*.35;const q=shoot.l;ctx.strokeStyle='rgba(210,222,255,'+Math.max(0,.6-q/160)+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(shoot.x-q,shoot.y+q*.5);ctx.lineTo(shoot.x-q-46,shoot.y+q*.5+23);ctx.stroke();if(q>110)shoot=null}
    ctx.save();ctx.translate(W/2,H*.38);
    ORB.forEach(o=>{const a=o.a*k*level,b=o.b*k*level;ctx.save();ctx.rotate(o.rot);ctx.strokeStyle='rgba(150,170,240,'+(.16*level)+')';ctx.lineWidth=.8;ctx.beginPath();ctx.ellipse(0,0,a,b,0,0,6.2832);ctx.stroke();
      const t=now*o.sp*6.2832*3+o.ph;
      for(let j=10;j>=0;j--){const tt=t-j*.045,x=Math.cos(tt)*a,y=Math.sin(tt)*b,al=(1-j/11)*.55*level;ctx.fillStyle='rgba(205,218,255,'+al+')';ctx.beginPath();ctx.arc(x,y,(j===0?2.4:1.4*(1-j/14))*Math.min(1.4,k),0,6.28);ctx.fill()}
      if(o.timer){const tp=p*6.2832;ctx.strokeStyle='rgba(215,225,255,'+(.5*level)+')';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(0,0,a,b,0,0,Math.max(.01,tp));ctx.stroke();
        const mx=Math.cos(tp)*a,my=Math.sin(tp)*b;ctx.strokeStyle='rgba(235,241,255,'+(.95*level)+')';ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(mx,my,5*Math.min(1.4,k),0,6.28);ctx.stroke();ctx.fillStyle='rgba(235,241,255,'+level+')';ctx.beginPath();ctx.arc(mx,my,1.8,0,6.28);ctx.fill()}
      ctx.restore()});
    ctx.globalCompositeOperation='lighter';
    [[46,'rgba(120,140,255,.16)'],[20,'rgba(190,205,255,.35)']].forEach(([r,c])=>{const rr=Math.max(1,r*k*pulse*level);const g=ctx.createRadialGradient(0,0,0,0,0,rr);g.addColorStop(0,c);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,rr,0,6.28);ctx.fill()});
    sparkle(ctx,34*k*level*pulse,.7*level);
    ctx.globalCompositeOperation='source-over';ctx.fillStyle='rgba(245,248,255,'+level+')';ctx.beginPath();ctx.arc(0,0,3*level,0,6.28);ctx.fill();
    ctx.restore();
  }
  return{setup,frame};
}
// 설정에 나오는 테마 목록 (id → 이름, 장면). 새 테마는 여기에 한 줄 추가.
export const SCENES={cosmos:{name:'우주',create:cosmosScene}};

export function initSpace(api){
  const {$,getS,tm,tmin,leftNow,swElapsed,curTask,log}=api;
  const root=$('space'),cv=$('sc'),ctx=cv.getContext('2d'),qel=$('sp_q');
  let isOpen=false,level=0,target=0,raf=0,last=0,W=0,H=0,scene=null;

  /* ----- 문구 덱: 한 바퀴 다 볼 때까지 같은 문구가 안 나옴 ----- */
  let deck={};
  try{
    const d=JSON.parse(localStorage.getItem(DECKKEY)||'null');
    if(d&&typeof d==='object')Object.keys(QUOTES).forEach(key=>{
      const n=QUOTES[key].length,src=d[key]||{};
      deck[key]={left:Array.isArray(src.left)?src.left.filter(i=>Number.isInteger(i)&&i>=0&&i<n):[],last:Number.isInteger(src.last)?src.last:-1};
    });
  }catch(e){log('문구 덱 불러오기 실패 '+e.message)}
  function drawQuote(){
    const S=getS(),key=QUOTES[S.quoteMode]?S.quoteMode:'good',L=QUOTES[key];
    const dk=deck[key]||(deck[key]={left:[],last:-1});
    if(!dk.left.length){
      const a=[...Array(L.length).keys()];
      for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
      if(a.length>1&&a[a.length-1]===dk.last){[a[0],a[a.length-1]]=[a[a.length-1],a[0]]}
      dk.left=a;
    }
    const idx=dk.left.pop();dk.last=idx;
    try{localStorage.setItem(DECKKEY,JSON.stringify(deck))}catch(e){}
    return L[idx];
  }
  function showQuote(fade){
    const t=drawQuote();
    if(!fade){qel.textContent=t;qel.style.opacity=1;return}
    qel.style.opacity=0;setTimeout(()=>{qel.textContent=t;qel.style.opacity=1},350);
  }

  /* ----- 시간 / 진행 ----- */
  const totalSec=()=>tm.mode==='stopwatch'?3600:(tm.phase==='rest'?getS().rest*60:tmin[tm.mode]*60);
  const prog=()=>tm.mode==='stopwatch'?(swElapsed()%3600)/3600:Math.min(1,Math.max(0,1-leftNow()/totalSec()));

  function fit(){
    const dpr=Math.min(2,window.devicePixelRatio||1);
    W=window.innerWidth;H=window.innerHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    if(scene)scene.setup(W,H);
  }
  function frame(now){
    if(!isOpen)return;
    const dt=Math.min(50,now-last);last=now;level+=(target-level)*.03;
    scene.frame(ctx,{W,H,now,dt,level,prog:prog(),k:Math.max(.8,Math.min(1.8,Math.min(W,H)/520))});
    raf=requestAnimationFrame(frame);
  }

  /* ----- 열기 / 닫기 / 화면 글자 ----- */
  function update(label){
    if(!isOpen)return;
    const t=curTask();
    $('sp_sub').textContent=tm.phase==='rest'?'휴식':(t?(t.subject?'['+t.subject+'] ':'')+t.title:(tm.sub||'자유 공부'));
    $('sp_t').textContent=$('time').textContent;
    $('sp_pause').lastChild.textContent=label;
  }
  function open(label){
    if(isOpen){update(label);return}
    const S=getS(),def=SCENES[S.spaceTheme]||SCENES.cosmos;
    scene=def.create();isOpen=true;root.style.display='block';fit();level=0;target=1;last=performance.now();
    showQuote(false);update(label);raf=requestAnimationFrame(frame);log('공부 화면 열림 '+def.name);
  }
  function close(){if(!isOpen)return;isOpen=false;root.style.display='none';cancelAnimationFrame(raf)}
  function done(){if(!isOpen)return;qel.style.opacity=0;setTimeout(()=>{qel.textContent='수고했어, 오늘도 해냈어';qel.style.opacity=1},350)}
  $('sp_next').onclick=()=>showQuote(true);
  $('sp_close').onclick=close;
  $('sp_pause').onclick=()=>$('tgo').click();
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&isOpen)close()});
  window.addEventListener('resize',()=>{if(isOpen)fit()});
  return{open,close,update,done,isOpen:()=>isOpen};
}

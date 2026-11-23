// 공부 화면(테마) 모듈.
// 새 테마 추가: SCENES에 장면 한 개를 넣고, 어울리는 문구가 있으면 QUOTES + QUOTE_SETS에 한 줄씩 추가하면 설정에 자동으로 나타난다.
const QUOTES={
good:["오늘의 한 걸음이 내일의 나를 만든다","천천히 가도 괜찮아, 멈추지만 않으면 돼","지금 이 집중이 미래의 나에게 주는 선물이야","완벽보다 꾸준함이 이긴다","시작이 반이래, 이미 반은 왔어","어제의 나보다 딱 한 뼘만 더","작은 노력이 쌓여 큰 변화가 된다","포기하지 않으면 반드시 닿는다","지금 흘린 땀이 훗날의 여유가 된다","너는 생각보다 훨씬 잘하고 있어","한 페이지만 더, 딱 한 페이지만","별은 어두울수록 더 빛난다","오늘 끝까지 해낸 나를 칭찬해줘","쉬어가도 괜찮아, 다시 돌아오면 되니까","집중한 시간은 절대 배신하지 않아","아무리 큰 산도 한 걸음부터","지금 이 순간에만 집중하자","노력은 조용히, 결과는 눈부시게","버티는 하루가 모여 길이 된다","네 속도로 가면 돼, 방향만 잃지 마","천 리 길도 한 걸음부터","넘어진 횟수보다 일어난 횟수가 너를 말해준다","오늘 배운 것은 내일의 무기가 된다","할 수 있다고 믿는 순간 반은 이룬 거야","지금 힘든 건 성장하고 있다는 신호야","꿈은 계획을 세울 때 비로소 현실이 된다","한 번에 하나씩, 그러면 다 끝나","네 노력은 반드시 어딘가에 쌓이고 있어","비교는 어제의 나하고만 하자","오늘의 집중이 내일의 자신감이야","느려도 앞으로 가고 있으면 충분해","실패는 끝이 아니라 방법 하나를 알게 된 거야","스스로를 믿는 것에서 모든 게 시작돼","조급해하지 마, 꽃도 피는 때가 있어","오늘 한 시간이 한 달 뒤를 바꾼다","힘들 때가 바로 성장하는 때야","좋은 습관 하나가 인생을 바꾼다","지금 시작해도 늦지 않았어","네가 걸어온 길도 충분히 대단해","마음이 흔들릴 땐 숨 한 번 크게 쉬자","하루하루가 쌓여 너의 이야기가 된다","끝까지 가는 사람이 결국 이긴다","오늘의 작은 승리를 기억해","해보지 않고는 아무것도 알 수 없어","열심히 한 만큼 마음도 단단해진다","한계는 생각보다 훨씬 멀리 있어","너라서 할 수 있는 일이 있어","반복하는 사람이 결국 익숙해지고 잘하게 돼","오늘도 책상 앞에 앉은 것만으로 이미 대단해","지금의 선택이 미래의 나를 웃게 한다","배움에는 끝이 없고, 그래서 늘 새로 시작할 수 있어","가장 어두운 밤도 결국 아침으로 이어진다","마음먹은 오늘이 가장 빠른 시작이야","쌓은 만큼 가벼워지는 날이 반드시 와","오늘의 너는 어제보다 분명 한 뼘 자랐어","큰 성공은 작은 반복의 다른 이름이야","지금의 인내는 나중의 자유가 된다","모르는 게 많다는 건 배울 게 많다는 뜻이야","너는 이미 충분히 잘 가고 있어, 계속 가자","한 줄을 읽어도 읽은 거야, 그걸로 충분해","목표가 멀어 보여도 지금 한 문제가 길을 만든다","지치면 쉬고, 쉬었으면 다시 걸으면 돼","노력은 배신하지 않지만 포기는 배신한다","오늘의 땀방울이 내일의 이름이 된다","스스로에게 친절하되, 약속에는 엄격하자","불가능은 해보기 전까지만 존재해","가장 좋은 때는 지금 앉은 이 순간이야","겨울을 견딘 나무가 제일 단단한 꽃을 피워","오늘 하루를 이기면 인생도 이긴다","조용한 집중이 가장 큰 소리를 낸다","하나를 끝까지 해본 사람은 뭐든 해낼 수 있어","어려운 문제는 네가 자라는 문이야","한 걸음 물러서도 다시 달려가면 돼","지금 이 시간이 훗날 가장 빛나는 기억이 될 거야","오늘 최선을 다했다면 결과가 어떻든 너는 이긴 거야","마음이 가는 곳에 시간도 따라간다","꾸준함은 재능을 이기는 가장 확실한 힘이야","작은 성취를 모아 큰 자신감을 만들자","지금 쏟는 마음이 미래의 너를 지켜줄 거야","시작한 너에게 이미 박수를 보낸다"],
hard:["하고 싶다는 말은 안 하는 사람이 제일 잘 쓰는 변명이야.","네가 폰 보는 동안 누군가는 네 자리를 가져가고 있어.","내일부터라고? 그 말, 어제도 했어.","재능 탓은 오늘 열 시간 앉아본 사람이 하는 말이야.","피곤한 건 알겠는데, 시험은 네 피곤함을 봐주지 않아.","지금 놀면 나중에 우는 건 너야.","계획만 예쁘게 짜는 건 공부가 아니라 취미야.","의지가 없는 게 아니라 시작이 무서운 거잖아.","시간이 없는 게 아니라 순서를 잘못 정한 거야.","오늘 미룬 공부는 내일 이자까지 붙어서 돌아와.","변명 한 줄 쓸 시간에 문제 하나 풀어.","남 탓하면 마음은 편한데 성적은 그대로야.","하기 싫은 걸 하는 사람이 결국 이겨.","이대로 가면 내년에도 똑같은 고민을 하고 있을걸.","기분 좋을 때만 하는 건 노력이 아니라 기분이야.","공부 안 하는 이유는 백 가지지만 하는 이유는 하나야, 네 미래.","지금 편하면 나중에 반드시 힘들어져.","결과가 마음에 안 들면 어제의 너부터 의심해.","숏폼 10분이 한 시간 되는 거, 이미 알잖아.","열심히 하는 척은 성적표가 제일 먼저 알아봐.","\"잠깐만 쉴게\"가 제일 비싼 말이야.","아무도 너 대신 시험장에 들어가 주지 않아.","부러워할 시간에 한 페이지 더 넘겨.","오늘 대충 하면 내일의 너도 대충 살게 돼.","하루 놓치면 이틀, 이틀 놓치면 포기야.","불안하면 책을 펴. 폰을 켜면 불안만 늘어.","후회는 기다려주지 않고 항상 시험 끝나고 와.","머리가 문제가 아니야. 엉덩이가 문제야.","행동 없는 꿈은 그냥 낮잠이야.","이 순간에도 시간은 네 허락 없이 흘러가.","한숨 쉴 시간이면 한 줄은 읽었어.","포기하고 싶은 날이 진짜 승부 나는 날이야.","놀 때 웃던 얼굴로 성적표도 볼 수 있길 바랄게.","간절하지 않으니까 안 움직이는 거야.","공부가 힘든 게 아니라 시작하기가 싫은 거야. 일단 앉아.","오늘의 게으름은 정확히 내일의 후회로 돌아와.","안 한 만큼 정직하게 나와. 한 푼도 깎아주지 않아.","한 번 더 확인할 시간에 한 문제 더 풀어.","졸리면 세수하고 와. 앉기 전엔 어떤 변명도 안 받아.","남들이 쉴 때 하는 게 차이를 만들어.","목표는 거창한데 오늘 한 건 뭐야.","핑계는 편하고 결과는 아파.","이 한 시간이 합격과 불합격 사이의 선이 될 수 있어.","공부하고 후회한 사람은 없어. 안 하고 후회한 사람만 있어.","막연한 걱정은 접어. 구체적인 한 문제부터 풀어.","지금 앉아서 5분만 해. 그 5분이 오늘을 바꿔.","힘들다는 말 대신 해낸 걸 보여줘.","내일의 너는 오늘의 네가 한 일만큼만 가질 수 있어.","놀고 싶은 마음은 시험 끝나고 써. 지금 쓰면 빚이야.","지금 안 하면 이 문장을 내년에도 보게 될걸.","꿈은 기분이 아니라 일정으로 이뤄져.","평범한 사람이 비범해지는 건 남들이 멈춘 곳에서 한 번 더 하는 거야.","오늘 흘리지 않은 땀은 시험장에서 눈물이 돼.","천재도 노력하는데 넌 뭘 믿고 쉬어.","성적표는 거짓말을 못 해. 네가 한 만큼 찍혀.","시작하지 않은 계획은 소원일 뿐이야.","지금의 불편함을 피하면 더 큰 불편함이 기다려.","어제 못 한 건 오늘의 변명이 될 수 없어.","기회는 준비된 사람 눈에만 기회로 보여.","쉬운 길만 고르면 평생 같은 자리야.","네가 미루는 사이 경쟁자는 한 문제를 더 풀어.","불평은 쉽고 노력은 어려워서 다들 불평만 해.","자존감은 위로가 아니라 해낸 횟수에서 나와.","오늘 한 시간을 아끼는 사람이 내일 열 시간을 번다.","힘들다고 말할 시간에 한 장 더 넘겨.","못 하는 게 아니라 안 하는 거라고 인정부터 해.","너를 만드는 건 습관이야. 폰부터 내려놓는 습관을 만들어.","합격하는 사람은 하기 싫어도 앉는 사람이야.","누가 깨워주길 기다리지 마. 네가 일어나야 해.","후회는 항상 늦게 오고 기회는 항상 빨리 가.","오늘의 한계는 내일의 변명이 돼.","지금 흔들리면 시험장에서 무너져.","어차피 해야 할 거면 지금 해.","놀면서 불안하다면 이미 답을 알고 있는 거야. 지금 해야 한다는 걸.","노력하는 척 말고 노력해.","오늘의 네가 내일의 점수를 이미 정하고 있어.","쉬운 건 누구나 해. 어려운 걸 끝내는 게 네 몫이야.","마음속에서 쉬자고 속삭이면 한 문제만 더 풀어.","미래의 네가 지금의 너를 지켜보고 있어. 부끄럽지 않게 해.","변하고 싶다면 오늘 가장 불편한 걸 선택해."],
cosmic:["별빛은 오래 걸려 도착하지만, 결국 도착한다.","어둠이 깊을수록 별은 또렷해진다.","오늘 읽은 한 줄이 먼 훗날 너의 하늘에서 별자리가 된다.","모든 은하는 한 줌의 먼지에서 시작되었다.","가장 먼 별도 한 줄기 빛으로 길을 낸다.","너의 노력은 아직 도착하지 않은 별빛이다.","느리게 도는 행성도 언젠가 제 궤도를 한 바퀴 돌아온다.","오늘의 집중은 밤하늘에 새기는 작은 별 하나다.","우주는 서두르지 않지만 결국 모든 것을 이룬다.","오늘 흘린 땀은 언젠가 은하수가 되어 흐른다.","혜성은 사라져도 그 꼬리는 하늘에 오래 남는다.","흔들려도 궤도를 놓지 않는 사람은 결국 닿는다.","아무 소리 없는 순간에도 별은 쉬지 않고 빛난다.","별은 한 번의 폭발이 아니라 오래 타오르는 시간으로 태어난다.","지금의 막막함은 새벽 직전의 가장 깊은 밤이다.","달은 차고 기울면서도 제 길을 간다. 쉬어 가는 것도 길의 일부다.","너라는 우주는 지금도 천천히 넓어지고 있다.","작은 불씨 하나가 성운 속에서 별이 된다.","빛의 속도로 달릴 필요는 없다. 멈추지만 않으면 닿는다.","오늘 푼 한 문제가 내일의 항로를 비춘다.","어둠을 두려워하지 않아도 된다. 별은 어둠 속에서만 보이니까.","시간은 궤도처럼 돌아오지만, 오늘은 단 한 번뿐이다.","네가 쌓은 시간은 우주의 먼지처럼 사라지지 않는다.","북극성은 움직이지 않아서 길이 된다. 너의 목표도 그렇다.","깊은 밤을 건넌 배만이 새벽의 항구에 닿는다.","별은 스스로 타오를 때 비로소 별이 된다.","작은 위성도 큰 행성 곁에서 제 몫의 빛을 낸다.","지금의 고요는 멈춤이 아니라 자라는 시간이다.","은하는 하루아침에 돌지 않지만 쉬지 않고 돈다.","너의 집중은 어둠 속에서 길을 비추는 등대 불빛 같다.","우주의 끝은 알 수 없어도 한 걸음은 언제나 곁에 있다.","오늘의 계획은 밤하늘에 그리는 나만의 별자리다.","아무리 먼 별도 언젠가는 눈에 닿는다.","해가 져야 별이 뜨듯, 고된 시간이 지나야 빛이 보인다.","한 방울의 노력이 모여 은하의 강을 이룬다.","어제의 실패는 지나간 유성일 뿐, 오늘의 하늘은 새롭다.","궤도를 도는 일은 되풀이가 아니라 나아가는 방식이다.","별똥별을 기다리기보다 스스로 빛이 되어 보자.","땀방울 하나하나가 우주를 건너는 별가루다.","끝없는 어둠 속에서도 별 하나면 길을 찾을 수 있다.","너는 이미 은하 속에서 단 하나뿐인 별이다.","시간의 바다 위로 오늘이라는 별 하나를 띄워 보낸다.","먼 길을 가는 별일수록 조용히 빛난다.","말없이 쌓은 하루가 밤하늘 가득한 별이 된다.","우주는 너를 위해 천천히 돈다. 서두르지 않아도 괜찮다.","네 안의 작은 별을 꺼뜨리지 않기를.","가장 깊은 어둠에서 가장 맑은 별빛이 나온다.","달빛 아래 쌓은 시간이 아침의 힘이 된다.","별자리는 이어야 보이고, 하루는 이어야 길이 된다.","이 시간을 우주에 새겨 두자.","별은 지나온 시간까지 품은 채 빛난다.","영원한 밤은 없고, 헛되이 뜨는 별도 없다.","오늘의 너는 내일의 별빛을 빚고 있다.","먼지가 모여 행성이 되듯 하루가 모여 네가 된다.","길을 잃어도 별이 있으면 다시 방향을 잡을 수 있다.","우주의 고요 속에서도 마음은 천천히 자란다.","광활한 하늘에 찍힌 점 하나, 그 점이 오늘의 너다.","눈을 감아도 별은 그 자리에 있고, 네 노력도 그렇다.","지금 읽는 이 한 줄이 별빛 한 줄기가 되어 너를 데려다 줄 것이다.","어둠은 별을 지우지 않는다. 다만 별이 보이게 할 뿐이다.","아주 먼 곳에서 온 빛이 오늘 네 눈에 닿는다. 너의 노력도 언젠가 그렇게 닿는다.","우주는 언제나 조용하지만, 그 고요 속에서 별은 태어난다.","하루의 끝에서 올려다본 하늘은 어제보다 조금 더 맑다.","한 사람의 시간은 작은 행성처럼 저마다의 궤도를 따라 돈다.","침묵이 길어질수록 별빛은 더 선명하게 들린다.","오늘 쌓은 집중은 보이지 않는 중력이 되어 내일을 끌어당긴다.","밤이 깊다는 건 새벽이 가까워졌다는 말이다.","별들은 서로 닿지 않아도 같은 하늘 아래서 서로를 비춘다.","너의 하루가 한 줄의 문장이라면, 오늘은 가장 단단한 문장이었으면 한다.","성운은 무너지는 것처럼 보이지만, 사실은 별을 짓는 중이다.","흐르는 시간 위에 작은 불빛을 하나씩 켜 두는 일, 공부는 그런 일이다.","멀리 있는 목표도 한 걸음씩 다가가면 어느새 머리 위에 떠 있다.","달빛은 서두르지 않고도 바다 전체를 건너간다.","가장 오래 빛나는 별은 가장 조용히 타오르는 별이다.","어둠 속에서 길을 잃었다고 느낄 때, 별은 이미 곁에 있다.","오늘의 한 장이 내일의 은하 한 줄기로 이어진다.","시간은 우주처럼 넓지만, 지금 이 순간은 손바닥 위의 별 하나다.","흔들리는 마음도 결국 제 궤도를 찾아 돌아온다.","어떤 별은 사라진 뒤에도 오래도록 빛난다. 너의 노력도 그렇게 남는다."]
};
// 설정에 나오는 문구 묶음 (id, 이름)
export const QUOTE_SETS=[['good','좋은 말'],['hard','뼈 때리는 말'],['cosmic','우주 시구']];
const DECKKEY='studyplanner.deck.v2';
const rnd=(a,b)=>a+Math.random()*(b-a);

/* ===== 장면(테마) 목록 =====
   장면 만들기: create()가 {setup(W,H), frame(ctx,env)}를 돌려주면 된다.
   env = {W,H,now,dt,level(0~1 등장),prog(0~1 진행),k(화면 크기 배율)} */
function cosmosScene(){
  let bg=null,stars=[],meteors=[],nextM=0,nextC=0,nextS=0,showerEnd=0,showerAng=2.5,nextSp=0;
  function spawn(W,H,k,comet,angIn){
    const ang=angIn||rnd(2.4,2.7),sp=comet?rnd(.16,.26):rnd(.9,1.5)*Math.min(1.3,k);
    meteors.push({x:rnd(W*.25,W*1.1),y:rnd(-60,H*.3),vx:Math.cos(ang)*sp,vy:Math.sin(ang)*sp,len:(comet?rnd(230,330):rnd(90,170))*Math.min(1.4,k),w:comet?2.6:1.4,life:0,max:comet?14000:rnd(700,1100),comet,c:comet?'150,205,255':'220,232,255'});
  }
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
    buildBg(W,H);meteors=[];nextM=performance.now()+3000;nextC=performance.now()+12000;nextS=performance.now()+8000;showerEnd=0;nextSp=0;
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
    if(level>.5){
      if(now>nextM){spawn(W,H,k,false);nextM=now+rnd(5000,9000)}
      if(now>nextC){spawn(W,H,k,true);nextC=now+rnd(18000,28000)}
      if(now>nextS){showerEnd=now+rnd(3000,4500);showerAng=rnd(2.45,2.65);nextS=now+rnd(40000,60000)}
      if(now<showerEnd&&now>nextSp){spawn(W,H,k,false,showerAng+rnd(-.05,.05));nextSp=now+rnd(380,800)}
    }
    ctx.globalCompositeOperation='lighter';ctx.lineCap='round';
    for(let i=meteors.length-1;i>=0;i--){
      const m=meteors[i];m.x+=m.vx*dt;m.y+=m.vy*dt;m.life+=dt;
      const a=Math.min(1,m.life/250)*Math.max(0,1-m.life/m.max)*level,sp=Math.hypot(m.vx,m.vy),ux=m.vx/sp,uy=m.vy/sp,tx=m.x-ux*m.len,ty=m.y-uy*m.len;
      if(m.comet){const wg=ctx.createLinearGradient(m.x,m.y,tx,ty);wg.addColorStop(0,'rgba(110,150,255,'+(.22*a)+')');wg.addColorStop(1,'rgba(110,150,255,0)');ctx.strokeStyle=wg;ctx.lineWidth=m.w*6;ctx.beginPath();ctx.moveTo(m.x,m.y);ctx.lineTo(tx,ty);ctx.stroke()}
      const tg=ctx.createLinearGradient(m.x,m.y,tx,ty);tg.addColorStop(0,'rgba('+m.c+','+(.95*a)+')');tg.addColorStop(1,'rgba('+m.c+',0)');
      ctx.strokeStyle=tg;ctx.lineWidth=m.w;ctx.beginPath();ctx.moveTo(m.x,m.y);ctx.lineTo(tx,ty);ctx.stroke();
      const hr=(m.comet?16:8)*Math.min(1.3,k),hg=ctx.createRadialGradient(m.x,m.y,0,m.x,m.y,hr);hg.addColorStop(0,'rgba(245,250,255,'+a+')');hg.addColorStop(.3,'rgba('+m.c+','+(.5*a)+')');hg.addColorStop(1,'rgba('+m.c+',0)');
      ctx.fillStyle=hg;ctx.beginPath();ctx.arc(m.x,m.y,hr,0,6.28);ctx.fill();
      if(m.life>m.max||m.x<-350||m.y>H+350)meteors.splice(i,1);
    }
    ctx.globalCompositeOperation='source-over';
    ctx.save();ctx.translate(W/2,H*.38);
    ORB.forEach(o=>{const a=o.a*k*level,b=o.b*k*level;ctx.save();ctx.rotate(o.rot);ctx.strokeStyle='rgba(150,170,240,'+(.16*level)+')';ctx.lineWidth=.8;ctx.beginPath();ctx.ellipse(0,0,a,b,0,0,6.2832);ctx.stroke();
      const t=now*o.sp*6.2832*3+o.ph;
      if(!o.timer)for(let j=10;j>=0;j--){const tt=t-j*.045,x=Math.cos(tt)*a,y=Math.sin(tt)*b,al=(1-j/11)*.55*level;ctx.fillStyle='rgba(205,218,255,'+al+')';ctx.beginPath();ctx.arc(x,y,(j===0?2.4:1.4*(1-j/14))*Math.min(1.4,k),0,6.28);ctx.fill()}
      if(o.timer){const tp=p*6.2832,kk=Math.min(1.4,k);ctx.strokeStyle='rgba(190,210,255,'+(.35*level)+')';ctx.lineWidth=1.1;ctx.beginPath();ctx.ellipse(0,0,a,b,0,0,Math.max(.01,tp));ctx.stroke();
        ctx.globalCompositeOperation='lighter';
        for(let j=28;j>=1;j--){const tt=tp-j*.034,x=Math.cos(tt)*a,y=Math.sin(tt)*b,al=(1-j/29)*.55*level;ctx.fillStyle='rgba(150,190,255,'+al+')';ctx.beginPath();ctx.arc(x,y,Math.max(.4,(3.4-j*.1)*kk),0,6.28);ctx.fill()}
        const mx=Math.cos(tp)*a,my=Math.sin(tp)*b,hr=15*kk,g=ctx.createRadialGradient(mx,my,0,mx,my,hr);g.addColorStop(0,'rgba(245,250,255,'+level+')');g.addColorStop(.25,'rgba(170,200,255,'+(.55*level)+')');g.addColorStop(1,'rgba(120,150,255,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(mx,my,hr,0,6.28);ctx.fill();
        ctx.globalCompositeOperation='source-over'}
      ctx.restore()});
    ctx.globalCompositeOperation='lighter';
    [[46,'rgba(120,140,255,.16)'],[20,'rgba(190,205,255,.35)']].forEach(([r,c])=>{const rr=Math.max(1,r*k*pulse*level);const g=ctx.createRadialGradient(0,0,0,0,0,rr);g.addColorStop(0,c);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,rr,0,6.28);ctx.fill()});
    sparkle(ctx,34*k*level*pulse,.7*level);
    ctx.globalCompositeOperation='source-over';ctx.fillStyle='rgba(245,248,255,'+level+')';ctx.beginPath();ctx.arc(0,0,3*level,0,6.28);ctx.fill();
    ctx.restore();
  }
  return{setup,frame};
}
// 오로라 장면: 별 + 천천히 흐르는 빛 + 설산. 시간은 하늘의 호를 따라 떠가는 별로 표시.
function auroraScene(){
  let stars=[],peaks=[],HZ=0;
  function setup(W,H){
    HZ=H*.8;
    stars=[...Array(Math.min(170,Math.round(W*H/7000)))].map(()=>({x:Math.random(),y:Math.random()*.72,r:rnd(.5,1.3),p:Math.random()*6.28}));
    peaks=[];const n=Math.ceil(W/6)+2;
    for(let i=0;i<=n;i++){const x=i*6;peaks.push([x,HZ-Math.abs(Math.sin(x/(W*.11)+1.2))*H*.2-Math.sin(x/(W*.027))*H*.018-H*.02])}
  }
  function frame(ctx,e){
    const {W,H,now,level,prog:p,k}=e;
    const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#03061a');g.addColorStop(.7,'#0a1830');g.addColorStop(1,'#10243a');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    stars.forEach(s=>{ctx.globalAlpha=(.25+.55*Math.pow(Math.sin(now/1300+s.p),2))*(.5+.5*level);ctx.fillStyle='#e8f0ff';ctx.fillRect(s.x*W,s.y*H,s.r,s.r)});
    ctx.globalAlpha=1;
    ctx.globalCompositeOperation='lighter';
    const step=Math.max(3,Math.ceil(W/240)),amp=.5+.5*level;
    [[60,255,170,0,.17],[40,200,255,2,.13],[170,110,255,4,.11]].forEach(([r,gr,b,ph,al])=>{
      for(let x=0;x<W;x+=step){
        const y0=H*(.2+.1*Math.sin(x/(W*.11)+now/3500+ph)+.05*Math.sin(x/(W*.04)+now/2100)),h=H*(.3+.1*Math.sin(x/(W*.07)+now/4200+ph));
        const lg=ctx.createLinearGradient(0,y0,0,y0+h);lg.addColorStop(0,'rgba('+r+','+gr+','+b+',0)');lg.addColorStop(.25,'rgba('+r+','+gr+','+b+','+(al*amp)+')');lg.addColorStop(1,'rgba('+r+','+gr+','+b+',0)');
        ctx.fillStyle=lg;ctx.fillRect(x,y0,step,h);
      }
    });
    ctx.globalCompositeOperation='source-over';
    const cx=W/2,rx=W*.44,ry=H*.52,a0=.07,a1=.07+.86*p,sx=cx-Math.cos(Math.PI*a1)*rx,sy=HZ-Math.sin(Math.PI*a1)*ry;
    ctx.lineWidth=1;ctx.strokeStyle='rgba(190,220,255,'+(.12*level)+')';ctx.beginPath();ctx.ellipse(cx,HZ,rx,ry,0,Math.PI*(1+a0),Math.PI*1.93);ctx.stroke();
    ctx.strokeStyle='rgba(225,240,255,'+(.45*level)+')';ctx.beginPath();ctx.ellipse(cx,HZ,rx,ry,0,Math.PI*(1+a0),Math.PI*(1+a1)+.001);ctx.stroke();
    ctx.globalCompositeOperation='lighter';
    const hr=20*Math.min(1.5,k),sg=ctx.createRadialGradient(sx,sy,0,sx,sy,hr);sg.addColorStop(0,'rgba(245,250,255,'+level+')');sg.addColorStop(.25,'rgba(190,225,255,'+(.5*level)+')');sg.addColorStop(1,'rgba(150,200,255,0)');
    ctx.fillStyle=sg;ctx.beginPath();ctx.arc(sx,sy,hr,0,6.28);ctx.fill();
    ctx.strokeStyle='rgba(235,245,255,'+(.5*level)+')';ctx.beginPath();ctx.moveTo(sx-hr*.7,sy);ctx.lineTo(sx+hr*.7,sy);ctx.moveTo(sx,sy-hr*.7);ctx.lineTo(sx,sy+hr*.7);ctx.stroke();
    ctx.globalCompositeOperation='source-over';
    ctx.fillStyle='#02040c';ctx.beginPath();ctx.moveTo(0,H);peaks.forEach(([x,y])=>ctx.lineTo(x,y));ctx.lineTo(W,H);ctx.fill();
    ctx.strokeStyle='rgba(170,200,230,.10)';ctx.beginPath();peaks.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();
    const bt=ctx.createLinearGradient(0,H*.7,0,H);bt.addColorStop(0,'rgba(2,4,12,0)');bt.addColorStop(1,'rgba(2,4,12,.5)');ctx.fillStyle=bt;ctx.fillRect(0,H*.7,W,H*.3);
    ctx.fillStyle='rgba(3,6,16,'+(.55*(1-level))+')';ctx.fillRect(0,0,W,H);
  }
  return{setup,frame};
}
// 설정에 나오는 테마 목록 (id → 이름, 장면). 새 테마는 여기에 한 줄 추가.
export const SCENES={cosmos:{name:'우주',create:cosmosScene},aurora:{name:'오로라',create:auroraScene}};

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

import{c as e,h as T,i as L}from"/bhaavkiasite/build/_shared/chunk-VYCKQK4G.js";import{a as W,b as g}from"/bhaavkiasite/build/_shared/chunk-PKHCY5AU.js";import{c as u}from"/bhaavkiasite/build/_shared/chunk-2XFM6Z4V.js";var X={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"Gotham, var(--systemFontStack)",monoFontStack:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",japaneseFontStack:"IPA Gothic, \u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30E1\u30A4\u30EA\u30AA, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:e(140),fontSizeH1:e(100),fontSizeH2:e(58),fontSizeH3:e(38),fontSizeH4:e(28),fontSizeH5:e(24),fontSizeBodyXL:e(22),fontSizeBodyL:e(20),fontSizeBodyM:e(18),fontSizeBodyS:e(16),fontSizeBodyXS:e(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},I={fontSizeH0:e(120),fontSizeH1:e(80)},R={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:e(100),fontSizeH1:e(70),fontSizeH2:e(50),fontSizeH3:e(36),fontSizeH4:e(26),fontSizeH5:e(22)},F={fontSizeH0:e(80),fontSizeH1:e(60),fontSizeH2:e(48),fontSizeH3:e(32),fontSizeH4:e(24),fontSizeH5:e(20)},P={spaceOuter:"24px",fontSizeH0:e(56),fontSizeH1:e(40),fontSizeH2:e(34),fontSizeH3:e(28),fontSizeH4:e(22),fontSizeH5:e(18),fontSizeBodyL:e(17),fontSizeBodyM:e(16),fontSizeBodyS:e(14)},O={spaceOuter:"16px",fontSizeH0:e(42),fontSizeH1:e(38),fontSizeH2:e(28),fontSizeH3:e(24),fontSizeH4:e(20)},C={background:"oklch(17.76% 0 0)",backgroundLight:"oklch(21.78% 0 0)",primary:"oklch(84.42% 0.19 202.24)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},A={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},j={base:X,desktop:I,laptop:R,tablet:F,mobile:P,mobileS:O},D={dark:C,light:A};var o=u(W(),1),m=u(g(),1),G=({children:S,in:t,unmount:n,initial:i=!0,...c})=>{let a=(0,o.useRef)(),r=(0,o.useRef)();return(0,o.useEffect)(()=>{clearTimeout(t?r.current:a.current)},[t]),(0,m.jsx)(L,{children:(t||!n)&&(0,m.jsx)(N,{enterTimeout:a,exitTimeout:r,in:t,initial:i,...c,children:S})})},N=({children:S,timeout:t=0,enterTimeout:n,exitTimeout:i,onEnter:c,onEntered:a,onExit:r,onExited:z,initial:d,nodeRef:y,in:s})=>{let[H,f]=(0,o.useState)(d?"exited":"entered"),[l,k]=T(),[h,M]=(0,o.useState)(!d),b=typeof t=="object",v=(0,o.useRef)(null),p=y||v,B=h&&s?l:!1;return(0,o.useEffect)(()=>{if(h||!s)return;let x=b?t.enter:t;clearTimeout(n.current),clearTimeout(i.current),M(!0),f("entering"),c?.(),p.current?.offsetHeight,n.current=setTimeout(()=>{f("entered"),a?.()},x)},[c,a,t,H,s]),(0,o.useEffect)(()=>{if(l&&s)return;let x=b?t.exit:t;clearTimeout(n.current),clearTimeout(i.current),f("exiting"),r?.(),p.current?.offsetHeight,i.current=setTimeout(()=>{f("exited"),k?.(),z?.()},x)},[l,r,k,t,z,s]),S({visible:B,status:H,nodeRef:p})};export{j as a,D as b,G as c};

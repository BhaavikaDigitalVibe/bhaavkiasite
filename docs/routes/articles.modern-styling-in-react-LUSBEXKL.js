import{b as p}from"/bhaavkiasite/build/_shared/chunk-PKHCY5AU.js";import{c as o}from"/bhaavkiasite/build/_shared/chunk-2XFM6Z4V.js";var s=o(p()),e={title:"You (probably) don't need CSS-in-JS",abstract:"Vanilla CSS is good now actually. Here's a couple nifty techniques for dynamically styling React components with CSS custom properties.",date:"2022-05-01",banner:"/static/modern-styling-in-react-banner.jpg",featured:!0};function l(a){let n=Object.assign({p:"p",a:"a",ol:"ol",li:"li",strong:"strong",h2:"h2",h3:"h3",em:"em",pre:"pre",code:"code",span:"span",hr:"hr"},a.components),{Embed:t}=n;return t||r("Embed",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["When I first tried CSS-in-JS libraries like ",(0,s.jsx)(n.a,{href:"https://styled-components.com/",children:"Styled Components"})," and ",(0,s.jsx)(n.a,{href:"https://emotion.sh",children:"Emotion"}),", the thing that felt right about it was passing values or state directly into the styles for a component. It really closed the loop with the concept of React where the UI is a function of state. While this was a definite advancement over the traditional way of styling React with classes and pre-processed CSS, it still had its problems."]}),`
`,(0,s.jsx)(n.p,{children:"To highlight some examples, I'll break down some typical examples using two main types of dynamic styles you'll run into with React components:"}),`
`,(0,s.jsxs)(n.ol,{children:[`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Values:"})," like a color, delay, or position. Anything that represents a single value for a CSS property."]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"States:"})," like a primary button variant, or a loading state each having their own set of associated styles."]}),`
`]}),`
`,(0,s.jsx)(n.h2,{children:"Where we are today"}),`
`,(0,s.jsxs)(n.p,{children:["Before we get started, for comparison I'll be using SCSS (with ",(0,s.jsx)(n.a,{href:"https://css-tricks.com/bem-101/",children:"BEM syntax"}),") and Styled Components in my examples for how styling is typically approached in React. I won't cover CSS-in-JS libraries that deal with writing CSS as JavaScript objects. I think there are already good solutions out there (I'd recommend ",(0,s.jsx)(n.a,{href:"https://vanilla-extract.style/",children:"Vanilla Extract"}),") if you prefer having type checking and living more fully on the JavaScript side of things. My solution is more for those of us that like writing CSS as CSS, but want to respond to the reactivity and state of components in a better way."]}),`
`,(0,s.jsxs)(n.p,{children:["If you're already familiar with the problem, ",(0,s.jsx)(n.a,{href:"#theres-a-better-way-vanilla-css",children:"skip to the solution"}),"."]}),`
`,(0,s.jsx)(n.h3,{children:"Values"}),`
`,(0,s.jsxs)(n.p,{children:["Using vanilla CSS, or pre-processed CSS by means of LESS or SCSS, the traditional way of passing a ",(0,s.jsx)(n.em,{children:"value"})," to your styles on was to just use inline styles. So if we have a button component that allows a color, it would look something like this:"]}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-jsx",children:[(0,s.jsx)(n.span,{className:"hljs-keyword",children:"function"})," ",(0,s.jsx)(n.span,{className:"hljs-title function_",children:"Button"}),"(",(0,s.jsx)(n.span,{className:"hljs-params",children:"{ color, children }"}),`) {
  `,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"return"}),` (
    `,(0,s.jsxs)(n.span,{className:"xml",children:[(0,s.jsxs)(n.span,{className:"hljs-tag",children:["<",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"className"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:'"button"'})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"style"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:"{{"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"backgroundColor:"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"color"})," }}>"]}),`
      {children}
    `,(0,s.jsxs)(n.span,{className:"hljs-tag",children:["</",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"}),">"]})]}),`
  );
}
`]})}),`
`,(0,s.jsx)(n.p,{children:"The problem with this approach is that it brings with it all the problems of inline styles. It now has higher specificity making it harder to override, and the styles aren't co-located with the rest of our button styles."}),`
`,(0,s.jsx)(n.p,{children:"CSS-in-JS (in the case of Styled Components or Emotion) solved this problem by allowing dynamic values like this to be directly as props"}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-jsx",children:[(0,s.jsx)(n.span,{className:"hljs-comment",children:"// We can pass the `color` value into the styled component as a prop"}),`
`,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"function"})," ",(0,s.jsx)(n.span,{className:"hljs-title function_",children:"Button"}),"(",(0,s.jsx)(n.span,{className:"hljs-params",children:"{ color, children }"}),`) {
  `,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"return"})," ",(0,s.jsxs)(n.span,{className:"xml",children:[(0,s.jsxs)(n.span,{className:"hljs-tag",children:["<",(0,s.jsx)(n.span,{className:"hljs-name",children:"StyledButton"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"color"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:"{color}"}),">"]}),"{children}",(0,s.jsxs)(n.span,{className:"hljs-tag",children:["</",(0,s.jsx)(n.span,{className:"hljs-name",children:"StyledButton"}),">"]})]}),`;
}

`,(0,s.jsx)(n.span,{className:"hljs-comment",children:"// The syntax is a little funky, but now in the styled component's styles"}),`
`,(0,s.jsx)(n.span,{className:"hljs-comment",children:"// we can use its props as a function"}),`
`,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"const"})," ",(0,s.jsx)(n.span,{className:"hljs-title class_",children:"StyledButton"})," = styled.",(0,s.jsx)(n.span,{className:"hljs-property",children:"button"}),(0,s.jsxs)(n.span,{className:"hljs-string",children:[`\`
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;
  background-color: `,(0,s.jsx)(n.span,{className:"hljs-subst",children:"${props => props.color}"}),";\n`"]}),`;
`]})}),`
`,(0,s.jsx)(n.h3,{children:"States"}),`
`,(0,s.jsx)(n.p,{children:"Traditionally, we'd use css classes and concatenate strings. This always felt messy and clunky, but it works nicely on the css side, particularly if you're using a naming convention like BEM along with a pre-processors. Say we have small, medium, and large button sizes, and a primary variant, it might look something like this:"}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-jsx",children:[(0,s.jsx)(n.span,{className:"hljs-keyword",children:"function"})," ",(0,s.jsx)(n.span,{className:"hljs-title function_",children:"Button"}),"(",(0,s.jsx)(n.span,{className:"hljs-params",children:"{ color, size, primary, children }"}),`) {
  `,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"return"}),` (
    `,(0,s.jsxs)(n.span,{className:"xml",children:[(0,s.jsxs)(n.span,{className:"hljs-tag",children:["<",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"}),`
      `,(0,s.jsx)(n.span,{className:"hljs-attr",children:"className"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:"{["}),"'",(0,s.jsx)(n.span,{className:"hljs-attr",children:"button"}),"', `",(0,s.jsx)(n.span,{className:"hljs-attr",children:"button--"}),"${",(0,s.jsx)(n.span,{className:"hljs-attr",children:"size"}),"}`, ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"primary"})," ? '",(0,s.jsx)(n.span,{className:"hljs-attr",children:"button--primary"}),"' ",(0,s.jsx)(n.span,{className:"hljs-attr",children:":"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"null"}),`]
        `,(0,s.jsx)(n.span,{className:"hljs-attr",children:".filter"}),"(",(0,s.jsx)(n.span,{className:"hljs-attr",children:"Boolean"}),`)
        `,(0,s.jsx)(n.span,{className:"hljs-attr",children:".join"}),`(' ')}
      `,(0,s.jsx)(n.span,{className:"hljs-attr",children:"style"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:"{{"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"backgroundColor:"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"color"}),` }}
    >`]}),`
      {children}
    `,(0,s.jsxs)(n.span,{className:"hljs-tag",children:["</",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"}),">"]})]}),`
  );
}
`]})}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-scss",children:[(0,s.jsx)(n.span,{className:"hljs-selector-class",children:".button"}),` {
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"border"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"0"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"border-radius"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"4px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"padding"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"8px"})," ",(0,s.jsx)(n.span,{className:"hljs-number",children:"12px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"font-size"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"14px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"color"}),`: dimgrey;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),`: whitesmoke;

  &`,(0,s.jsx)(n.span,{className:"hljs-attr",children:"--primary"}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),": ",(0,s.jsx)(n.span,{className:"hljs-variable",children:"$primary-color"}),`;
  }

  &`,(0,s.jsx)(n.span,{className:"hljs-attr",children:"--small"}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"30px"}),`;
  }

  &`,(0,s.jsx)(n.span,{className:"hljs-attr",children:"--medium"}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"40px"}),`;
  }

  &`,(0,s.jsx)(n.span,{className:"hljs-attr",children:"--large"}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"60px"}),`;
  }
}
`]})}),`
`,(0,s.jsx)(n.p,{children:"The SCSS is looking nice and clean. I've always liked the pattern of using nesting to concatenate elements and modifiers in SCSS using the BEM syntax."}),`
`,(0,s.jsxs)(n.p,{children:["Our JSX, however, isn't faring so well. That string concatenation on the ",(0,s.jsx)(n.code,{children:"className"})," in the is a mess. The size property isn't too bad, because we're appending the value directly onto the class. The primary variant though... yuck. Not to mention the wacky ",(0,s.jsx)(n.code,{children:"filter(Boolean)"})," in there to prevent a double space in the class list for non-primary buttons. There are better ways of handling this, for example the ",(0,s.jsx)(n.code,{children:"classnames"})," package on NPM. But they only make the problem marginally more bearable."]}),`
`,(0,s.jsx)(n.p,{children:"Unlike dynamic values, Styled Components is still a bit cumbersome in dealing with states"}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-jsx",children:[(0,s.jsx)(n.span,{className:"hljs-keyword",children:"function"})," ",(0,s.jsx)(n.span,{className:"hljs-title function_",children:"Button"}),"(",(0,s.jsx)(n.span,{className:"hljs-params",children:"{ color, size, primary, children }"}),`) {
  `,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"return"}),` (
    `,(0,s.jsxs)(n.span,{className:"xml",children:[(0,s.jsxs)(n.span,{className:"hljs-tag",children:["<",(0,s.jsx)(n.span,{className:"hljs-name",children:"StyledButton"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"color"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:"{color}"}),">"]}),"{children}",(0,s.jsxs)(n.span,{className:"hljs-tag",children:["</",(0,s.jsx)(n.span,{className:"hljs-name",children:"StyledButton"}),">"]})]}),`
  }
);

`,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"const"})," ",(0,s.jsx)(n.span,{className:"hljs-title class_",children:"StyledButton"})," = styled.",(0,s.jsx)(n.span,{className:"hljs-property",children:"button"}),(0,s.jsxs)(n.span,{className:"hljs-string",children:[`\`
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;
  background-color: whitesmoke;

  `,(0,s.jsxs)(n.span,{className:"hljs-subst",children:["${props => props.primary && css`",(0,s.jsxs)(n.span,{className:"css",children:[`
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),": $primary-color;\n  `"]}),"}"]}),`

  `,(0,s.jsxs)(n.span,{className:"hljs-subst",children:["${props => props.size === ",(0,s.jsx)(n.span,{className:"hljs-string",children:"'small'"})," && css`",(0,s.jsxs)(n.span,{className:"css",children:[`
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"30px"}),";\n  `"]}),"}"]}),`

  `,(0,s.jsxs)(n.span,{className:"hljs-subst",children:["${props => props.size === ",(0,s.jsx)(n.span,{className:"hljs-string",children:"'medium'"})," && css`",(0,s.jsxs)(n.span,{className:"css",children:[`
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"40px"}),";\n  `"]}),"}"]}),`

  `,(0,s.jsxs)(n.span,{className:"hljs-subst",children:["${props => props.size === ",(0,s.jsx)(n.span,{className:"hljs-string",children:"'large'"})," && css`",(0,s.jsxs)(n.span,{className:"css",children:[`
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"60px"}),";\n  `"]}),"}"]}),"\n`"]}),`;
`]})}),`
`,(0,s.jsxs)(n.p,{children:["It's not ",(0,s.jsx)(n.em,{children:"terrible"}),", but the repeated functions to grab props gets repetitive and makes reading styles quite noisy. It can also get way worse depending on the type of state. If you have separate but mutually exclusive states sometimes it calls for a ternary expression that can end up looking even more convoluted and difficult to parse."]}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-jsx",children:[(0,s.jsx)(n.span,{className:"hljs-keyword",children:"const"})," ",(0,s.jsx)(n.span,{className:"hljs-title class_",children:"StyledButton"})," = styled.",(0,s.jsx)(n.span,{className:"hljs-property",children:"button"}),(0,s.jsxs)(n.span,{className:"hljs-string",children:[`\`
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;

  `,(0,s.jsxs)(n.span,{className:"hljs-subst",children:["${props =>\n    props.primary\n      ? css`",(0,s.jsxs)(n.span,{className:"css",children:[`
          `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"60px"}),`;
          `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),": darkslateblue;\n        `"]}),"\n      : css`",(0,s.jsxs)(n.span,{className:"css",children:[`
          `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"40px"}),`;
          `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),": whitesmoke;\n        `"]}),"}"]}),"\n`"]}),`;
`]})}),`
`,(0,s.jsx)(n.p,{children:"If you're using Prettier for code formatting like I do, you'll end up with a monstrosity like you see above. Monstrosity is a strong way of putting it, but I find the indentation and formatting really difficult to read."}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h2,{children:"There's a better way: vanilla CSS"}),`
`,(0,s.jsx)(n.p,{children:"The solution was with us all along: CSS custom properties (AKA CSS variables). Well, not really. When the methods I've covered above were established, CSS custom properties weren't that well supported by browsers. Support these days is pretty much green across the board (unless you still need to support ie11)."}),`
`,(0,s.jsxs)(n.p,{children:["After making the journey through using SCSS to Styled Components, I've come full circle back to vanilla CSS. I feel like there's an emerging trend of sticking more to platform standards with frameworks like Remix and Deno adhering closer to web standards instead of doing their own thing. I think this will happen with CSS as well, we won't need to reach for pre-processors and CSS-in-JS libraries as much because the native features are becoming ",(0,s.jsx)(n.em,{children:"better"})," than what they have to offer."]}),`
`,(0,s.jsx)(n.p,{children:"That being said, here's how I've approached styling React components with vanilla CSS. Well, mostly vanilla CSS. I'm using postcss to get support some up and coming features like native nesting and custom media queries. The beauty of postcss is that as browsers support new features, the tooling slowly melts away."}),`
`,(0,s.jsx)(n.h3,{children:"Values"}),`
`,(0,s.jsx)(n.p,{children:"A really neat trick I've found for passing values into css is using custom properties. It's pretty simple, we can just drop variables into the style property and it works."}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-jsx",children:[(0,s.jsx)(n.span,{className:"hljs-keyword",children:"function"})," ",(0,s.jsx)(n.span,{className:"hljs-title function_",children:"Button"}),"(",(0,s.jsx)(n.span,{className:"hljs-params",children:"{ color, children }"}),`) {
  `,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"return"}),` (
    `,(0,s.jsxs)(n.span,{className:"xml",children:[(0,s.jsxs)(n.span,{className:"hljs-tag",children:["<",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"className"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:'"button"'})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"style"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:"{{"})," '",(0,s.jsx)(n.span,{className:"hljs-attr",children:"--color"}),"'",(0,s.jsx)(n.span,{className:"hljs-attr",children:":"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"color"})," }}>"]}),`
      {children}
    `,(0,s.jsxs)(n.span,{className:"hljs-tag",children:["</",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"}),">"]})]}),`
  );
}
`]})}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-css",children:[(0,s.jsx)(n.span,{className:"hljs-selector-class",children:".button"}),` {
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"border"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"0"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"border-radius"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"4px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"padding"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"8px"})," ",(0,s.jsx)(n.span,{className:"hljs-number",children:"12px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"font-size"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"14px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"color"}),`: dimgrey;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),": ",(0,s.jsx)(n.span,{className:"hljs-built_in",children:"var"}),`(--color);
}
`]})}),`
`,(0,s.jsxs)(n.p,{children:[`Now you might be thinking "isn't this just inline styles with extra steps?", and while we are using inline styles to apply the variable, it doesn't come with the same downsides. For one, there's no specificity issue because we're declaring the property under the `,(0,s.jsx)(n.code,{children:".button"})," selector in the css file. Secondly, all our styles are co-located, it's just the value of the custom property that's being passed down."]}),`
`,(0,s.jsx)(n.p,{children:"This also makes it really convenient when working with properties like transforms or clip-paths where you only need to dynamically control one piece of the value"}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-jsx",children:[(0,s.jsx)(n.span,{className:"hljs-comment",children:"// All we need to pass is the value needed by the transform, rather than"}),`
`,(0,s.jsx)(n.span,{className:"hljs-comment",children:"// polluting our jsx with the full transform in the inline style"}),`
`,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"function"})," ",(0,s.jsx)(n.span,{className:"hljs-title function_",children:"Button"}),"(",(0,s.jsx)(n.span,{className:"hljs-params",children:"{ offset, children }"}),`) {
  `,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"return"}),` (
    `,(0,s.jsxs)(n.span,{className:"xml",children:[(0,s.jsxs)(n.span,{className:"hljs-tag",children:["<",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"className"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:'"button"'})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"style"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:"{{"})," '",(0,s.jsx)(n.span,{className:"hljs-attr",children:"--offset"}),"'",(0,s.jsx)(n.span,{className:"hljs-attr",children:":"})," `${",(0,s.jsx)(n.span,{className:"hljs-attr",children:"offset"}),"}",(0,s.jsx)(n.span,{className:"hljs-attr",children:"px"}),"` }}>"]}),`
      {children}
    `,(0,s.jsxs)(n.span,{className:"hljs-tag",children:["</",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"}),">"]})]}),`
  );
}
`]})}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-css",children:[(0,s.jsx)(n.span,{className:"hljs-selector-class",children:".button"}),` {
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"border"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"0"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"padding"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"8px"})," ",(0,s.jsx)(n.span,{className:"hljs-number",children:"12px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"font-size"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"14px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"color"}),`: dimgrey;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),`: whitesmoke;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"transform"}),": ",(0,s.jsx)(n.span,{className:"hljs-built_in",children:"translate3d"}),"(",(0,s.jsx)(n.span,{className:"hljs-number",children:"0"}),", ",(0,s.jsx)(n.span,{className:"hljs-built_in",children:"var"}),"(--offset), ",(0,s.jsx)(n.span,{className:"hljs-number",children:"0"}),`);
}
`]})}),`
`,(0,s.jsxs)(n.p,{children:[`There's way more you can do with CSS custom properties, like setting defaults and allowing overrides from the cascade for any components that compose one another to hook into, like a "CSS API". `,(0,s.jsx)(n.a,{href:"https://lea.verou.me/2021/10/custom-properties-with-defaults/",children:"This article from Lea Verou"})," does a great job at explaining this technique."]}),`
`,(0,s.jsx)(n.h3,{children:"States"}),`
`,(0,s.jsxs)(n.p,{children:["The best way I've found to deal with component states and variants with vanilla CSS is using data attributes. What I like about this is that it pairs nicely with the upcoming native CSS nesting syntax. The old technique of targeting BEM modifiers with ",(0,s.jsx)(n.code,{children:"&--modifier"})," doesn't work like it does in pre-processors. But with data attributes, we get similar ergonomics"]}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-jsx",children:[(0,s.jsx)(n.span,{className:"hljs-keyword",children:"function"})," ",(0,s.jsx)(n.span,{className:"hljs-title function_",children:"Button"}),"(",(0,s.jsx)(n.span,{className:"hljs-params",children:"{ color, size, primary, children }"}),`) {
  `,(0,s.jsx)(n.span,{className:"hljs-keyword",children:"return"}),` (
    `,(0,s.jsxs)(n.span,{className:"xml",children:[(0,s.jsxs)(n.span,{className:"hljs-tag",children:["<",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"className"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:'"button"'})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"data-size"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:"{size}"})," ",(0,s.jsx)(n.span,{className:"hljs-attr",children:"data-primary"}),"=",(0,s.jsx)(n.span,{className:"hljs-string",children:"{primary}"}),">"]}),`
      {children}
    `,(0,s.jsxs)(n.span,{className:"hljs-tag",children:["</",(0,s.jsx)(n.span,{className:"hljs-name",children:"button"}),">"]})]}),`
  );
}
`]})}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-css",children:[(0,s.jsx)(n.span,{className:"hljs-selector-class",children:".button"}),` {
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"border"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"0"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"border-radius"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"4px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"padding"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"8px"})," ",(0,s.jsx)(n.span,{className:"hljs-number",children:"12px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"font-size"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"14px"}),`;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"color"}),`: dimgrey;
  `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),`: whitesmoke;

  &`,(0,s.jsxs)(n.span,{className:"hljs-selector-attr",children:["[data-primary=",(0,s.jsx)(n.span,{className:"hljs-string",children:"'true'"}),"]"]}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),": ",(0,s.jsx)(n.span,{className:"hljs-built_in",children:"var"}),`(--colorPrimary);
  }

  &`,(0,s.jsxs)(n.span,{className:"hljs-selector-attr",children:["[data-size=",(0,s.jsx)(n.span,{className:"hljs-string",children:"'small'"}),"]"]}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"30px"}),`;
  }

  &`,(0,s.jsxs)(n.span,{className:"hljs-selector-attr",children:["[data-size=",(0,s.jsx)(n.span,{className:"hljs-string",children:"'medium'"}),"]"]}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"40px"}),`;
  }

  &`,(0,s.jsxs)(n.span,{className:"hljs-selector-attr",children:["[data-size=",(0,s.jsx)(n.span,{className:"hljs-string",children:"'large'"}),"]"]}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"height"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"60px"}),`;
  }
}
`]})}),`
`,(0,s.jsx)(n.p,{children:"Have a play with the example button component here:"}),`
`,(0,s.jsx)(t,{src:"https://stackblitz.com/edit/vitejs-vite-mjs1oh?embed=1&file=src/Button/Button.jsx"}),`
`,(0,s.jsxs)(n.p,{children:["This looks similar to how modifiers are written using BEM syntax. It's also much more straightforward and easy to read than the Styled Components function syntax. The one downside is that we do gain a level of specificity that we don't with BEM modifiers using the ",(0,s.jsx)(n.code,{children:"&--modifier"})," pattern, but I think that's an acceptable tradeoff."]}),`
`,(0,s.jsxs)(n.p,{children:["It may seem kinda ",(0,s.jsx)(n.em,{children:"weird"})," at first to use data attributes for styling, but it gets around the problem of messy string concatenation using classes. It also mirrors how we can target accessibility attributes for interaction-based styling, for example:"]}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsxs)(n.code,{className:"hljs language-css",children:[(0,s.jsx)(n.span,{className:"hljs-selector-class",children:".button"}),` {
  &`,(0,s.jsxs)(n.span,{className:"hljs-selector-attr",children:["[aria-pressed=",(0,s.jsx)(n.span,{className:"hljs-string",children:"'true'"}),"]"]}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"background-color"}),`: gainsboro;
  }

  &`,(0,s.jsx)(n.span,{className:"hljs-selector-attr",children:"[disabled]"}),` {
    `,(0,s.jsx)(n.span,{className:"hljs-attribute",children:"opacity"}),": ",(0,s.jsx)(n.span,{className:"hljs-number",children:"0.4"}),`;
  }
}
`]})}),`
`,(0,s.jsxs)(n.p,{children:["I like this approach because it helps structure styling, we can see that any class is styling the base element, andy any attribute is styling a state. As for avoiding style clashes, there are better options now that automate the process like ",(0,s.jsx)(n.a,{href:"https://github.com/css-modules/css-modules",children:"CSS Modules"})," which is included out of the box in most React frameworks like Next.js and Create React App."]}),`
`,(0,s.jsxs)(n.p,{children:["Of course, these techniques don't require you to ",(0,s.jsx)(n.em,{children:"only"})," use vanilla CSS, you can just as easily combine them with CSS-in-JS or a pre-processor. However with new features like ",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/css-nesting-1/",children:"nesting"})," and ",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/css-color-5/#relative-colors",children:"relative colors"})," I think it's becoming less necessary to reach for these tools."]}),`
`,(0,s.jsxs)(n.p,{children:["The entirety of this website is styled using these techniques, so if you want to see an example of how this applies to some real components, take a gander at the ",(0,s.jsx)(n.a,{href:"https://github.com/HamishMW/portfolio",children:"source code"}),"."]})]})}function c(a={}){let{wrapper:n}=a.components||{};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(l,{...a})}):l(a)}var m=c;function r(a,n){throw new Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=typeof e<"u"&&e.headers,i=typeof e<"u"&&e.meta,h=typeof e<"u"&&e.handle;export{m as default,h as handle,i as meta};
